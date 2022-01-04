import assert from "node:assert";
import { Ms932Encoder } from "./encoder";

describe("Ms932Encoder.prototype.encode 9", () => {

  it("encode(string) - U+8800-U+8BFF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

    let r = true;
assert.throws(() => {ms932Encoder.encode("\u8800")}, {name:"Error",message:"EncodingError U+8800"});
assert.throws(() => {ms932Encoder.encode("\u8801")}, {name:"Error",message:"EncodingError U+8801"});
assert.throws(() => {ms932Encoder.encode("\u8802")}, {name:"Error",message:"EncodingError U+8802"});
assert.throws(() => {ms932Encoder.encode("\u8803")}, {name:"Error",message:"EncodingError U+8803"});
assert.throws(() => {ms932Encoder.encode("\u8804")}, {name:"Error",message:"EncodingError U+8804"});
r = r && ([...ms932Encoder.encode("蠅")].join(",") === "229,162"); // U+8805
assert.throws(() => {ms932Encoder.encode("\u8806")}, {name:"Error",message:"EncodingError U+8806"});
r = r && ([...ms932Encoder.encode("蠇")].join(",") === "251,161"); // U+8807
assert.throws(() => {ms932Encoder.encode("\u8808")}, {name:"Error",message:"EncodingError U+8808"});
assert.throws(() => {ms932Encoder.encode("\u8809")}, {name:"Error",message:"EncodingError U+8809"});
assert.throws(() => {ms932Encoder.encode("\u880A")}, {name:"Error",message:"EncodingError U+880A"});
assert.throws(() => {ms932Encoder.encode("\u880B")}, {name:"Error",message:"EncodingError U+880B"});
assert.throws(() => {ms932Encoder.encode("\u880C")}, {name:"Error",message:"EncodingError U+880C"});
r = r && ([...ms932Encoder.encode("蠍蠎蠏")].join(",") === "229,182,229,186,229,181"); // U+880D
assert.throws(() => {ms932Encoder.encode("\u8810")}, {name:"Error",message:"EncodingError U+8810"});
r = r && ([...ms932Encoder.encode("蠑")].join(",") === "229,188"); // U+8811
assert.throws(() => {ms932Encoder.encode("\u8812")}, {name:"Error",message:"EncodingError U+8812"});
assert.throws(() => {ms932Encoder.encode("\u8813")}, {name:"Error",message:"EncodingError U+8813"});
assert.throws(() => {ms932Encoder.encode("\u8814")}, {name:"Error",message:"EncodingError U+8814"});
r = r && ([...ms932Encoder.encode("蠕蠖")].join(",") === "229,190,229,189"); // U+8815
assert.throws(() => {ms932Encoder.encode("\u8817")}, {name:"Error",message:"EncodingError U+8817"});
assert.throws(() => {ms932Encoder.encode("\u8818")}, {name:"Error",message:"EncodingError U+8818"});
assert.throws(() => {ms932Encoder.encode("\u8819")}, {name:"Error",message:"EncodingError U+8819"});
assert.throws(() => {ms932Encoder.encode("\u881A")}, {name:"Error",message:"EncodingError U+881A"});
assert.throws(() => {ms932Encoder.encode("\u881B")}, {name:"Error",message:"EncodingError U+881B"});
assert.throws(() => {ms932Encoder.encode("\u881C")}, {name:"Error",message:"EncodingError U+881C"});
assert.throws(() => {ms932Encoder.encode("\u881D")}, {name:"Error",message:"EncodingError U+881D"});
assert.throws(() => {ms932Encoder.encode("\u881E")}, {name:"Error",message:"EncodingError U+881E"});
assert.throws(() => {ms932Encoder.encode("\u881F")}, {name:"Error",message:"EncodingError U+881F"});
assert.throws(() => {ms932Encoder.encode("\u8820")}, {name:"Error",message:"EncodingError U+8820"});
r = r && ([...ms932Encoder.encode("蠡蠢蠣")].join(",") === "229,192,229,191,229,121"); // U+8821
assert.throws(() => {ms932Encoder.encode("\u8824")}, {name:"Error",message:"EncodingError U+8824"});
assert.throws(() => {ms932Encoder.encode("\u8825")}, {name:"Error",message:"EncodingError U+8825"});
assert.throws(() => {ms932Encoder.encode("\u8826")}, {name:"Error",message:"EncodingError U+8826"});
r = r && ([...ms932Encoder.encode("蠧")].join(",") === "229,196"); // U+8827
assert.throws(() => {ms932Encoder.encode("\u8828")}, {name:"Error",message:"EncodingError U+8828"});
assert.throws(() => {ms932Encoder.encode("\u8829")}, {name:"Error",message:"EncodingError U+8829"});
assert.throws(() => {ms932Encoder.encode("\u882A")}, {name:"Error",message:"EncodingError U+882A"});
assert.throws(() => {ms932Encoder.encode("\u882B")}, {name:"Error",message:"EncodingError U+882B"});
assert.throws(() => {ms932Encoder.encode("\u882C")}, {name:"Error",message:"EncodingError U+882C"});
assert.throws(() => {ms932Encoder.encode("\u882D")}, {name:"Error",message:"EncodingError U+882D"});
assert.throws(() => {ms932Encoder.encode("\u882E")}, {name:"Error",message:"EncodingError U+882E"});
assert.throws(() => {ms932Encoder.encode("\u882F")}, {name:"Error",message:"EncodingError U+882F"});
assert.throws(() => {ms932Encoder.encode("\u8830")}, {name:"Error",message:"EncodingError U+8830"});
r = r && ([...ms932Encoder.encode("蠱")].join(",") === "229,193"); // U+8831
assert.throws(() => {ms932Encoder.encode("\u8832")}, {name:"Error",message:"EncodingError U+8832"});
assert.throws(() => {ms932Encoder.encode("\u8833")}, {name:"Error",message:"EncodingError U+8833"});
assert.throws(() => {ms932Encoder.encode("\u8834")}, {name:"Error",message:"EncodingError U+8834"});
assert.throws(() => {ms932Encoder.encode("\u8835")}, {name:"Error",message:"EncodingError U+8835"});
r = r && ([...ms932Encoder.encode("蠶")].join(",") === "229,194"); // U+8836
assert.throws(() => {ms932Encoder.encode("\u8837")}, {name:"Error",message:"EncodingError U+8837"});
assert.throws(() => {ms932Encoder.encode("\u8838")}, {name:"Error",message:"EncodingError U+8838"});
r = r && ([...ms932Encoder.encode("蠹")].join(",") === "229,195"); // U+8839
assert.throws(() => {ms932Encoder.encode("\u883A")}, {name:"Error",message:"EncodingError U+883A"});
r = r && ([...ms932Encoder.encode("蠻")].join(",") === "229,197"); // U+883B
assert.throws(() => {ms932Encoder.encode("\u883C")}, {name:"Error",message:"EncodingError U+883C"});
assert.throws(() => {ms932Encoder.encode("\u883D")}, {name:"Error",message:"EncodingError U+883D"});
assert.throws(() => {ms932Encoder.encode("\u883E")}, {name:"Error",message:"EncodingError U+883E"});
assert.throws(() => {ms932Encoder.encode("\u883F")}, {name:"Error",message:"EncodingError U+883F"});
r = r && ([...ms932Encoder.encode("血")].join(",") === "140,140"); // U+8840
assert.throws(() => {ms932Encoder.encode("\u8841")}, {name:"Error",message:"EncodingError U+8841"});
r = r && ([...ms932Encoder.encode("衂")].join(",") === "229,199"); // U+8842
assert.throws(() => {ms932Encoder.encode("\u8843")}, {name:"Error",message:"EncodingError U+8843"});
r = r && ([...ms932Encoder.encode("衄")].join(",") === "229,198"); // U+8844
assert.throws(() => {ms932Encoder.encode("\u8845")}, {name:"Error",message:"EncodingError U+8845"});
r = r && ([...ms932Encoder.encode("衆")].join(",") === "143,79"); // U+8846
assert.throws(() => {ms932Encoder.encode("\u8847")}, {name:"Error",message:"EncodingError U+8847"});
assert.throws(() => {ms932Encoder.encode("\u8848")}, {name:"Error",message:"EncodingError U+8848"});
assert.throws(() => {ms932Encoder.encode("\u8849")}, {name:"Error",message:"EncodingError U+8849"});
assert.throws(() => {ms932Encoder.encode("\u884A")}, {name:"Error",message:"EncodingError U+884A"});
assert.throws(() => {ms932Encoder.encode("\u884B")}, {name:"Error",message:"EncodingError U+884B"});
r = r && ([...ms932Encoder.encode("行衍")].join(",") === "141,115,159,165"); // U+884C
assert.throws(() => {ms932Encoder.encode("\u884E")}, {name:"Error",message:"EncodingError U+884E"});
assert.throws(() => {ms932Encoder.encode("\u884F")}, {name:"Error",message:"EncodingError U+884F"});
assert.throws(() => {ms932Encoder.encode("\u8850")}, {name:"Error",message:"EncodingError U+8850"});
assert.throws(() => {ms932Encoder.encode("\u8851")}, {name:"Error",message:"EncodingError U+8851"});
r = r && ([...ms932Encoder.encode("衒術")].join(",") === "229,200,143,112"); // U+8852
assert.throws(() => {ms932Encoder.encode("\u8854")}, {name:"Error",message:"EncodingError U+8854"});
assert.throws(() => {ms932Encoder.encode("\u8855")}, {name:"Error",message:"EncodingError U+8855"});
assert.throws(() => {ms932Encoder.encode("\u8856")}, {name:"Error",message:"EncodingError U+8856"});
r = r && ([...ms932Encoder.encode("街")].join(",") === "138,88"); // U+8857
assert.throws(() => {ms932Encoder.encode("\u8858")}, {name:"Error",message:"EncodingError U+8858"});
r = r && ([...ms932Encoder.encode("衙")].join(",") === "229,201"); // U+8859
assert.throws(() => {ms932Encoder.encode("\u885A")}, {name:"Error",message:"EncodingError U+885A"});
r = r && ([...ms932Encoder.encode("衛")].join(",") === "137,113"); // U+885B
assert.throws(() => {ms932Encoder.encode("\u885C")}, {name:"Error",message:"EncodingError U+885C"});
r = r && ([...ms932Encoder.encode("衝衞")].join(",") === "143,213,229,202"); // U+885D
assert.throws(() => {ms932Encoder.encode("\u885F")}, {name:"Error",message:"EncodingError U+885F"});
assert.throws(() => {ms932Encoder.encode("\u8860")}, {name:"Error",message:"EncodingError U+8860"});
r = r && ([...ms932Encoder.encode("衡衢衣")].join(",") === "141,116,229,203,136,223"); // U+8861
assert.throws(() => {ms932Encoder.encode("\u8864")}, {name:"Error",message:"EncodingError U+8864"});
assert.throws(() => {ms932Encoder.encode("\u8865")}, {name:"Error",message:"EncodingError U+8865"});
assert.throws(() => {ms932Encoder.encode("\u8866")}, {name:"Error",message:"EncodingError U+8866"});
assert.throws(() => {ms932Encoder.encode("\u8867")}, {name:"Error",message:"EncodingError U+8867"});
r = r && ([...ms932Encoder.encode("表")].join(",") === "149,92"); // U+8868
assert.throws(() => {ms932Encoder.encode("\u8869")}, {name:"Error",message:"EncodingError U+8869"});
assert.throws(() => {ms932Encoder.encode("\u886A")}, {name:"Error",message:"EncodingError U+886A"});
r = r && ([...ms932Encoder.encode("衫")].join(",") === "229,204"); // U+886B
assert.throws(() => {ms932Encoder.encode("\u886C")}, {name:"Error",message:"EncodingError U+886C"});
assert.throws(() => {ms932Encoder.encode("\u886D")}, {name:"Error",message:"EncodingError U+886D"});
assert.throws(() => {ms932Encoder.encode("\u886E")}, {name:"Error",message:"EncodingError U+886E"});
assert.throws(() => {ms932Encoder.encode("\u886F")}, {name:"Error",message:"EncodingError U+886F"});
r = r && ([...ms932Encoder.encode("衰")].join(",") === "144,138"); // U+8870
assert.throws(() => {ms932Encoder.encode("\u8871")}, {name:"Error",message:"EncodingError U+8871"});
r = r && ([...ms932Encoder.encode("衲")].join(",") === "229,211"); // U+8872
assert.throws(() => {ms932Encoder.encode("\u8873")}, {name:"Error",message:"EncodingError U+8873"});
assert.throws(() => {ms932Encoder.encode("\u8874")}, {name:"Error",message:"EncodingError U+8874"});
r = r && ([...ms932Encoder.encode("衵")].join(",") === "229,208"); // U+8875
assert.throws(() => {ms932Encoder.encode("\u8876")}, {name:"Error",message:"EncodingError U+8876"});
r = r && ([...ms932Encoder.encode("衷")].join(",") === "146,143"); // U+8877
assert.throws(() => {ms932Encoder.encode("\u8878")}, {name:"Error",message:"EncodingError U+8878"});
assert.throws(() => {ms932Encoder.encode("\u8879")}, {name:"Error",message:"EncodingError U+8879"});
assert.throws(() => {ms932Encoder.encode("\u887A")}, {name:"Error",message:"EncodingError U+887A"});
assert.throws(() => {ms932Encoder.encode("\u887B")}, {name:"Error",message:"EncodingError U+887B"});
assert.throws(() => {ms932Encoder.encode("\u887C")}, {name:"Error",message:"EncodingError U+887C"});
r = r && ([...ms932Encoder.encode("衽衾衿")].join(",") === "229,209,229,206,139,220"); // U+887D
assert.throws(() => {ms932Encoder.encode("\u8880")}, {name:"Error",message:"EncodingError U+8880"});
r = r && ([...ms932Encoder.encode("袁袂")].join(",") === "229,205,229,212"); // U+8881
assert.throws(() => {ms932Encoder.encode("\u8883")}, {name:"Error",message:"EncodingError U+8883"});
assert.throws(() => {ms932Encoder.encode("\u8884")}, {name:"Error",message:"EncodingError U+8884"});
assert.throws(() => {ms932Encoder.encode("\u8885")}, {name:"Error",message:"EncodingError U+8885"});
assert.throws(() => {ms932Encoder.encode("\u8886")}, {name:"Error",message:"EncodingError U+8886"});
assert.throws(() => {ms932Encoder.encode("\u8887")}, {name:"Error",message:"EncodingError U+8887"});
r = r && ([...ms932Encoder.encode("袈")].join(",") === "140,85"); // U+8888
assert.throws(() => {ms932Encoder.encode("\u8889")}, {name:"Error",message:"EncodingError U+8889"});
assert.throws(() => {ms932Encoder.encode("\u888A")}, {name:"Error",message:"EncodingError U+888A"});
r = r && ([...ms932Encoder.encode("袋")].join(",") === "145,220"); // U+888B
assert.throws(() => {ms932Encoder.encode("\u888C")}, {name:"Error",message:"EncodingError U+888C"});
r = r && ([...ms932Encoder.encode("袍")].join(",") === "229,218"); // U+888D
assert.throws(() => {ms932Encoder.encode("\u888E")}, {name:"Error",message:"EncodingError U+888E"});
assert.throws(() => {ms932Encoder.encode("\u888F")}, {name:"Error",message:"EncodingError U+888F"});
assert.throws(() => {ms932Encoder.encode("\u8890")}, {name:"Error",message:"EncodingError U+8890"});
assert.throws(() => {ms932Encoder.encode("\u8891")}, {name:"Error",message:"EncodingError U+8891"});
r = r && ([...ms932Encoder.encode("袒")].join(",") === "229,214"); // U+8892
assert.throws(() => {ms932Encoder.encode("\u8893")}, {name:"Error",message:"EncodingError U+8893"});
assert.throws(() => {ms932Encoder.encode("\u8894")}, {name:"Error",message:"EncodingError U+8894"});
assert.throws(() => {ms932Encoder.encode("\u8895")}, {name:"Error",message:"EncodingError U+8895"});
r = r && ([...ms932Encoder.encode("袖袗")].join(",") === "145,179,229,213"); // U+8896
assert.throws(() => {ms932Encoder.encode("\u8898")}, {name:"Error",message:"EncodingError U+8898"});
r = r && ([...ms932Encoder.encode("袙")].join(",") === "229,216"); // U+8899
assert.throws(() => {ms932Encoder.encode("\u889A")}, {name:"Error",message:"EncodingError U+889A"});
assert.throws(() => {ms932Encoder.encode("\u889B")}, {name:"Error",message:"EncodingError U+889B"});
assert.throws(() => {ms932Encoder.encode("\u889C")}, {name:"Error",message:"EncodingError U+889C"});
assert.throws(() => {ms932Encoder.encode("\u889D")}, {name:"Error",message:"EncodingError U+889D"});
r = r && ([...ms932Encoder.encode("袞")].join(",") === "229,207"); // U+889E
assert.throws(() => {ms932Encoder.encode("\u889F")}, {name:"Error",message:"EncodingError U+889F"});
assert.throws(() => {ms932Encoder.encode("\u88A0")}, {name:"Error",message:"EncodingError U+88A0"});
assert.throws(() => {ms932Encoder.encode("\u88A1")}, {name:"Error",message:"EncodingError U+88A1"});
r = r && ([...ms932Encoder.encode("袢")].join(",") === "229,217"); // U+88A2
assert.throws(() => {ms932Encoder.encode("\u88A3")}, {name:"Error",message:"EncodingError U+88A3"});
r = r && ([...ms932Encoder.encode("袤")].join(",") === "229,219"); // U+88A4
assert.throws(() => {ms932Encoder.encode("\u88A5")}, {name:"Error",message:"EncodingError U+88A5"});
assert.throws(() => {ms932Encoder.encode("\u88A6")}, {name:"Error",message:"EncodingError U+88A6"});
assert.throws(() => {ms932Encoder.encode("\u88A7")}, {name:"Error",message:"EncodingError U+88A7"});
assert.throws(() => {ms932Encoder.encode("\u88A8")}, {name:"Error",message:"EncodingError U+88A8"});
assert.throws(() => {ms932Encoder.encode("\u88A9")}, {name:"Error",message:"EncodingError U+88A9"});
assert.throws(() => {ms932Encoder.encode("\u88AA")}, {name:"Error",message:"EncodingError U+88AA"});
r = r && ([...ms932Encoder.encode("被")].join(",") === "148,237"); // U+88AB
assert.throws(() => {ms932Encoder.encode("\u88AC")}, {name:"Error",message:"EncodingError U+88AC"});
assert.throws(() => {ms932Encoder.encode("\u88AD")}, {name:"Error",message:"EncodingError U+88AD"});
r = r && ([...ms932Encoder.encode("袮")].join(",") === "229,215"); // U+88AE
assert.throws(() => {ms932Encoder.encode("\u88AF")}, {name:"Error",message:"EncodingError U+88AF"});
r = r && ([...ms932Encoder.encode("袰袱")].join(",") === "229,220,229,222"); // U+88B0
assert.throws(() => {ms932Encoder.encode("\u88B2")}, {name:"Error",message:"EncodingError U+88B2"});
assert.throws(() => {ms932Encoder.encode("\u88B3")}, {name:"Error",message:"EncodingError U+88B3"});
r = r && ([...ms932Encoder.encode("袴袵")].join(",") === "140,209,229,210"); // U+88B4
assert.throws(() => {ms932Encoder.encode("\u88B6")}, {name:"Error",message:"EncodingError U+88B6"});
r = r && ([...ms932Encoder.encode("袷")].join(",") === "136,191"); // U+88B7
assert.throws(() => {ms932Encoder.encode("\u88B8")}, {name:"Error",message:"EncodingError U+88B8"});
assert.throws(() => {ms932Encoder.encode("\u88B9")}, {name:"Error",message:"EncodingError U+88B9"});
assert.throws(() => {ms932Encoder.encode("\u88BA")}, {name:"Error",message:"EncodingError U+88BA"});
assert.throws(() => {ms932Encoder.encode("\u88BB")}, {name:"Error",message:"EncodingError U+88BB"});
assert.throws(() => {ms932Encoder.encode("\u88BC")}, {name:"Error",message:"EncodingError U+88BC"});
assert.throws(() => {ms932Encoder.encode("\u88BD")}, {name:"Error",message:"EncodingError U+88BD"});
assert.throws(() => {ms932Encoder.encode("\u88BE")}, {name:"Error",message:"EncodingError U+88BE"});
r = r && ([...ms932Encoder.encode("袿")].join(",") === "229,221"); // U+88BF
assert.throws(() => {ms932Encoder.encode("\u88C0")}, {name:"Error",message:"EncodingError U+88C0"});
r = r && ([...ms932Encoder.encode("裁裂裃裄装")].join(",") === "141,217,151,244,229,223,229,224,145,149"); // U+88C1
assert.throws(() => {ms932Encoder.encode("\u88C6")}, {name:"Error",message:"EncodingError U+88C6"});
assert.throws(() => {ms932Encoder.encode("\u88C7")}, {name:"Error",message:"EncodingError U+88C7"});
assert.throws(() => {ms932Encoder.encode("\u88C8")}, {name:"Error",message:"EncodingError U+88C8"});
assert.throws(() => {ms932Encoder.encode("\u88C9")}, {name:"Error",message:"EncodingError U+88C9"});
assert.throws(() => {ms932Encoder.encode("\u88CA")}, {name:"Error",message:"EncodingError U+88CA"});
assert.throws(() => {ms932Encoder.encode("\u88CB")}, {name:"Error",message:"EncodingError U+88CB"});
assert.throws(() => {ms932Encoder.encode("\u88CC")}, {name:"Error",message:"EncodingError U+88CC"});
assert.throws(() => {ms932Encoder.encode("\u88CD")}, {name:"Error",message:"EncodingError U+88CD"});
assert.throws(() => {ms932Encoder.encode("\u88CE")}, {name:"Error",message:"EncodingError U+88CE"});
r = r && ([...ms932Encoder.encode("裏")].join(",") === "151,160"); // U+88CF
assert.throws(() => {ms932Encoder.encode("\u88D0")}, {name:"Error",message:"EncodingError U+88D0"});
assert.throws(() => {ms932Encoder.encode("\u88D1")}, {name:"Error",message:"EncodingError U+88D1"});
assert.throws(() => {ms932Encoder.encode("\u88D2")}, {name:"Error",message:"EncodingError U+88D2"});
assert.throws(() => {ms932Encoder.encode("\u88D3")}, {name:"Error",message:"EncodingError U+88D3"});
r = r && ([...ms932Encoder.encode("裔裕")].join(",") === "229,225,151,84"); // U+88D4
assert.throws(() => {ms932Encoder.encode("\u88D6")}, {name:"Error",message:"EncodingError U+88D6"});
assert.throws(() => {ms932Encoder.encode("\u88D7")}, {name:"Error",message:"EncodingError U+88D7"});
r = r && ([...ms932Encoder.encode("裘裙")].join(",") === "229,226,229,227"); // U+88D8
assert.throws(() => {ms932Encoder.encode("\u88DA")}, {name:"Error",message:"EncodingError U+88DA"});
assert.throws(() => {ms932Encoder.encode("\u88DB")}, {name:"Error",message:"EncodingError U+88DB"});
r = r && ([...ms932Encoder.encode("補裝")].join(",") === "149,226,229,228"); // U+88DC
assert.throws(() => {ms932Encoder.encode("\u88DE")}, {name:"Error",message:"EncodingError U+88DE"});
r = r && ([...ms932Encoder.encode("裟")].join(",") === "141,190"); // U+88DF
assert.throws(() => {ms932Encoder.encode("\u88E0")}, {name:"Error",message:"EncodingError U+88E0"});
r = r && ([...ms932Encoder.encode("裡")].join(",") === "151,161"); // U+88E1
assert.throws(() => {ms932Encoder.encode("\u88E2")}, {name:"Error",message:"EncodingError U+88E2"});
assert.throws(() => {ms932Encoder.encode("\u88E3")}, {name:"Error",message:"EncodingError U+88E3"});
assert.throws(() => {ms932Encoder.encode("\u88E4")}, {name:"Error",message:"EncodingError U+88E4"});
assert.throws(() => {ms932Encoder.encode("\u88E5")}, {name:"Error",message:"EncodingError U+88E5"});
assert.throws(() => {ms932Encoder.encode("\u88E6")}, {name:"Error",message:"EncodingError U+88E6"});
assert.throws(() => {ms932Encoder.encode("\u88E7")}, {name:"Error",message:"EncodingError U+88E7"});
r = r && ([...ms932Encoder.encode("裨")].join(",") === "229,233"); // U+88E8
assert.throws(() => {ms932Encoder.encode("\u88E9")}, {name:"Error",message:"EncodingError U+88E9"});
assert.throws(() => {ms932Encoder.encode("\u88EA")}, {name:"Error",message:"EncodingError U+88EA"});
assert.throws(() => {ms932Encoder.encode("\u88EB")}, {name:"Error",message:"EncodingError U+88EB"});
assert.throws(() => {ms932Encoder.encode("\u88EC")}, {name:"Error",message:"EncodingError U+88EC"});
assert.throws(() => {ms932Encoder.encode("\u88ED")}, {name:"Error",message:"EncodingError U+88ED"});
assert.throws(() => {ms932Encoder.encode("\u88EE")}, {name:"Error",message:"EncodingError U+88EE"});
assert.throws(() => {ms932Encoder.encode("\u88EF")}, {name:"Error",message:"EncodingError U+88EF"});
assert.throws(() => {ms932Encoder.encode("\u88F0")}, {name:"Error",message:"EncodingError U+88F0"});
assert.throws(() => {ms932Encoder.encode("\u88F1")}, {name:"Error",message:"EncodingError U+88F1"});
r = r && ([...ms932Encoder.encode("裲裳裴裵")].join(",") === "229,234,143,214,229,232,251,162"); // U+88F2
assert.throws(() => {ms932Encoder.encode("\u88F6")}, {name:"Error",message:"EncodingError U+88F6"});
assert.throws(() => {ms932Encoder.encode("\u88F7")}, {name:"Error",message:"EncodingError U+88F7"});
r = r && ([...ms932Encoder.encode("裸裹")].join(",") === "151,135,229,229"); // U+88F8
assert.throws(() => {ms932Encoder.encode("\u88FA")}, {name:"Error",message:"EncodingError U+88FA"});
assert.throws(() => {ms932Encoder.encode("\u88FB")}, {name:"Error",message:"EncodingError U+88FB"});
r = r && ([...ms932Encoder.encode("裼製裾")].join(",") === "229,231,144,187,144,158"); // U+88FC
assert.throws(() => {ms932Encoder.encode("\u88FF")}, {name:"Error",message:"EncodingError U+88FF"});
assert.throws(() => {ms932Encoder.encode("\u8900")}, {name:"Error",message:"EncodingError U+8900"});
assert.throws(() => {ms932Encoder.encode("\u8901")}, {name:"Error",message:"EncodingError U+8901"});
r = r && ([...ms932Encoder.encode("褂")].join(",") === "229,230"); // U+8902
assert.throws(() => {ms932Encoder.encode("\u8903")}, {name:"Error",message:"EncodingError U+8903"});
r = r && ([...ms932Encoder.encode("褄")].join(",") === "229,235"); // U+8904
assert.throws(() => {ms932Encoder.encode("\u8905")}, {name:"Error",message:"EncodingError U+8905"});
assert.throws(() => {ms932Encoder.encode("\u8906")}, {name:"Error",message:"EncodingError U+8906"});
r = r && ([...ms932Encoder.encode("複")].join(",") === "149,161"); // U+8907
assert.throws(() => {ms932Encoder.encode("\u8908")}, {name:"Error",message:"EncodingError U+8908"});
assert.throws(() => {ms932Encoder.encode("\u8909")}, {name:"Error",message:"EncodingError U+8909"});
r = r && ([...ms932Encoder.encode("褊")].join(",") === "229,237"); // U+890A
assert.throws(() => {ms932Encoder.encode("\u890B")}, {name:"Error",message:"EncodingError U+890B"});
r = r && ([...ms932Encoder.encode("褌")].join(",") === "229,236"); // U+890C
assert.throws(() => {ms932Encoder.encode("\u890D")}, {name:"Error",message:"EncodingError U+890D"});
assert.throws(() => {ms932Encoder.encode("\u890E")}, {name:"Error",message:"EncodingError U+890E"});
assert.throws(() => {ms932Encoder.encode("\u890F")}, {name:"Error",message:"EncodingError U+890F"});
r = r && ([...ms932Encoder.encode("褐")].join(",") === "138,140"); // U+8910
assert.throws(() => {ms932Encoder.encode("\u8911")}, {name:"Error",message:"EncodingError U+8911"});
r = r && ([...ms932Encoder.encode("褒褓")].join(",") === "150,74,229,238"); // U+8912
assert.throws(() => {ms932Encoder.encode("\u8914")}, {name:"Error",message:"EncodingError U+8914"});
assert.throws(() => {ms932Encoder.encode("\u8915")}, {name:"Error",message:"EncodingError U+8915"});
assert.throws(() => {ms932Encoder.encode("\u8916")}, {name:"Error",message:"EncodingError U+8916"});
assert.throws(() => {ms932Encoder.encode("\u8917")}, {name:"Error",message:"EncodingError U+8917"});
assert.throws(() => {ms932Encoder.encode("\u8918")}, {name:"Error",message:"EncodingError U+8918"});
assert.throws(() => {ms932Encoder.encode("\u8919")}, {name:"Error",message:"EncodingError U+8919"});
assert.throws(() => {ms932Encoder.encode("\u891A")}, {name:"Error",message:"EncodingError U+891A"});
assert.throws(() => {ms932Encoder.encode("\u891B")}, {name:"Error",message:"EncodingError U+891B"});
r = r && ([...ms932Encoder.encode("褜褝褞")].join(",") === "250,93,229,250,229,240"); // U+891C
assert.throws(() => {ms932Encoder.encode("\u891F")}, {name:"Error",message:"EncodingError U+891F"});
assert.throws(() => {ms932Encoder.encode("\u8920")}, {name:"Error",message:"EncodingError U+8920"});
assert.throws(() => {ms932Encoder.encode("\u8921")}, {name:"Error",message:"EncodingError U+8921"});
assert.throws(() => {ms932Encoder.encode("\u8922")}, {name:"Error",message:"EncodingError U+8922"});
assert.throws(() => {ms932Encoder.encode("\u8923")}, {name:"Error",message:"EncodingError U+8923"});
assert.throws(() => {ms932Encoder.encode("\u8924")}, {name:"Error",message:"EncodingError U+8924"});
r = r && ([...ms932Encoder.encode("褥")].join(",") === "229,241"); // U+8925
assert.throws(() => {ms932Encoder.encode("\u8926")}, {name:"Error",message:"EncodingError U+8926"});
assert.throws(() => {ms932Encoder.encode("\u8927")}, {name:"Error",message:"EncodingError U+8927"});
assert.throws(() => {ms932Encoder.encode("\u8928")}, {name:"Error",message:"EncodingError U+8928"});
assert.throws(() => {ms932Encoder.encode("\u8929")}, {name:"Error",message:"EncodingError U+8929"});
r = r && ([...ms932Encoder.encode("褪褫")].join(",") === "229,242,229,243"); // U+892A
assert.throws(() => {ms932Encoder.encode("\u892C")}, {name:"Error",message:"EncodingError U+892C"});
assert.throws(() => {ms932Encoder.encode("\u892D")}, {name:"Error",message:"EncodingError U+892D"});
assert.throws(() => {ms932Encoder.encode("\u892E")}, {name:"Error",message:"EncodingError U+892E"});
assert.throws(() => {ms932Encoder.encode("\u892F")}, {name:"Error",message:"EncodingError U+892F"});
assert.throws(() => {ms932Encoder.encode("\u8930")}, {name:"Error",message:"EncodingError U+8930"});
assert.throws(() => {ms932Encoder.encode("\u8931")}, {name:"Error",message:"EncodingError U+8931"});
assert.throws(() => {ms932Encoder.encode("\u8932")}, {name:"Error",message:"EncodingError U+8932"});
assert.throws(() => {ms932Encoder.encode("\u8933")}, {name:"Error",message:"EncodingError U+8933"});
assert.throws(() => {ms932Encoder.encode("\u8934")}, {name:"Error",message:"EncodingError U+8934"});
assert.throws(() => {ms932Encoder.encode("\u8935")}, {name:"Error",message:"EncodingError U+8935"});
r = r && ([...ms932Encoder.encode("褶")].join(",") === "229,247"); // U+8936
assert.throws(() => {ms932Encoder.encode("\u8937")}, {name:"Error",message:"EncodingError U+8937"});
r = r && ([...ms932Encoder.encode("褸")].join(",") === "229,248"); // U+8938
assert.throws(() => {ms932Encoder.encode("\u8939")}, {name:"Error",message:"EncodingError U+8939"});
assert.throws(() => {ms932Encoder.encode("\u893A")}, {name:"Error",message:"EncodingError U+893A"});
r = r && ([...ms932Encoder.encode("褻")].join(",") === "229,246"); // U+893B
assert.throws(() => {ms932Encoder.encode("\u893C")}, {name:"Error",message:"EncodingError U+893C"});
assert.throws(() => {ms932Encoder.encode("\u893D")}, {name:"Error",message:"EncodingError U+893D"});
assert.throws(() => {ms932Encoder.encode("\u893E")}, {name:"Error",message:"EncodingError U+893E"});
assert.throws(() => {ms932Encoder.encode("\u893F")}, {name:"Error",message:"EncodingError U+893F"});
assert.throws(() => {ms932Encoder.encode("\u8940")}, {name:"Error",message:"EncodingError U+8940"});
r = r && ([...ms932Encoder.encode("襁")].join(",") === "229,244"); // U+8941
assert.throws(() => {ms932Encoder.encode("\u8942")}, {name:"Error",message:"EncodingError U+8942"});
r = r && ([...ms932Encoder.encode("襃襄")].join(",") === "229,239,229,245"); // U+8943
assert.throws(() => {ms932Encoder.encode("\u8945")}, {name:"Error",message:"EncodingError U+8945"});
assert.throws(() => {ms932Encoder.encode("\u8946")}, {name:"Error",message:"EncodingError U+8946"});
assert.throws(() => {ms932Encoder.encode("\u8947")}, {name:"Error",message:"EncodingError U+8947"});
assert.throws(() => {ms932Encoder.encode("\u8948")}, {name:"Error",message:"EncodingError U+8948"});
assert.throws(() => {ms932Encoder.encode("\u8949")}, {name:"Error",message:"EncodingError U+8949"});
assert.throws(() => {ms932Encoder.encode("\u894A")}, {name:"Error",message:"EncodingError U+894A"});
assert.throws(() => {ms932Encoder.encode("\u894B")}, {name:"Error",message:"EncodingError U+894B"});
r = r && ([...ms932Encoder.encode("襌襍")].join(",") === "229,249,232,181"); // U+894C
assert.throws(() => {ms932Encoder.encode("\u894E")}, {name:"Error",message:"EncodingError U+894E"});
assert.throws(() => {ms932Encoder.encode("\u894F")}, {name:"Error",message:"EncodingError U+894F"});
assert.throws(() => {ms932Encoder.encode("\u8950")}, {name:"Error",message:"EncodingError U+8950"});
assert.throws(() => {ms932Encoder.encode("\u8951")}, {name:"Error",message:"EncodingError U+8951"});
assert.throws(() => {ms932Encoder.encode("\u8952")}, {name:"Error",message:"EncodingError U+8952"});
assert.throws(() => {ms932Encoder.encode("\u8953")}, {name:"Error",message:"EncodingError U+8953"});
assert.throws(() => {ms932Encoder.encode("\u8954")}, {name:"Error",message:"EncodingError U+8954"});
assert.throws(() => {ms932Encoder.encode("\u8955")}, {name:"Error",message:"EncodingError U+8955"});
r = r && ([...ms932Encoder.encode("襖")].join(",") === "137,166"); // U+8956
assert.throws(() => {ms932Encoder.encode("\u8957")}, {name:"Error",message:"EncodingError U+8957"});
assert.throws(() => {ms932Encoder.encode("\u8958")}, {name:"Error",message:"EncodingError U+8958"});
assert.throws(() => {ms932Encoder.encode("\u8959")}, {name:"Error",message:"EncodingError U+8959"});
assert.throws(() => {ms932Encoder.encode("\u895A")}, {name:"Error",message:"EncodingError U+895A"});
assert.throws(() => {ms932Encoder.encode("\u895B")}, {name:"Error",message:"EncodingError U+895B"});
assert.throws(() => {ms932Encoder.encode("\u895C")}, {name:"Error",message:"EncodingError U+895C"});
assert.throws(() => {ms932Encoder.encode("\u895D")}, {name:"Error",message:"EncodingError U+895D"});
r = r && ([...ms932Encoder.encode("襞襟襠")].join(",") === "229,252,139,221,229,251"); // U+895E
assert.throws(() => {ms932Encoder.encode("\u8961")}, {name:"Error",message:"EncodingError U+8961"});
assert.throws(() => {ms932Encoder.encode("\u8962")}, {name:"Error",message:"EncodingError U+8962"});
assert.throws(() => {ms932Encoder.encode("\u8963")}, {name:"Error",message:"EncodingError U+8963"});
r = r && ([...ms932Encoder.encode("襤")].join(",") === "230,65"); // U+8964
assert.throws(() => {ms932Encoder.encode("\u8965")}, {name:"Error",message:"EncodingError U+8965"});
r = r && ([...ms932Encoder.encode("襦")].join(",") === "230,64"); // U+8966
assert.throws(() => {ms932Encoder.encode("\u8967")}, {name:"Error",message:"EncodingError U+8967"});
assert.throws(() => {ms932Encoder.encode("\u8968")}, {name:"Error",message:"EncodingError U+8968"});
assert.throws(() => {ms932Encoder.encode("\u8969")}, {name:"Error",message:"EncodingError U+8969"});
r = r && ([...ms932Encoder.encode("襪")].join(",") === "230,67"); // U+896A
assert.throws(() => {ms932Encoder.encode("\u896B")}, {name:"Error",message:"EncodingError U+896B"});
assert.throws(() => {ms932Encoder.encode("\u896C")}, {name:"Error",message:"EncodingError U+896C"});
r = r && ([...ms932Encoder.encode("襭")].join(",") === "230,66"); // U+896D
assert.throws(() => {ms932Encoder.encode("\u896E")}, {name:"Error",message:"EncodingError U+896E"});
r = r && ([...ms932Encoder.encode("襯")].join(",") === "230,68"); // U+896F
assert.throws(() => {ms932Encoder.encode("\u8970")}, {name:"Error",message:"EncodingError U+8970"});
assert.throws(() => {ms932Encoder.encode("\u8971")}, {name:"Error",message:"EncodingError U+8971"});
r = r && ([...ms932Encoder.encode("襲")].join(",") === "143,80"); // U+8972
assert.throws(() => {ms932Encoder.encode("\u8973")}, {name:"Error",message:"EncodingError U+8973"});
r = r && ([...ms932Encoder.encode("襴")].join(",") === "230,69"); // U+8974
assert.throws(() => {ms932Encoder.encode("\u8975")}, {name:"Error",message:"EncodingError U+8975"});
assert.throws(() => {ms932Encoder.encode("\u8976")}, {name:"Error",message:"EncodingError U+8976"});
r = r && ([...ms932Encoder.encode("襷")].join(",") === "230,70"); // U+8977
assert.throws(() => {ms932Encoder.encode("\u8978")}, {name:"Error",message:"EncodingError U+8978"});
assert.throws(() => {ms932Encoder.encode("\u8979")}, {name:"Error",message:"EncodingError U+8979"});
assert.throws(() => {ms932Encoder.encode("\u897A")}, {name:"Error",message:"EncodingError U+897A"});
assert.throws(() => {ms932Encoder.encode("\u897B")}, {name:"Error",message:"EncodingError U+897B"});
assert.throws(() => {ms932Encoder.encode("\u897C")}, {name:"Error",message:"EncodingError U+897C"});
assert.throws(() => {ms932Encoder.encode("\u897D")}, {name:"Error",message:"EncodingError U+897D"});
r = r && ([...ms932Encoder.encode("襾西")].join(",") === "230,71,144,188"); // U+897E
assert.throws(() => {ms932Encoder.encode("\u8980")}, {name:"Error",message:"EncodingError U+8980"});
r = r && ([...ms932Encoder.encode("要")].join(",") === "151,118"); // U+8981
assert.throws(() => {ms932Encoder.encode("\u8982")}, {name:"Error",message:"EncodingError U+8982"});
r = r && ([...ms932Encoder.encode("覃")].join(",") === "230,72"); // U+8983
assert.throws(() => {ms932Encoder.encode("\u8984")}, {name:"Error",message:"EncodingError U+8984"});
assert.throws(() => {ms932Encoder.encode("\u8985")}, {name:"Error",message:"EncodingError U+8985"});
r = r && ([...ms932Encoder.encode("覆覇覈")].join(",") === "149,162,148,101,230,73"); // U+8986
assert.throws(() => {ms932Encoder.encode("\u8989")}, {name:"Error",message:"EncodingError U+8989"});
r = r && ([...ms932Encoder.encode("覊見")].join(",") === "230,74,140,169"); // U+898A
assert.throws(() => {ms932Encoder.encode("\u898C")}, {name:"Error",message:"EncodingError U+898C"});
assert.throws(() => {ms932Encoder.encode("\u898D")}, {name:"Error",message:"EncodingError U+898D"});
assert.throws(() => {ms932Encoder.encode("\u898E")}, {name:"Error",message:"EncodingError U+898E"});
r = r && ([...ms932Encoder.encode("規")].join(",") === "139,75"); // U+898F
assert.throws(() => {ms932Encoder.encode("\u8990")}, {name:"Error",message:"EncodingError U+8990"});
assert.throws(() => {ms932Encoder.encode("\u8991")}, {name:"Error",message:"EncodingError U+8991"});
assert.throws(() => {ms932Encoder.encode("\u8992")}, {name:"Error",message:"EncodingError U+8992"});
r = r && ([...ms932Encoder.encode("覓")].join(",") === "230,75"); // U+8993
assert.throws(() => {ms932Encoder.encode("\u8994")}, {name:"Error",message:"EncodingError U+8994"});
assert.throws(() => {ms932Encoder.encode("\u8995")}, {name:"Error",message:"EncodingError U+8995"});
r = r && ([...ms932Encoder.encode("視覗覘")].join(",") === "142,139,148,96,230,76"); // U+8996
assert.throws(() => {ms932Encoder.encode("\u8999")}, {name:"Error",message:"EncodingError U+8999"});
r = r && ([...ms932Encoder.encode("覚")].join(",") === "138,111"); // U+899A
assert.throws(() => {ms932Encoder.encode("\u899B")}, {name:"Error",message:"EncodingError U+899B"});
assert.throws(() => {ms932Encoder.encode("\u899C")}, {name:"Error",message:"EncodingError U+899C"});
assert.throws(() => {ms932Encoder.encode("\u899D")}, {name:"Error",message:"EncodingError U+899D"});
assert.throws(() => {ms932Encoder.encode("\u899E")}, {name:"Error",message:"EncodingError U+899E"});
assert.throws(() => {ms932Encoder.encode("\u899F")}, {name:"Error",message:"EncodingError U+899F"});
assert.throws(() => {ms932Encoder.encode("\u89A0")}, {name:"Error",message:"EncodingError U+89A0"});
r = r && ([...ms932Encoder.encode("覡")].join(",") === "230,77"); // U+89A1
assert.throws(() => {ms932Encoder.encode("\u89A2")}, {name:"Error",message:"EncodingError U+89A2"});
assert.throws(() => {ms932Encoder.encode("\u89A3")}, {name:"Error",message:"EncodingError U+89A3"});
assert.throws(() => {ms932Encoder.encode("\u89A4")}, {name:"Error",message:"EncodingError U+89A4"});
assert.throws(() => {ms932Encoder.encode("\u89A5")}, {name:"Error",message:"EncodingError U+89A5"});
r = r && ([...ms932Encoder.encode("覦覧")].join(",") === "230,79,151,151"); // U+89A6
assert.throws(() => {ms932Encoder.encode("\u89A8")}, {name:"Error",message:"EncodingError U+89A8"});
r = r && ([...ms932Encoder.encode("覩親")].join(",") === "230,78,144,101"); // U+89A9
assert.throws(() => {ms932Encoder.encode("\u89AB")}, {name:"Error",message:"EncodingError U+89AB"});
r = r && ([...ms932Encoder.encode("覬")].join(",") === "230,80"); // U+89AC
assert.throws(() => {ms932Encoder.encode("\u89AD")}, {name:"Error",message:"EncodingError U+89AD"});
assert.throws(() => {ms932Encoder.encode("\u89AE")}, {name:"Error",message:"EncodingError U+89AE"});
r = r && ([...ms932Encoder.encode("覯")].join(",") === "230,81"); // U+89AF
assert.throws(() => {ms932Encoder.encode("\u89B0")}, {name:"Error",message:"EncodingError U+89B0"});
assert.throws(() => {ms932Encoder.encode("\u89B1")}, {name:"Error",message:"EncodingError U+89B1"});
r = r && ([...ms932Encoder.encode("覲観")].join(",") === "230,82,138,207"); // U+89B2
assert.throws(() => {ms932Encoder.encode("\u89B4")}, {name:"Error",message:"EncodingError U+89B4"});
assert.throws(() => {ms932Encoder.encode("\u89B5")}, {name:"Error",message:"EncodingError U+89B5"});
assert.throws(() => {ms932Encoder.encode("\u89B6")}, {name:"Error",message:"EncodingError U+89B6"});
assert.throws(() => {ms932Encoder.encode("\u89B7")}, {name:"Error",message:"EncodingError U+89B7"});
assert.throws(() => {ms932Encoder.encode("\u89B8")}, {name:"Error",message:"EncodingError U+89B8"});
assert.throws(() => {ms932Encoder.encode("\u89B9")}, {name:"Error",message:"EncodingError U+89B9"});
r = r && ([...ms932Encoder.encode("覺")].join(",") === "230,83"); // U+89BA
assert.throws(() => {ms932Encoder.encode("\u89BB")}, {name:"Error",message:"EncodingError U+89BB"});
assert.throws(() => {ms932Encoder.encode("\u89BC")}, {name:"Error",message:"EncodingError U+89BC"});
r = r && ([...ms932Encoder.encode("覽")].join(",") === "230,84"); // U+89BD
assert.throws(() => {ms932Encoder.encode("\u89BE")}, {name:"Error",message:"EncodingError U+89BE"});
r = r && ([...ms932Encoder.encode("覿觀")].join(",") === "230,85,230,86"); // U+89BF
assert.throws(() => {ms932Encoder.encode("\u89C1")}, {name:"Error",message:"EncodingError U+89C1"});
assert.throws(() => {ms932Encoder.encode("\u89C2")}, {name:"Error",message:"EncodingError U+89C2"});
assert.throws(() => {ms932Encoder.encode("\u89C3")}, {name:"Error",message:"EncodingError U+89C3"});
assert.throws(() => {ms932Encoder.encode("\u89C4")}, {name:"Error",message:"EncodingError U+89C4"});
assert.throws(() => {ms932Encoder.encode("\u89C5")}, {name:"Error",message:"EncodingError U+89C5"});
assert.throws(() => {ms932Encoder.encode("\u89C6")}, {name:"Error",message:"EncodingError U+89C6"});
assert.throws(() => {ms932Encoder.encode("\u89C7")}, {name:"Error",message:"EncodingError U+89C7"});
assert.throws(() => {ms932Encoder.encode("\u89C8")}, {name:"Error",message:"EncodingError U+89C8"});
assert.throws(() => {ms932Encoder.encode("\u89C9")}, {name:"Error",message:"EncodingError U+89C9"});
assert.throws(() => {ms932Encoder.encode("\u89CA")}, {name:"Error",message:"EncodingError U+89CA"});
assert.throws(() => {ms932Encoder.encode("\u89CB")}, {name:"Error",message:"EncodingError U+89CB"});
assert.throws(() => {ms932Encoder.encode("\u89CC")}, {name:"Error",message:"EncodingError U+89CC"});
assert.throws(() => {ms932Encoder.encode("\u89CD")}, {name:"Error",message:"EncodingError U+89CD"});
assert.throws(() => {ms932Encoder.encode("\u89CE")}, {name:"Error",message:"EncodingError U+89CE"});
assert.throws(() => {ms932Encoder.encode("\u89CF")}, {name:"Error",message:"EncodingError U+89CF"});
assert.throws(() => {ms932Encoder.encode("\u89D0")}, {name:"Error",message:"EncodingError U+89D0"});
assert.throws(() => {ms932Encoder.encode("\u89D1")}, {name:"Error",message:"EncodingError U+89D1"});
r = r && ([...ms932Encoder.encode("角")].join(",") === "138,112"); // U+89D2
assert.throws(() => {ms932Encoder.encode("\u89D3")}, {name:"Error",message:"EncodingError U+89D3"});
assert.throws(() => {ms932Encoder.encode("\u89D4")}, {name:"Error",message:"EncodingError U+89D4"});
assert.throws(() => {ms932Encoder.encode("\u89D5")}, {name:"Error",message:"EncodingError U+89D5"});
assert.throws(() => {ms932Encoder.encode("\u89D6")}, {name:"Error",message:"EncodingError U+89D6"});
assert.throws(() => {ms932Encoder.encode("\u89D7")}, {name:"Error",message:"EncodingError U+89D7"});
assert.throws(() => {ms932Encoder.encode("\u89D8")}, {name:"Error",message:"EncodingError U+89D8"});
assert.throws(() => {ms932Encoder.encode("\u89D9")}, {name:"Error",message:"EncodingError U+89D9"});
r = r && ([...ms932Encoder.encode("觚")].join(",") === "230,87"); // U+89DA
assert.throws(() => {ms932Encoder.encode("\u89DB")}, {name:"Error",message:"EncodingError U+89DB"});
r = r && ([...ms932Encoder.encode("觜觝")].join(",") === "230,88,230,89"); // U+89DC
assert.throws(() => {ms932Encoder.encode("\u89DE")}, {name:"Error",message:"EncodingError U+89DE"});
assert.throws(() => {ms932Encoder.encode("\u89DF")}, {name:"Error",message:"EncodingError U+89DF"});
assert.throws(() => {ms932Encoder.encode("\u89E0")}, {name:"Error",message:"EncodingError U+89E0"});
assert.throws(() => {ms932Encoder.encode("\u89E1")}, {name:"Error",message:"EncodingError U+89E1"});
assert.throws(() => {ms932Encoder.encode("\u89E2")}, {name:"Error",message:"EncodingError U+89E2"});
r = r && ([...ms932Encoder.encode("解")].join(",") === "137,240"); // U+89E3
assert.throws(() => {ms932Encoder.encode("\u89E4")}, {name:"Error",message:"EncodingError U+89E4"});
assert.throws(() => {ms932Encoder.encode("\u89E5")}, {name:"Error",message:"EncodingError U+89E5"});
r = r && ([...ms932Encoder.encode("触觧")].join(",") === "144,71,230,90"); // U+89E6
assert.throws(() => {ms932Encoder.encode("\u89E8")}, {name:"Error",message:"EncodingError U+89E8"});
assert.throws(() => {ms932Encoder.encode("\u89E9")}, {name:"Error",message:"EncodingError U+89E9"});
assert.throws(() => {ms932Encoder.encode("\u89EA")}, {name:"Error",message:"EncodingError U+89EA"});
assert.throws(() => {ms932Encoder.encode("\u89EB")}, {name:"Error",message:"EncodingError U+89EB"});
assert.throws(() => {ms932Encoder.encode("\u89EC")}, {name:"Error",message:"EncodingError U+89EC"});
assert.throws(() => {ms932Encoder.encode("\u89ED")}, {name:"Error",message:"EncodingError U+89ED"});
assert.throws(() => {ms932Encoder.encode("\u89EE")}, {name:"Error",message:"EncodingError U+89EE"});
assert.throws(() => {ms932Encoder.encode("\u89EF")}, {name:"Error",message:"EncodingError U+89EF"});
assert.throws(() => {ms932Encoder.encode("\u89F0")}, {name:"Error",message:"EncodingError U+89F0"});
assert.throws(() => {ms932Encoder.encode("\u89F1")}, {name:"Error",message:"EncodingError U+89F1"});
assert.throws(() => {ms932Encoder.encode("\u89F2")}, {name:"Error",message:"EncodingError U+89F2"});
assert.throws(() => {ms932Encoder.encode("\u89F3")}, {name:"Error",message:"EncodingError U+89F3"});
r = r && ([...ms932Encoder.encode("觴")].join(",") === "230,91"); // U+89F4
assert.throws(() => {ms932Encoder.encode("\u89F5")}, {name:"Error",message:"EncodingError U+89F5"});
assert.throws(() => {ms932Encoder.encode("\u89F6")}, {name:"Error",message:"EncodingError U+89F6"});
assert.throws(() => {ms932Encoder.encode("\u89F7")}, {name:"Error",message:"EncodingError U+89F7"});
r = r && ([...ms932Encoder.encode("觸")].join(",") === "230,92"); // U+89F8
assert.throws(() => {ms932Encoder.encode("\u89F9")}, {name:"Error",message:"EncodingError U+89F9"});
assert.throws(() => {ms932Encoder.encode("\u89FA")}, {name:"Error",message:"EncodingError U+89FA"});
assert.throws(() => {ms932Encoder.encode("\u89FB")}, {name:"Error",message:"EncodingError U+89FB"});
assert.throws(() => {ms932Encoder.encode("\u89FC")}, {name:"Error",message:"EncodingError U+89FC"});
assert.throws(() => {ms932Encoder.encode("\u89FD")}, {name:"Error",message:"EncodingError U+89FD"});
assert.throws(() => {ms932Encoder.encode("\u89FE")}, {name:"Error",message:"EncodingError U+89FE"});
assert.throws(() => {ms932Encoder.encode("\u89FF")}, {name:"Error",message:"EncodingError U+89FF"});
r = r && ([...ms932Encoder.encode("言")].join(",") === "140,190"); // U+8A00
assert.throws(() => {ms932Encoder.encode("\u8A01")}, {name:"Error",message:"EncodingError U+8A01"});
r = r && ([...ms932Encoder.encode("訂訃")].join(",") === "146,249,230,93"); // U+8A02
assert.throws(() => {ms932Encoder.encode("\u8A04")}, {name:"Error",message:"EncodingError U+8A04"});
assert.throws(() => {ms932Encoder.encode("\u8A05")}, {name:"Error",message:"EncodingError U+8A05"});
assert.throws(() => {ms932Encoder.encode("\u8A06")}, {name:"Error",message:"EncodingError U+8A06"});
assert.throws(() => {ms932Encoder.encode("\u8A07")}, {name:"Error",message:"EncodingError U+8A07"});
r = r && ([...ms932Encoder.encode("計")].join(",") === "140,118"); // U+8A08
assert.throws(() => {ms932Encoder.encode("\u8A09")}, {name:"Error",message:"EncodingError U+8A09"});
r = r && ([...ms932Encoder.encode("訊")].join(",") === "144,117"); // U+8A0A
assert.throws(() => {ms932Encoder.encode("\u8A0B")}, {name:"Error",message:"EncodingError U+8A0B"});
r = r && ([...ms932Encoder.encode("訌")].join(",") === "230,96"); // U+8A0C
assert.throws(() => {ms932Encoder.encode("\u8A0D")}, {name:"Error",message:"EncodingError U+8A0D"});
r = r && ([...ms932Encoder.encode("討")].join(",") === "147,162"); // U+8A0E
assert.throws(() => {ms932Encoder.encode("\u8A0F")}, {name:"Error",message:"EncodingError U+8A0F"});
r = r && ([...ms932Encoder.encode("訐")].join(",") === "230,95"); // U+8A10
assert.throws(() => {ms932Encoder.encode("\u8A11")}, {name:"Error",message:"EncodingError U+8A11"});
r = r && ([...ms932Encoder.encode("訒訓")].join(",") === "251,163,140,80"); // U+8A12
assert.throws(() => {ms932Encoder.encode("\u8A14")}, {name:"Error",message:"EncodingError U+8A14"});
assert.throws(() => {ms932Encoder.encode("\u8A15")}, {name:"Error",message:"EncodingError U+8A15"});
r = r && ([...ms932Encoder.encode("訖託記")].join(",") === "230,94,145,245,139,76"); // U+8A16
assert.throws(() => {ms932Encoder.encode("\u8A19")}, {name:"Error",message:"EncodingError U+8A19"});
assert.throws(() => {ms932Encoder.encode("\u8A1A")}, {name:"Error",message:"EncodingError U+8A1A"});
r = r && ([...ms932Encoder.encode("訛")].join(",") === "230,97"); // U+8A1B
assert.throws(() => {ms932Encoder.encode("\u8A1C")}, {name:"Error",message:"EncodingError U+8A1C"});
r = r && ([...ms932Encoder.encode("訝")].join(",") === "230,98"); // U+8A1D
assert.throws(() => {ms932Encoder.encode("\u8A1E")}, {name:"Error",message:"EncodingError U+8A1E"});
r = r && ([...ms932Encoder.encode("訟")].join(",") === "143,215"); // U+8A1F
assert.throws(() => {ms932Encoder.encode("\u8A20")}, {name:"Error",message:"EncodingError U+8A20"});
assert.throws(() => {ms932Encoder.encode("\u8A21")}, {name:"Error",message:"EncodingError U+8A21"});
assert.throws(() => {ms932Encoder.encode("\u8A22")}, {name:"Error",message:"EncodingError U+8A22"});
r = r && ([...ms932Encoder.encode("訣")].join(",") === "140,141"); // U+8A23
assert.throws(() => {ms932Encoder.encode("\u8A24")}, {name:"Error",message:"EncodingError U+8A24"});
r = r && ([...ms932Encoder.encode("訥")].join(",") === "230,99"); // U+8A25
assert.throws(() => {ms932Encoder.encode("\u8A26")}, {name:"Error",message:"EncodingError U+8A26"});
assert.throws(() => {ms932Encoder.encode("\u8A27")}, {name:"Error",message:"EncodingError U+8A27"});
assert.throws(() => {ms932Encoder.encode("\u8A28")}, {name:"Error",message:"EncodingError U+8A28"});
assert.throws(() => {ms932Encoder.encode("\u8A29")}, {name:"Error",message:"EncodingError U+8A29"});
r = r && ([...ms932Encoder.encode("訪")].join(",") === "150,75"); // U+8A2A
assert.throws(() => {ms932Encoder.encode("\u8A2B")}, {name:"Error",message:"EncodingError U+8A2B"});
assert.throws(() => {ms932Encoder.encode("\u8A2C")}, {name:"Error",message:"EncodingError U+8A2C"});
r = r && ([...ms932Encoder.encode("設")].join(",") === "144,221"); // U+8A2D
assert.throws(() => {ms932Encoder.encode("\u8A2E")}, {name:"Error",message:"EncodingError U+8A2E"});
assert.throws(() => {ms932Encoder.encode("\u8A2F")}, {name:"Error",message:"EncodingError U+8A2F"});
assert.throws(() => {ms932Encoder.encode("\u8A30")}, {name:"Error",message:"EncodingError U+8A30"});
r = r && ([...ms932Encoder.encode("許")].join(",") === "139,150"); // U+8A31
assert.throws(() => {ms932Encoder.encode("\u8A32")}, {name:"Error",message:"EncodingError U+8A32"});
r = r && ([...ms932Encoder.encode("訳訴")].join(",") === "150,243,145,105"); // U+8A33
assert.throws(() => {ms932Encoder.encode("\u8A35")}, {name:"Error",message:"EncodingError U+8A35"});
r = r && ([...ms932Encoder.encode("訶訷")].join(",") === "230,100,251,164"); // U+8A36
assert.throws(() => {ms932Encoder.encode("\u8A38")}, {name:"Error",message:"EncodingError U+8A38"});
assert.throws(() => {ms932Encoder.encode("\u8A39")}, {name:"Error",message:"EncodingError U+8A39"});
r = r && ([...ms932Encoder.encode("診註証")].join(",") === "144,102,146,144,143,216"); // U+8A3A
assert.throws(() => {ms932Encoder.encode("\u8A3D")}, {name:"Error",message:"EncodingError U+8A3D"});
assert.throws(() => {ms932Encoder.encode("\u8A3E")}, {name:"Error",message:"EncodingError U+8A3E"});
assert.throws(() => {ms932Encoder.encode("\u8A3F")}, {name:"Error",message:"EncodingError U+8A3F"});
assert.throws(() => {ms932Encoder.encode("\u8A40")}, {name:"Error",message:"EncodingError U+8A40"});
r = r && ([...ms932Encoder.encode("詁")].join(",") === "230,101"); // U+8A41
assert.throws(() => {ms932Encoder.encode("\u8A42")}, {name:"Error",message:"EncodingError U+8A42"});
assert.throws(() => {ms932Encoder.encode("\u8A43")}, {name:"Error",message:"EncodingError U+8A43"});
assert.throws(() => {ms932Encoder.encode("\u8A44")}, {name:"Error",message:"EncodingError U+8A44"});
assert.throws(() => {ms932Encoder.encode("\u8A45")}, {name:"Error",message:"EncodingError U+8A45"});
r = r && ([...ms932Encoder.encode("詆")].join(",") === "230,104"); // U+8A46
assert.throws(() => {ms932Encoder.encode("\u8A47")}, {name:"Error",message:"EncodingError U+8A47"});
r = r && ([...ms932Encoder.encode("詈")].join(",") === "230,105"); // U+8A48
assert.throws(() => {ms932Encoder.encode("\u8A49")}, {name:"Error",message:"EncodingError U+8A49"});
assert.throws(() => {ms932Encoder.encode("\u8A4A")}, {name:"Error",message:"EncodingError U+8A4A"});
assert.throws(() => {ms932Encoder.encode("\u8A4B")}, {name:"Error",message:"EncodingError U+8A4B"});
assert.throws(() => {ms932Encoder.encode("\u8A4C")}, {name:"Error",message:"EncodingError U+8A4C"});
assert.throws(() => {ms932Encoder.encode("\u8A4D")}, {name:"Error",message:"EncodingError U+8A4D"});
assert.throws(() => {ms932Encoder.encode("\u8A4E")}, {name:"Error",message:"EncodingError U+8A4E"});
assert.throws(() => {ms932Encoder.encode("\u8A4F")}, {name:"Error",message:"EncodingError U+8A4F"});
r = r && ([...ms932Encoder.encode("詐詑詒")].join(",") === "141,188,145,192,230,103"); // U+8A50
assert.throws(() => {ms932Encoder.encode("\u8A53")}, {name:"Error",message:"EncodingError U+8A53"});
r = r && ([...ms932Encoder.encode("詔評")].join(",") === "143,217,149,93"); // U+8A54
assert.throws(() => {ms932Encoder.encode("\u8A56")}, {name:"Error",message:"EncodingError U+8A56"});
assert.throws(() => {ms932Encoder.encode("\u8A57")}, {name:"Error",message:"EncodingError U+8A57"});
assert.throws(() => {ms932Encoder.encode("\u8A58")}, {name:"Error",message:"EncodingError U+8A58"});
assert.throws(() => {ms932Encoder.encode("\u8A59")}, {name:"Error",message:"EncodingError U+8A59"});
assert.throws(() => {ms932Encoder.encode("\u8A5A")}, {name:"Error",message:"EncodingError U+8A5A"});
r = r && ([...ms932Encoder.encode("詛")].join(",") === "230,102"); // U+8A5B
assert.throws(() => {ms932Encoder.encode("\u8A5C")}, {name:"Error",message:"EncodingError U+8A5C"});
assert.throws(() => {ms932Encoder.encode("\u8A5D")}, {name:"Error",message:"EncodingError U+8A5D"});
r = r && ([...ms932Encoder.encode("詞")].join(",") === "142,140"); // U+8A5E
assert.throws(() => {ms932Encoder.encode("\u8A5F")}, {name:"Error",message:"EncodingError U+8A5F"});
r = r && ([...ms932Encoder.encode("詠")].join(",") === "137,114"); // U+8A60
assert.throws(() => {ms932Encoder.encode("\u8A61")}, {name:"Error",message:"EncodingError U+8A61"});
r = r && ([...ms932Encoder.encode("詢詣")].join(",") === "230,109,140,119"); // U+8A62
assert.throws(() => {ms932Encoder.encode("\u8A64")}, {name:"Error",message:"EncodingError U+8A64"});
assert.throws(() => {ms932Encoder.encode("\u8A65")}, {name:"Error",message:"EncodingError U+8A65"});
r = r && ([...ms932Encoder.encode("試")].join(",") === "142,142"); // U+8A66
assert.throws(() => {ms932Encoder.encode("\u8A67")}, {name:"Error",message:"EncodingError U+8A67"});
assert.throws(() => {ms932Encoder.encode("\u8A68")}, {name:"Error",message:"EncodingError U+8A68"});
r = r && ([...ms932Encoder.encode("詩")].join(",") === "142,141"); // U+8A69
assert.throws(() => {ms932Encoder.encode("\u8A6A")}, {name:"Error",message:"EncodingError U+8A6A"});
r = r && ([...ms932Encoder.encode("詫詬詭詮")].join(",") === "152,108,230,108,230,107,145,70"); // U+8A6B
assert.throws(() => {ms932Encoder.encode("\u8A6F")}, {name:"Error",message:"EncodingError U+8A6F"});
r = r && ([...ms932Encoder.encode("詰話該詳")].join(",") === "139,108,152,98,138,89,143,218"); // U+8A70
assert.throws(() => {ms932Encoder.encode("\u8A74")}, {name:"Error",message:"EncodingError U+8A74"});
assert.throws(() => {ms932Encoder.encode("\u8A75")}, {name:"Error",message:"EncodingError U+8A75"});
assert.throws(() => {ms932Encoder.encode("\u8A76")}, {name:"Error",message:"EncodingError U+8A76"});
assert.throws(() => {ms932Encoder.encode("\u8A77")}, {name:"Error",message:"EncodingError U+8A77"});
assert.throws(() => {ms932Encoder.encode("\u8A78")}, {name:"Error",message:"EncodingError U+8A78"});
r = r && ([...ms932Encoder.encode("詹")].join(",") === "251,165"); // U+8A79
assert.throws(() => {ms932Encoder.encode("\u8A7A")}, {name:"Error",message:"EncodingError U+8A7A"});
assert.throws(() => {ms932Encoder.encode("\u8A7B")}, {name:"Error",message:"EncodingError U+8A7B"});
r = r && ([...ms932Encoder.encode("詼")].join(",") === "230,106"); // U+8A7C
assert.throws(() => {ms932Encoder.encode("\u8A7D")}, {name:"Error",message:"EncodingError U+8A7D"});
assert.throws(() => {ms932Encoder.encode("\u8A7E")}, {name:"Error",message:"EncodingError U+8A7E"});
assert.throws(() => {ms932Encoder.encode("\u8A7F")}, {name:"Error",message:"EncodingError U+8A7F"});
assert.throws(() => {ms932Encoder.encode("\u8A80")}, {name:"Error",message:"EncodingError U+8A80"});
assert.throws(() => {ms932Encoder.encode("\u8A81")}, {name:"Error",message:"EncodingError U+8A81"});
r = r && ([...ms932Encoder.encode("誂")].join(",") === "230,111"); // U+8A82
assert.throws(() => {ms932Encoder.encode("\u8A83")}, {name:"Error",message:"EncodingError U+8A83"});
r = r && ([...ms932Encoder.encode("誄誅")].join(",") === "230,112,230,110"); // U+8A84
assert.throws(() => {ms932Encoder.encode("\u8A86")}, {name:"Error",message:"EncodingError U+8A86"});
r = r && ([...ms932Encoder.encode("誇")].join(",") === "140,214"); // U+8A87
assert.throws(() => {ms932Encoder.encode("\u8A88")}, {name:"Error",message:"EncodingError U+8A88"});
r = r && ([...ms932Encoder.encode("誉")].join(",") === "151,95"); // U+8A89
assert.throws(() => {ms932Encoder.encode("\u8A8A")}, {name:"Error",message:"EncodingError U+8A8A"});
assert.throws(() => {ms932Encoder.encode("\u8A8B")}, {name:"Error",message:"EncodingError U+8A8B"});
r = r && ([...ms932Encoder.encode("誌認")].join(",") === "142,143,148,70"); // U+8A8C
assert.throws(() => {ms932Encoder.encode("\u8A8E")}, {name:"Error",message:"EncodingError U+8A8E"});
assert.throws(() => {ms932Encoder.encode("\u8A8F")}, {name:"Error",message:"EncodingError U+8A8F"});
assert.throws(() => {ms932Encoder.encode("\u8A90")}, {name:"Error",message:"EncodingError U+8A90"});
r = r && ([...ms932Encoder.encode("誑")].join(",") === "230,115"); // U+8A91
assert.throws(() => {ms932Encoder.encode("\u8A92")}, {name:"Error",message:"EncodingError U+8A92"});
r = r && ([...ms932Encoder.encode("誓")].join(",") === "144,190"); // U+8A93
assert.throws(() => {ms932Encoder.encode("\u8A94")}, {name:"Error",message:"EncodingError U+8A94"});
r = r && ([...ms932Encoder.encode("誕")].join(",") === "146,97"); // U+8A95
assert.throws(() => {ms932Encoder.encode("\u8A96")}, {name:"Error",message:"EncodingError U+8A96"});
assert.throws(() => {ms932Encoder.encode("\u8A97")}, {name:"Error",message:"EncodingError U+8A97"});
r = r && ([...ms932Encoder.encode("誘")].join(",") === "151,85"); // U+8A98
assert.throws(() => {ms932Encoder.encode("\u8A99")}, {name:"Error",message:"EncodingError U+8A99"});
r = r && ([...ms932Encoder.encode("誚")].join(",") === "230,118"); // U+8A9A
assert.throws(() => {ms932Encoder.encode("\u8A9B")}, {name:"Error",message:"EncodingError U+8A9B"});
assert.throws(() => {ms932Encoder.encode("\u8A9C")}, {name:"Error",message:"EncodingError U+8A9C"});
assert.throws(() => {ms932Encoder.encode("\u8A9D")}, {name:"Error",message:"EncodingError U+8A9D"});
r = r && ([...ms932Encoder.encode("語")].join(",") === "140,234"); // U+8A9E
assert.throws(() => {ms932Encoder.encode("\u8A9F")}, {name:"Error",message:"EncodingError U+8A9F"});
r = r && ([...ms932Encoder.encode("誠誡")].join(",") === "144,189,230,114"); // U+8AA0
assert.throws(() => {ms932Encoder.encode("\u8AA2")}, {name:"Error",message:"EncodingError U+8AA2"});
r = r && ([...ms932Encoder.encode("誣誤誥誦誧誨")].join(",") === "230,119,140,235,230,116,230,117,251,166,230,113"); // U+8AA3
assert.throws(() => {ms932Encoder.encode("\u8AA9")}, {name:"Error",message:"EncodingError U+8AA9"});
assert.throws(() => {ms932Encoder.encode("\u8AAA")}, {name:"Error",message:"EncodingError U+8AAA"});
assert.throws(() => {ms932Encoder.encode("\u8AAB")}, {name:"Error",message:"EncodingError U+8AAB"});
r = r && ([...ms932Encoder.encode("説読")].join(",") === "144,224,147,199"); // U+8AAC
assert.throws(() => {ms932Encoder.encode("\u8AAE")}, {name:"Error",message:"EncodingError U+8AAE"});
assert.throws(() => {ms932Encoder.encode("\u8AAF")}, {name:"Error",message:"EncodingError U+8AAF"});
r = r && ([...ms932Encoder.encode("誰")].join(",") === "146,78"); // U+8AB0
assert.throws(() => {ms932Encoder.encode("\u8AB1")}, {name:"Error",message:"EncodingError U+8AB1"});
r = r && ([...ms932Encoder.encode("課")].join(",") === "137,219"); // U+8AB2
assert.throws(() => {ms932Encoder.encode("\u8AB3")}, {name:"Error",message:"EncodingError U+8AB3"});
assert.throws(() => {ms932Encoder.encode("\u8AB4")}, {name:"Error",message:"EncodingError U+8AB4"});
assert.throws(() => {ms932Encoder.encode("\u8AB5")}, {name:"Error",message:"EncodingError U+8AB5"});
assert.throws(() => {ms932Encoder.encode("\u8AB6")}, {name:"Error",message:"EncodingError U+8AB6"});
assert.throws(() => {ms932Encoder.encode("\u8AB7")}, {name:"Error",message:"EncodingError U+8AB7"});
assert.throws(() => {ms932Encoder.encode("\u8AB8")}, {name:"Error",message:"EncodingError U+8AB8"});
r = r && ([...ms932Encoder.encode("誹")].join(",") === "148,238"); // U+8AB9
assert.throws(() => {ms932Encoder.encode("\u8ABA")}, {name:"Error",message:"EncodingError U+8ABA"});
assert.throws(() => {ms932Encoder.encode("\u8ABB")}, {name:"Error",message:"EncodingError U+8ABB"});
r = r && ([...ms932Encoder.encode("誼")].join(",") === "139,98"); // U+8ABC
assert.throws(() => {ms932Encoder.encode("\u8ABD")}, {name:"Error",message:"EncodingError U+8ABD"});
r = r && ([...ms932Encoder.encode("誾調")].join(",") === "251,167,146,178"); // U+8ABE
assert.throws(() => {ms932Encoder.encode("\u8AC0")}, {name:"Error",message:"EncodingError U+8AC0"});
assert.throws(() => {ms932Encoder.encode("\u8AC1")}, {name:"Error",message:"EncodingError U+8AC1"});
r = r && ([...ms932Encoder.encode("諂")].join(",") === "230,122"); // U+8AC2
assert.throws(() => {ms932Encoder.encode("\u8AC3")}, {name:"Error",message:"EncodingError U+8AC3"});
r = r && ([...ms932Encoder.encode("諄")].join(",") === "230,120"); // U+8AC4
assert.throws(() => {ms932Encoder.encode("\u8AC5")}, {name:"Error",message:"EncodingError U+8AC5"});
assert.throws(() => {ms932Encoder.encode("\u8AC6")}, {name:"Error",message:"EncodingError U+8AC6"});
r = r && ([...ms932Encoder.encode("談")].join(",") === "146,107"); // U+8AC7
assert.throws(() => {ms932Encoder.encode("\u8AC8")}, {name:"Error",message:"EncodingError U+8AC8"});
assert.throws(() => {ms932Encoder.encode("\u8AC9")}, {name:"Error",message:"EncodingError U+8AC9"});
assert.throws(() => {ms932Encoder.encode("\u8ACA")}, {name:"Error",message:"EncodingError U+8ACA"});
r = r && ([...ms932Encoder.encode("請諌諍")].join(",") === "144,191,138,208,230,121"); // U+8ACB
assert.throws(() => {ms932Encoder.encode("\u8ACE")}, {name:"Error",message:"EncodingError U+8ACE"});
r = r && ([...ms932Encoder.encode("諏")].join(",") === "144,122"); // U+8ACF
assert.throws(() => {ms932Encoder.encode("\u8AD0")}, {name:"Error",message:"EncodingError U+8AD0"});
assert.throws(() => {ms932Encoder.encode("\u8AD1")}, {name:"Error",message:"EncodingError U+8AD1"});
r = r && ([...ms932Encoder.encode("諒")].join(",") === "151,200"); // U+8AD2
assert.throws(() => {ms932Encoder.encode("\u8AD3")}, {name:"Error",message:"EncodingError U+8AD3"});
assert.throws(() => {ms932Encoder.encode("\u8AD4")}, {name:"Error",message:"EncodingError U+8AD4"});
assert.throws(() => {ms932Encoder.encode("\u8AD5")}, {name:"Error",message:"EncodingError U+8AD5"});
r = r && ([...ms932Encoder.encode("論")].join(",") === "152,95"); // U+8AD6
assert.throws(() => {ms932Encoder.encode("\u8AD7")}, {name:"Error",message:"EncodingError U+8AD7"});
assert.throws(() => {ms932Encoder.encode("\u8AD8")}, {name:"Error",message:"EncodingError U+8AD8"});
assert.throws(() => {ms932Encoder.encode("\u8AD9")}, {name:"Error",message:"EncodingError U+8AD9"});
r = r && ([...ms932Encoder.encode("諚諛諜")].join(",") === "230,123,230,135,146,179"); // U+8ADA
assert.throws(() => {ms932Encoder.encode("\u8ADD")}, {name:"Error",message:"EncodingError U+8ADD"});
r = r && ([...ms932Encoder.encode("諞諟諠諡諢")].join(",") === "230,134,251,168,230,131,230,139,230,132"); // U+8ADE
assert.throws(() => {ms932Encoder.encode("\u8AE3")}, {name:"Error",message:"EncodingError U+8AE3"});
r = r && ([...ms932Encoder.encode("諤")].join(",") === "230,128"); // U+8AE4
assert.throws(() => {ms932Encoder.encode("\u8AE5")}, {name:"Error",message:"EncodingError U+8AE5"});
r = r && ([...ms932Encoder.encode("諦諧")].join(",") === "146,250,230,126"); // U+8AE6
assert.throws(() => {ms932Encoder.encode("\u8AE8")}, {name:"Error",message:"EncodingError U+8AE8"});
assert.throws(() => {ms932Encoder.encode("\u8AE9")}, {name:"Error",message:"EncodingError U+8AE9"});
assert.throws(() => {ms932Encoder.encode("\u8AEA")}, {name:"Error",message:"EncodingError U+8AEA"});
r = r && ([...ms932Encoder.encode("諫")].join(",") === "230,124"); // U+8AEB
assert.throws(() => {ms932Encoder.encode("\u8AEC")}, {name:"Error",message:"EncodingError U+8AEC"});
r = r && ([...ms932Encoder.encode("諭諮")].join(",") === "151,64,142,144"); // U+8AED
assert.throws(() => {ms932Encoder.encode("\u8AEF")}, {name:"Error",message:"EncodingError U+8AEF"});
assert.throws(() => {ms932Encoder.encode("\u8AF0")}, {name:"Error",message:"EncodingError U+8AF0"});
r = r && ([...ms932Encoder.encode("諱")].join(",") === "230,129"); // U+8AF1
assert.throws(() => {ms932Encoder.encode("\u8AF2")}, {name:"Error",message:"EncodingError U+8AF2"});
r = r && ([...ms932Encoder.encode("諳")].join(",") === "230,125"); // U+8AF3
assert.throws(() => {ms932Encoder.encode("\u8AF4")}, {name:"Error",message:"EncodingError U+8AF4"});
assert.throws(() => {ms932Encoder.encode("\u8AF5")}, {name:"Error",message:"EncodingError U+8AF5"});
r = r && ([...ms932Encoder.encode("諶諷諸")].join(",") === "251,170,230,133,143,148"); // U+8AF6
assert.throws(() => {ms932Encoder.encode("\u8AF9")}, {name:"Error",message:"EncodingError U+8AF9"});
r = r && ([...ms932Encoder.encode("諺")].join(",") === "140,191"); // U+8AFA
assert.throws(() => {ms932Encoder.encode("\u8AFB")}, {name:"Error",message:"EncodingError U+8AFB"});
assert.throws(() => {ms932Encoder.encode("\u8AFC")}, {name:"Error",message:"EncodingError U+8AFC"});
assert.throws(() => {ms932Encoder.encode("\u8AFD")}, {name:"Error",message:"EncodingError U+8AFD"});
r = r && ([...ms932Encoder.encode("諾")].join(",") === "145,248"); // U+8AFE
assert.throws(() => {ms932Encoder.encode("\u8AFF")}, {name:"Error",message:"EncodingError U+8AFF"});
r = r && ([...ms932Encoder.encode("謀謁謂")].join(",") === "150,100,137,121,136,224"); // U+8B00
assert.throws(() => {ms932Encoder.encode("\u8B03")}, {name:"Error",message:"EncodingError U+8B03"});
r = r && ([...ms932Encoder.encode("謄")].join(",") === "147,163"); // U+8B04
assert.throws(() => {ms932Encoder.encode("\u8B05")}, {name:"Error",message:"EncodingError U+8B05"});
assert.throws(() => {ms932Encoder.encode("\u8B06")}, {name:"Error",message:"EncodingError U+8B06"});
r = r && ([...ms932Encoder.encode("謇")].join(",") === "230,137"); // U+8B07
assert.throws(() => {ms932Encoder.encode("\u8B08")}, {name:"Error",message:"EncodingError U+8B08"});
assert.throws(() => {ms932Encoder.encode("\u8B09")}, {name:"Error",message:"EncodingError U+8B09"});
assert.throws(() => {ms932Encoder.encode("\u8B0A")}, {name:"Error",message:"EncodingError U+8B0A"});
assert.throws(() => {ms932Encoder.encode("\u8B0B")}, {name:"Error",message:"EncodingError U+8B0B"});
r = r && ([...ms932Encoder.encode("謌")].join(",") === "230,136"); // U+8B0C
assert.throws(() => {ms932Encoder.encode("\u8B0D")}, {name:"Error",message:"EncodingError U+8B0D"});
r = r && ([...ms932Encoder.encode("謎")].join(",") === "147,228"); // U+8B0E
assert.throws(() => {ms932Encoder.encode("\u8B0F")}, {name:"Error",message:"EncodingError U+8B0F"});
r = r && ([...ms932Encoder.encode("謐")].join(",") === "230,141"); // U+8B10
assert.throws(() => {ms932Encoder.encode("\u8B11")}, {name:"Error",message:"EncodingError U+8B11"});
assert.throws(() => {ms932Encoder.encode("\u8B12")}, {name:"Error",message:"EncodingError U+8B12"});
assert.throws(() => {ms932Encoder.encode("\u8B13")}, {name:"Error",message:"EncodingError U+8B13"});
r = r && ([...ms932Encoder.encode("謔")].join(",") === "230,130"); // U+8B14
assert.throws(() => {ms932Encoder.encode("\u8B15")}, {name:"Error",message:"EncodingError U+8B15"});
r = r && ([...ms932Encoder.encode("謖謗")].join(",") === "230,140,230,142"); // U+8B16
assert.throws(() => {ms932Encoder.encode("\u8B18")}, {name:"Error",message:"EncodingError U+8B18"});
r = r && ([...ms932Encoder.encode("謙謚講")].join(",") === "140,170,230,138,141,117"); // U+8B19
assert.throws(() => {ms932Encoder.encode("\u8B1C")}, {name:"Error",message:"EncodingError U+8B1C"});
r = r && ([...ms932Encoder.encode("謝")].join(",") === "142,211"); // U+8B1D
assert.throws(() => {ms932Encoder.encode("\u8B1E")}, {name:"Error",message:"EncodingError U+8B1E"});
assert.throws(() => {ms932Encoder.encode("\u8B1F")}, {name:"Error",message:"EncodingError U+8B1F"});
r = r && ([...ms932Encoder.encode("謠謡")].join(",") === "230,143,151,119"); // U+8B20
assert.throws(() => {ms932Encoder.encode("\u8B22")}, {name:"Error",message:"EncodingError U+8B22"});
assert.throws(() => {ms932Encoder.encode("\u8B23")}, {name:"Error",message:"EncodingError U+8B23"});
assert.throws(() => {ms932Encoder.encode("\u8B24")}, {name:"Error",message:"EncodingError U+8B24"});
assert.throws(() => {ms932Encoder.encode("\u8B25")}, {name:"Error",message:"EncodingError U+8B25"});
r = r && ([...ms932Encoder.encode("謦")].join(",") === "230,146"); // U+8B26
assert.throws(() => {ms932Encoder.encode("\u8B27")}, {name:"Error",message:"EncodingError U+8B27"});
r = r && ([...ms932Encoder.encode("謨")].join(",") === "230,149"); // U+8B28
assert.throws(() => {ms932Encoder.encode("\u8B29")}, {name:"Error",message:"EncodingError U+8B29"});
assert.throws(() => {ms932Encoder.encode("\u8B2A")}, {name:"Error",message:"EncodingError U+8B2A"});
r = r && ([...ms932Encoder.encode("謫謬")].join(",") === "230,147,149,84"); // U+8B2B
assert.throws(() => {ms932Encoder.encode("\u8B2D")}, {name:"Error",message:"EncodingError U+8B2D"});
assert.throws(() => {ms932Encoder.encode("\u8B2E")}, {name:"Error",message:"EncodingError U+8B2E"});
assert.throws(() => {ms932Encoder.encode("\u8B2F")}, {name:"Error",message:"EncodingError U+8B2F"});
assert.throws(() => {ms932Encoder.encode("\u8B30")}, {name:"Error",message:"EncodingError U+8B30"});
assert.throws(() => {ms932Encoder.encode("\u8B31")}, {name:"Error",message:"EncodingError U+8B31"});
assert.throws(() => {ms932Encoder.encode("\u8B32")}, {name:"Error",message:"EncodingError U+8B32"});
r = r && ([...ms932Encoder.encode("謳")].join(",") === "230,144"); // U+8B33
assert.throws(() => {ms932Encoder.encode("\u8B34")}, {name:"Error",message:"EncodingError U+8B34"});
assert.throws(() => {ms932Encoder.encode("\u8B35")}, {name:"Error",message:"EncodingError U+8B35"});
assert.throws(() => {ms932Encoder.encode("\u8B36")}, {name:"Error",message:"EncodingError U+8B36"});
assert.throws(() => {ms932Encoder.encode("\u8B37")}, {name:"Error",message:"EncodingError U+8B37"});
assert.throws(() => {ms932Encoder.encode("\u8B38")}, {name:"Error",message:"EncodingError U+8B38"});
r = r && ([...ms932Encoder.encode("謹")].join(",") === "139,222"); // U+8B39
assert.throws(() => {ms932Encoder.encode("\u8B3A")}, {name:"Error",message:"EncodingError U+8B3A"});
assert.throws(() => {ms932Encoder.encode("\u8B3B")}, {name:"Error",message:"EncodingError U+8B3B"});
assert.throws(() => {ms932Encoder.encode("\u8B3C")}, {name:"Error",message:"EncodingError U+8B3C"});
assert.throws(() => {ms932Encoder.encode("\u8B3D")}, {name:"Error",message:"EncodingError U+8B3D"});
r = r && ([...ms932Encoder.encode("謾")].join(",") === "230,148"); // U+8B3E
assert.throws(() => {ms932Encoder.encode("\u8B3F")}, {name:"Error",message:"EncodingError U+8B3F"});
assert.throws(() => {ms932Encoder.encode("\u8B40")}, {name:"Error",message:"EncodingError U+8B40"});
r = r && ([...ms932Encoder.encode("譁")].join(",") === "230,150"); // U+8B41
assert.throws(() => {ms932Encoder.encode("\u8B42")}, {name:"Error",message:"EncodingError U+8B42"});
assert.throws(() => {ms932Encoder.encode("\u8B43")}, {name:"Error",message:"EncodingError U+8B43"});
assert.throws(() => {ms932Encoder.encode("\u8B44")}, {name:"Error",message:"EncodingError U+8B44"});
assert.throws(() => {ms932Encoder.encode("\u8B45")}, {name:"Error",message:"EncodingError U+8B45"});
assert.throws(() => {ms932Encoder.encode("\u8B46")}, {name:"Error",message:"EncodingError U+8B46"});
assert.throws(() => {ms932Encoder.encode("\u8B47")}, {name:"Error",message:"EncodingError U+8B47"});
assert.throws(() => {ms932Encoder.encode("\u8B48")}, {name:"Error",message:"EncodingError U+8B48"});
r = r && ([...ms932Encoder.encode("證")].join(",") === "230,154"); // U+8B49
assert.throws(() => {ms932Encoder.encode("\u8B4A")}, {name:"Error",message:"EncodingError U+8B4A"});
assert.throws(() => {ms932Encoder.encode("\u8B4B")}, {name:"Error",message:"EncodingError U+8B4B"});
r = r && ([...ms932Encoder.encode("譌")].join(",") === "230,151"); // U+8B4C
assert.throws(() => {ms932Encoder.encode("\u8B4D")}, {name:"Error",message:"EncodingError U+8B4D"});
r = r && ([...ms932Encoder.encode("譎譏")].join(",") === "230,153,230,152"); // U+8B4E
assert.throws(() => {ms932Encoder.encode("\u8B50")}, {name:"Error",message:"EncodingError U+8B50"});
assert.throws(() => {ms932Encoder.encode("\u8B51")}, {name:"Error",message:"EncodingError U+8B51"});
assert.throws(() => {ms932Encoder.encode("\u8B52")}, {name:"Error",message:"EncodingError U+8B52"});
r = r && ([...ms932Encoder.encode("譓")].join(",") === "251,171"); // U+8B53
assert.throws(() => {ms932Encoder.encode("\u8B54")}, {name:"Error",message:"EncodingError U+8B54"});
assert.throws(() => {ms932Encoder.encode("\u8B55")}, {name:"Error",message:"EncodingError U+8B55"});
r = r && ([...ms932Encoder.encode("譖")].join(",") === "230,155"); // U+8B56
assert.throws(() => {ms932Encoder.encode("\u8B57")}, {name:"Error",message:"EncodingError U+8B57"});
r = r && ([...ms932Encoder.encode("識")].join(",") === "142,175"); // U+8B58
assert.throws(() => {ms932Encoder.encode("\u8B59")}, {name:"Error",message:"EncodingError U+8B59"});
r = r && ([...ms932Encoder.encode("譚譛譜")].join(",") === "230,157,230,156,149,136"); // U+8B5A
assert.throws(() => {ms932Encoder.encode("\u8B5D")}, {name:"Error",message:"EncodingError U+8B5D"});
assert.throws(() => {ms932Encoder.encode("\u8B5E")}, {name:"Error",message:"EncodingError U+8B5E"});
r = r && ([...ms932Encoder.encode("譟")].join(",") === "230,159"); // U+8B5F
assert.throws(() => {ms932Encoder.encode("\u8B60")}, {name:"Error",message:"EncodingError U+8B60"});
assert.throws(() => {ms932Encoder.encode("\u8B61")}, {name:"Error",message:"EncodingError U+8B61"});
assert.throws(() => {ms932Encoder.encode("\u8B62")}, {name:"Error",message:"EncodingError U+8B62"});
assert.throws(() => {ms932Encoder.encode("\u8B63")}, {name:"Error",message:"EncodingError U+8B63"});
assert.throws(() => {ms932Encoder.encode("\u8B64")}, {name:"Error",message:"EncodingError U+8B64"});
assert.throws(() => {ms932Encoder.encode("\u8B65")}, {name:"Error",message:"EncodingError U+8B65"});
r = r && ([...ms932Encoder.encode("警")].join(",") === "140,120"); // U+8B66
assert.throws(() => {ms932Encoder.encode("\u8B67")}, {name:"Error",message:"EncodingError U+8B67"});
assert.throws(() => {ms932Encoder.encode("\u8B68")}, {name:"Error",message:"EncodingError U+8B68"});
assert.throws(() => {ms932Encoder.encode("\u8B69")}, {name:"Error",message:"EncodingError U+8B69"});
assert.throws(() => {ms932Encoder.encode("\u8B6A")}, {name:"Error",message:"EncodingError U+8B6A"});
r = r && ([...ms932Encoder.encode("譫譬")].join(",") === "230,158,230,160"); // U+8B6B
assert.throws(() => {ms932Encoder.encode("\u8B6D")}, {name:"Error",message:"EncodingError U+8B6D"});
assert.throws(() => {ms932Encoder.encode("\u8B6E")}, {name:"Error",message:"EncodingError U+8B6E"});
r = r && ([...ms932Encoder.encode("譯議譱譲")].join(",") === "230,161,139,99,227,191,143,247"); // U+8B6F
assert.throws(() => {ms932Encoder.encode("\u8B73")}, {name:"Error",message:"EncodingError U+8B73"});
r = r && ([...ms932Encoder.encode("譴")].join(",") === "230,162"); // U+8B74
assert.throws(() => {ms932Encoder.encode("\u8B75")}, {name:"Error",message:"EncodingError U+8B75"});
assert.throws(() => {ms932Encoder.encode("\u8B76")}, {name:"Error",message:"EncodingError U+8B76"});
r = r && ([...ms932Encoder.encode("護")].join(",") === "140,236"); // U+8B77
assert.throws(() => {ms932Encoder.encode("\u8B78")}, {name:"Error",message:"EncodingError U+8B78"});
assert.throws(() => {ms932Encoder.encode("\u8B79")}, {name:"Error",message:"EncodingError U+8B79"});
assert.throws(() => {ms932Encoder.encode("\u8B7A")}, {name:"Error",message:"EncodingError U+8B7A"});
assert.throws(() => {ms932Encoder.encode("\u8B7B")}, {name:"Error",message:"EncodingError U+8B7B"});
assert.throws(() => {ms932Encoder.encode("\u8B7C")}, {name:"Error",message:"EncodingError U+8B7C"});
r = r && ([...ms932Encoder.encode("譽")].join(",") === "230,163"); // U+8B7D
assert.throws(() => {ms932Encoder.encode("\u8B7E")}, {name:"Error",message:"EncodingError U+8B7E"});
r = r && ([...ms932Encoder.encode("譿讀")].join(",") === "251,172,230,164"); // U+8B7F
assert.throws(() => {ms932Encoder.encode("\u8B81")}, {name:"Error",message:"EncodingError U+8B81"});
assert.throws(() => {ms932Encoder.encode("\u8B82")}, {name:"Error",message:"EncodingError U+8B82"});
r = r && ([...ms932Encoder.encode("讃")].join(",") === "142,93"); // U+8B83
assert.throws(() => {ms932Encoder.encode("\u8B84")}, {name:"Error",message:"EncodingError U+8B84"});
assert.throws(() => {ms932Encoder.encode("\u8B85")}, {name:"Error",message:"EncodingError U+8B85"});
assert.throws(() => {ms932Encoder.encode("\u8B86")}, {name:"Error",message:"EncodingError U+8B86"});
assert.throws(() => {ms932Encoder.encode("\u8B87")}, {name:"Error",message:"EncodingError U+8B87"});
assert.throws(() => {ms932Encoder.encode("\u8B88")}, {name:"Error",message:"EncodingError U+8B88"});
assert.throws(() => {ms932Encoder.encode("\u8B89")}, {name:"Error",message:"EncodingError U+8B89"});
r = r && ([...ms932Encoder.encode("變")].join(",") === "157,204"); // U+8B8A
assert.throws(() => {ms932Encoder.encode("\u8B8B")}, {name:"Error",message:"EncodingError U+8B8B"});
r = r && ([...ms932Encoder.encode("讌")].join(",") === "230,165"); // U+8B8C
assert.throws(() => {ms932Encoder.encode("\u8B8D")}, {name:"Error",message:"EncodingError U+8B8D"});
r = r && ([...ms932Encoder.encode("讎")].join(",") === "230,166"); // U+8B8E
assert.throws(() => {ms932Encoder.encode("\u8B8F")}, {name:"Error",message:"EncodingError U+8B8F"});
r = r && ([...ms932Encoder.encode("讐")].join(",") === "143,81"); // U+8B90
assert.throws(() => {ms932Encoder.encode("\u8B91")}, {name:"Error",message:"EncodingError U+8B91"});
r = r && ([...ms932Encoder.encode("讒讓")].join(",") === "230,167,230,168"); // U+8B92
assert.throws(() => {ms932Encoder.encode("\u8B94")}, {name:"Error",message:"EncodingError U+8B94"});
assert.throws(() => {ms932Encoder.encode("\u8B95")}, {name:"Error",message:"EncodingError U+8B95"});
r = r && ([...ms932Encoder.encode("讖")].join(",") === "230,169"); // U+8B96
assert.throws(() => {ms932Encoder.encode("\u8B97")}, {name:"Error",message:"EncodingError U+8B97"});
assert.throws(() => {ms932Encoder.encode("\u8B98")}, {name:"Error",message:"EncodingError U+8B98"});
r = r && ([...ms932Encoder.encode("讙讚")].join(",") === "230,170,230,171"); // U+8B99
assert.throws(() => {ms932Encoder.encode("\u8B9B")}, {name:"Error",message:"EncodingError U+8B9B"});
assert.throws(() => {ms932Encoder.encode("\u8B9C")}, {name:"Error",message:"EncodingError U+8B9C"});
assert.throws(() => {ms932Encoder.encode("\u8B9D")}, {name:"Error",message:"EncodingError U+8B9D"});
assert.throws(() => {ms932Encoder.encode("\u8B9E")}, {name:"Error",message:"EncodingError U+8B9E"});
assert.throws(() => {ms932Encoder.encode("\u8B9F")}, {name:"Error",message:"EncodingError U+8B9F"});
assert.throws(() => {ms932Encoder.encode("\u8BA0")}, {name:"Error",message:"EncodingError U+8BA0"});
assert.throws(() => {ms932Encoder.encode("\u8BA1")}, {name:"Error",message:"EncodingError U+8BA1"});
assert.throws(() => {ms932Encoder.encode("\u8BA2")}, {name:"Error",message:"EncodingError U+8BA2"});
assert.throws(() => {ms932Encoder.encode("\u8BA3")}, {name:"Error",message:"EncodingError U+8BA3"});
assert.throws(() => {ms932Encoder.encode("\u8BA4")}, {name:"Error",message:"EncodingError U+8BA4"});
assert.throws(() => {ms932Encoder.encode("\u8BA5")}, {name:"Error",message:"EncodingError U+8BA5"});
assert.throws(() => {ms932Encoder.encode("\u8BA6")}, {name:"Error",message:"EncodingError U+8BA6"});
assert.throws(() => {ms932Encoder.encode("\u8BA7")}, {name:"Error",message:"EncodingError U+8BA7"});
assert.throws(() => {ms932Encoder.encode("\u8BA8")}, {name:"Error",message:"EncodingError U+8BA8"});
assert.throws(() => {ms932Encoder.encode("\u8BA9")}, {name:"Error",message:"EncodingError U+8BA9"});
assert.throws(() => {ms932Encoder.encode("\u8BAA")}, {name:"Error",message:"EncodingError U+8BAA"});
assert.throws(() => {ms932Encoder.encode("\u8BAB")}, {name:"Error",message:"EncodingError U+8BAB"});
assert.throws(() => {ms932Encoder.encode("\u8BAC")}, {name:"Error",message:"EncodingError U+8BAC"});
assert.throws(() => {ms932Encoder.encode("\u8BAD")}, {name:"Error",message:"EncodingError U+8BAD"});
assert.throws(() => {ms932Encoder.encode("\u8BAE")}, {name:"Error",message:"EncodingError U+8BAE"});
assert.throws(() => {ms932Encoder.encode("\u8BAF")}, {name:"Error",message:"EncodingError U+8BAF"});
assert.throws(() => {ms932Encoder.encode("\u8BB0")}, {name:"Error",message:"EncodingError U+8BB0"});
assert.throws(() => {ms932Encoder.encode("\u8BB1")}, {name:"Error",message:"EncodingError U+8BB1"});
assert.throws(() => {ms932Encoder.encode("\u8BB2")}, {name:"Error",message:"EncodingError U+8BB2"});
assert.throws(() => {ms932Encoder.encode("\u8BB3")}, {name:"Error",message:"EncodingError U+8BB3"});
assert.throws(() => {ms932Encoder.encode("\u8BB4")}, {name:"Error",message:"EncodingError U+8BB4"});
assert.throws(() => {ms932Encoder.encode("\u8BB5")}, {name:"Error",message:"EncodingError U+8BB5"});
assert.throws(() => {ms932Encoder.encode("\u8BB6")}, {name:"Error",message:"EncodingError U+8BB6"});
assert.throws(() => {ms932Encoder.encode("\u8BB7")}, {name:"Error",message:"EncodingError U+8BB7"});
assert.throws(() => {ms932Encoder.encode("\u8BB8")}, {name:"Error",message:"EncodingError U+8BB8"});
assert.throws(() => {ms932Encoder.encode("\u8BB9")}, {name:"Error",message:"EncodingError U+8BB9"});
assert.throws(() => {ms932Encoder.encode("\u8BBA")}, {name:"Error",message:"EncodingError U+8BBA"});
assert.throws(() => {ms932Encoder.encode("\u8BBB")}, {name:"Error",message:"EncodingError U+8BBB"});
assert.throws(() => {ms932Encoder.encode("\u8BBC")}, {name:"Error",message:"EncodingError U+8BBC"});
assert.throws(() => {ms932Encoder.encode("\u8BBD")}, {name:"Error",message:"EncodingError U+8BBD"});
assert.throws(() => {ms932Encoder.encode("\u8BBE")}, {name:"Error",message:"EncodingError U+8BBE"});
assert.throws(() => {ms932Encoder.encode("\u8BBF")}, {name:"Error",message:"EncodingError U+8BBF"});
assert.throws(() => {ms932Encoder.encode("\u8BC0")}, {name:"Error",message:"EncodingError U+8BC0"});
assert.throws(() => {ms932Encoder.encode("\u8BC1")}, {name:"Error",message:"EncodingError U+8BC1"});
assert.throws(() => {ms932Encoder.encode("\u8BC2")}, {name:"Error",message:"EncodingError U+8BC2"});
assert.throws(() => {ms932Encoder.encode("\u8BC3")}, {name:"Error",message:"EncodingError U+8BC3"});
assert.throws(() => {ms932Encoder.encode("\u8BC4")}, {name:"Error",message:"EncodingError U+8BC4"});
assert.throws(() => {ms932Encoder.encode("\u8BC5")}, {name:"Error",message:"EncodingError U+8BC5"});
assert.throws(() => {ms932Encoder.encode("\u8BC6")}, {name:"Error",message:"EncodingError U+8BC6"});
assert.throws(() => {ms932Encoder.encode("\u8BC7")}, {name:"Error",message:"EncodingError U+8BC7"});
assert.throws(() => {ms932Encoder.encode("\u8BC8")}, {name:"Error",message:"EncodingError U+8BC8"});
assert.throws(() => {ms932Encoder.encode("\u8BC9")}, {name:"Error",message:"EncodingError U+8BC9"});
assert.throws(() => {ms932Encoder.encode("\u8BCA")}, {name:"Error",message:"EncodingError U+8BCA"});
assert.throws(() => {ms932Encoder.encode("\u8BCB")}, {name:"Error",message:"EncodingError U+8BCB"});
assert.throws(() => {ms932Encoder.encode("\u8BCC")}, {name:"Error",message:"EncodingError U+8BCC"});
assert.throws(() => {ms932Encoder.encode("\u8BCD")}, {name:"Error",message:"EncodingError U+8BCD"});
assert.throws(() => {ms932Encoder.encode("\u8BCE")}, {name:"Error",message:"EncodingError U+8BCE"});
assert.throws(() => {ms932Encoder.encode("\u8BCF")}, {name:"Error",message:"EncodingError U+8BCF"});
assert.throws(() => {ms932Encoder.encode("\u8BD0")}, {name:"Error",message:"EncodingError U+8BD0"});
assert.throws(() => {ms932Encoder.encode("\u8BD1")}, {name:"Error",message:"EncodingError U+8BD1"});
assert.throws(() => {ms932Encoder.encode("\u8BD2")}, {name:"Error",message:"EncodingError U+8BD2"});
assert.throws(() => {ms932Encoder.encode("\u8BD3")}, {name:"Error",message:"EncodingError U+8BD3"});
assert.throws(() => {ms932Encoder.encode("\u8BD4")}, {name:"Error",message:"EncodingError U+8BD4"});
assert.throws(() => {ms932Encoder.encode("\u8BD5")}, {name:"Error",message:"EncodingError U+8BD5"});
assert.throws(() => {ms932Encoder.encode("\u8BD6")}, {name:"Error",message:"EncodingError U+8BD6"});
assert.throws(() => {ms932Encoder.encode("\u8BD7")}, {name:"Error",message:"EncodingError U+8BD7"});
assert.throws(() => {ms932Encoder.encode("\u8BD8")}, {name:"Error",message:"EncodingError U+8BD8"});
assert.throws(() => {ms932Encoder.encode("\u8BD9")}, {name:"Error",message:"EncodingError U+8BD9"});
assert.throws(() => {ms932Encoder.encode("\u8BDA")}, {name:"Error",message:"EncodingError U+8BDA"});
assert.throws(() => {ms932Encoder.encode("\u8BDB")}, {name:"Error",message:"EncodingError U+8BDB"});
assert.throws(() => {ms932Encoder.encode("\u8BDC")}, {name:"Error",message:"EncodingError U+8BDC"});
assert.throws(() => {ms932Encoder.encode("\u8BDD")}, {name:"Error",message:"EncodingError U+8BDD"});
assert.throws(() => {ms932Encoder.encode("\u8BDE")}, {name:"Error",message:"EncodingError U+8BDE"});
assert.throws(() => {ms932Encoder.encode("\u8BDF")}, {name:"Error",message:"EncodingError U+8BDF"});
assert.throws(() => {ms932Encoder.encode("\u8BE0")}, {name:"Error",message:"EncodingError U+8BE0"});
assert.throws(() => {ms932Encoder.encode("\u8BE1")}, {name:"Error",message:"EncodingError U+8BE1"});
assert.throws(() => {ms932Encoder.encode("\u8BE2")}, {name:"Error",message:"EncodingError U+8BE2"});
assert.throws(() => {ms932Encoder.encode("\u8BE3")}, {name:"Error",message:"EncodingError U+8BE3"});
assert.throws(() => {ms932Encoder.encode("\u8BE4")}, {name:"Error",message:"EncodingError U+8BE4"});
assert.throws(() => {ms932Encoder.encode("\u8BE5")}, {name:"Error",message:"EncodingError U+8BE5"});
assert.throws(() => {ms932Encoder.encode("\u8BE6")}, {name:"Error",message:"EncodingError U+8BE6"});
assert.throws(() => {ms932Encoder.encode("\u8BE7")}, {name:"Error",message:"EncodingError U+8BE7"});
assert.throws(() => {ms932Encoder.encode("\u8BE8")}, {name:"Error",message:"EncodingError U+8BE8"});
assert.throws(() => {ms932Encoder.encode("\u8BE9")}, {name:"Error",message:"EncodingError U+8BE9"});
assert.throws(() => {ms932Encoder.encode("\u8BEA")}, {name:"Error",message:"EncodingError U+8BEA"});
assert.throws(() => {ms932Encoder.encode("\u8BEB")}, {name:"Error",message:"EncodingError U+8BEB"});
assert.throws(() => {ms932Encoder.encode("\u8BEC")}, {name:"Error",message:"EncodingError U+8BEC"});
assert.throws(() => {ms932Encoder.encode("\u8BED")}, {name:"Error",message:"EncodingError U+8BED"});
assert.throws(() => {ms932Encoder.encode("\u8BEE")}, {name:"Error",message:"EncodingError U+8BEE"});
assert.throws(() => {ms932Encoder.encode("\u8BEF")}, {name:"Error",message:"EncodingError U+8BEF"});
assert.throws(() => {ms932Encoder.encode("\u8BF0")}, {name:"Error",message:"EncodingError U+8BF0"});
assert.throws(() => {ms932Encoder.encode("\u8BF1")}, {name:"Error",message:"EncodingError U+8BF1"});
assert.throws(() => {ms932Encoder.encode("\u8BF2")}, {name:"Error",message:"EncodingError U+8BF2"});
assert.throws(() => {ms932Encoder.encode("\u8BF3")}, {name:"Error",message:"EncodingError U+8BF3"});
assert.throws(() => {ms932Encoder.encode("\u8BF4")}, {name:"Error",message:"EncodingError U+8BF4"});
assert.throws(() => {ms932Encoder.encode("\u8BF5")}, {name:"Error",message:"EncodingError U+8BF5"});
assert.throws(() => {ms932Encoder.encode("\u8BF6")}, {name:"Error",message:"EncodingError U+8BF6"});
assert.throws(() => {ms932Encoder.encode("\u8BF7")}, {name:"Error",message:"EncodingError U+8BF7"});
assert.throws(() => {ms932Encoder.encode("\u8BF8")}, {name:"Error",message:"EncodingError U+8BF8"});
assert.throws(() => {ms932Encoder.encode("\u8BF9")}, {name:"Error",message:"EncodingError U+8BF9"});
assert.throws(() => {ms932Encoder.encode("\u8BFA")}, {name:"Error",message:"EncodingError U+8BFA"});
assert.throws(() => {ms932Encoder.encode("\u8BFB")}, {name:"Error",message:"EncodingError U+8BFB"});
assert.throws(() => {ms932Encoder.encode("\u8BFC")}, {name:"Error",message:"EncodingError U+8BFC"});
assert.throws(() => {ms932Encoder.encode("\u8BFD")}, {name:"Error",message:"EncodingError U+8BFD"});
assert.throws(() => {ms932Encoder.encode("\u8BFE")}, {name:"Error",message:"EncodingError U+8BFE"});
assert.throws(() => {ms932Encoder.encode("\u8BFF")}, {name:"Error",message:"EncodingError U+8BFF"});

assert.strictEqual(r, true);

  });

});
