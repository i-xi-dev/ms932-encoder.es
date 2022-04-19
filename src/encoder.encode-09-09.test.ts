import { expect } from '@esm-bundle/chai';
import { Ms932 } from "./index";

describe("Ms932.Encoder.prototype.encode 9", () => {

  it("encode(string) - U+8800-U+8BFF", () => {
    const ms932Encoder = new Ms932.Encoder({fatal:true});

    let r = true;
expect(() => {ms932Encoder.encode("\u8800")}).to.throw(Error, "EncodingError U+8800");
expect(() => {ms932Encoder.encode("\u8801")}).to.throw(Error, "EncodingError U+8801");
expect(() => {ms932Encoder.encode("\u8802")}).to.throw(Error, "EncodingError U+8802");
expect(() => {ms932Encoder.encode("\u8803")}).to.throw(Error, "EncodingError U+8803");
expect(() => {ms932Encoder.encode("\u8804")}).to.throw(Error, "EncodingError U+8804");
r = r && ([...ms932Encoder.encode("蠅")].join(",") === "229,162"); // U+8805
expect(() => {ms932Encoder.encode("\u8806")}).to.throw(Error, "EncodingError U+8806");
r = r && ([...ms932Encoder.encode("蠇")].join(",") === "251,161"); // U+8807
expect(() => {ms932Encoder.encode("\u8808")}).to.throw(Error, "EncodingError U+8808");
expect(() => {ms932Encoder.encode("\u8809")}).to.throw(Error, "EncodingError U+8809");
expect(() => {ms932Encoder.encode("\u880A")}).to.throw(Error, "EncodingError U+880A");
expect(() => {ms932Encoder.encode("\u880B")}).to.throw(Error, "EncodingError U+880B");
expect(() => {ms932Encoder.encode("\u880C")}).to.throw(Error, "EncodingError U+880C");
r = r && ([...ms932Encoder.encode("蠍蠎蠏")].join(",") === "229,182,229,186,229,181"); // U+880D
expect(() => {ms932Encoder.encode("\u8810")}).to.throw(Error, "EncodingError U+8810");
r = r && ([...ms932Encoder.encode("蠑")].join(",") === "229,188"); // U+8811
expect(() => {ms932Encoder.encode("\u8812")}).to.throw(Error, "EncodingError U+8812");
expect(() => {ms932Encoder.encode("\u8813")}).to.throw(Error, "EncodingError U+8813");
expect(() => {ms932Encoder.encode("\u8814")}).to.throw(Error, "EncodingError U+8814");
r = r && ([...ms932Encoder.encode("蠕蠖")].join(",") === "229,190,229,189"); // U+8815
expect(() => {ms932Encoder.encode("\u8817")}).to.throw(Error, "EncodingError U+8817");
expect(() => {ms932Encoder.encode("\u8818")}).to.throw(Error, "EncodingError U+8818");
expect(() => {ms932Encoder.encode("\u8819")}).to.throw(Error, "EncodingError U+8819");
expect(() => {ms932Encoder.encode("\u881A")}).to.throw(Error, "EncodingError U+881A");
expect(() => {ms932Encoder.encode("\u881B")}).to.throw(Error, "EncodingError U+881B");
expect(() => {ms932Encoder.encode("\u881C")}).to.throw(Error, "EncodingError U+881C");
expect(() => {ms932Encoder.encode("\u881D")}).to.throw(Error, "EncodingError U+881D");
expect(() => {ms932Encoder.encode("\u881E")}).to.throw(Error, "EncodingError U+881E");
expect(() => {ms932Encoder.encode("\u881F")}).to.throw(Error, "EncodingError U+881F");
expect(() => {ms932Encoder.encode("\u8820")}).to.throw(Error, "EncodingError U+8820");
r = r && ([...ms932Encoder.encode("蠡蠢蠣")].join(",") === "229,192,229,191,229,121"); // U+8821
expect(() => {ms932Encoder.encode("\u8824")}).to.throw(Error, "EncodingError U+8824");
expect(() => {ms932Encoder.encode("\u8825")}).to.throw(Error, "EncodingError U+8825");
expect(() => {ms932Encoder.encode("\u8826")}).to.throw(Error, "EncodingError U+8826");
r = r && ([...ms932Encoder.encode("蠧")].join(",") === "229,196"); // U+8827
expect(() => {ms932Encoder.encode("\u8828")}).to.throw(Error, "EncodingError U+8828");
expect(() => {ms932Encoder.encode("\u8829")}).to.throw(Error, "EncodingError U+8829");
expect(() => {ms932Encoder.encode("\u882A")}).to.throw(Error, "EncodingError U+882A");
expect(() => {ms932Encoder.encode("\u882B")}).to.throw(Error, "EncodingError U+882B");
expect(() => {ms932Encoder.encode("\u882C")}).to.throw(Error, "EncodingError U+882C");
expect(() => {ms932Encoder.encode("\u882D")}).to.throw(Error, "EncodingError U+882D");
expect(() => {ms932Encoder.encode("\u882E")}).to.throw(Error, "EncodingError U+882E");
expect(() => {ms932Encoder.encode("\u882F")}).to.throw(Error, "EncodingError U+882F");
expect(() => {ms932Encoder.encode("\u8830")}).to.throw(Error, "EncodingError U+8830");
r = r && ([...ms932Encoder.encode("蠱")].join(",") === "229,193"); // U+8831
expect(() => {ms932Encoder.encode("\u8832")}).to.throw(Error, "EncodingError U+8832");
expect(() => {ms932Encoder.encode("\u8833")}).to.throw(Error, "EncodingError U+8833");
expect(() => {ms932Encoder.encode("\u8834")}).to.throw(Error, "EncodingError U+8834");
expect(() => {ms932Encoder.encode("\u8835")}).to.throw(Error, "EncodingError U+8835");
r = r && ([...ms932Encoder.encode("蠶")].join(",") === "229,194"); // U+8836
expect(() => {ms932Encoder.encode("\u8837")}).to.throw(Error, "EncodingError U+8837");
expect(() => {ms932Encoder.encode("\u8838")}).to.throw(Error, "EncodingError U+8838");
r = r && ([...ms932Encoder.encode("蠹")].join(",") === "229,195"); // U+8839
expect(() => {ms932Encoder.encode("\u883A")}).to.throw(Error, "EncodingError U+883A");
r = r && ([...ms932Encoder.encode("蠻")].join(",") === "229,197"); // U+883B
expect(() => {ms932Encoder.encode("\u883C")}).to.throw(Error, "EncodingError U+883C");
expect(() => {ms932Encoder.encode("\u883D")}).to.throw(Error, "EncodingError U+883D");
expect(() => {ms932Encoder.encode("\u883E")}).to.throw(Error, "EncodingError U+883E");
expect(() => {ms932Encoder.encode("\u883F")}).to.throw(Error, "EncodingError U+883F");
r = r && ([...ms932Encoder.encode("血")].join(",") === "140,140"); // U+8840
expect(() => {ms932Encoder.encode("\u8841")}).to.throw(Error, "EncodingError U+8841");
r = r && ([...ms932Encoder.encode("衂")].join(",") === "229,199"); // U+8842
expect(() => {ms932Encoder.encode("\u8843")}).to.throw(Error, "EncodingError U+8843");
r = r && ([...ms932Encoder.encode("衄")].join(",") === "229,198"); // U+8844
expect(() => {ms932Encoder.encode("\u8845")}).to.throw(Error, "EncodingError U+8845");
r = r && ([...ms932Encoder.encode("衆")].join(",") === "143,79"); // U+8846
expect(() => {ms932Encoder.encode("\u8847")}).to.throw(Error, "EncodingError U+8847");
expect(() => {ms932Encoder.encode("\u8848")}).to.throw(Error, "EncodingError U+8848");
expect(() => {ms932Encoder.encode("\u8849")}).to.throw(Error, "EncodingError U+8849");
expect(() => {ms932Encoder.encode("\u884A")}).to.throw(Error, "EncodingError U+884A");
expect(() => {ms932Encoder.encode("\u884B")}).to.throw(Error, "EncodingError U+884B");
r = r && ([...ms932Encoder.encode("行衍")].join(",") === "141,115,159,165"); // U+884C
expect(() => {ms932Encoder.encode("\u884E")}).to.throw(Error, "EncodingError U+884E");
expect(() => {ms932Encoder.encode("\u884F")}).to.throw(Error, "EncodingError U+884F");
expect(() => {ms932Encoder.encode("\u8850")}).to.throw(Error, "EncodingError U+8850");
expect(() => {ms932Encoder.encode("\u8851")}).to.throw(Error, "EncodingError U+8851");
r = r && ([...ms932Encoder.encode("衒術")].join(",") === "229,200,143,112"); // U+8852
expect(() => {ms932Encoder.encode("\u8854")}).to.throw(Error, "EncodingError U+8854");
expect(() => {ms932Encoder.encode("\u8855")}).to.throw(Error, "EncodingError U+8855");
expect(() => {ms932Encoder.encode("\u8856")}).to.throw(Error, "EncodingError U+8856");
r = r && ([...ms932Encoder.encode("街")].join(",") === "138,88"); // U+8857
expect(() => {ms932Encoder.encode("\u8858")}).to.throw(Error, "EncodingError U+8858");
r = r && ([...ms932Encoder.encode("衙")].join(",") === "229,201"); // U+8859
expect(() => {ms932Encoder.encode("\u885A")}).to.throw(Error, "EncodingError U+885A");
r = r && ([...ms932Encoder.encode("衛")].join(",") === "137,113"); // U+885B
expect(() => {ms932Encoder.encode("\u885C")}).to.throw(Error, "EncodingError U+885C");
r = r && ([...ms932Encoder.encode("衝衞")].join(",") === "143,213,229,202"); // U+885D
expect(() => {ms932Encoder.encode("\u885F")}).to.throw(Error, "EncodingError U+885F");
expect(() => {ms932Encoder.encode("\u8860")}).to.throw(Error, "EncodingError U+8860");
r = r && ([...ms932Encoder.encode("衡衢衣")].join(",") === "141,116,229,203,136,223"); // U+8861
expect(() => {ms932Encoder.encode("\u8864")}).to.throw(Error, "EncodingError U+8864");
expect(() => {ms932Encoder.encode("\u8865")}).to.throw(Error, "EncodingError U+8865");
expect(() => {ms932Encoder.encode("\u8866")}).to.throw(Error, "EncodingError U+8866");
expect(() => {ms932Encoder.encode("\u8867")}).to.throw(Error, "EncodingError U+8867");
r = r && ([...ms932Encoder.encode("表")].join(",") === "149,92"); // U+8868
expect(() => {ms932Encoder.encode("\u8869")}).to.throw(Error, "EncodingError U+8869");
expect(() => {ms932Encoder.encode("\u886A")}).to.throw(Error, "EncodingError U+886A");
r = r && ([...ms932Encoder.encode("衫")].join(",") === "229,204"); // U+886B
expect(() => {ms932Encoder.encode("\u886C")}).to.throw(Error, "EncodingError U+886C");
expect(() => {ms932Encoder.encode("\u886D")}).to.throw(Error, "EncodingError U+886D");
expect(() => {ms932Encoder.encode("\u886E")}).to.throw(Error, "EncodingError U+886E");
expect(() => {ms932Encoder.encode("\u886F")}).to.throw(Error, "EncodingError U+886F");
r = r && ([...ms932Encoder.encode("衰")].join(",") === "144,138"); // U+8870
expect(() => {ms932Encoder.encode("\u8871")}).to.throw(Error, "EncodingError U+8871");
r = r && ([...ms932Encoder.encode("衲")].join(",") === "229,211"); // U+8872
expect(() => {ms932Encoder.encode("\u8873")}).to.throw(Error, "EncodingError U+8873");
expect(() => {ms932Encoder.encode("\u8874")}).to.throw(Error, "EncodingError U+8874");
r = r && ([...ms932Encoder.encode("衵")].join(",") === "229,208"); // U+8875
expect(() => {ms932Encoder.encode("\u8876")}).to.throw(Error, "EncodingError U+8876");
r = r && ([...ms932Encoder.encode("衷")].join(",") === "146,143"); // U+8877
expect(() => {ms932Encoder.encode("\u8878")}).to.throw(Error, "EncodingError U+8878");
expect(() => {ms932Encoder.encode("\u8879")}).to.throw(Error, "EncodingError U+8879");
expect(() => {ms932Encoder.encode("\u887A")}).to.throw(Error, "EncodingError U+887A");
expect(() => {ms932Encoder.encode("\u887B")}).to.throw(Error, "EncodingError U+887B");
expect(() => {ms932Encoder.encode("\u887C")}).to.throw(Error, "EncodingError U+887C");
r = r && ([...ms932Encoder.encode("衽衾衿")].join(",") === "229,209,229,206,139,220"); // U+887D
expect(() => {ms932Encoder.encode("\u8880")}).to.throw(Error, "EncodingError U+8880");
r = r && ([...ms932Encoder.encode("袁袂")].join(",") === "229,205,229,212"); // U+8881
expect(() => {ms932Encoder.encode("\u8883")}).to.throw(Error, "EncodingError U+8883");
expect(() => {ms932Encoder.encode("\u8884")}).to.throw(Error, "EncodingError U+8884");
expect(() => {ms932Encoder.encode("\u8885")}).to.throw(Error, "EncodingError U+8885");
expect(() => {ms932Encoder.encode("\u8886")}).to.throw(Error, "EncodingError U+8886");
expect(() => {ms932Encoder.encode("\u8887")}).to.throw(Error, "EncodingError U+8887");
r = r && ([...ms932Encoder.encode("袈")].join(",") === "140,85"); // U+8888
expect(() => {ms932Encoder.encode("\u8889")}).to.throw(Error, "EncodingError U+8889");
expect(() => {ms932Encoder.encode("\u888A")}).to.throw(Error, "EncodingError U+888A");
r = r && ([...ms932Encoder.encode("袋")].join(",") === "145,220"); // U+888B
expect(() => {ms932Encoder.encode("\u888C")}).to.throw(Error, "EncodingError U+888C");
r = r && ([...ms932Encoder.encode("袍")].join(",") === "229,218"); // U+888D
expect(() => {ms932Encoder.encode("\u888E")}).to.throw(Error, "EncodingError U+888E");
expect(() => {ms932Encoder.encode("\u888F")}).to.throw(Error, "EncodingError U+888F");
expect(() => {ms932Encoder.encode("\u8890")}).to.throw(Error, "EncodingError U+8890");
expect(() => {ms932Encoder.encode("\u8891")}).to.throw(Error, "EncodingError U+8891");
r = r && ([...ms932Encoder.encode("袒")].join(",") === "229,214"); // U+8892
expect(() => {ms932Encoder.encode("\u8893")}).to.throw(Error, "EncodingError U+8893");
expect(() => {ms932Encoder.encode("\u8894")}).to.throw(Error, "EncodingError U+8894");
expect(() => {ms932Encoder.encode("\u8895")}).to.throw(Error, "EncodingError U+8895");
r = r && ([...ms932Encoder.encode("袖袗")].join(",") === "145,179,229,213"); // U+8896
expect(() => {ms932Encoder.encode("\u8898")}).to.throw(Error, "EncodingError U+8898");
r = r && ([...ms932Encoder.encode("袙")].join(",") === "229,216"); // U+8899
expect(() => {ms932Encoder.encode("\u889A")}).to.throw(Error, "EncodingError U+889A");
expect(() => {ms932Encoder.encode("\u889B")}).to.throw(Error, "EncodingError U+889B");
expect(() => {ms932Encoder.encode("\u889C")}).to.throw(Error, "EncodingError U+889C");
expect(() => {ms932Encoder.encode("\u889D")}).to.throw(Error, "EncodingError U+889D");
r = r && ([...ms932Encoder.encode("袞")].join(",") === "229,207"); // U+889E
expect(() => {ms932Encoder.encode("\u889F")}).to.throw(Error, "EncodingError U+889F");
expect(() => {ms932Encoder.encode("\u88A0")}).to.throw(Error, "EncodingError U+88A0");
expect(() => {ms932Encoder.encode("\u88A1")}).to.throw(Error, "EncodingError U+88A1");
r = r && ([...ms932Encoder.encode("袢")].join(",") === "229,217"); // U+88A2
expect(() => {ms932Encoder.encode("\u88A3")}).to.throw(Error, "EncodingError U+88A3");
r = r && ([...ms932Encoder.encode("袤")].join(",") === "229,219"); // U+88A4
expect(() => {ms932Encoder.encode("\u88A5")}).to.throw(Error, "EncodingError U+88A5");
expect(() => {ms932Encoder.encode("\u88A6")}).to.throw(Error, "EncodingError U+88A6");
expect(() => {ms932Encoder.encode("\u88A7")}).to.throw(Error, "EncodingError U+88A7");
expect(() => {ms932Encoder.encode("\u88A8")}).to.throw(Error, "EncodingError U+88A8");
expect(() => {ms932Encoder.encode("\u88A9")}).to.throw(Error, "EncodingError U+88A9");
expect(() => {ms932Encoder.encode("\u88AA")}).to.throw(Error, "EncodingError U+88AA");
r = r && ([...ms932Encoder.encode("被")].join(",") === "148,237"); // U+88AB
expect(() => {ms932Encoder.encode("\u88AC")}).to.throw(Error, "EncodingError U+88AC");
expect(() => {ms932Encoder.encode("\u88AD")}).to.throw(Error, "EncodingError U+88AD");
r = r && ([...ms932Encoder.encode("袮")].join(",") === "229,215"); // U+88AE
expect(() => {ms932Encoder.encode("\u88AF")}).to.throw(Error, "EncodingError U+88AF");
r = r && ([...ms932Encoder.encode("袰袱")].join(",") === "229,220,229,222"); // U+88B0
expect(() => {ms932Encoder.encode("\u88B2")}).to.throw(Error, "EncodingError U+88B2");
expect(() => {ms932Encoder.encode("\u88B3")}).to.throw(Error, "EncodingError U+88B3");
r = r && ([...ms932Encoder.encode("袴袵")].join(",") === "140,209,229,210"); // U+88B4
expect(() => {ms932Encoder.encode("\u88B6")}).to.throw(Error, "EncodingError U+88B6");
r = r && ([...ms932Encoder.encode("袷")].join(",") === "136,191"); // U+88B7
expect(() => {ms932Encoder.encode("\u88B8")}).to.throw(Error, "EncodingError U+88B8");
expect(() => {ms932Encoder.encode("\u88B9")}).to.throw(Error, "EncodingError U+88B9");
expect(() => {ms932Encoder.encode("\u88BA")}).to.throw(Error, "EncodingError U+88BA");
expect(() => {ms932Encoder.encode("\u88BB")}).to.throw(Error, "EncodingError U+88BB");
expect(() => {ms932Encoder.encode("\u88BC")}).to.throw(Error, "EncodingError U+88BC");
expect(() => {ms932Encoder.encode("\u88BD")}).to.throw(Error, "EncodingError U+88BD");
expect(() => {ms932Encoder.encode("\u88BE")}).to.throw(Error, "EncodingError U+88BE");
r = r && ([...ms932Encoder.encode("袿")].join(",") === "229,221"); // U+88BF
expect(() => {ms932Encoder.encode("\u88C0")}).to.throw(Error, "EncodingError U+88C0");
r = r && ([...ms932Encoder.encode("裁裂裃裄装")].join(",") === "141,217,151,244,229,223,229,224,145,149"); // U+88C1
expect(() => {ms932Encoder.encode("\u88C6")}).to.throw(Error, "EncodingError U+88C6");
expect(() => {ms932Encoder.encode("\u88C7")}).to.throw(Error, "EncodingError U+88C7");
expect(() => {ms932Encoder.encode("\u88C8")}).to.throw(Error, "EncodingError U+88C8");
expect(() => {ms932Encoder.encode("\u88C9")}).to.throw(Error, "EncodingError U+88C9");
expect(() => {ms932Encoder.encode("\u88CA")}).to.throw(Error, "EncodingError U+88CA");
expect(() => {ms932Encoder.encode("\u88CB")}).to.throw(Error, "EncodingError U+88CB");
expect(() => {ms932Encoder.encode("\u88CC")}).to.throw(Error, "EncodingError U+88CC");
expect(() => {ms932Encoder.encode("\u88CD")}).to.throw(Error, "EncodingError U+88CD");
expect(() => {ms932Encoder.encode("\u88CE")}).to.throw(Error, "EncodingError U+88CE");
r = r && ([...ms932Encoder.encode("裏")].join(",") === "151,160"); // U+88CF
expect(() => {ms932Encoder.encode("\u88D0")}).to.throw(Error, "EncodingError U+88D0");
expect(() => {ms932Encoder.encode("\u88D1")}).to.throw(Error, "EncodingError U+88D1");
expect(() => {ms932Encoder.encode("\u88D2")}).to.throw(Error, "EncodingError U+88D2");
expect(() => {ms932Encoder.encode("\u88D3")}).to.throw(Error, "EncodingError U+88D3");
r = r && ([...ms932Encoder.encode("裔裕")].join(",") === "229,225,151,84"); // U+88D4
expect(() => {ms932Encoder.encode("\u88D6")}).to.throw(Error, "EncodingError U+88D6");
expect(() => {ms932Encoder.encode("\u88D7")}).to.throw(Error, "EncodingError U+88D7");
r = r && ([...ms932Encoder.encode("裘裙")].join(",") === "229,226,229,227"); // U+88D8
expect(() => {ms932Encoder.encode("\u88DA")}).to.throw(Error, "EncodingError U+88DA");
expect(() => {ms932Encoder.encode("\u88DB")}).to.throw(Error, "EncodingError U+88DB");
r = r && ([...ms932Encoder.encode("補裝")].join(",") === "149,226,229,228"); // U+88DC
expect(() => {ms932Encoder.encode("\u88DE")}).to.throw(Error, "EncodingError U+88DE");
r = r && ([...ms932Encoder.encode("裟")].join(",") === "141,190"); // U+88DF
expect(() => {ms932Encoder.encode("\u88E0")}).to.throw(Error, "EncodingError U+88E0");
r = r && ([...ms932Encoder.encode("裡")].join(",") === "151,161"); // U+88E1
expect(() => {ms932Encoder.encode("\u88E2")}).to.throw(Error, "EncodingError U+88E2");
expect(() => {ms932Encoder.encode("\u88E3")}).to.throw(Error, "EncodingError U+88E3");
expect(() => {ms932Encoder.encode("\u88E4")}).to.throw(Error, "EncodingError U+88E4");
expect(() => {ms932Encoder.encode("\u88E5")}).to.throw(Error, "EncodingError U+88E5");
expect(() => {ms932Encoder.encode("\u88E6")}).to.throw(Error, "EncodingError U+88E6");
expect(() => {ms932Encoder.encode("\u88E7")}).to.throw(Error, "EncodingError U+88E7");
r = r && ([...ms932Encoder.encode("裨")].join(",") === "229,233"); // U+88E8
expect(() => {ms932Encoder.encode("\u88E9")}).to.throw(Error, "EncodingError U+88E9");
expect(() => {ms932Encoder.encode("\u88EA")}).to.throw(Error, "EncodingError U+88EA");
expect(() => {ms932Encoder.encode("\u88EB")}).to.throw(Error, "EncodingError U+88EB");
expect(() => {ms932Encoder.encode("\u88EC")}).to.throw(Error, "EncodingError U+88EC");
expect(() => {ms932Encoder.encode("\u88ED")}).to.throw(Error, "EncodingError U+88ED");
expect(() => {ms932Encoder.encode("\u88EE")}).to.throw(Error, "EncodingError U+88EE");
expect(() => {ms932Encoder.encode("\u88EF")}).to.throw(Error, "EncodingError U+88EF");
expect(() => {ms932Encoder.encode("\u88F0")}).to.throw(Error, "EncodingError U+88F0");
expect(() => {ms932Encoder.encode("\u88F1")}).to.throw(Error, "EncodingError U+88F1");
r = r && ([...ms932Encoder.encode("裲裳裴裵")].join(",") === "229,234,143,214,229,232,251,162"); // U+88F2
expect(() => {ms932Encoder.encode("\u88F6")}).to.throw(Error, "EncodingError U+88F6");
expect(() => {ms932Encoder.encode("\u88F7")}).to.throw(Error, "EncodingError U+88F7");
r = r && ([...ms932Encoder.encode("裸裹")].join(",") === "151,135,229,229"); // U+88F8
expect(() => {ms932Encoder.encode("\u88FA")}).to.throw(Error, "EncodingError U+88FA");
expect(() => {ms932Encoder.encode("\u88FB")}).to.throw(Error, "EncodingError U+88FB");
r = r && ([...ms932Encoder.encode("裼製裾")].join(",") === "229,231,144,187,144,158"); // U+88FC
expect(() => {ms932Encoder.encode("\u88FF")}).to.throw(Error, "EncodingError U+88FF");
expect(() => {ms932Encoder.encode("\u8900")}).to.throw(Error, "EncodingError U+8900");
expect(() => {ms932Encoder.encode("\u8901")}).to.throw(Error, "EncodingError U+8901");
r = r && ([...ms932Encoder.encode("褂")].join(",") === "229,230"); // U+8902
expect(() => {ms932Encoder.encode("\u8903")}).to.throw(Error, "EncodingError U+8903");
r = r && ([...ms932Encoder.encode("褄")].join(",") === "229,235"); // U+8904
expect(() => {ms932Encoder.encode("\u8905")}).to.throw(Error, "EncodingError U+8905");
expect(() => {ms932Encoder.encode("\u8906")}).to.throw(Error, "EncodingError U+8906");
r = r && ([...ms932Encoder.encode("複")].join(",") === "149,161"); // U+8907
expect(() => {ms932Encoder.encode("\u8908")}).to.throw(Error, "EncodingError U+8908");
expect(() => {ms932Encoder.encode("\u8909")}).to.throw(Error, "EncodingError U+8909");
r = r && ([...ms932Encoder.encode("褊")].join(",") === "229,237"); // U+890A
expect(() => {ms932Encoder.encode("\u890B")}).to.throw(Error, "EncodingError U+890B");
r = r && ([...ms932Encoder.encode("褌")].join(",") === "229,236"); // U+890C
expect(() => {ms932Encoder.encode("\u890D")}).to.throw(Error, "EncodingError U+890D");
expect(() => {ms932Encoder.encode("\u890E")}).to.throw(Error, "EncodingError U+890E");
expect(() => {ms932Encoder.encode("\u890F")}).to.throw(Error, "EncodingError U+890F");
r = r && ([...ms932Encoder.encode("褐")].join(",") === "138,140"); // U+8910
expect(() => {ms932Encoder.encode("\u8911")}).to.throw(Error, "EncodingError U+8911");
r = r && ([...ms932Encoder.encode("褒褓")].join(",") === "150,74,229,238"); // U+8912
expect(() => {ms932Encoder.encode("\u8914")}).to.throw(Error, "EncodingError U+8914");
expect(() => {ms932Encoder.encode("\u8915")}).to.throw(Error, "EncodingError U+8915");
expect(() => {ms932Encoder.encode("\u8916")}).to.throw(Error, "EncodingError U+8916");
expect(() => {ms932Encoder.encode("\u8917")}).to.throw(Error, "EncodingError U+8917");
expect(() => {ms932Encoder.encode("\u8918")}).to.throw(Error, "EncodingError U+8918");
expect(() => {ms932Encoder.encode("\u8919")}).to.throw(Error, "EncodingError U+8919");
expect(() => {ms932Encoder.encode("\u891A")}).to.throw(Error, "EncodingError U+891A");
expect(() => {ms932Encoder.encode("\u891B")}).to.throw(Error, "EncodingError U+891B");
r = r && ([...ms932Encoder.encode("褜褝褞")].join(",") === "250,93,229,250,229,240"); // U+891C
expect(() => {ms932Encoder.encode("\u891F")}).to.throw(Error, "EncodingError U+891F");
expect(() => {ms932Encoder.encode("\u8920")}).to.throw(Error, "EncodingError U+8920");
expect(() => {ms932Encoder.encode("\u8921")}).to.throw(Error, "EncodingError U+8921");
expect(() => {ms932Encoder.encode("\u8922")}).to.throw(Error, "EncodingError U+8922");
expect(() => {ms932Encoder.encode("\u8923")}).to.throw(Error, "EncodingError U+8923");
expect(() => {ms932Encoder.encode("\u8924")}).to.throw(Error, "EncodingError U+8924");
r = r && ([...ms932Encoder.encode("褥")].join(",") === "229,241"); // U+8925
expect(() => {ms932Encoder.encode("\u8926")}).to.throw(Error, "EncodingError U+8926");
expect(() => {ms932Encoder.encode("\u8927")}).to.throw(Error, "EncodingError U+8927");
expect(() => {ms932Encoder.encode("\u8928")}).to.throw(Error, "EncodingError U+8928");
expect(() => {ms932Encoder.encode("\u8929")}).to.throw(Error, "EncodingError U+8929");
r = r && ([...ms932Encoder.encode("褪褫")].join(",") === "229,242,229,243"); // U+892A
expect(() => {ms932Encoder.encode("\u892C")}).to.throw(Error, "EncodingError U+892C");
expect(() => {ms932Encoder.encode("\u892D")}).to.throw(Error, "EncodingError U+892D");
expect(() => {ms932Encoder.encode("\u892E")}).to.throw(Error, "EncodingError U+892E");
expect(() => {ms932Encoder.encode("\u892F")}).to.throw(Error, "EncodingError U+892F");
expect(() => {ms932Encoder.encode("\u8930")}).to.throw(Error, "EncodingError U+8930");
expect(() => {ms932Encoder.encode("\u8931")}).to.throw(Error, "EncodingError U+8931");
expect(() => {ms932Encoder.encode("\u8932")}).to.throw(Error, "EncodingError U+8932");
expect(() => {ms932Encoder.encode("\u8933")}).to.throw(Error, "EncodingError U+8933");
expect(() => {ms932Encoder.encode("\u8934")}).to.throw(Error, "EncodingError U+8934");
expect(() => {ms932Encoder.encode("\u8935")}).to.throw(Error, "EncodingError U+8935");
r = r && ([...ms932Encoder.encode("褶")].join(",") === "229,247"); // U+8936
expect(() => {ms932Encoder.encode("\u8937")}).to.throw(Error, "EncodingError U+8937");
r = r && ([...ms932Encoder.encode("褸")].join(",") === "229,248"); // U+8938
expect(() => {ms932Encoder.encode("\u8939")}).to.throw(Error, "EncodingError U+8939");
expect(() => {ms932Encoder.encode("\u893A")}).to.throw(Error, "EncodingError U+893A");
r = r && ([...ms932Encoder.encode("褻")].join(",") === "229,246"); // U+893B
expect(() => {ms932Encoder.encode("\u893C")}).to.throw(Error, "EncodingError U+893C");
expect(() => {ms932Encoder.encode("\u893D")}).to.throw(Error, "EncodingError U+893D");
expect(() => {ms932Encoder.encode("\u893E")}).to.throw(Error, "EncodingError U+893E");
expect(() => {ms932Encoder.encode("\u893F")}).to.throw(Error, "EncodingError U+893F");
expect(() => {ms932Encoder.encode("\u8940")}).to.throw(Error, "EncodingError U+8940");
r = r && ([...ms932Encoder.encode("襁")].join(",") === "229,244"); // U+8941
expect(() => {ms932Encoder.encode("\u8942")}).to.throw(Error, "EncodingError U+8942");
r = r && ([...ms932Encoder.encode("襃襄")].join(",") === "229,239,229,245"); // U+8943
expect(() => {ms932Encoder.encode("\u8945")}).to.throw(Error, "EncodingError U+8945");
expect(() => {ms932Encoder.encode("\u8946")}).to.throw(Error, "EncodingError U+8946");
expect(() => {ms932Encoder.encode("\u8947")}).to.throw(Error, "EncodingError U+8947");
expect(() => {ms932Encoder.encode("\u8948")}).to.throw(Error, "EncodingError U+8948");
expect(() => {ms932Encoder.encode("\u8949")}).to.throw(Error, "EncodingError U+8949");
expect(() => {ms932Encoder.encode("\u894A")}).to.throw(Error, "EncodingError U+894A");
expect(() => {ms932Encoder.encode("\u894B")}).to.throw(Error, "EncodingError U+894B");
r = r && ([...ms932Encoder.encode("襌襍")].join(",") === "229,249,232,181"); // U+894C
expect(() => {ms932Encoder.encode("\u894E")}).to.throw(Error, "EncodingError U+894E");
expect(() => {ms932Encoder.encode("\u894F")}).to.throw(Error, "EncodingError U+894F");
expect(() => {ms932Encoder.encode("\u8950")}).to.throw(Error, "EncodingError U+8950");
expect(() => {ms932Encoder.encode("\u8951")}).to.throw(Error, "EncodingError U+8951");
expect(() => {ms932Encoder.encode("\u8952")}).to.throw(Error, "EncodingError U+8952");
expect(() => {ms932Encoder.encode("\u8953")}).to.throw(Error, "EncodingError U+8953");
expect(() => {ms932Encoder.encode("\u8954")}).to.throw(Error, "EncodingError U+8954");
expect(() => {ms932Encoder.encode("\u8955")}).to.throw(Error, "EncodingError U+8955");
r = r && ([...ms932Encoder.encode("襖")].join(",") === "137,166"); // U+8956
expect(() => {ms932Encoder.encode("\u8957")}).to.throw(Error, "EncodingError U+8957");
expect(() => {ms932Encoder.encode("\u8958")}).to.throw(Error, "EncodingError U+8958");
expect(() => {ms932Encoder.encode("\u8959")}).to.throw(Error, "EncodingError U+8959");
expect(() => {ms932Encoder.encode("\u895A")}).to.throw(Error, "EncodingError U+895A");
expect(() => {ms932Encoder.encode("\u895B")}).to.throw(Error, "EncodingError U+895B");
expect(() => {ms932Encoder.encode("\u895C")}).to.throw(Error, "EncodingError U+895C");
expect(() => {ms932Encoder.encode("\u895D")}).to.throw(Error, "EncodingError U+895D");
r = r && ([...ms932Encoder.encode("襞襟襠")].join(",") === "229,252,139,221,229,251"); // U+895E
expect(() => {ms932Encoder.encode("\u8961")}).to.throw(Error, "EncodingError U+8961");
expect(() => {ms932Encoder.encode("\u8962")}).to.throw(Error, "EncodingError U+8962");
expect(() => {ms932Encoder.encode("\u8963")}).to.throw(Error, "EncodingError U+8963");
r = r && ([...ms932Encoder.encode("襤")].join(",") === "230,65"); // U+8964
expect(() => {ms932Encoder.encode("\u8965")}).to.throw(Error, "EncodingError U+8965");
r = r && ([...ms932Encoder.encode("襦")].join(",") === "230,64"); // U+8966
expect(() => {ms932Encoder.encode("\u8967")}).to.throw(Error, "EncodingError U+8967");
expect(() => {ms932Encoder.encode("\u8968")}).to.throw(Error, "EncodingError U+8968");
expect(() => {ms932Encoder.encode("\u8969")}).to.throw(Error, "EncodingError U+8969");
r = r && ([...ms932Encoder.encode("襪")].join(",") === "230,67"); // U+896A
expect(() => {ms932Encoder.encode("\u896B")}).to.throw(Error, "EncodingError U+896B");
expect(() => {ms932Encoder.encode("\u896C")}).to.throw(Error, "EncodingError U+896C");
r = r && ([...ms932Encoder.encode("襭")].join(",") === "230,66"); // U+896D
expect(() => {ms932Encoder.encode("\u896E")}).to.throw(Error, "EncodingError U+896E");
r = r && ([...ms932Encoder.encode("襯")].join(",") === "230,68"); // U+896F
expect(() => {ms932Encoder.encode("\u8970")}).to.throw(Error, "EncodingError U+8970");
expect(() => {ms932Encoder.encode("\u8971")}).to.throw(Error, "EncodingError U+8971");
r = r && ([...ms932Encoder.encode("襲")].join(",") === "143,80"); // U+8972
expect(() => {ms932Encoder.encode("\u8973")}).to.throw(Error, "EncodingError U+8973");
r = r && ([...ms932Encoder.encode("襴")].join(",") === "230,69"); // U+8974
expect(() => {ms932Encoder.encode("\u8975")}).to.throw(Error, "EncodingError U+8975");
expect(() => {ms932Encoder.encode("\u8976")}).to.throw(Error, "EncodingError U+8976");
r = r && ([...ms932Encoder.encode("襷")].join(",") === "230,70"); // U+8977
expect(() => {ms932Encoder.encode("\u8978")}).to.throw(Error, "EncodingError U+8978");
expect(() => {ms932Encoder.encode("\u8979")}).to.throw(Error, "EncodingError U+8979");
expect(() => {ms932Encoder.encode("\u897A")}).to.throw(Error, "EncodingError U+897A");
expect(() => {ms932Encoder.encode("\u897B")}).to.throw(Error, "EncodingError U+897B");
expect(() => {ms932Encoder.encode("\u897C")}).to.throw(Error, "EncodingError U+897C");
expect(() => {ms932Encoder.encode("\u897D")}).to.throw(Error, "EncodingError U+897D");
r = r && ([...ms932Encoder.encode("襾西")].join(",") === "230,71,144,188"); // U+897E
expect(() => {ms932Encoder.encode("\u8980")}).to.throw(Error, "EncodingError U+8980");
r = r && ([...ms932Encoder.encode("要")].join(",") === "151,118"); // U+8981
expect(() => {ms932Encoder.encode("\u8982")}).to.throw(Error, "EncodingError U+8982");
r = r && ([...ms932Encoder.encode("覃")].join(",") === "230,72"); // U+8983
expect(() => {ms932Encoder.encode("\u8984")}).to.throw(Error, "EncodingError U+8984");
expect(() => {ms932Encoder.encode("\u8985")}).to.throw(Error, "EncodingError U+8985");
r = r && ([...ms932Encoder.encode("覆覇覈")].join(",") === "149,162,148,101,230,73"); // U+8986
expect(() => {ms932Encoder.encode("\u8989")}).to.throw(Error, "EncodingError U+8989");
r = r && ([...ms932Encoder.encode("覊見")].join(",") === "230,74,140,169"); // U+898A
expect(() => {ms932Encoder.encode("\u898C")}).to.throw(Error, "EncodingError U+898C");
expect(() => {ms932Encoder.encode("\u898D")}).to.throw(Error, "EncodingError U+898D");
expect(() => {ms932Encoder.encode("\u898E")}).to.throw(Error, "EncodingError U+898E");
r = r && ([...ms932Encoder.encode("規")].join(",") === "139,75"); // U+898F
expect(() => {ms932Encoder.encode("\u8990")}).to.throw(Error, "EncodingError U+8990");
expect(() => {ms932Encoder.encode("\u8991")}).to.throw(Error, "EncodingError U+8991");
expect(() => {ms932Encoder.encode("\u8992")}).to.throw(Error, "EncodingError U+8992");
r = r && ([...ms932Encoder.encode("覓")].join(",") === "230,75"); // U+8993
expect(() => {ms932Encoder.encode("\u8994")}).to.throw(Error, "EncodingError U+8994");
expect(() => {ms932Encoder.encode("\u8995")}).to.throw(Error, "EncodingError U+8995");
r = r && ([...ms932Encoder.encode("視覗覘")].join(",") === "142,139,148,96,230,76"); // U+8996
expect(() => {ms932Encoder.encode("\u8999")}).to.throw(Error, "EncodingError U+8999");
r = r && ([...ms932Encoder.encode("覚")].join(",") === "138,111"); // U+899A
expect(() => {ms932Encoder.encode("\u899B")}).to.throw(Error, "EncodingError U+899B");
expect(() => {ms932Encoder.encode("\u899C")}).to.throw(Error, "EncodingError U+899C");
expect(() => {ms932Encoder.encode("\u899D")}).to.throw(Error, "EncodingError U+899D");
expect(() => {ms932Encoder.encode("\u899E")}).to.throw(Error, "EncodingError U+899E");
expect(() => {ms932Encoder.encode("\u899F")}).to.throw(Error, "EncodingError U+899F");
expect(() => {ms932Encoder.encode("\u89A0")}).to.throw(Error, "EncodingError U+89A0");
r = r && ([...ms932Encoder.encode("覡")].join(",") === "230,77"); // U+89A1
expect(() => {ms932Encoder.encode("\u89A2")}).to.throw(Error, "EncodingError U+89A2");
expect(() => {ms932Encoder.encode("\u89A3")}).to.throw(Error, "EncodingError U+89A3");
expect(() => {ms932Encoder.encode("\u89A4")}).to.throw(Error, "EncodingError U+89A4");
expect(() => {ms932Encoder.encode("\u89A5")}).to.throw(Error, "EncodingError U+89A5");
r = r && ([...ms932Encoder.encode("覦覧")].join(",") === "230,79,151,151"); // U+89A6
expect(() => {ms932Encoder.encode("\u89A8")}).to.throw(Error, "EncodingError U+89A8");
r = r && ([...ms932Encoder.encode("覩親")].join(",") === "230,78,144,101"); // U+89A9
expect(() => {ms932Encoder.encode("\u89AB")}).to.throw(Error, "EncodingError U+89AB");
r = r && ([...ms932Encoder.encode("覬")].join(",") === "230,80"); // U+89AC
expect(() => {ms932Encoder.encode("\u89AD")}).to.throw(Error, "EncodingError U+89AD");
expect(() => {ms932Encoder.encode("\u89AE")}).to.throw(Error, "EncodingError U+89AE");
r = r && ([...ms932Encoder.encode("覯")].join(",") === "230,81"); // U+89AF
expect(() => {ms932Encoder.encode("\u89B0")}).to.throw(Error, "EncodingError U+89B0");
expect(() => {ms932Encoder.encode("\u89B1")}).to.throw(Error, "EncodingError U+89B1");
r = r && ([...ms932Encoder.encode("覲観")].join(",") === "230,82,138,207"); // U+89B2
expect(() => {ms932Encoder.encode("\u89B4")}).to.throw(Error, "EncodingError U+89B4");
expect(() => {ms932Encoder.encode("\u89B5")}).to.throw(Error, "EncodingError U+89B5");
expect(() => {ms932Encoder.encode("\u89B6")}).to.throw(Error, "EncodingError U+89B6");
expect(() => {ms932Encoder.encode("\u89B7")}).to.throw(Error, "EncodingError U+89B7");
expect(() => {ms932Encoder.encode("\u89B8")}).to.throw(Error, "EncodingError U+89B8");
expect(() => {ms932Encoder.encode("\u89B9")}).to.throw(Error, "EncodingError U+89B9");
r = r && ([...ms932Encoder.encode("覺")].join(",") === "230,83"); // U+89BA
expect(() => {ms932Encoder.encode("\u89BB")}).to.throw(Error, "EncodingError U+89BB");
expect(() => {ms932Encoder.encode("\u89BC")}).to.throw(Error, "EncodingError U+89BC");
r = r && ([...ms932Encoder.encode("覽")].join(",") === "230,84"); // U+89BD
expect(() => {ms932Encoder.encode("\u89BE")}).to.throw(Error, "EncodingError U+89BE");
r = r && ([...ms932Encoder.encode("覿觀")].join(",") === "230,85,230,86"); // U+89BF
expect(() => {ms932Encoder.encode("\u89C1")}).to.throw(Error, "EncodingError U+89C1");
expect(() => {ms932Encoder.encode("\u89C2")}).to.throw(Error, "EncodingError U+89C2");
expect(() => {ms932Encoder.encode("\u89C3")}).to.throw(Error, "EncodingError U+89C3");
expect(() => {ms932Encoder.encode("\u89C4")}).to.throw(Error, "EncodingError U+89C4");
expect(() => {ms932Encoder.encode("\u89C5")}).to.throw(Error, "EncodingError U+89C5");
expect(() => {ms932Encoder.encode("\u89C6")}).to.throw(Error, "EncodingError U+89C6");
expect(() => {ms932Encoder.encode("\u89C7")}).to.throw(Error, "EncodingError U+89C7");
expect(() => {ms932Encoder.encode("\u89C8")}).to.throw(Error, "EncodingError U+89C8");
expect(() => {ms932Encoder.encode("\u89C9")}).to.throw(Error, "EncodingError U+89C9");
expect(() => {ms932Encoder.encode("\u89CA")}).to.throw(Error, "EncodingError U+89CA");
expect(() => {ms932Encoder.encode("\u89CB")}).to.throw(Error, "EncodingError U+89CB");
expect(() => {ms932Encoder.encode("\u89CC")}).to.throw(Error, "EncodingError U+89CC");
expect(() => {ms932Encoder.encode("\u89CD")}).to.throw(Error, "EncodingError U+89CD");
expect(() => {ms932Encoder.encode("\u89CE")}).to.throw(Error, "EncodingError U+89CE");
expect(() => {ms932Encoder.encode("\u89CF")}).to.throw(Error, "EncodingError U+89CF");
expect(() => {ms932Encoder.encode("\u89D0")}).to.throw(Error, "EncodingError U+89D0");
expect(() => {ms932Encoder.encode("\u89D1")}).to.throw(Error, "EncodingError U+89D1");
r = r && ([...ms932Encoder.encode("角")].join(",") === "138,112"); // U+89D2
expect(() => {ms932Encoder.encode("\u89D3")}).to.throw(Error, "EncodingError U+89D3");
expect(() => {ms932Encoder.encode("\u89D4")}).to.throw(Error, "EncodingError U+89D4");
expect(() => {ms932Encoder.encode("\u89D5")}).to.throw(Error, "EncodingError U+89D5");
expect(() => {ms932Encoder.encode("\u89D6")}).to.throw(Error, "EncodingError U+89D6");
expect(() => {ms932Encoder.encode("\u89D7")}).to.throw(Error, "EncodingError U+89D7");
expect(() => {ms932Encoder.encode("\u89D8")}).to.throw(Error, "EncodingError U+89D8");
expect(() => {ms932Encoder.encode("\u89D9")}).to.throw(Error, "EncodingError U+89D9");
r = r && ([...ms932Encoder.encode("觚")].join(",") === "230,87"); // U+89DA
expect(() => {ms932Encoder.encode("\u89DB")}).to.throw(Error, "EncodingError U+89DB");
r = r && ([...ms932Encoder.encode("觜觝")].join(",") === "230,88,230,89"); // U+89DC
expect(() => {ms932Encoder.encode("\u89DE")}).to.throw(Error, "EncodingError U+89DE");
expect(() => {ms932Encoder.encode("\u89DF")}).to.throw(Error, "EncodingError U+89DF");
expect(() => {ms932Encoder.encode("\u89E0")}).to.throw(Error, "EncodingError U+89E0");
expect(() => {ms932Encoder.encode("\u89E1")}).to.throw(Error, "EncodingError U+89E1");
expect(() => {ms932Encoder.encode("\u89E2")}).to.throw(Error, "EncodingError U+89E2");
r = r && ([...ms932Encoder.encode("解")].join(",") === "137,240"); // U+89E3
expect(() => {ms932Encoder.encode("\u89E4")}).to.throw(Error, "EncodingError U+89E4");
expect(() => {ms932Encoder.encode("\u89E5")}).to.throw(Error, "EncodingError U+89E5");
r = r && ([...ms932Encoder.encode("触觧")].join(",") === "144,71,230,90"); // U+89E6
expect(() => {ms932Encoder.encode("\u89E8")}).to.throw(Error, "EncodingError U+89E8");
expect(() => {ms932Encoder.encode("\u89E9")}).to.throw(Error, "EncodingError U+89E9");
expect(() => {ms932Encoder.encode("\u89EA")}).to.throw(Error, "EncodingError U+89EA");
expect(() => {ms932Encoder.encode("\u89EB")}).to.throw(Error, "EncodingError U+89EB");
expect(() => {ms932Encoder.encode("\u89EC")}).to.throw(Error, "EncodingError U+89EC");
expect(() => {ms932Encoder.encode("\u89ED")}).to.throw(Error, "EncodingError U+89ED");
expect(() => {ms932Encoder.encode("\u89EE")}).to.throw(Error, "EncodingError U+89EE");
expect(() => {ms932Encoder.encode("\u89EF")}).to.throw(Error, "EncodingError U+89EF");
expect(() => {ms932Encoder.encode("\u89F0")}).to.throw(Error, "EncodingError U+89F0");
expect(() => {ms932Encoder.encode("\u89F1")}).to.throw(Error, "EncodingError U+89F1");
expect(() => {ms932Encoder.encode("\u89F2")}).to.throw(Error, "EncodingError U+89F2");
expect(() => {ms932Encoder.encode("\u89F3")}).to.throw(Error, "EncodingError U+89F3");
r = r && ([...ms932Encoder.encode("觴")].join(",") === "230,91"); // U+89F4
expect(() => {ms932Encoder.encode("\u89F5")}).to.throw(Error, "EncodingError U+89F5");
expect(() => {ms932Encoder.encode("\u89F6")}).to.throw(Error, "EncodingError U+89F6");
expect(() => {ms932Encoder.encode("\u89F7")}).to.throw(Error, "EncodingError U+89F7");
r = r && ([...ms932Encoder.encode("觸")].join(",") === "230,92"); // U+89F8
expect(() => {ms932Encoder.encode("\u89F9")}).to.throw(Error, "EncodingError U+89F9");
expect(() => {ms932Encoder.encode("\u89FA")}).to.throw(Error, "EncodingError U+89FA");
expect(() => {ms932Encoder.encode("\u89FB")}).to.throw(Error, "EncodingError U+89FB");
expect(() => {ms932Encoder.encode("\u89FC")}).to.throw(Error, "EncodingError U+89FC");
expect(() => {ms932Encoder.encode("\u89FD")}).to.throw(Error, "EncodingError U+89FD");
expect(() => {ms932Encoder.encode("\u89FE")}).to.throw(Error, "EncodingError U+89FE");
expect(() => {ms932Encoder.encode("\u89FF")}).to.throw(Error, "EncodingError U+89FF");
r = r && ([...ms932Encoder.encode("言")].join(",") === "140,190"); // U+8A00
expect(() => {ms932Encoder.encode("\u8A01")}).to.throw(Error, "EncodingError U+8A01");
r = r && ([...ms932Encoder.encode("訂訃")].join(",") === "146,249,230,93"); // U+8A02
expect(() => {ms932Encoder.encode("\u8A04")}).to.throw(Error, "EncodingError U+8A04");
expect(() => {ms932Encoder.encode("\u8A05")}).to.throw(Error, "EncodingError U+8A05");
expect(() => {ms932Encoder.encode("\u8A06")}).to.throw(Error, "EncodingError U+8A06");
expect(() => {ms932Encoder.encode("\u8A07")}).to.throw(Error, "EncodingError U+8A07");
r = r && ([...ms932Encoder.encode("計")].join(",") === "140,118"); // U+8A08
expect(() => {ms932Encoder.encode("\u8A09")}).to.throw(Error, "EncodingError U+8A09");
r = r && ([...ms932Encoder.encode("訊")].join(",") === "144,117"); // U+8A0A
expect(() => {ms932Encoder.encode("\u8A0B")}).to.throw(Error, "EncodingError U+8A0B");
r = r && ([...ms932Encoder.encode("訌")].join(",") === "230,96"); // U+8A0C
expect(() => {ms932Encoder.encode("\u8A0D")}).to.throw(Error, "EncodingError U+8A0D");
r = r && ([...ms932Encoder.encode("討")].join(",") === "147,162"); // U+8A0E
expect(() => {ms932Encoder.encode("\u8A0F")}).to.throw(Error, "EncodingError U+8A0F");
r = r && ([...ms932Encoder.encode("訐")].join(",") === "230,95"); // U+8A10
expect(() => {ms932Encoder.encode("\u8A11")}).to.throw(Error, "EncodingError U+8A11");
r = r && ([...ms932Encoder.encode("訒訓")].join(",") === "251,163,140,80"); // U+8A12
expect(() => {ms932Encoder.encode("\u8A14")}).to.throw(Error, "EncodingError U+8A14");
expect(() => {ms932Encoder.encode("\u8A15")}).to.throw(Error, "EncodingError U+8A15");
r = r && ([...ms932Encoder.encode("訖託記")].join(",") === "230,94,145,245,139,76"); // U+8A16
expect(() => {ms932Encoder.encode("\u8A19")}).to.throw(Error, "EncodingError U+8A19");
expect(() => {ms932Encoder.encode("\u8A1A")}).to.throw(Error, "EncodingError U+8A1A");
r = r && ([...ms932Encoder.encode("訛")].join(",") === "230,97"); // U+8A1B
expect(() => {ms932Encoder.encode("\u8A1C")}).to.throw(Error, "EncodingError U+8A1C");
r = r && ([...ms932Encoder.encode("訝")].join(",") === "230,98"); // U+8A1D
expect(() => {ms932Encoder.encode("\u8A1E")}).to.throw(Error, "EncodingError U+8A1E");
r = r && ([...ms932Encoder.encode("訟")].join(",") === "143,215"); // U+8A1F
expect(() => {ms932Encoder.encode("\u8A20")}).to.throw(Error, "EncodingError U+8A20");
expect(() => {ms932Encoder.encode("\u8A21")}).to.throw(Error, "EncodingError U+8A21");
expect(() => {ms932Encoder.encode("\u8A22")}).to.throw(Error, "EncodingError U+8A22");
r = r && ([...ms932Encoder.encode("訣")].join(",") === "140,141"); // U+8A23
expect(() => {ms932Encoder.encode("\u8A24")}).to.throw(Error, "EncodingError U+8A24");
r = r && ([...ms932Encoder.encode("訥")].join(",") === "230,99"); // U+8A25
expect(() => {ms932Encoder.encode("\u8A26")}).to.throw(Error, "EncodingError U+8A26");
expect(() => {ms932Encoder.encode("\u8A27")}).to.throw(Error, "EncodingError U+8A27");
expect(() => {ms932Encoder.encode("\u8A28")}).to.throw(Error, "EncodingError U+8A28");
expect(() => {ms932Encoder.encode("\u8A29")}).to.throw(Error, "EncodingError U+8A29");
r = r && ([...ms932Encoder.encode("訪")].join(",") === "150,75"); // U+8A2A
expect(() => {ms932Encoder.encode("\u8A2B")}).to.throw(Error, "EncodingError U+8A2B");
expect(() => {ms932Encoder.encode("\u8A2C")}).to.throw(Error, "EncodingError U+8A2C");
r = r && ([...ms932Encoder.encode("設")].join(",") === "144,221"); // U+8A2D
expect(() => {ms932Encoder.encode("\u8A2E")}).to.throw(Error, "EncodingError U+8A2E");
expect(() => {ms932Encoder.encode("\u8A2F")}).to.throw(Error, "EncodingError U+8A2F");
expect(() => {ms932Encoder.encode("\u8A30")}).to.throw(Error, "EncodingError U+8A30");
r = r && ([...ms932Encoder.encode("許")].join(",") === "139,150"); // U+8A31
expect(() => {ms932Encoder.encode("\u8A32")}).to.throw(Error, "EncodingError U+8A32");
r = r && ([...ms932Encoder.encode("訳訴")].join(",") === "150,243,145,105"); // U+8A33
expect(() => {ms932Encoder.encode("\u8A35")}).to.throw(Error, "EncodingError U+8A35");
r = r && ([...ms932Encoder.encode("訶訷")].join(",") === "230,100,251,164"); // U+8A36
expect(() => {ms932Encoder.encode("\u8A38")}).to.throw(Error, "EncodingError U+8A38");
expect(() => {ms932Encoder.encode("\u8A39")}).to.throw(Error, "EncodingError U+8A39");
r = r && ([...ms932Encoder.encode("診註証")].join(",") === "144,102,146,144,143,216"); // U+8A3A
expect(() => {ms932Encoder.encode("\u8A3D")}).to.throw(Error, "EncodingError U+8A3D");
expect(() => {ms932Encoder.encode("\u8A3E")}).to.throw(Error, "EncodingError U+8A3E");
expect(() => {ms932Encoder.encode("\u8A3F")}).to.throw(Error, "EncodingError U+8A3F");
expect(() => {ms932Encoder.encode("\u8A40")}).to.throw(Error, "EncodingError U+8A40");
r = r && ([...ms932Encoder.encode("詁")].join(",") === "230,101"); // U+8A41
expect(() => {ms932Encoder.encode("\u8A42")}).to.throw(Error, "EncodingError U+8A42");
expect(() => {ms932Encoder.encode("\u8A43")}).to.throw(Error, "EncodingError U+8A43");
expect(() => {ms932Encoder.encode("\u8A44")}).to.throw(Error, "EncodingError U+8A44");
expect(() => {ms932Encoder.encode("\u8A45")}).to.throw(Error, "EncodingError U+8A45");
r = r && ([...ms932Encoder.encode("詆")].join(",") === "230,104"); // U+8A46
expect(() => {ms932Encoder.encode("\u8A47")}).to.throw(Error, "EncodingError U+8A47");
r = r && ([...ms932Encoder.encode("詈")].join(",") === "230,105"); // U+8A48
expect(() => {ms932Encoder.encode("\u8A49")}).to.throw(Error, "EncodingError U+8A49");
expect(() => {ms932Encoder.encode("\u8A4A")}).to.throw(Error, "EncodingError U+8A4A");
expect(() => {ms932Encoder.encode("\u8A4B")}).to.throw(Error, "EncodingError U+8A4B");
expect(() => {ms932Encoder.encode("\u8A4C")}).to.throw(Error, "EncodingError U+8A4C");
expect(() => {ms932Encoder.encode("\u8A4D")}).to.throw(Error, "EncodingError U+8A4D");
expect(() => {ms932Encoder.encode("\u8A4E")}).to.throw(Error, "EncodingError U+8A4E");
expect(() => {ms932Encoder.encode("\u8A4F")}).to.throw(Error, "EncodingError U+8A4F");
r = r && ([...ms932Encoder.encode("詐詑詒")].join(",") === "141,188,145,192,230,103"); // U+8A50
expect(() => {ms932Encoder.encode("\u8A53")}).to.throw(Error, "EncodingError U+8A53");
r = r && ([...ms932Encoder.encode("詔評")].join(",") === "143,217,149,93"); // U+8A54
expect(() => {ms932Encoder.encode("\u8A56")}).to.throw(Error, "EncodingError U+8A56");
expect(() => {ms932Encoder.encode("\u8A57")}).to.throw(Error, "EncodingError U+8A57");
expect(() => {ms932Encoder.encode("\u8A58")}).to.throw(Error, "EncodingError U+8A58");
expect(() => {ms932Encoder.encode("\u8A59")}).to.throw(Error, "EncodingError U+8A59");
expect(() => {ms932Encoder.encode("\u8A5A")}).to.throw(Error, "EncodingError U+8A5A");
r = r && ([...ms932Encoder.encode("詛")].join(",") === "230,102"); // U+8A5B
expect(() => {ms932Encoder.encode("\u8A5C")}).to.throw(Error, "EncodingError U+8A5C");
expect(() => {ms932Encoder.encode("\u8A5D")}).to.throw(Error, "EncodingError U+8A5D");
r = r && ([...ms932Encoder.encode("詞")].join(",") === "142,140"); // U+8A5E
expect(() => {ms932Encoder.encode("\u8A5F")}).to.throw(Error, "EncodingError U+8A5F");
r = r && ([...ms932Encoder.encode("詠")].join(",") === "137,114"); // U+8A60
expect(() => {ms932Encoder.encode("\u8A61")}).to.throw(Error, "EncodingError U+8A61");
r = r && ([...ms932Encoder.encode("詢詣")].join(",") === "230,109,140,119"); // U+8A62
expect(() => {ms932Encoder.encode("\u8A64")}).to.throw(Error, "EncodingError U+8A64");
expect(() => {ms932Encoder.encode("\u8A65")}).to.throw(Error, "EncodingError U+8A65");
r = r && ([...ms932Encoder.encode("試")].join(",") === "142,142"); // U+8A66
expect(() => {ms932Encoder.encode("\u8A67")}).to.throw(Error, "EncodingError U+8A67");
expect(() => {ms932Encoder.encode("\u8A68")}).to.throw(Error, "EncodingError U+8A68");
r = r && ([...ms932Encoder.encode("詩")].join(",") === "142,141"); // U+8A69
expect(() => {ms932Encoder.encode("\u8A6A")}).to.throw(Error, "EncodingError U+8A6A");
r = r && ([...ms932Encoder.encode("詫詬詭詮")].join(",") === "152,108,230,108,230,107,145,70"); // U+8A6B
expect(() => {ms932Encoder.encode("\u8A6F")}).to.throw(Error, "EncodingError U+8A6F");
r = r && ([...ms932Encoder.encode("詰話該詳")].join(",") === "139,108,152,98,138,89,143,218"); // U+8A70
expect(() => {ms932Encoder.encode("\u8A74")}).to.throw(Error, "EncodingError U+8A74");
expect(() => {ms932Encoder.encode("\u8A75")}).to.throw(Error, "EncodingError U+8A75");
expect(() => {ms932Encoder.encode("\u8A76")}).to.throw(Error, "EncodingError U+8A76");
expect(() => {ms932Encoder.encode("\u8A77")}).to.throw(Error, "EncodingError U+8A77");
expect(() => {ms932Encoder.encode("\u8A78")}).to.throw(Error, "EncodingError U+8A78");
r = r && ([...ms932Encoder.encode("詹")].join(",") === "251,165"); // U+8A79
expect(() => {ms932Encoder.encode("\u8A7A")}).to.throw(Error, "EncodingError U+8A7A");
expect(() => {ms932Encoder.encode("\u8A7B")}).to.throw(Error, "EncodingError U+8A7B");
r = r && ([...ms932Encoder.encode("詼")].join(",") === "230,106"); // U+8A7C
expect(() => {ms932Encoder.encode("\u8A7D")}).to.throw(Error, "EncodingError U+8A7D");
expect(() => {ms932Encoder.encode("\u8A7E")}).to.throw(Error, "EncodingError U+8A7E");
expect(() => {ms932Encoder.encode("\u8A7F")}).to.throw(Error, "EncodingError U+8A7F");
expect(() => {ms932Encoder.encode("\u8A80")}).to.throw(Error, "EncodingError U+8A80");
expect(() => {ms932Encoder.encode("\u8A81")}).to.throw(Error, "EncodingError U+8A81");
r = r && ([...ms932Encoder.encode("誂")].join(",") === "230,111"); // U+8A82
expect(() => {ms932Encoder.encode("\u8A83")}).to.throw(Error, "EncodingError U+8A83");
r = r && ([...ms932Encoder.encode("誄誅")].join(",") === "230,112,230,110"); // U+8A84
expect(() => {ms932Encoder.encode("\u8A86")}).to.throw(Error, "EncodingError U+8A86");
r = r && ([...ms932Encoder.encode("誇")].join(",") === "140,214"); // U+8A87
expect(() => {ms932Encoder.encode("\u8A88")}).to.throw(Error, "EncodingError U+8A88");
r = r && ([...ms932Encoder.encode("誉")].join(",") === "151,95"); // U+8A89
expect(() => {ms932Encoder.encode("\u8A8A")}).to.throw(Error, "EncodingError U+8A8A");
expect(() => {ms932Encoder.encode("\u8A8B")}).to.throw(Error, "EncodingError U+8A8B");
r = r && ([...ms932Encoder.encode("誌認")].join(",") === "142,143,148,70"); // U+8A8C
expect(() => {ms932Encoder.encode("\u8A8E")}).to.throw(Error, "EncodingError U+8A8E");
expect(() => {ms932Encoder.encode("\u8A8F")}).to.throw(Error, "EncodingError U+8A8F");
expect(() => {ms932Encoder.encode("\u8A90")}).to.throw(Error, "EncodingError U+8A90");
r = r && ([...ms932Encoder.encode("誑")].join(",") === "230,115"); // U+8A91
expect(() => {ms932Encoder.encode("\u8A92")}).to.throw(Error, "EncodingError U+8A92");
r = r && ([...ms932Encoder.encode("誓")].join(",") === "144,190"); // U+8A93
expect(() => {ms932Encoder.encode("\u8A94")}).to.throw(Error, "EncodingError U+8A94");
r = r && ([...ms932Encoder.encode("誕")].join(",") === "146,97"); // U+8A95
expect(() => {ms932Encoder.encode("\u8A96")}).to.throw(Error, "EncodingError U+8A96");
expect(() => {ms932Encoder.encode("\u8A97")}).to.throw(Error, "EncodingError U+8A97");
r = r && ([...ms932Encoder.encode("誘")].join(",") === "151,85"); // U+8A98
expect(() => {ms932Encoder.encode("\u8A99")}).to.throw(Error, "EncodingError U+8A99");
r = r && ([...ms932Encoder.encode("誚")].join(",") === "230,118"); // U+8A9A
expect(() => {ms932Encoder.encode("\u8A9B")}).to.throw(Error, "EncodingError U+8A9B");
expect(() => {ms932Encoder.encode("\u8A9C")}).to.throw(Error, "EncodingError U+8A9C");
expect(() => {ms932Encoder.encode("\u8A9D")}).to.throw(Error, "EncodingError U+8A9D");
r = r && ([...ms932Encoder.encode("語")].join(",") === "140,234"); // U+8A9E
expect(() => {ms932Encoder.encode("\u8A9F")}).to.throw(Error, "EncodingError U+8A9F");
r = r && ([...ms932Encoder.encode("誠誡")].join(",") === "144,189,230,114"); // U+8AA0
expect(() => {ms932Encoder.encode("\u8AA2")}).to.throw(Error, "EncodingError U+8AA2");
r = r && ([...ms932Encoder.encode("誣誤誥誦誧誨")].join(",") === "230,119,140,235,230,116,230,117,251,166,230,113"); // U+8AA3
expect(() => {ms932Encoder.encode("\u8AA9")}).to.throw(Error, "EncodingError U+8AA9");
expect(() => {ms932Encoder.encode("\u8AAA")}).to.throw(Error, "EncodingError U+8AAA");
expect(() => {ms932Encoder.encode("\u8AAB")}).to.throw(Error, "EncodingError U+8AAB");
r = r && ([...ms932Encoder.encode("説読")].join(",") === "144,224,147,199"); // U+8AAC
expect(() => {ms932Encoder.encode("\u8AAE")}).to.throw(Error, "EncodingError U+8AAE");
expect(() => {ms932Encoder.encode("\u8AAF")}).to.throw(Error, "EncodingError U+8AAF");
r = r && ([...ms932Encoder.encode("誰")].join(",") === "146,78"); // U+8AB0
expect(() => {ms932Encoder.encode("\u8AB1")}).to.throw(Error, "EncodingError U+8AB1");
r = r && ([...ms932Encoder.encode("課")].join(",") === "137,219"); // U+8AB2
expect(() => {ms932Encoder.encode("\u8AB3")}).to.throw(Error, "EncodingError U+8AB3");
expect(() => {ms932Encoder.encode("\u8AB4")}).to.throw(Error, "EncodingError U+8AB4");
expect(() => {ms932Encoder.encode("\u8AB5")}).to.throw(Error, "EncodingError U+8AB5");
expect(() => {ms932Encoder.encode("\u8AB6")}).to.throw(Error, "EncodingError U+8AB6");
expect(() => {ms932Encoder.encode("\u8AB7")}).to.throw(Error, "EncodingError U+8AB7");
expect(() => {ms932Encoder.encode("\u8AB8")}).to.throw(Error, "EncodingError U+8AB8");
r = r && ([...ms932Encoder.encode("誹")].join(",") === "148,238"); // U+8AB9
expect(() => {ms932Encoder.encode("\u8ABA")}).to.throw(Error, "EncodingError U+8ABA");
expect(() => {ms932Encoder.encode("\u8ABB")}).to.throw(Error, "EncodingError U+8ABB");
r = r && ([...ms932Encoder.encode("誼")].join(",") === "139,98"); // U+8ABC
expect(() => {ms932Encoder.encode("\u8ABD")}).to.throw(Error, "EncodingError U+8ABD");
r = r && ([...ms932Encoder.encode("誾調")].join(",") === "251,167,146,178"); // U+8ABE
expect(() => {ms932Encoder.encode("\u8AC0")}).to.throw(Error, "EncodingError U+8AC0");
expect(() => {ms932Encoder.encode("\u8AC1")}).to.throw(Error, "EncodingError U+8AC1");
r = r && ([...ms932Encoder.encode("諂")].join(",") === "230,122"); // U+8AC2
expect(() => {ms932Encoder.encode("\u8AC3")}).to.throw(Error, "EncodingError U+8AC3");
r = r && ([...ms932Encoder.encode("諄")].join(",") === "230,120"); // U+8AC4
expect(() => {ms932Encoder.encode("\u8AC5")}).to.throw(Error, "EncodingError U+8AC5");
expect(() => {ms932Encoder.encode("\u8AC6")}).to.throw(Error, "EncodingError U+8AC6");
r = r && ([...ms932Encoder.encode("談")].join(",") === "146,107"); // U+8AC7
expect(() => {ms932Encoder.encode("\u8AC8")}).to.throw(Error, "EncodingError U+8AC8");
expect(() => {ms932Encoder.encode("\u8AC9")}).to.throw(Error, "EncodingError U+8AC9");
expect(() => {ms932Encoder.encode("\u8ACA")}).to.throw(Error, "EncodingError U+8ACA");
r = r && ([...ms932Encoder.encode("請諌諍")].join(",") === "144,191,138,208,230,121"); // U+8ACB
expect(() => {ms932Encoder.encode("\u8ACE")}).to.throw(Error, "EncodingError U+8ACE");
r = r && ([...ms932Encoder.encode("諏")].join(",") === "144,122"); // U+8ACF
expect(() => {ms932Encoder.encode("\u8AD0")}).to.throw(Error, "EncodingError U+8AD0");
expect(() => {ms932Encoder.encode("\u8AD1")}).to.throw(Error, "EncodingError U+8AD1");
r = r && ([...ms932Encoder.encode("諒")].join(",") === "151,200"); // U+8AD2
expect(() => {ms932Encoder.encode("\u8AD3")}).to.throw(Error, "EncodingError U+8AD3");
expect(() => {ms932Encoder.encode("\u8AD4")}).to.throw(Error, "EncodingError U+8AD4");
expect(() => {ms932Encoder.encode("\u8AD5")}).to.throw(Error, "EncodingError U+8AD5");
r = r && ([...ms932Encoder.encode("論")].join(",") === "152,95"); // U+8AD6
expect(() => {ms932Encoder.encode("\u8AD7")}).to.throw(Error, "EncodingError U+8AD7");
expect(() => {ms932Encoder.encode("\u8AD8")}).to.throw(Error, "EncodingError U+8AD8");
expect(() => {ms932Encoder.encode("\u8AD9")}).to.throw(Error, "EncodingError U+8AD9");
r = r && ([...ms932Encoder.encode("諚諛諜")].join(",") === "230,123,230,135,146,179"); // U+8ADA
expect(() => {ms932Encoder.encode("\u8ADD")}).to.throw(Error, "EncodingError U+8ADD");
r = r && ([...ms932Encoder.encode("諞諟諠諡諢")].join(",") === "230,134,251,168,230,131,230,139,230,132"); // U+8ADE
expect(() => {ms932Encoder.encode("\u8AE3")}).to.throw(Error, "EncodingError U+8AE3");
r = r && ([...ms932Encoder.encode("諤")].join(",") === "230,128"); // U+8AE4
expect(() => {ms932Encoder.encode("\u8AE5")}).to.throw(Error, "EncodingError U+8AE5");
r = r && ([...ms932Encoder.encode("諦諧")].join(",") === "146,250,230,126"); // U+8AE6
expect(() => {ms932Encoder.encode("\u8AE8")}).to.throw(Error, "EncodingError U+8AE8");
expect(() => {ms932Encoder.encode("\u8AE9")}).to.throw(Error, "EncodingError U+8AE9");
expect(() => {ms932Encoder.encode("\u8AEA")}).to.throw(Error, "EncodingError U+8AEA");
r = r && ([...ms932Encoder.encode("諫")].join(",") === "230,124"); // U+8AEB
expect(() => {ms932Encoder.encode("\u8AEC")}).to.throw(Error, "EncodingError U+8AEC");
r = r && ([...ms932Encoder.encode("諭諮")].join(",") === "151,64,142,144"); // U+8AED
expect(() => {ms932Encoder.encode("\u8AEF")}).to.throw(Error, "EncodingError U+8AEF");
expect(() => {ms932Encoder.encode("\u8AF0")}).to.throw(Error, "EncodingError U+8AF0");
r = r && ([...ms932Encoder.encode("諱")].join(",") === "230,129"); // U+8AF1
expect(() => {ms932Encoder.encode("\u8AF2")}).to.throw(Error, "EncodingError U+8AF2");
r = r && ([...ms932Encoder.encode("諳")].join(",") === "230,125"); // U+8AF3
expect(() => {ms932Encoder.encode("\u8AF4")}).to.throw(Error, "EncodingError U+8AF4");
expect(() => {ms932Encoder.encode("\u8AF5")}).to.throw(Error, "EncodingError U+8AF5");
r = r && ([...ms932Encoder.encode("諶諷諸")].join(",") === "251,170,230,133,143,148"); // U+8AF6
expect(() => {ms932Encoder.encode("\u8AF9")}).to.throw(Error, "EncodingError U+8AF9");
r = r && ([...ms932Encoder.encode("諺")].join(",") === "140,191"); // U+8AFA
expect(() => {ms932Encoder.encode("\u8AFB")}).to.throw(Error, "EncodingError U+8AFB");
expect(() => {ms932Encoder.encode("\u8AFC")}).to.throw(Error, "EncodingError U+8AFC");
expect(() => {ms932Encoder.encode("\u8AFD")}).to.throw(Error, "EncodingError U+8AFD");
r = r && ([...ms932Encoder.encode("諾")].join(",") === "145,248"); // U+8AFE
expect(() => {ms932Encoder.encode("\u8AFF")}).to.throw(Error, "EncodingError U+8AFF");
r = r && ([...ms932Encoder.encode("謀謁謂")].join(",") === "150,100,137,121,136,224"); // U+8B00
expect(() => {ms932Encoder.encode("\u8B03")}).to.throw(Error, "EncodingError U+8B03");
r = r && ([...ms932Encoder.encode("謄")].join(",") === "147,163"); // U+8B04
expect(() => {ms932Encoder.encode("\u8B05")}).to.throw(Error, "EncodingError U+8B05");
expect(() => {ms932Encoder.encode("\u8B06")}).to.throw(Error, "EncodingError U+8B06");
r = r && ([...ms932Encoder.encode("謇")].join(",") === "230,137"); // U+8B07
expect(() => {ms932Encoder.encode("\u8B08")}).to.throw(Error, "EncodingError U+8B08");
expect(() => {ms932Encoder.encode("\u8B09")}).to.throw(Error, "EncodingError U+8B09");
expect(() => {ms932Encoder.encode("\u8B0A")}).to.throw(Error, "EncodingError U+8B0A");
expect(() => {ms932Encoder.encode("\u8B0B")}).to.throw(Error, "EncodingError U+8B0B");
r = r && ([...ms932Encoder.encode("謌")].join(",") === "230,136"); // U+8B0C
expect(() => {ms932Encoder.encode("\u8B0D")}).to.throw(Error, "EncodingError U+8B0D");
r = r && ([...ms932Encoder.encode("謎")].join(",") === "147,228"); // U+8B0E
expect(() => {ms932Encoder.encode("\u8B0F")}).to.throw(Error, "EncodingError U+8B0F");
r = r && ([...ms932Encoder.encode("謐")].join(",") === "230,141"); // U+8B10
expect(() => {ms932Encoder.encode("\u8B11")}).to.throw(Error, "EncodingError U+8B11");
expect(() => {ms932Encoder.encode("\u8B12")}).to.throw(Error, "EncodingError U+8B12");
expect(() => {ms932Encoder.encode("\u8B13")}).to.throw(Error, "EncodingError U+8B13");
r = r && ([...ms932Encoder.encode("謔")].join(",") === "230,130"); // U+8B14
expect(() => {ms932Encoder.encode("\u8B15")}).to.throw(Error, "EncodingError U+8B15");
r = r && ([...ms932Encoder.encode("謖謗")].join(",") === "230,140,230,142"); // U+8B16
expect(() => {ms932Encoder.encode("\u8B18")}).to.throw(Error, "EncodingError U+8B18");
r = r && ([...ms932Encoder.encode("謙謚講")].join(",") === "140,170,230,138,141,117"); // U+8B19
expect(() => {ms932Encoder.encode("\u8B1C")}).to.throw(Error, "EncodingError U+8B1C");
r = r && ([...ms932Encoder.encode("謝")].join(",") === "142,211"); // U+8B1D
expect(() => {ms932Encoder.encode("\u8B1E")}).to.throw(Error, "EncodingError U+8B1E");
expect(() => {ms932Encoder.encode("\u8B1F")}).to.throw(Error, "EncodingError U+8B1F");
r = r && ([...ms932Encoder.encode("謠謡")].join(",") === "230,143,151,119"); // U+8B20
expect(() => {ms932Encoder.encode("\u8B22")}).to.throw(Error, "EncodingError U+8B22");
expect(() => {ms932Encoder.encode("\u8B23")}).to.throw(Error, "EncodingError U+8B23");
expect(() => {ms932Encoder.encode("\u8B24")}).to.throw(Error, "EncodingError U+8B24");
expect(() => {ms932Encoder.encode("\u8B25")}).to.throw(Error, "EncodingError U+8B25");
r = r && ([...ms932Encoder.encode("謦")].join(",") === "230,146"); // U+8B26
expect(() => {ms932Encoder.encode("\u8B27")}).to.throw(Error, "EncodingError U+8B27");
r = r && ([...ms932Encoder.encode("謨")].join(",") === "230,149"); // U+8B28
expect(() => {ms932Encoder.encode("\u8B29")}).to.throw(Error, "EncodingError U+8B29");
expect(() => {ms932Encoder.encode("\u8B2A")}).to.throw(Error, "EncodingError U+8B2A");
r = r && ([...ms932Encoder.encode("謫謬")].join(",") === "230,147,149,84"); // U+8B2B
expect(() => {ms932Encoder.encode("\u8B2D")}).to.throw(Error, "EncodingError U+8B2D");
expect(() => {ms932Encoder.encode("\u8B2E")}).to.throw(Error, "EncodingError U+8B2E");
expect(() => {ms932Encoder.encode("\u8B2F")}).to.throw(Error, "EncodingError U+8B2F");
expect(() => {ms932Encoder.encode("\u8B30")}).to.throw(Error, "EncodingError U+8B30");
expect(() => {ms932Encoder.encode("\u8B31")}).to.throw(Error, "EncodingError U+8B31");
expect(() => {ms932Encoder.encode("\u8B32")}).to.throw(Error, "EncodingError U+8B32");
r = r && ([...ms932Encoder.encode("謳")].join(",") === "230,144"); // U+8B33
expect(() => {ms932Encoder.encode("\u8B34")}).to.throw(Error, "EncodingError U+8B34");
expect(() => {ms932Encoder.encode("\u8B35")}).to.throw(Error, "EncodingError U+8B35");
expect(() => {ms932Encoder.encode("\u8B36")}).to.throw(Error, "EncodingError U+8B36");
expect(() => {ms932Encoder.encode("\u8B37")}).to.throw(Error, "EncodingError U+8B37");
expect(() => {ms932Encoder.encode("\u8B38")}).to.throw(Error, "EncodingError U+8B38");
r = r && ([...ms932Encoder.encode("謹")].join(",") === "139,222"); // U+8B39
expect(() => {ms932Encoder.encode("\u8B3A")}).to.throw(Error, "EncodingError U+8B3A");
expect(() => {ms932Encoder.encode("\u8B3B")}).to.throw(Error, "EncodingError U+8B3B");
expect(() => {ms932Encoder.encode("\u8B3C")}).to.throw(Error, "EncodingError U+8B3C");
expect(() => {ms932Encoder.encode("\u8B3D")}).to.throw(Error, "EncodingError U+8B3D");
r = r && ([...ms932Encoder.encode("謾")].join(",") === "230,148"); // U+8B3E
expect(() => {ms932Encoder.encode("\u8B3F")}).to.throw(Error, "EncodingError U+8B3F");
expect(() => {ms932Encoder.encode("\u8B40")}).to.throw(Error, "EncodingError U+8B40");
r = r && ([...ms932Encoder.encode("譁")].join(",") === "230,150"); // U+8B41
expect(() => {ms932Encoder.encode("\u8B42")}).to.throw(Error, "EncodingError U+8B42");
expect(() => {ms932Encoder.encode("\u8B43")}).to.throw(Error, "EncodingError U+8B43");
expect(() => {ms932Encoder.encode("\u8B44")}).to.throw(Error, "EncodingError U+8B44");
expect(() => {ms932Encoder.encode("\u8B45")}).to.throw(Error, "EncodingError U+8B45");
expect(() => {ms932Encoder.encode("\u8B46")}).to.throw(Error, "EncodingError U+8B46");
expect(() => {ms932Encoder.encode("\u8B47")}).to.throw(Error, "EncodingError U+8B47");
expect(() => {ms932Encoder.encode("\u8B48")}).to.throw(Error, "EncodingError U+8B48");
r = r && ([...ms932Encoder.encode("證")].join(",") === "230,154"); // U+8B49
expect(() => {ms932Encoder.encode("\u8B4A")}).to.throw(Error, "EncodingError U+8B4A");
expect(() => {ms932Encoder.encode("\u8B4B")}).to.throw(Error, "EncodingError U+8B4B");
r = r && ([...ms932Encoder.encode("譌")].join(",") === "230,151"); // U+8B4C
expect(() => {ms932Encoder.encode("\u8B4D")}).to.throw(Error, "EncodingError U+8B4D");
r = r && ([...ms932Encoder.encode("譎譏")].join(",") === "230,153,230,152"); // U+8B4E
expect(() => {ms932Encoder.encode("\u8B50")}).to.throw(Error, "EncodingError U+8B50");
expect(() => {ms932Encoder.encode("\u8B51")}).to.throw(Error, "EncodingError U+8B51");
expect(() => {ms932Encoder.encode("\u8B52")}).to.throw(Error, "EncodingError U+8B52");
r = r && ([...ms932Encoder.encode("譓")].join(",") === "251,171"); // U+8B53
expect(() => {ms932Encoder.encode("\u8B54")}).to.throw(Error, "EncodingError U+8B54");
expect(() => {ms932Encoder.encode("\u8B55")}).to.throw(Error, "EncodingError U+8B55");
r = r && ([...ms932Encoder.encode("譖")].join(",") === "230,155"); // U+8B56
expect(() => {ms932Encoder.encode("\u8B57")}).to.throw(Error, "EncodingError U+8B57");
r = r && ([...ms932Encoder.encode("識")].join(",") === "142,175"); // U+8B58
expect(() => {ms932Encoder.encode("\u8B59")}).to.throw(Error, "EncodingError U+8B59");
r = r && ([...ms932Encoder.encode("譚譛譜")].join(",") === "230,157,230,156,149,136"); // U+8B5A
expect(() => {ms932Encoder.encode("\u8B5D")}).to.throw(Error, "EncodingError U+8B5D");
expect(() => {ms932Encoder.encode("\u8B5E")}).to.throw(Error, "EncodingError U+8B5E");
r = r && ([...ms932Encoder.encode("譟")].join(",") === "230,159"); // U+8B5F
expect(() => {ms932Encoder.encode("\u8B60")}).to.throw(Error, "EncodingError U+8B60");
expect(() => {ms932Encoder.encode("\u8B61")}).to.throw(Error, "EncodingError U+8B61");
expect(() => {ms932Encoder.encode("\u8B62")}).to.throw(Error, "EncodingError U+8B62");
expect(() => {ms932Encoder.encode("\u8B63")}).to.throw(Error, "EncodingError U+8B63");
expect(() => {ms932Encoder.encode("\u8B64")}).to.throw(Error, "EncodingError U+8B64");
expect(() => {ms932Encoder.encode("\u8B65")}).to.throw(Error, "EncodingError U+8B65");
r = r && ([...ms932Encoder.encode("警")].join(",") === "140,120"); // U+8B66
expect(() => {ms932Encoder.encode("\u8B67")}).to.throw(Error, "EncodingError U+8B67");
expect(() => {ms932Encoder.encode("\u8B68")}).to.throw(Error, "EncodingError U+8B68");
expect(() => {ms932Encoder.encode("\u8B69")}).to.throw(Error, "EncodingError U+8B69");
expect(() => {ms932Encoder.encode("\u8B6A")}).to.throw(Error, "EncodingError U+8B6A");
r = r && ([...ms932Encoder.encode("譫譬")].join(",") === "230,158,230,160"); // U+8B6B
expect(() => {ms932Encoder.encode("\u8B6D")}).to.throw(Error, "EncodingError U+8B6D");
expect(() => {ms932Encoder.encode("\u8B6E")}).to.throw(Error, "EncodingError U+8B6E");
r = r && ([...ms932Encoder.encode("譯議譱譲")].join(",") === "230,161,139,99,227,191,143,247"); // U+8B6F
expect(() => {ms932Encoder.encode("\u8B73")}).to.throw(Error, "EncodingError U+8B73");
r = r && ([...ms932Encoder.encode("譴")].join(",") === "230,162"); // U+8B74
expect(() => {ms932Encoder.encode("\u8B75")}).to.throw(Error, "EncodingError U+8B75");
expect(() => {ms932Encoder.encode("\u8B76")}).to.throw(Error, "EncodingError U+8B76");
r = r && ([...ms932Encoder.encode("護")].join(",") === "140,236"); // U+8B77
expect(() => {ms932Encoder.encode("\u8B78")}).to.throw(Error, "EncodingError U+8B78");
expect(() => {ms932Encoder.encode("\u8B79")}).to.throw(Error, "EncodingError U+8B79");
expect(() => {ms932Encoder.encode("\u8B7A")}).to.throw(Error, "EncodingError U+8B7A");
expect(() => {ms932Encoder.encode("\u8B7B")}).to.throw(Error, "EncodingError U+8B7B");
expect(() => {ms932Encoder.encode("\u8B7C")}).to.throw(Error, "EncodingError U+8B7C");
r = r && ([...ms932Encoder.encode("譽")].join(",") === "230,163"); // U+8B7D
expect(() => {ms932Encoder.encode("\u8B7E")}).to.throw(Error, "EncodingError U+8B7E");
r = r && ([...ms932Encoder.encode("譿讀")].join(",") === "251,172,230,164"); // U+8B7F
expect(() => {ms932Encoder.encode("\u8B81")}).to.throw(Error, "EncodingError U+8B81");
expect(() => {ms932Encoder.encode("\u8B82")}).to.throw(Error, "EncodingError U+8B82");
r = r && ([...ms932Encoder.encode("讃")].join(",") === "142,93"); // U+8B83
expect(() => {ms932Encoder.encode("\u8B84")}).to.throw(Error, "EncodingError U+8B84");
expect(() => {ms932Encoder.encode("\u8B85")}).to.throw(Error, "EncodingError U+8B85");
expect(() => {ms932Encoder.encode("\u8B86")}).to.throw(Error, "EncodingError U+8B86");
expect(() => {ms932Encoder.encode("\u8B87")}).to.throw(Error, "EncodingError U+8B87");
expect(() => {ms932Encoder.encode("\u8B88")}).to.throw(Error, "EncodingError U+8B88");
expect(() => {ms932Encoder.encode("\u8B89")}).to.throw(Error, "EncodingError U+8B89");
r = r && ([...ms932Encoder.encode("變")].join(",") === "157,204"); // U+8B8A
expect(() => {ms932Encoder.encode("\u8B8B")}).to.throw(Error, "EncodingError U+8B8B");
r = r && ([...ms932Encoder.encode("讌")].join(",") === "230,165"); // U+8B8C
expect(() => {ms932Encoder.encode("\u8B8D")}).to.throw(Error, "EncodingError U+8B8D");
r = r && ([...ms932Encoder.encode("讎")].join(",") === "230,166"); // U+8B8E
expect(() => {ms932Encoder.encode("\u8B8F")}).to.throw(Error, "EncodingError U+8B8F");
r = r && ([...ms932Encoder.encode("讐")].join(",") === "143,81"); // U+8B90
expect(() => {ms932Encoder.encode("\u8B91")}).to.throw(Error, "EncodingError U+8B91");
r = r && ([...ms932Encoder.encode("讒讓")].join(",") === "230,167,230,168"); // U+8B92
expect(() => {ms932Encoder.encode("\u8B94")}).to.throw(Error, "EncodingError U+8B94");
expect(() => {ms932Encoder.encode("\u8B95")}).to.throw(Error, "EncodingError U+8B95");
r = r && ([...ms932Encoder.encode("讖")].join(",") === "230,169"); // U+8B96
expect(() => {ms932Encoder.encode("\u8B97")}).to.throw(Error, "EncodingError U+8B97");
expect(() => {ms932Encoder.encode("\u8B98")}).to.throw(Error, "EncodingError U+8B98");
r = r && ([...ms932Encoder.encode("讙讚")].join(",") === "230,170,230,171"); // U+8B99
expect(() => {ms932Encoder.encode("\u8B9B")}).to.throw(Error, "EncodingError U+8B9B");
expect(() => {ms932Encoder.encode("\u8B9C")}).to.throw(Error, "EncodingError U+8B9C");
expect(() => {ms932Encoder.encode("\u8B9D")}).to.throw(Error, "EncodingError U+8B9D");
expect(() => {ms932Encoder.encode("\u8B9E")}).to.throw(Error, "EncodingError U+8B9E");
expect(() => {ms932Encoder.encode("\u8B9F")}).to.throw(Error, "EncodingError U+8B9F");
expect(() => {ms932Encoder.encode("\u8BA0")}).to.throw(Error, "EncodingError U+8BA0");
expect(() => {ms932Encoder.encode("\u8BA1")}).to.throw(Error, "EncodingError U+8BA1");
expect(() => {ms932Encoder.encode("\u8BA2")}).to.throw(Error, "EncodingError U+8BA2");
expect(() => {ms932Encoder.encode("\u8BA3")}).to.throw(Error, "EncodingError U+8BA3");
expect(() => {ms932Encoder.encode("\u8BA4")}).to.throw(Error, "EncodingError U+8BA4");
expect(() => {ms932Encoder.encode("\u8BA5")}).to.throw(Error, "EncodingError U+8BA5");
expect(() => {ms932Encoder.encode("\u8BA6")}).to.throw(Error, "EncodingError U+8BA6");
expect(() => {ms932Encoder.encode("\u8BA7")}).to.throw(Error, "EncodingError U+8BA7");
expect(() => {ms932Encoder.encode("\u8BA8")}).to.throw(Error, "EncodingError U+8BA8");
expect(() => {ms932Encoder.encode("\u8BA9")}).to.throw(Error, "EncodingError U+8BA9");
expect(() => {ms932Encoder.encode("\u8BAA")}).to.throw(Error, "EncodingError U+8BAA");
expect(() => {ms932Encoder.encode("\u8BAB")}).to.throw(Error, "EncodingError U+8BAB");
expect(() => {ms932Encoder.encode("\u8BAC")}).to.throw(Error, "EncodingError U+8BAC");
expect(() => {ms932Encoder.encode("\u8BAD")}).to.throw(Error, "EncodingError U+8BAD");
expect(() => {ms932Encoder.encode("\u8BAE")}).to.throw(Error, "EncodingError U+8BAE");
expect(() => {ms932Encoder.encode("\u8BAF")}).to.throw(Error, "EncodingError U+8BAF");
expect(() => {ms932Encoder.encode("\u8BB0")}).to.throw(Error, "EncodingError U+8BB0");
expect(() => {ms932Encoder.encode("\u8BB1")}).to.throw(Error, "EncodingError U+8BB1");
expect(() => {ms932Encoder.encode("\u8BB2")}).to.throw(Error, "EncodingError U+8BB2");
expect(() => {ms932Encoder.encode("\u8BB3")}).to.throw(Error, "EncodingError U+8BB3");
expect(() => {ms932Encoder.encode("\u8BB4")}).to.throw(Error, "EncodingError U+8BB4");
expect(() => {ms932Encoder.encode("\u8BB5")}).to.throw(Error, "EncodingError U+8BB5");
expect(() => {ms932Encoder.encode("\u8BB6")}).to.throw(Error, "EncodingError U+8BB6");
expect(() => {ms932Encoder.encode("\u8BB7")}).to.throw(Error, "EncodingError U+8BB7");
expect(() => {ms932Encoder.encode("\u8BB8")}).to.throw(Error, "EncodingError U+8BB8");
expect(() => {ms932Encoder.encode("\u8BB9")}).to.throw(Error, "EncodingError U+8BB9");
expect(() => {ms932Encoder.encode("\u8BBA")}).to.throw(Error, "EncodingError U+8BBA");
expect(() => {ms932Encoder.encode("\u8BBB")}).to.throw(Error, "EncodingError U+8BBB");
expect(() => {ms932Encoder.encode("\u8BBC")}).to.throw(Error, "EncodingError U+8BBC");
expect(() => {ms932Encoder.encode("\u8BBD")}).to.throw(Error, "EncodingError U+8BBD");
expect(() => {ms932Encoder.encode("\u8BBE")}).to.throw(Error, "EncodingError U+8BBE");
expect(() => {ms932Encoder.encode("\u8BBF")}).to.throw(Error, "EncodingError U+8BBF");
expect(() => {ms932Encoder.encode("\u8BC0")}).to.throw(Error, "EncodingError U+8BC0");
expect(() => {ms932Encoder.encode("\u8BC1")}).to.throw(Error, "EncodingError U+8BC1");
expect(() => {ms932Encoder.encode("\u8BC2")}).to.throw(Error, "EncodingError U+8BC2");
expect(() => {ms932Encoder.encode("\u8BC3")}).to.throw(Error, "EncodingError U+8BC3");
expect(() => {ms932Encoder.encode("\u8BC4")}).to.throw(Error, "EncodingError U+8BC4");
expect(() => {ms932Encoder.encode("\u8BC5")}).to.throw(Error, "EncodingError U+8BC5");
expect(() => {ms932Encoder.encode("\u8BC6")}).to.throw(Error, "EncodingError U+8BC6");
expect(() => {ms932Encoder.encode("\u8BC7")}).to.throw(Error, "EncodingError U+8BC7");
expect(() => {ms932Encoder.encode("\u8BC8")}).to.throw(Error, "EncodingError U+8BC8");
expect(() => {ms932Encoder.encode("\u8BC9")}).to.throw(Error, "EncodingError U+8BC9");
expect(() => {ms932Encoder.encode("\u8BCA")}).to.throw(Error, "EncodingError U+8BCA");
expect(() => {ms932Encoder.encode("\u8BCB")}).to.throw(Error, "EncodingError U+8BCB");
expect(() => {ms932Encoder.encode("\u8BCC")}).to.throw(Error, "EncodingError U+8BCC");
expect(() => {ms932Encoder.encode("\u8BCD")}).to.throw(Error, "EncodingError U+8BCD");
expect(() => {ms932Encoder.encode("\u8BCE")}).to.throw(Error, "EncodingError U+8BCE");
expect(() => {ms932Encoder.encode("\u8BCF")}).to.throw(Error, "EncodingError U+8BCF");
expect(() => {ms932Encoder.encode("\u8BD0")}).to.throw(Error, "EncodingError U+8BD0");
expect(() => {ms932Encoder.encode("\u8BD1")}).to.throw(Error, "EncodingError U+8BD1");
expect(() => {ms932Encoder.encode("\u8BD2")}).to.throw(Error, "EncodingError U+8BD2");
expect(() => {ms932Encoder.encode("\u8BD3")}).to.throw(Error, "EncodingError U+8BD3");
expect(() => {ms932Encoder.encode("\u8BD4")}).to.throw(Error, "EncodingError U+8BD4");
expect(() => {ms932Encoder.encode("\u8BD5")}).to.throw(Error, "EncodingError U+8BD5");
expect(() => {ms932Encoder.encode("\u8BD6")}).to.throw(Error, "EncodingError U+8BD6");
expect(() => {ms932Encoder.encode("\u8BD7")}).to.throw(Error, "EncodingError U+8BD7");
expect(() => {ms932Encoder.encode("\u8BD8")}).to.throw(Error, "EncodingError U+8BD8");
expect(() => {ms932Encoder.encode("\u8BD9")}).to.throw(Error, "EncodingError U+8BD9");
expect(() => {ms932Encoder.encode("\u8BDA")}).to.throw(Error, "EncodingError U+8BDA");
expect(() => {ms932Encoder.encode("\u8BDB")}).to.throw(Error, "EncodingError U+8BDB");
expect(() => {ms932Encoder.encode("\u8BDC")}).to.throw(Error, "EncodingError U+8BDC");
expect(() => {ms932Encoder.encode("\u8BDD")}).to.throw(Error, "EncodingError U+8BDD");
expect(() => {ms932Encoder.encode("\u8BDE")}).to.throw(Error, "EncodingError U+8BDE");
expect(() => {ms932Encoder.encode("\u8BDF")}).to.throw(Error, "EncodingError U+8BDF");
expect(() => {ms932Encoder.encode("\u8BE0")}).to.throw(Error, "EncodingError U+8BE0");
expect(() => {ms932Encoder.encode("\u8BE1")}).to.throw(Error, "EncodingError U+8BE1");
expect(() => {ms932Encoder.encode("\u8BE2")}).to.throw(Error, "EncodingError U+8BE2");
expect(() => {ms932Encoder.encode("\u8BE3")}).to.throw(Error, "EncodingError U+8BE3");
expect(() => {ms932Encoder.encode("\u8BE4")}).to.throw(Error, "EncodingError U+8BE4");
expect(() => {ms932Encoder.encode("\u8BE5")}).to.throw(Error, "EncodingError U+8BE5");
expect(() => {ms932Encoder.encode("\u8BE6")}).to.throw(Error, "EncodingError U+8BE6");
expect(() => {ms932Encoder.encode("\u8BE7")}).to.throw(Error, "EncodingError U+8BE7");
expect(() => {ms932Encoder.encode("\u8BE8")}).to.throw(Error, "EncodingError U+8BE8");
expect(() => {ms932Encoder.encode("\u8BE9")}).to.throw(Error, "EncodingError U+8BE9");
expect(() => {ms932Encoder.encode("\u8BEA")}).to.throw(Error, "EncodingError U+8BEA");
expect(() => {ms932Encoder.encode("\u8BEB")}).to.throw(Error, "EncodingError U+8BEB");
expect(() => {ms932Encoder.encode("\u8BEC")}).to.throw(Error, "EncodingError U+8BEC");
expect(() => {ms932Encoder.encode("\u8BED")}).to.throw(Error, "EncodingError U+8BED");
expect(() => {ms932Encoder.encode("\u8BEE")}).to.throw(Error, "EncodingError U+8BEE");
expect(() => {ms932Encoder.encode("\u8BEF")}).to.throw(Error, "EncodingError U+8BEF");
expect(() => {ms932Encoder.encode("\u8BF0")}).to.throw(Error, "EncodingError U+8BF0");
expect(() => {ms932Encoder.encode("\u8BF1")}).to.throw(Error, "EncodingError U+8BF1");
expect(() => {ms932Encoder.encode("\u8BF2")}).to.throw(Error, "EncodingError U+8BF2");
expect(() => {ms932Encoder.encode("\u8BF3")}).to.throw(Error, "EncodingError U+8BF3");
expect(() => {ms932Encoder.encode("\u8BF4")}).to.throw(Error, "EncodingError U+8BF4");
expect(() => {ms932Encoder.encode("\u8BF5")}).to.throw(Error, "EncodingError U+8BF5");
expect(() => {ms932Encoder.encode("\u8BF6")}).to.throw(Error, "EncodingError U+8BF6");
expect(() => {ms932Encoder.encode("\u8BF7")}).to.throw(Error, "EncodingError U+8BF7");
expect(() => {ms932Encoder.encode("\u8BF8")}).to.throw(Error, "EncodingError U+8BF8");
expect(() => {ms932Encoder.encode("\u8BF9")}).to.throw(Error, "EncodingError U+8BF9");
expect(() => {ms932Encoder.encode("\u8BFA")}).to.throw(Error, "EncodingError U+8BFA");
expect(() => {ms932Encoder.encode("\u8BFB")}).to.throw(Error, "EncodingError U+8BFB");
expect(() => {ms932Encoder.encode("\u8BFC")}).to.throw(Error, "EncodingError U+8BFC");
expect(() => {ms932Encoder.encode("\u8BFD")}).to.throw(Error, "EncodingError U+8BFD");
expect(() => {ms932Encoder.encode("\u8BFE")}).to.throw(Error, "EncodingError U+8BFE");
expect(() => {ms932Encoder.encode("\u8BFF")}).to.throw(Error, "EncodingError U+8BFF");

expect(r).to.equal(true);

  });

});
