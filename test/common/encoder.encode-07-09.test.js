import assert from "node:assert";
import { Ms932Encoder } from "../../node/index.mjs";

describe("Ms932Encoder.prototype.encode 7", () => {

  it("encode(string) - U+6800-U+6BFF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

    let r = true;
assert.throws(() => {ms932Encoder.encode("\u6800")}, {name:"Error",message:"EncodingError U+6800"});
r = r && ([...ms932Encoder.encode("栁栂栃栄")].join(",") === "250,229,146,204,147,200,137,104"); // U+6801
assert.throws(() => {ms932Encoder.encode("\u6805")}, {name:"Error",message:"EncodingError U+6805"});
assert.throws(() => {ms932Encoder.encode("\u6806")}, {name:"Error",message:"EncodingError U+6806"});
assert.throws(() => {ms932Encoder.encode("\u6807")}, {name:"Error",message:"EncodingError U+6807"});
assert.throws(() => {ms932Encoder.encode("\u6808")}, {name:"Error",message:"EncodingError U+6808"});
assert.throws(() => {ms932Encoder.encode("\u6809")}, {name:"Error",message:"EncodingError U+6809"});
assert.throws(() => {ms932Encoder.encode("\u680A")}, {name:"Error",message:"EncodingError U+680A"});
assert.throws(() => {ms932Encoder.encode("\u680B")}, {name:"Error",message:"EncodingError U+680B"});
assert.throws(() => {ms932Encoder.encode("\u680C")}, {name:"Error",message:"EncodingError U+680C"});
assert.throws(() => {ms932Encoder.encode("\u680D")}, {name:"Error",message:"EncodingError U+680D"});
assert.throws(() => {ms932Encoder.encode("\u680E")}, {name:"Error",message:"EncodingError U+680E"});
assert.throws(() => {ms932Encoder.encode("\u680F")}, {name:"Error",message:"EncodingError U+680F"});
assert.throws(() => {ms932Encoder.encode("\u6810")}, {name:"Error",message:"EncodingError U+6810"});
assert.throws(() => {ms932Encoder.encode("\u6811")}, {name:"Error",message:"EncodingError U+6811"});
assert.throws(() => {ms932Encoder.encode("\u6812")}, {name:"Error",message:"EncodingError U+6812"});
r = r && ([...ms932Encoder.encode("栓")].join(",") === "144,240"); // U+6813
assert.throws(() => {ms932Encoder.encode("\u6814")}, {name:"Error",message:"EncodingError U+6814"});
assert.throws(() => {ms932Encoder.encode("\u6815")}, {name:"Error",message:"EncodingError U+6815"});
r = r && ([...ms932Encoder.encode("栖栗")].join(",") === "144,178,140,73"); // U+6816
assert.throws(() => {ms932Encoder.encode("\u6818")}, {name:"Error",message:"EncodingError U+6818"});
assert.throws(() => {ms932Encoder.encode("\u6819")}, {name:"Error",message:"EncodingError U+6819"});
assert.throws(() => {ms932Encoder.encode("\u681A")}, {name:"Error",message:"EncodingError U+681A"});
assert.throws(() => {ms932Encoder.encode("\u681B")}, {name:"Error",message:"EncodingError U+681B"});
assert.throws(() => {ms932Encoder.encode("\u681C")}, {name:"Error",message:"EncodingError U+681C"});
assert.throws(() => {ms932Encoder.encode("\u681D")}, {name:"Error",message:"EncodingError U+681D"});
r = r && ([...ms932Encoder.encode("栞")].join(",") === "158,120"); // U+681E
assert.throws(() => {ms932Encoder.encode("\u681F")}, {name:"Error",message:"EncodingError U+681F"});
assert.throws(() => {ms932Encoder.encode("\u6820")}, {name:"Error",message:"EncodingError U+6820"});
r = r && ([...ms932Encoder.encode("校栢")].join(",") === "141,90,138,156"); // U+6821
assert.throws(() => {ms932Encoder.encode("\u6823")}, {name:"Error",message:"EncodingError U+6823"});
assert.throws(() => {ms932Encoder.encode("\u6824")}, {name:"Error",message:"EncodingError U+6824"});
assert.throws(() => {ms932Encoder.encode("\u6825")}, {name:"Error",message:"EncodingError U+6825"});
assert.throws(() => {ms932Encoder.encode("\u6826")}, {name:"Error",message:"EncodingError U+6826"});
assert.throws(() => {ms932Encoder.encode("\u6827")}, {name:"Error",message:"EncodingError U+6827"});
assert.throws(() => {ms932Encoder.encode("\u6828")}, {name:"Error",message:"EncodingError U+6828"});
r = r && ([...ms932Encoder.encode("栩株栫")].join(",") === "158,122,138,148,158,129"); // U+6829
assert.throws(() => {ms932Encoder.encode("\u682C")}, {name:"Error",message:"EncodingError U+682C"});
assert.throws(() => {ms932Encoder.encode("\u682D")}, {name:"Error",message:"EncodingError U+682D"});
assert.throws(() => {ms932Encoder.encode("\u682E")}, {name:"Error",message:"EncodingError U+682E"});
assert.throws(() => {ms932Encoder.encode("\u682F")}, {name:"Error",message:"EncodingError U+682F"});
assert.throws(() => {ms932Encoder.encode("\u6830")}, {name:"Error",message:"EncodingError U+6830"});
assert.throws(() => {ms932Encoder.encode("\u6831")}, {name:"Error",message:"EncodingError U+6831"});
r = r && ([...ms932Encoder.encode("栲")].join(",") === "158,125"); // U+6832
assert.throws(() => {ms932Encoder.encode("\u6833")}, {name:"Error",message:"EncodingError U+6833"});
r = r && ([...ms932Encoder.encode("栴")].join(",") === "144,241"); // U+6834
assert.throws(() => {ms932Encoder.encode("\u6835")}, {name:"Error",message:"EncodingError U+6835"});
assert.throws(() => {ms932Encoder.encode("\u6836")}, {name:"Error",message:"EncodingError U+6836"});
assert.throws(() => {ms932Encoder.encode("\u6837")}, {name:"Error",message:"EncodingError U+6837"});
r = r && ([...ms932Encoder.encode("核根")].join(",") === "138,106,141,170"); // U+6838
assert.throws(() => {ms932Encoder.encode("\u683A")}, {name:"Error",message:"EncodingError U+683A"});
assert.throws(() => {ms932Encoder.encode("\u683B")}, {name:"Error",message:"EncodingError U+683B"});
r = r && ([...ms932Encoder.encode("格栽")].join(",") === "138,105,141,205"); // U+683C
assert.throws(() => {ms932Encoder.encode("\u683E")}, {name:"Error",message:"EncodingError U+683E"});
assert.throws(() => {ms932Encoder.encode("\u683F")}, {name:"Error",message:"EncodingError U+683F"});
r = r && ([...ms932Encoder.encode("桀桁桂桃桄")].join(",") === "158,123,140,133,140,106,147,141,250,230"); // U+6840
assert.throws(() => {ms932Encoder.encode("\u6845")}, {name:"Error",message:"EncodingError U+6845"});
r = r && ([...ms932Encoder.encode("框")].join(",") === "158,121"); // U+6846
assert.throws(() => {ms932Encoder.encode("\u6847")}, {name:"Error",message:"EncodingError U+6847"});
r = r && ([...ms932Encoder.encode("案")].join(",") === "136,196"); // U+6848
assert.throws(() => {ms932Encoder.encode("\u6849")}, {name:"Error",message:"EncodingError U+6849"});
assert.throws(() => {ms932Encoder.encode("\u684A")}, {name:"Error",message:"EncodingError U+684A"});
assert.throws(() => {ms932Encoder.encode("\u684B")}, {name:"Error",message:"EncodingError U+684B"});
assert.throws(() => {ms932Encoder.encode("\u684C")}, {name:"Error",message:"EncodingError U+684C"});
r = r && ([...ms932Encoder.encode("桍桎")].join(",") === "158,124,158,126"); // U+684D
assert.throws(() => {ms932Encoder.encode("\u684F")}, {name:"Error",message:"EncodingError U+684F"});
r = r && ([...ms932Encoder.encode("桐桑桒桓桔")].join(",") === "139,203,140,75,250,227,138,186,139,106"); // U+6850
assert.throws(() => {ms932Encoder.encode("\u6855")}, {name:"Error",message:"EncodingError U+6855"});
assert.throws(() => {ms932Encoder.encode("\u6856")}, {name:"Error",message:"EncodingError U+6856"});
assert.throws(() => {ms932Encoder.encode("\u6857")}, {name:"Error",message:"EncodingError U+6857"});
assert.throws(() => {ms932Encoder.encode("\u6858")}, {name:"Error",message:"EncodingError U+6858"});
r = r && ([...ms932Encoder.encode("桙")].join(",") === "158,130"); // U+6859
assert.throws(() => {ms932Encoder.encode("\u685A")}, {name:"Error",message:"EncodingError U+685A"});
assert.throws(() => {ms932Encoder.encode("\u685B")}, {name:"Error",message:"EncodingError U+685B"});
r = r && ([...ms932Encoder.encode("桜桝")].join(",") === "141,247,150,145"); // U+685C
assert.throws(() => {ms932Encoder.encode("\u685E")}, {name:"Error",message:"EncodingError U+685E"});
r = r && ([...ms932Encoder.encode("桟")].join(",") === "142,86"); // U+685F
assert.throws(() => {ms932Encoder.encode("\u6860")}, {name:"Error",message:"EncodingError U+6860"});
assert.throws(() => {ms932Encoder.encode("\u6861")}, {name:"Error",message:"EncodingError U+6861"});
assert.throws(() => {ms932Encoder.encode("\u6862")}, {name:"Error",message:"EncodingError U+6862"});
r = r && ([...ms932Encoder.encode("档")].join(",") === "158,131"); // U+6863
assert.throws(() => {ms932Encoder.encode("\u6864")}, {name:"Error",message:"EncodingError U+6864"});
assert.throws(() => {ms932Encoder.encode("\u6865")}, {name:"Error",message:"EncodingError U+6865"});
assert.throws(() => {ms932Encoder.encode("\u6866")}, {name:"Error",message:"EncodingError U+6866"});
r = r && ([...ms932Encoder.encode("桧")].join(",") === "149,79"); // U+6867
assert.throws(() => {ms932Encoder.encode("\u6868")}, {name:"Error",message:"EncodingError U+6868"});
assert.throws(() => {ms932Encoder.encode("\u6869")}, {name:"Error",message:"EncodingError U+6869"});
assert.throws(() => {ms932Encoder.encode("\u686A")}, {name:"Error",message:"EncodingError U+686A"});
assert.throws(() => {ms932Encoder.encode("\u686B")}, {name:"Error",message:"EncodingError U+686B"});
assert.throws(() => {ms932Encoder.encode("\u686C")}, {name:"Error",message:"EncodingError U+686C"});
assert.throws(() => {ms932Encoder.encode("\u686D")}, {name:"Error",message:"EncodingError U+686D"});
assert.throws(() => {ms932Encoder.encode("\u686E")}, {name:"Error",message:"EncodingError U+686E"});
assert.throws(() => {ms932Encoder.encode("\u686F")}, {name:"Error",message:"EncodingError U+686F"});
assert.throws(() => {ms932Encoder.encode("\u6870")}, {name:"Error",message:"EncodingError U+6870"});
assert.throws(() => {ms932Encoder.encode("\u6871")}, {name:"Error",message:"EncodingError U+6871"});
assert.throws(() => {ms932Encoder.encode("\u6872")}, {name:"Error",message:"EncodingError U+6872"});
assert.throws(() => {ms932Encoder.encode("\u6873")}, {name:"Error",message:"EncodingError U+6873"});
r = r && ([...ms932Encoder.encode("桴")].join(",") === "158,143"); // U+6874
assert.throws(() => {ms932Encoder.encode("\u6875")}, {name:"Error",message:"EncodingError U+6875"});
r = r && ([...ms932Encoder.encode("桶桷")].join(",") === "137,177,158,132"); // U+6876
assert.throws(() => {ms932Encoder.encode("\u6878")}, {name:"Error",message:"EncodingError U+6878"});
assert.throws(() => {ms932Encoder.encode("\u6879")}, {name:"Error",message:"EncodingError U+6879"});
assert.throws(() => {ms932Encoder.encode("\u687A")}, {name:"Error",message:"EncodingError U+687A"});
assert.throws(() => {ms932Encoder.encode("\u687B")}, {name:"Error",message:"EncodingError U+687B"});
assert.throws(() => {ms932Encoder.encode("\u687C")}, {name:"Error",message:"EncodingError U+687C"});
assert.throws(() => {ms932Encoder.encode("\u687D")}, {name:"Error",message:"EncodingError U+687D"});
r = r && ([...ms932Encoder.encode("桾桿")].join(",") === "158,149,158,133"); // U+687E
assert.throws(() => {ms932Encoder.encode("\u6880")}, {name:"Error",message:"EncodingError U+6880"});
r = r && ([...ms932Encoder.encode("梁")].join(",") === "151,192"); // U+6881
assert.throws(() => {ms932Encoder.encode("\u6882")}, {name:"Error",message:"EncodingError U+6882"});
r = r && ([...ms932Encoder.encode("梃")].join(",") === "158,140"); // U+6883
assert.throws(() => {ms932Encoder.encode("\u6884")}, {name:"Error",message:"EncodingError U+6884"});
r = r && ([...ms932Encoder.encode("梅")].join(",") === "148,126"); // U+6885
assert.throws(() => {ms932Encoder.encode("\u6886")}, {name:"Error",message:"EncodingError U+6886"});
assert.throws(() => {ms932Encoder.encode("\u6887")}, {name:"Error",message:"EncodingError U+6887"});
assert.throws(() => {ms932Encoder.encode("\u6888")}, {name:"Error",message:"EncodingError U+6888"});
assert.throws(() => {ms932Encoder.encode("\u6889")}, {name:"Error",message:"EncodingError U+6889"});
assert.throws(() => {ms932Encoder.encode("\u688A")}, {name:"Error",message:"EncodingError U+688A"});
assert.throws(() => {ms932Encoder.encode("\u688B")}, {name:"Error",message:"EncodingError U+688B"});
assert.throws(() => {ms932Encoder.encode("\u688C")}, {name:"Error",message:"EncodingError U+688C"});
r = r && ([...ms932Encoder.encode("梍")].join(",") === "158,148"); // U+688D
assert.throws(() => {ms932Encoder.encode("\u688E")}, {name:"Error",message:"EncodingError U+688E"});
r = r && ([...ms932Encoder.encode("梏")].join(",") === "158,135"); // U+688F
assert.throws(() => {ms932Encoder.encode("\u6890")}, {name:"Error",message:"EncodingError U+6890"});
assert.throws(() => {ms932Encoder.encode("\u6891")}, {name:"Error",message:"EncodingError U+6891"});
assert.throws(() => {ms932Encoder.encode("\u6892")}, {name:"Error",message:"EncodingError U+6892"});
r = r && ([...ms932Encoder.encode("梓梔")].join(",") === "136,178,158,137"); // U+6893
assert.throws(() => {ms932Encoder.encode("\u6895")}, {name:"Error",message:"EncodingError U+6895"});
assert.throws(() => {ms932Encoder.encode("\u6896")}, {name:"Error",message:"EncodingError U+6896"});
r = r && ([...ms932Encoder.encode("梗")].join(",") === "141,91"); // U+6897
assert.throws(() => {ms932Encoder.encode("\u6898")}, {name:"Error",message:"EncodingError U+6898"});
assert.throws(() => {ms932Encoder.encode("\u6899")}, {name:"Error",message:"EncodingError U+6899"});
assert.throws(() => {ms932Encoder.encode("\u689A")}, {name:"Error",message:"EncodingError U+689A"});
r = r && ([...ms932Encoder.encode("梛")].join(",") === "158,139"); // U+689B
assert.throws(() => {ms932Encoder.encode("\u689C")}, {name:"Error",message:"EncodingError U+689C"});
r = r && ([...ms932Encoder.encode("條")].join(",") === "158,138"); // U+689D
assert.throws(() => {ms932Encoder.encode("\u689E")}, {name:"Error",message:"EncodingError U+689E"});
r = r && ([...ms932Encoder.encode("梟梠")].join(",") === "158,134,158,145"); // U+689F
assert.throws(() => {ms932Encoder.encode("\u68A1")}, {name:"Error",message:"EncodingError U+68A1"});
r = r && ([...ms932Encoder.encode("梢")].join(",") === "143,189"); // U+68A2
assert.throws(() => {ms932Encoder.encode("\u68A3")}, {name:"Error",message:"EncodingError U+68A3"});
assert.throws(() => {ms932Encoder.encode("\u68A4")}, {name:"Error",message:"EncodingError U+68A4"});
assert.throws(() => {ms932Encoder.encode("\u68A5")}, {name:"Error",message:"EncodingError U+68A5"});
r = r && ([...ms932Encoder.encode("梦梧梨")].join(",") === "154,235,140,230,151,156"); // U+68A6
assert.throws(() => {ms932Encoder.encode("\u68A9")}, {name:"Error",message:"EncodingError U+68A9"});
assert.throws(() => {ms932Encoder.encode("\u68AA")}, {name:"Error",message:"EncodingError U+68AA"});
assert.throws(() => {ms932Encoder.encode("\u68AB")}, {name:"Error",message:"EncodingError U+68AB"});
assert.throws(() => {ms932Encoder.encode("\u68AC")}, {name:"Error",message:"EncodingError U+68AC"});
r = r && ([...ms932Encoder.encode("梭")].join(",") === "158,136"); // U+68AD
assert.throws(() => {ms932Encoder.encode("\u68AE")}, {name:"Error",message:"EncodingError U+68AE"});
r = r && ([...ms932Encoder.encode("梯械梱")].join(",") === "146,242,138,66,141,171"); // U+68AF
assert.throws(() => {ms932Encoder.encode("\u68B2")}, {name:"Error",message:"EncodingError U+68B2"});
r = r && ([...ms932Encoder.encode("梳")].join(",") === "158,128"); // U+68B3
assert.throws(() => {ms932Encoder.encode("\u68B4")}, {name:"Error",message:"EncodingError U+68B4"});
r = r && ([...ms932Encoder.encode("梵梶")].join(",") === "158,144,138,129"); // U+68B5
assert.throws(() => {ms932Encoder.encode("\u68B7")}, {name:"Error",message:"EncodingError U+68B7"});
assert.throws(() => {ms932Encoder.encode("\u68B8")}, {name:"Error",message:"EncodingError U+68B8"});
r = r && ([...ms932Encoder.encode("梹梺")].join(",") === "158,142,158,146"); // U+68B9
assert.throws(() => {ms932Encoder.encode("\u68BB")}, {name:"Error",message:"EncodingError U+68BB"});
r = r && ([...ms932Encoder.encode("梼")].join(",") === "147,142"); // U+68BC
assert.throws(() => {ms932Encoder.encode("\u68BD")}, {name:"Error",message:"EncodingError U+68BD"});
assert.throws(() => {ms932Encoder.encode("\u68BE")}, {name:"Error",message:"EncodingError U+68BE"});
assert.throws(() => {ms932Encoder.encode("\u68BF")}, {name:"Error",message:"EncodingError U+68BF"});
assert.throws(() => {ms932Encoder.encode("\u68C0")}, {name:"Error",message:"EncodingError U+68C0"});
assert.throws(() => {ms932Encoder.encode("\u68C1")}, {name:"Error",message:"EncodingError U+68C1"});
assert.throws(() => {ms932Encoder.encode("\u68C2")}, {name:"Error",message:"EncodingError U+68C2"});
assert.throws(() => {ms932Encoder.encode("\u68C3")}, {name:"Error",message:"EncodingError U+68C3"});
r = r && ([...ms932Encoder.encode("棄")].join(",") === "138,252"); // U+68C4
assert.throws(() => {ms932Encoder.encode("\u68C5")}, {name:"Error",message:"EncodingError U+68C5"});
r = r && ([...ms932Encoder.encode("棆")].join(",") === "158,176"); // U+68C6
assert.throws(() => {ms932Encoder.encode("\u68C7")}, {name:"Error",message:"EncodingError U+68C7"});
r = r && ([...ms932Encoder.encode("棈棉棊棋")].join(",") === "250,100,150,199,158,151,138,251"); // U+68C8
assert.throws(() => {ms932Encoder.encode("\u68CC")}, {name:"Error",message:"EncodingError U+68CC"});
r = r && ([...ms932Encoder.encode("棍")].join(",") === "158,158"); // U+68CD
assert.throws(() => {ms932Encoder.encode("\u68CE")}, {name:"Error",message:"EncodingError U+68CE"});
r = r && ([...ms932Encoder.encode("棏")].join(",") === "250,231"); // U+68CF
assert.throws(() => {ms932Encoder.encode("\u68D0")}, {name:"Error",message:"EncodingError U+68D0"});
assert.throws(() => {ms932Encoder.encode("\u68D1")}, {name:"Error",message:"EncodingError U+68D1"});
r = r && ([...ms932Encoder.encode("棒")].join(",") === "150,95"); // U+68D2
assert.throws(() => {ms932Encoder.encode("\u68D3")}, {name:"Error",message:"EncodingError U+68D3"});
r = r && ([...ms932Encoder.encode("棔棕")].join(",") === "158,159,158,161"); // U+68D4
assert.throws(() => {ms932Encoder.encode("\u68D6")}, {name:"Error",message:"EncodingError U+68D6"});
r = r && ([...ms932Encoder.encode("棗棘")].join(",") === "158,165,158,153"); // U+68D7
assert.throws(() => {ms932Encoder.encode("\u68D9")}, {name:"Error",message:"EncodingError U+68D9"});
r = r && ([...ms932Encoder.encode("棚")].join(",") === "146,73"); // U+68DA
assert.throws(() => {ms932Encoder.encode("\u68DB")}, {name:"Error",message:"EncodingError U+68DB"});
assert.throws(() => {ms932Encoder.encode("\u68DC")}, {name:"Error",message:"EncodingError U+68DC"});
assert.throws(() => {ms932Encoder.encode("\u68DD")}, {name:"Error",message:"EncodingError U+68DD"});
assert.throws(() => {ms932Encoder.encode("\u68DE")}, {name:"Error",message:"EncodingError U+68DE"});
r = r && ([...ms932Encoder.encode("棟棠棡")].join(",") === "147,143,158,169,158,156"); // U+68DF
assert.throws(() => {ms932Encoder.encode("\u68E2")}, {name:"Error",message:"EncodingError U+68E2"});
r = r && ([...ms932Encoder.encode("棣")].join(",") === "158,166"); // U+68E3
assert.throws(() => {ms932Encoder.encode("\u68E4")}, {name:"Error",message:"EncodingError U+68E4"});
assert.throws(() => {ms932Encoder.encode("\u68E5")}, {name:"Error",message:"EncodingError U+68E5"});
assert.throws(() => {ms932Encoder.encode("\u68E6")}, {name:"Error",message:"EncodingError U+68E6"});
r = r && ([...ms932Encoder.encode("棧")].join(",") === "158,160"); // U+68E7
assert.throws(() => {ms932Encoder.encode("\u68E8")}, {name:"Error",message:"EncodingError U+68E8"});
assert.throws(() => {ms932Encoder.encode("\u68E9")}, {name:"Error",message:"EncodingError U+68E9"});
assert.throws(() => {ms932Encoder.encode("\u68EA")}, {name:"Error",message:"EncodingError U+68EA"});
assert.throws(() => {ms932Encoder.encode("\u68EB")}, {name:"Error",message:"EncodingError U+68EB"});
assert.throws(() => {ms932Encoder.encode("\u68EC")}, {name:"Error",message:"EncodingError U+68EC"});
assert.throws(() => {ms932Encoder.encode("\u68ED")}, {name:"Error",message:"EncodingError U+68ED"});
r = r && ([...ms932Encoder.encode("森棯")].join(",") === "144,88,158,170"); // U+68EE
assert.throws(() => {ms932Encoder.encode("\u68F0")}, {name:"Error",message:"EncodingError U+68F0"});
assert.throws(() => {ms932Encoder.encode("\u68F1")}, {name:"Error",message:"EncodingError U+68F1"});
r = r && ([...ms932Encoder.encode("棲")].join(",") === "144,177"); // U+68F2
assert.throws(() => {ms932Encoder.encode("\u68F3")}, {name:"Error",message:"EncodingError U+68F3"});
assert.throws(() => {ms932Encoder.encode("\u68F4")}, {name:"Error",message:"EncodingError U+68F4"});
assert.throws(() => {ms932Encoder.encode("\u68F5")}, {name:"Error",message:"EncodingError U+68F5"});
assert.throws(() => {ms932Encoder.encode("\u68F6")}, {name:"Error",message:"EncodingError U+68F6"});
assert.throws(() => {ms932Encoder.encode("\u68F7")}, {name:"Error",message:"EncodingError U+68F7"});
assert.throws(() => {ms932Encoder.encode("\u68F8")}, {name:"Error",message:"EncodingError U+68F8"});
r = r && ([...ms932Encoder.encode("棹棺")].join(",") === "158,168,138,187"); // U+68F9
assert.throws(() => {ms932Encoder.encode("\u68FB")}, {name:"Error",message:"EncodingError U+68FB"});
assert.throws(() => {ms932Encoder.encode("\u68FC")}, {name:"Error",message:"EncodingError U+68FC"});
assert.throws(() => {ms932Encoder.encode("\u68FD")}, {name:"Error",message:"EncodingError U+68FD"});
assert.throws(() => {ms932Encoder.encode("\u68FE")}, {name:"Error",message:"EncodingError U+68FE"});
assert.throws(() => {ms932Encoder.encode("\u68FF")}, {name:"Error",message:"EncodingError U+68FF"});
r = r && ([...ms932Encoder.encode("椀椁")].join(",") === "152,111,158,150"); // U+6900
assert.throws(() => {ms932Encoder.encode("\u6902")}, {name:"Error",message:"EncodingError U+6902"});
assert.throws(() => {ms932Encoder.encode("\u6903")}, {name:"Error",message:"EncodingError U+6903"});
r = r && ([...ms932Encoder.encode("椄椅")].join(",") === "158,164,136,214"); // U+6904
assert.throws(() => {ms932Encoder.encode("\u6906")}, {name:"Error",message:"EncodingError U+6906"});
assert.throws(() => {ms932Encoder.encode("\u6907")}, {name:"Error",message:"EncodingError U+6907"});
r = r && ([...ms932Encoder.encode("椈")].join(",") === "158,152"); // U+6908
assert.throws(() => {ms932Encoder.encode("\u6909")}, {name:"Error",message:"EncodingError U+6909"});
assert.throws(() => {ms932Encoder.encode("\u690A")}, {name:"Error",message:"EncodingError U+690A"});
r = r && ([...ms932Encoder.encode("椋椌植椎椏")].join(",") === "150,184,158,157,144,65,146,197,158,147"); // U+690B
assert.throws(() => {ms932Encoder.encode("\u6910")}, {name:"Error",message:"EncodingError U+6910"});
assert.throws(() => {ms932Encoder.encode("\u6911")}, {name:"Error",message:"EncodingError U+6911"});
r = r && ([...ms932Encoder.encode("椒")].join(",") === "158,163"); // U+6912
assert.throws(() => {ms932Encoder.encode("\u6913")}, {name:"Error",message:"EncodingError U+6913"});
assert.throws(() => {ms932Encoder.encode("\u6914")}, {name:"Error",message:"EncodingError U+6914"});
assert.throws(() => {ms932Encoder.encode("\u6915")}, {name:"Error",message:"EncodingError U+6915"});
assert.throws(() => {ms932Encoder.encode("\u6916")}, {name:"Error",message:"EncodingError U+6916"});
assert.throws(() => {ms932Encoder.encode("\u6917")}, {name:"Error",message:"EncodingError U+6917"});
assert.throws(() => {ms932Encoder.encode("\u6918")}, {name:"Error",message:"EncodingError U+6918"});
r = r && ([...ms932Encoder.encode("椙椚椛検")].join(",") === "144,154,158,173,138,145,140,159"); // U+6919
assert.throws(() => {ms932Encoder.encode("\u691D")}, {name:"Error",message:"EncodingError U+691D"});
assert.throws(() => {ms932Encoder.encode("\u691E")}, {name:"Error",message:"EncodingError U+691E"});
assert.throws(() => {ms932Encoder.encode("\u691F")}, {name:"Error",message:"EncodingError U+691F"});
assert.throws(() => {ms932Encoder.encode("\u6920")}, {name:"Error",message:"EncodingError U+6920"});
r = r && ([...ms932Encoder.encode("椡椢椣")].join(",") === "158,175,158,154,158,174"); // U+6921
assert.throws(() => {ms932Encoder.encode("\u6924")}, {name:"Error",message:"EncodingError U+6924"});
r = r && ([...ms932Encoder.encode("椥椦")].join(",") === "158,167,158,155"); // U+6925
assert.throws(() => {ms932Encoder.encode("\u6927")}, {name:"Error",message:"EncodingError U+6927"});
r = r && ([...ms932Encoder.encode("椨")].join(",") === "158,171"); // U+6928
assert.throws(() => {ms932Encoder.encode("\u6929")}, {name:"Error",message:"EncodingError U+6929"});
r = r && ([...ms932Encoder.encode("椪")].join(",") === "158,172"); // U+692A
assert.throws(() => {ms932Encoder.encode("\u692B")}, {name:"Error",message:"EncodingError U+692B"});
assert.throws(() => {ms932Encoder.encode("\u692C")}, {name:"Error",message:"EncodingError U+692C"});
assert.throws(() => {ms932Encoder.encode("\u692D")}, {name:"Error",message:"EncodingError U+692D"});
assert.throws(() => {ms932Encoder.encode("\u692E")}, {name:"Error",message:"EncodingError U+692E"});
assert.throws(() => {ms932Encoder.encode("\u692F")}, {name:"Error",message:"EncodingError U+692F"});
r = r && ([...ms932Encoder.encode("椰")].join(",") === "158,189"); // U+6930
assert.throws(() => {ms932Encoder.encode("\u6931")}, {name:"Error",message:"EncodingError U+6931"});
assert.throws(() => {ms932Encoder.encode("\u6932")}, {name:"Error",message:"EncodingError U+6932"});
assert.throws(() => {ms932Encoder.encode("\u6933")}, {name:"Error",message:"EncodingError U+6933"});
r = r && ([...ms932Encoder.encode("椴")].join(",") === "147,204"); // U+6934
assert.throws(() => {ms932Encoder.encode("\u6935")}, {name:"Error",message:"EncodingError U+6935"});
r = r && ([...ms932Encoder.encode("椶")].join(",") === "158,162"); // U+6936
assert.throws(() => {ms932Encoder.encode("\u6937")}, {name:"Error",message:"EncodingError U+6937"});
assert.throws(() => {ms932Encoder.encode("\u6938")}, {name:"Error",message:"EncodingError U+6938"});
r = r && ([...ms932Encoder.encode("椹")].join(",") === "158,185"); // U+6939
assert.throws(() => {ms932Encoder.encode("\u693A")}, {name:"Error",message:"EncodingError U+693A"});
assert.throws(() => {ms932Encoder.encode("\u693B")}, {name:"Error",message:"EncodingError U+693B"});
assert.throws(() => {ms932Encoder.encode("\u693C")}, {name:"Error",message:"EncodingError U+693C"});
r = r && ([...ms932Encoder.encode("椽")].join(",") === "158,187"); // U+693D
assert.throws(() => {ms932Encoder.encode("\u693E")}, {name:"Error",message:"EncodingError U+693E"});
r = r && ([...ms932Encoder.encode("椿")].join(",") === "146,214"); // U+693F
assert.throws(() => {ms932Encoder.encode("\u6940")}, {name:"Error",message:"EncodingError U+6940"});
assert.throws(() => {ms932Encoder.encode("\u6941")}, {name:"Error",message:"EncodingError U+6941"});
assert.throws(() => {ms932Encoder.encode("\u6942")}, {name:"Error",message:"EncodingError U+6942"});
assert.throws(() => {ms932Encoder.encode("\u6943")}, {name:"Error",message:"EncodingError U+6943"});
assert.throws(() => {ms932Encoder.encode("\u6944")}, {name:"Error",message:"EncodingError U+6944"});
assert.throws(() => {ms932Encoder.encode("\u6945")}, {name:"Error",message:"EncodingError U+6945"});
assert.throws(() => {ms932Encoder.encode("\u6946")}, {name:"Error",message:"EncodingError U+6946"});
assert.throws(() => {ms932Encoder.encode("\u6947")}, {name:"Error",message:"EncodingError U+6947"});
assert.throws(() => {ms932Encoder.encode("\u6948")}, {name:"Error",message:"EncodingError U+6948"});
assert.throws(() => {ms932Encoder.encode("\u6949")}, {name:"Error",message:"EncodingError U+6949"});
r = r && ([...ms932Encoder.encode("楊")].join(",") === "151,107"); // U+694A
assert.throws(() => {ms932Encoder.encode("\u694B")}, {name:"Error",message:"EncodingError U+694B"});
assert.throws(() => {ms932Encoder.encode("\u694C")}, {name:"Error",message:"EncodingError U+694C"});
assert.throws(() => {ms932Encoder.encode("\u694D")}, {name:"Error",message:"EncodingError U+694D"});
assert.throws(() => {ms932Encoder.encode("\u694E")}, {name:"Error",message:"EncodingError U+694E"});
assert.throws(() => {ms932Encoder.encode("\u694F")}, {name:"Error",message:"EncodingError U+694F"});
assert.throws(() => {ms932Encoder.encode("\u6950")}, {name:"Error",message:"EncodingError U+6950"});
assert.throws(() => {ms932Encoder.encode("\u6951")}, {name:"Error",message:"EncodingError U+6951"});
assert.throws(() => {ms932Encoder.encode("\u6952")}, {name:"Error",message:"EncodingError U+6952"});
r = r && ([...ms932Encoder.encode("楓楔楕")].join(",") === "149,150,158,182,145,200"); // U+6953
assert.throws(() => {ms932Encoder.encode("\u6956")}, {name:"Error",message:"EncodingError U+6956"});
assert.throws(() => {ms932Encoder.encode("\u6957")}, {name:"Error",message:"EncodingError U+6957"});
assert.throws(() => {ms932Encoder.encode("\u6958")}, {name:"Error",message:"EncodingError U+6958"});
r = r && ([...ms932Encoder.encode("楙楚")].join(",") === "158,188,145,94"); // U+6959
assert.throws(() => {ms932Encoder.encode("\u695B")}, {name:"Error",message:"EncodingError U+695B"});
r = r && ([...ms932Encoder.encode("楜楝楞")].join(",") === "158,179,158,192,158,191"); // U+695C
assert.throws(() => {ms932Encoder.encode("\u695F")}, {name:"Error",message:"EncodingError U+695F"});
r = r && ([...ms932Encoder.encode("楠楡楢")].join(",") === "147,237,158,190,147,232"); // U+6960
assert.throws(() => {ms932Encoder.encode("\u6963")}, {name:"Error",message:"EncodingError U+6963"});
assert.throws(() => {ms932Encoder.encode("\u6964")}, {name:"Error",message:"EncodingError U+6964"});
assert.throws(() => {ms932Encoder.encode("\u6965")}, {name:"Error",message:"EncodingError U+6965"});
assert.throws(() => {ms932Encoder.encode("\u6966")}, {name:"Error",message:"EncodingError U+6966"});
assert.throws(() => {ms932Encoder.encode("\u6967")}, {name:"Error",message:"EncodingError U+6967"});
r = r && ([...ms932Encoder.encode("楨")].join(",") === "250,233"); // U+6968
assert.throws(() => {ms932Encoder.encode("\u6969")}, {name:"Error",message:"EncodingError U+6969"});
r = r && ([...ms932Encoder.encode("楪楫")].join(",") === "158,194,158,181"); // U+696A
assert.throws(() => {ms932Encoder.encode("\u696C")}, {name:"Error",message:"EncodingError U+696C"});
r = r && ([...ms932Encoder.encode("業楮楯")].join(",") === "139,198,158,184,143,124"); // U+696D
assert.throws(() => {ms932Encoder.encode("\u6970")}, {name:"Error",message:"EncodingError U+6970"});
assert.throws(() => {ms932Encoder.encode("\u6971")}, {name:"Error",message:"EncodingError U+6971"});
assert.throws(() => {ms932Encoder.encode("\u6972")}, {name:"Error",message:"EncodingError U+6972"});
r = r && ([...ms932Encoder.encode("楳楴極")].join(",") === "148,128,158,186,139,201"); // U+6973
assert.throws(() => {ms932Encoder.encode("\u6976")}, {name:"Error",message:"EncodingError U+6976"});
r = r && ([...ms932Encoder.encode("楷楸楹")].join(",") === "158,178,158,180,158,177"); // U+6977
assert.throws(() => {ms932Encoder.encode("\u697A")}, {name:"Error",message:"EncodingError U+697A"});
assert.throws(() => {ms932Encoder.encode("\u697B")}, {name:"Error",message:"EncodingError U+697B"});
r = r && ([...ms932Encoder.encode("楼楽楾")].join(",") === "152,79,138,121,158,183"); // U+697C
assert.throws(() => {ms932Encoder.encode("\u697F")}, {name:"Error",message:"EncodingError U+697F"});
assert.throws(() => {ms932Encoder.encode("\u6980")}, {name:"Error",message:"EncodingError U+6980"});
r = r && ([...ms932Encoder.encode("榁概")].join(",") === "158,193,138,84"); // U+6981
assert.throws(() => {ms932Encoder.encode("\u6983")}, {name:"Error",message:"EncodingError U+6983"});
assert.throws(() => {ms932Encoder.encode("\u6984")}, {name:"Error",message:"EncodingError U+6984"});
assert.throws(() => {ms932Encoder.encode("\u6985")}, {name:"Error",message:"EncodingError U+6985"});
assert.throws(() => {ms932Encoder.encode("\u6986")}, {name:"Error",message:"EncodingError U+6986"});
assert.throws(() => {ms932Encoder.encode("\u6987")}, {name:"Error",message:"EncodingError U+6987"});
assert.throws(() => {ms932Encoder.encode("\u6988")}, {name:"Error",message:"EncodingError U+6988"});
assert.throws(() => {ms932Encoder.encode("\u6989")}, {name:"Error",message:"EncodingError U+6989"});
r = r && ([...ms932Encoder.encode("榊")].join(",") === "141,229"); // U+698A
assert.throws(() => {ms932Encoder.encode("\u698B")}, {name:"Error",message:"EncodingError U+698B"});
assert.throws(() => {ms932Encoder.encode("\u698C")}, {name:"Error",message:"EncodingError U+698C"});
assert.throws(() => {ms932Encoder.encode("\u698D")}, {name:"Error",message:"EncodingError U+698D"});
r = r && ([...ms932Encoder.encode("榎")].join(",") === "137,124"); // U+698E
assert.throws(() => {ms932Encoder.encode("\u698F")}, {name:"Error",message:"EncodingError U+698F"});
assert.throws(() => {ms932Encoder.encode("\u6990")}, {name:"Error",message:"EncodingError U+6990"});
r = r && ([...ms932Encoder.encode("榑")].join(",") === "158,210"); // U+6991
assert.throws(() => {ms932Encoder.encode("\u6992")}, {name:"Error",message:"EncodingError U+6992"});
assert.throws(() => {ms932Encoder.encode("\u6993")}, {name:"Error",message:"EncodingError U+6993"});
r = r && ([...ms932Encoder.encode("榔榕")].join(",") === "152,80,158,213"); // U+6994
assert.throws(() => {ms932Encoder.encode("\u6996")}, {name:"Error",message:"EncodingError U+6996"});
assert.throws(() => {ms932Encoder.encode("\u6997")}, {name:"Error",message:"EncodingError U+6997"});
r = r && ([...ms932Encoder.encode("榘")].join(",") === "250,235"); // U+6998
assert.throws(() => {ms932Encoder.encode("\u6999")}, {name:"Error",message:"EncodingError U+6999"});
assert.throws(() => {ms932Encoder.encode("\u699A")}, {name:"Error",message:"EncodingError U+699A"});
r = r && ([...ms932Encoder.encode("榛榜")].join(",") === "144,89,158,212"); // U+699B
assert.throws(() => {ms932Encoder.encode("\u699D")}, {name:"Error",message:"EncodingError U+699D"});
assert.throws(() => {ms932Encoder.encode("\u699E")}, {name:"Error",message:"EncodingError U+699E"});
assert.throws(() => {ms932Encoder.encode("\u699F")}, {name:"Error",message:"EncodingError U+699F"});
r = r && ([...ms932Encoder.encode("榠")].join(",") === "158,211"); // U+69A0
assert.throws(() => {ms932Encoder.encode("\u69A1")}, {name:"Error",message:"EncodingError U+69A1"});
assert.throws(() => {ms932Encoder.encode("\u69A2")}, {name:"Error",message:"EncodingError U+69A2"});
assert.throws(() => {ms932Encoder.encode("\u69A3")}, {name:"Error",message:"EncodingError U+69A3"});
assert.throws(() => {ms932Encoder.encode("\u69A4")}, {name:"Error",message:"EncodingError U+69A4"});
assert.throws(() => {ms932Encoder.encode("\u69A5")}, {name:"Error",message:"EncodingError U+69A5"});
assert.throws(() => {ms932Encoder.encode("\u69A6")}, {name:"Error",message:"EncodingError U+69A6"});
r = r && ([...ms932Encoder.encode("榧")].join(",") === "158,208"); // U+69A7
assert.throws(() => {ms932Encoder.encode("\u69A8")}, {name:"Error",message:"EncodingError U+69A8"});
assert.throws(() => {ms932Encoder.encode("\u69A9")}, {name:"Error",message:"EncodingError U+69A9"});
assert.throws(() => {ms932Encoder.encode("\u69AA")}, {name:"Error",message:"EncodingError U+69AA"});
assert.throws(() => {ms932Encoder.encode("\u69AB")}, {name:"Error",message:"EncodingError U+69AB"});
assert.throws(() => {ms932Encoder.encode("\u69AC")}, {name:"Error",message:"EncodingError U+69AC"});
assert.throws(() => {ms932Encoder.encode("\u69AD")}, {name:"Error",message:"EncodingError U+69AD"});
r = r && ([...ms932Encoder.encode("榮")].join(",") === "158,196"); // U+69AE
assert.throws(() => {ms932Encoder.encode("\u69AF")}, {name:"Error",message:"EncodingError U+69AF"});
assert.throws(() => {ms932Encoder.encode("\u69B0")}, {name:"Error",message:"EncodingError U+69B0"});
r = r && ([...ms932Encoder.encode("榱榲")].join(",") === "158,225,158,195"); // U+69B1
assert.throws(() => {ms932Encoder.encode("\u69B3")}, {name:"Error",message:"EncodingError U+69B3"});
r = r && ([...ms932Encoder.encode("榴")].join(",") === "158,214"); // U+69B4
assert.throws(() => {ms932Encoder.encode("\u69B5")}, {name:"Error",message:"EncodingError U+69B5"});
assert.throws(() => {ms932Encoder.encode("\u69B6")}, {name:"Error",message:"EncodingError U+69B6"});
assert.throws(() => {ms932Encoder.encode("\u69B7")}, {name:"Error",message:"EncodingError U+69B7"});
assert.throws(() => {ms932Encoder.encode("\u69B8")}, {name:"Error",message:"EncodingError U+69B8"});
assert.throws(() => {ms932Encoder.encode("\u69B9")}, {name:"Error",message:"EncodingError U+69B9"});
assert.throws(() => {ms932Encoder.encode("\u69BA")}, {name:"Error",message:"EncodingError U+69BA"});
r = r && ([...ms932Encoder.encode("榻")].join(",") === "158,206"); // U+69BB
assert.throws(() => {ms932Encoder.encode("\u69BC")}, {name:"Error",message:"EncodingError U+69BC"});
assert.throws(() => {ms932Encoder.encode("\u69BD")}, {name:"Error",message:"EncodingError U+69BD"});
r = r && ([...ms932Encoder.encode("榾榿")].join(",") === "158,201,158,198"); // U+69BE
assert.throws(() => {ms932Encoder.encode("\u69C0")}, {name:"Error",message:"EncodingError U+69C0"});
r = r && ([...ms932Encoder.encode("槁")].join(",") === "158,199"); // U+69C1
assert.throws(() => {ms932Encoder.encode("\u69C2")}, {name:"Error",message:"EncodingError U+69C2"});
r = r && ([...ms932Encoder.encode("槃")].join(",") === "158,207"); // U+69C3
assert.throws(() => {ms932Encoder.encode("\u69C4")}, {name:"Error",message:"EncodingError U+69C4"});
assert.throws(() => {ms932Encoder.encode("\u69C5")}, {name:"Error",message:"EncodingError U+69C5"});
assert.throws(() => {ms932Encoder.encode("\u69C6")}, {name:"Error",message:"EncodingError U+69C6"});
r = r && ([...ms932Encoder.encode("槇")].join(",") === "234,160"); // U+69C7
assert.throws(() => {ms932Encoder.encode("\u69C8")}, {name:"Error",message:"EncodingError U+69C8"});
assert.throws(() => {ms932Encoder.encode("\u69C9")}, {name:"Error",message:"EncodingError U+69C9"});
r = r && ([...ms932Encoder.encode("槊構槌槍槎")].join(",") === "158,204,141,92,146,198,145,132,158,202"); // U+69CA
assert.throws(() => {ms932Encoder.encode("\u69CF")}, {name:"Error",message:"EncodingError U+69CF"});
r = r && ([...ms932Encoder.encode("槐")].join(",") === "158,197"); // U+69D0
assert.throws(() => {ms932Encoder.encode("\u69D1")}, {name:"Error",message:"EncodingError U+69D1"});
assert.throws(() => {ms932Encoder.encode("\u69D2")}, {name:"Error",message:"EncodingError U+69D2"});
r = r && ([...ms932Encoder.encode("槓")].join(",") === "158,200"); // U+69D3
assert.throws(() => {ms932Encoder.encode("\u69D4")}, {name:"Error",message:"EncodingError U+69D4"});
assert.throws(() => {ms932Encoder.encode("\u69D5")}, {name:"Error",message:"EncodingError U+69D5"});
assert.throws(() => {ms932Encoder.encode("\u69D6")}, {name:"Error",message:"EncodingError U+69D6"});
assert.throws(() => {ms932Encoder.encode("\u69D7")}, {name:"Error",message:"EncodingError U+69D7"});
r = r && ([...ms932Encoder.encode("様槙")].join(",") === "151,108,150,138"); // U+69D8
assert.throws(() => {ms932Encoder.encode("\u69DA")}, {name:"Error",message:"EncodingError U+69DA"});
assert.throws(() => {ms932Encoder.encode("\u69DB")}, {name:"Error",message:"EncodingError U+69DB"});
assert.throws(() => {ms932Encoder.encode("\u69DC")}, {name:"Error",message:"EncodingError U+69DC"});
r = r && ([...ms932Encoder.encode("槝槞")].join(",") === "158,205,158,215"); // U+69DD
assert.throws(() => {ms932Encoder.encode("\u69DF")}, {name:"Error",message:"EncodingError U+69DF"});
assert.throws(() => {ms932Encoder.encode("\u69E0")}, {name:"Error",message:"EncodingError U+69E0"});
assert.throws(() => {ms932Encoder.encode("\u69E1")}, {name:"Error",message:"EncodingError U+69E1"});
r = r && ([...ms932Encoder.encode("槢")].join(",") === "250,236"); // U+69E2
assert.throws(() => {ms932Encoder.encode("\u69E3")}, {name:"Error",message:"EncodingError U+69E3"});
assert.throws(() => {ms932Encoder.encode("\u69E4")}, {name:"Error",message:"EncodingError U+69E4"});
assert.throws(() => {ms932Encoder.encode("\u69E5")}, {name:"Error",message:"EncodingError U+69E5"});
assert.throws(() => {ms932Encoder.encode("\u69E6")}, {name:"Error",message:"EncodingError U+69E6"});
r = r && ([...ms932Encoder.encode("槧槨")].join(",") === "158,223,158,216"); // U+69E7
assert.throws(() => {ms932Encoder.encode("\u69E9")}, {name:"Error",message:"EncodingError U+69E9"});
assert.throws(() => {ms932Encoder.encode("\u69EA")}, {name:"Error",message:"EncodingError U+69EA"});
r = r && ([...ms932Encoder.encode("槫")].join(",") === "158,229"); // U+69EB
assert.throws(() => {ms932Encoder.encode("\u69EC")}, {name:"Error",message:"EncodingError U+69EC"});
r = r && ([...ms932Encoder.encode("槭")].join(",") === "158,227"); // U+69ED
assert.throws(() => {ms932Encoder.encode("\u69EE")}, {name:"Error",message:"EncodingError U+69EE"});
assert.throws(() => {ms932Encoder.encode("\u69EF")}, {name:"Error",message:"EncodingError U+69EF"});
assert.throws(() => {ms932Encoder.encode("\u69F0")}, {name:"Error",message:"EncodingError U+69F0"});
assert.throws(() => {ms932Encoder.encode("\u69F1")}, {name:"Error",message:"EncodingError U+69F1"});
r = r && ([...ms932Encoder.encode("槲")].join(",") === "158,222"); // U+69F2
assert.throws(() => {ms932Encoder.encode("\u69F3")}, {name:"Error",message:"EncodingError U+69F3"});
assert.throws(() => {ms932Encoder.encode("\u69F4")}, {name:"Error",message:"EncodingError U+69F4"});
assert.throws(() => {ms932Encoder.encode("\u69F5")}, {name:"Error",message:"EncodingError U+69F5"});
assert.throws(() => {ms932Encoder.encode("\u69F6")}, {name:"Error",message:"EncodingError U+69F6"});
assert.throws(() => {ms932Encoder.encode("\u69F7")}, {name:"Error",message:"EncodingError U+69F7"});
assert.throws(() => {ms932Encoder.encode("\u69F8")}, {name:"Error",message:"EncodingError U+69F8"});
r = r && ([...ms932Encoder.encode("槹")].join(",") === "158,221"); // U+69F9
assert.throws(() => {ms932Encoder.encode("\u69FA")}, {name:"Error",message:"EncodingError U+69FA"});
r = r && ([...ms932Encoder.encode("槻")].join(",") === "146,206"); // U+69FB
assert.throws(() => {ms932Encoder.encode("\u69FC")}, {name:"Error",message:"EncodingError U+69FC"});
r = r && ([...ms932Encoder.encode("槽")].join(",") === "145,133"); // U+69FD
assert.throws(() => {ms932Encoder.encode("\u69FE")}, {name:"Error",message:"EncodingError U+69FE"});
r = r && ([...ms932Encoder.encode("槿")].join(",") === "158,219"); // U+69FF
assert.throws(() => {ms932Encoder.encode("\u6A00")}, {name:"Error",message:"EncodingError U+6A00"});
assert.throws(() => {ms932Encoder.encode("\u6A01")}, {name:"Error",message:"EncodingError U+6A01"});
r = r && ([...ms932Encoder.encode("樂")].join(",") === "158,217"); // U+6A02
assert.throws(() => {ms932Encoder.encode("\u6A03")}, {name:"Error",message:"EncodingError U+6A03"});
assert.throws(() => {ms932Encoder.encode("\u6A04")}, {name:"Error",message:"EncodingError U+6A04"});
r = r && ([...ms932Encoder.encode("樅")].join(",") === "158,224"); // U+6A05
assert.throws(() => {ms932Encoder.encode("\u6A06")}, {name:"Error",message:"EncodingError U+6A06"});
assert.throws(() => {ms932Encoder.encode("\u6A07")}, {name:"Error",message:"EncodingError U+6A07"});
assert.throws(() => {ms932Encoder.encode("\u6A08")}, {name:"Error",message:"EncodingError U+6A08"});
assert.throws(() => {ms932Encoder.encode("\u6A09")}, {name:"Error",message:"EncodingError U+6A09"});
r = r && ([...ms932Encoder.encode("樊樋樌")].join(",") === "158,230,148,243,158,236"); // U+6A0A
assert.throws(() => {ms932Encoder.encode("\u6A0D")}, {name:"Error",message:"EncodingError U+6A0D"});
assert.throws(() => {ms932Encoder.encode("\u6A0E")}, {name:"Error",message:"EncodingError U+6A0E"});
assert.throws(() => {ms932Encoder.encode("\u6A0F")}, {name:"Error",message:"EncodingError U+6A0F"});
assert.throws(() => {ms932Encoder.encode("\u6A10")}, {name:"Error",message:"EncodingError U+6A10"});
assert.throws(() => {ms932Encoder.encode("\u6A11")}, {name:"Error",message:"EncodingError U+6A11"});
r = r && ([...ms932Encoder.encode("樒樓樔")].join(",") === "158,231,158,234,158,228"); // U+6A12
assert.throws(() => {ms932Encoder.encode("\u6A15")}, {name:"Error",message:"EncodingError U+6A15"});
assert.throws(() => {ms932Encoder.encode("\u6A16")}, {name:"Error",message:"EncodingError U+6A16"});
r = r && ([...ms932Encoder.encode("樗")].join(",") === "146,148"); // U+6A17
assert.throws(() => {ms932Encoder.encode("\u6A18")}, {name:"Error",message:"EncodingError U+6A18"});
r = r && ([...ms932Encoder.encode("標")].join(",") === "149,87"); // U+6A19
assert.throws(() => {ms932Encoder.encode("\u6A1A")}, {name:"Error",message:"EncodingError U+6A1A"});
r = r && ([...ms932Encoder.encode("樛")].join(",") === "158,218"); // U+6A1B
assert.throws(() => {ms932Encoder.encode("\u6A1C")}, {name:"Error",message:"EncodingError U+6A1C"});
assert.throws(() => {ms932Encoder.encode("\u6A1D")}, {name:"Error",message:"EncodingError U+6A1D"});
r = r && ([...ms932Encoder.encode("樞樟")].join(",") === "158,226,143,190"); // U+6A1E
assert.throws(() => {ms932Encoder.encode("\u6A20")}, {name:"Error",message:"EncodingError U+6A20"});
r = r && ([...ms932Encoder.encode("模樢樣")].join(",") === "150,205,158,246,158,233"); // U+6A21
assert.throws(() => {ms932Encoder.encode("\u6A24")}, {name:"Error",message:"EncodingError U+6A24"});
assert.throws(() => {ms932Encoder.encode("\u6A25")}, {name:"Error",message:"EncodingError U+6A25"});
assert.throws(() => {ms932Encoder.encode("\u6A26")}, {name:"Error",message:"EncodingError U+6A26"});
assert.throws(() => {ms932Encoder.encode("\u6A27")}, {name:"Error",message:"EncodingError U+6A27"});
assert.throws(() => {ms932Encoder.encode("\u6A28")}, {name:"Error",message:"EncodingError U+6A28"});
r = r && ([...ms932Encoder.encode("権横樫")].join(",") === "140,160,137,161,138,126"); // U+6A29
assert.throws(() => {ms932Encoder.encode("\u6A2C")}, {name:"Error",message:"EncodingError U+6A2C"});
assert.throws(() => {ms932Encoder.encode("\u6A2D")}, {name:"Error",message:"EncodingError U+6A2D"});
r = r && ([...ms932Encoder.encode("樮")].join(",") === "158,209"); // U+6A2E
assert.throws(() => {ms932Encoder.encode("\u6A2F")}, {name:"Error",message:"EncodingError U+6A2F"});
r = r && ([...ms932Encoder.encode("樰")].join(",") === "250,237"); // U+6A30
assert.throws(() => {ms932Encoder.encode("\u6A31")}, {name:"Error",message:"EncodingError U+6A31"});
assert.throws(() => {ms932Encoder.encode("\u6A32")}, {name:"Error",message:"EncodingError U+6A32"});
assert.throws(() => {ms932Encoder.encode("\u6A33")}, {name:"Error",message:"EncodingError U+6A33"});
assert.throws(() => {ms932Encoder.encode("\u6A34")}, {name:"Error",message:"EncodingError U+6A34"});
r = r && ([...ms932Encoder.encode("樵樶")].join(",") === "143,191,158,238"); // U+6A35
assert.throws(() => {ms932Encoder.encode("\u6A37")}, {name:"Error",message:"EncodingError U+6A37"});
r = r && ([...ms932Encoder.encode("樸樹樺")].join(",") === "158,245,142,247,138,146"); // U+6A38
assert.throws(() => {ms932Encoder.encode("\u6A3B")}, {name:"Error",message:"EncodingError U+6A3B"});
assert.throws(() => {ms932Encoder.encode("\u6A3C")}, {name:"Error",message:"EncodingError U+6A3C"});
r = r && ([...ms932Encoder.encode("樽")].join(",") === "146,77"); // U+6A3D
assert.throws(() => {ms932Encoder.encode("\u6A3E")}, {name:"Error",message:"EncodingError U+6A3E"});
assert.throws(() => {ms932Encoder.encode("\u6A3F")}, {name:"Error",message:"EncodingError U+6A3F"});
assert.throws(() => {ms932Encoder.encode("\u6A40")}, {name:"Error",message:"EncodingError U+6A40"});
assert.throws(() => {ms932Encoder.encode("\u6A41")}, {name:"Error",message:"EncodingError U+6A41"});
assert.throws(() => {ms932Encoder.encode("\u6A42")}, {name:"Error",message:"EncodingError U+6A42"});
assert.throws(() => {ms932Encoder.encode("\u6A43")}, {name:"Error",message:"EncodingError U+6A43"});
r = r && ([...ms932Encoder.encode("橄")].join(",") === "158,235"); // U+6A44
assert.throws(() => {ms932Encoder.encode("\u6A45")}, {name:"Error",message:"EncodingError U+6A45"});
r = r && ([...ms932Encoder.encode("橆橇橈")].join(",") === "250,239,158,240,158,244"); // U+6A46
assert.throws(() => {ms932Encoder.encode("\u6A49")}, {name:"Error",message:"EncodingError U+6A49"});
assert.throws(() => {ms932Encoder.encode("\u6A4A")}, {name:"Error",message:"EncodingError U+6A4A"});
r = r && ([...ms932Encoder.encode("橋")].join(",") === "139,180"); // U+6A4B
assert.throws(() => {ms932Encoder.encode("\u6A4C")}, {name:"Error",message:"EncodingError U+6A4C"});
assert.throws(() => {ms932Encoder.encode("\u6A4D")}, {name:"Error",message:"EncodingError U+6A4D"});
assert.throws(() => {ms932Encoder.encode("\u6A4E")}, {name:"Error",message:"EncodingError U+6A4E"});
assert.throws(() => {ms932Encoder.encode("\u6A4F")}, {name:"Error",message:"EncodingError U+6A4F"});
assert.throws(() => {ms932Encoder.encode("\u6A50")}, {name:"Error",message:"EncodingError U+6A50"});
assert.throws(() => {ms932Encoder.encode("\u6A51")}, {name:"Error",message:"EncodingError U+6A51"});
assert.throws(() => {ms932Encoder.encode("\u6A52")}, {name:"Error",message:"EncodingError U+6A52"});
assert.throws(() => {ms932Encoder.encode("\u6A53")}, {name:"Error",message:"EncodingError U+6A53"});
assert.throws(() => {ms932Encoder.encode("\u6A54")}, {name:"Error",message:"EncodingError U+6A54"});
assert.throws(() => {ms932Encoder.encode("\u6A55")}, {name:"Error",message:"EncodingError U+6A55"});
assert.throws(() => {ms932Encoder.encode("\u6A56")}, {name:"Error",message:"EncodingError U+6A56"});
assert.throws(() => {ms932Encoder.encode("\u6A57")}, {name:"Error",message:"EncodingError U+6A57"});
r = r && ([...ms932Encoder.encode("橘橙")].join(",") === "139,107,158,242"); // U+6A58
assert.throws(() => {ms932Encoder.encode("\u6A5A")}, {name:"Error",message:"EncodingError U+6A5A"});
assert.throws(() => {ms932Encoder.encode("\u6A5B")}, {name:"Error",message:"EncodingError U+6A5B"});
assert.throws(() => {ms932Encoder.encode("\u6A5C")}, {name:"Error",message:"EncodingError U+6A5C"});
assert.throws(() => {ms932Encoder.encode("\u6A5D")}, {name:"Error",message:"EncodingError U+6A5D"});
assert.throws(() => {ms932Encoder.encode("\u6A5E")}, {name:"Error",message:"EncodingError U+6A5E"});
r = r && ([...ms932Encoder.encode("機")].join(",") === "139,64"); // U+6A5F
assert.throws(() => {ms932Encoder.encode("\u6A60")}, {name:"Error",message:"EncodingError U+6A60"});
r = r && ([...ms932Encoder.encode("橡橢")].join(",") === "147,201,158,241"); // U+6A61
assert.throws(() => {ms932Encoder.encode("\u6A63")}, {name:"Error",message:"EncodingError U+6A63"});
assert.throws(() => {ms932Encoder.encode("\u6A64")}, {name:"Error",message:"EncodingError U+6A64"});
assert.throws(() => {ms932Encoder.encode("\u6A65")}, {name:"Error",message:"EncodingError U+6A65"});
r = r && ([...ms932Encoder.encode("橦")].join(",") === "158,243"); // U+6A66
assert.throws(() => {ms932Encoder.encode("\u6A67")}, {name:"Error",message:"EncodingError U+6A67"});
assert.throws(() => {ms932Encoder.encode("\u6A68")}, {name:"Error",message:"EncodingError U+6A68"});
assert.throws(() => {ms932Encoder.encode("\u6A69")}, {name:"Error",message:"EncodingError U+6A69"});
assert.throws(() => {ms932Encoder.encode("\u6A6A")}, {name:"Error",message:"EncodingError U+6A6A"});
r = r && ([...ms932Encoder.encode("橫")].join(",") === "250,238"); // U+6A6B
assert.throws(() => {ms932Encoder.encode("\u6A6C")}, {name:"Error",message:"EncodingError U+6A6C"});
assert.throws(() => {ms932Encoder.encode("\u6A6D")}, {name:"Error",message:"EncodingError U+6A6D"});
assert.throws(() => {ms932Encoder.encode("\u6A6E")}, {name:"Error",message:"EncodingError U+6A6E"});
assert.throws(() => {ms932Encoder.encode("\u6A6F")}, {name:"Error",message:"EncodingError U+6A6F"});
assert.throws(() => {ms932Encoder.encode("\u6A70")}, {name:"Error",message:"EncodingError U+6A70"});
assert.throws(() => {ms932Encoder.encode("\u6A71")}, {name:"Error",message:"EncodingError U+6A71"});
r = r && ([...ms932Encoder.encode("橲橳")].join(",") === "158,237,250,240"); // U+6A72
assert.throws(() => {ms932Encoder.encode("\u6A74")}, {name:"Error",message:"EncodingError U+6A74"});
assert.throws(() => {ms932Encoder.encode("\u6A75")}, {name:"Error",message:"EncodingError U+6A75"});
assert.throws(() => {ms932Encoder.encode("\u6A76")}, {name:"Error",message:"EncodingError U+6A76"});
assert.throws(() => {ms932Encoder.encode("\u6A77")}, {name:"Error",message:"EncodingError U+6A77"});
r = r && ([...ms932Encoder.encode("橸")].join(",") === "158,239"); // U+6A78
assert.throws(() => {ms932Encoder.encode("\u6A79")}, {name:"Error",message:"EncodingError U+6A79"});
assert.throws(() => {ms932Encoder.encode("\u6A7A")}, {name:"Error",message:"EncodingError U+6A7A"});
assert.throws(() => {ms932Encoder.encode("\u6A7B")}, {name:"Error",message:"EncodingError U+6A7B"});
assert.throws(() => {ms932Encoder.encode("\u6A7C")}, {name:"Error",message:"EncodingError U+6A7C"});
assert.throws(() => {ms932Encoder.encode("\u6A7D")}, {name:"Error",message:"EncodingError U+6A7D"});
r = r && ([...ms932Encoder.encode("橾橿檀")].join(",") === "250,241,138,128,146,104"); // U+6A7E
assert.throws(() => {ms932Encoder.encode("\u6A81")}, {name:"Error",message:"EncodingError U+6A81"});
assert.throws(() => {ms932Encoder.encode("\u6A82")}, {name:"Error",message:"EncodingError U+6A82"});
assert.throws(() => {ms932Encoder.encode("\u6A83")}, {name:"Error",message:"EncodingError U+6A83"});
r = r && ([...ms932Encoder.encode("檄")].join(",") === "158,250"); // U+6A84
assert.throws(() => {ms932Encoder.encode("\u6A85")}, {name:"Error",message:"EncodingError U+6A85"});
assert.throws(() => {ms932Encoder.encode("\u6A86")}, {name:"Error",message:"EncodingError U+6A86"});
assert.throws(() => {ms932Encoder.encode("\u6A87")}, {name:"Error",message:"EncodingError U+6A87"});
assert.throws(() => {ms932Encoder.encode("\u6A88")}, {name:"Error",message:"EncodingError U+6A88"});
assert.throws(() => {ms932Encoder.encode("\u6A89")}, {name:"Error",message:"EncodingError U+6A89"});
assert.throws(() => {ms932Encoder.encode("\u6A8A")}, {name:"Error",message:"EncodingError U+6A8A"});
assert.throws(() => {ms932Encoder.encode("\u6A8B")}, {name:"Error",message:"EncodingError U+6A8B"});
assert.throws(() => {ms932Encoder.encode("\u6A8C")}, {name:"Error",message:"EncodingError U+6A8C"});
r = r && ([...ms932Encoder.encode("檍檎")].join(",") === "158,248,140,231"); // U+6A8D
assert.throws(() => {ms932Encoder.encode("\u6A8F")}, {name:"Error",message:"EncodingError U+6A8F"});
r = r && ([...ms932Encoder.encode("檐")].join(",") === "158,247"); // U+6A90
assert.throws(() => {ms932Encoder.encode("\u6A91")}, {name:"Error",message:"EncodingError U+6A91"});
assert.throws(() => {ms932Encoder.encode("\u6A92")}, {name:"Error",message:"EncodingError U+6A92"});
assert.throws(() => {ms932Encoder.encode("\u6A93")}, {name:"Error",message:"EncodingError U+6A93"});
assert.throws(() => {ms932Encoder.encode("\u6A94")}, {name:"Error",message:"EncodingError U+6A94"});
assert.throws(() => {ms932Encoder.encode("\u6A95")}, {name:"Error",message:"EncodingError U+6A95"});
assert.throws(() => {ms932Encoder.encode("\u6A96")}, {name:"Error",message:"EncodingError U+6A96"});
r = r && ([...ms932Encoder.encode("檗")].join(",") === "159,64"); // U+6A97
assert.throws(() => {ms932Encoder.encode("\u6A98")}, {name:"Error",message:"EncodingError U+6A98"});
assert.throws(() => {ms932Encoder.encode("\u6A99")}, {name:"Error",message:"EncodingError U+6A99"});
assert.throws(() => {ms932Encoder.encode("\u6A9A")}, {name:"Error",message:"EncodingError U+6A9A"});
assert.throws(() => {ms932Encoder.encode("\u6A9B")}, {name:"Error",message:"EncodingError U+6A9B"});
r = r && ([...ms932Encoder.encode("檜")].join(",") === "158,119"); // U+6A9C
assert.throws(() => {ms932Encoder.encode("\u6A9D")}, {name:"Error",message:"EncodingError U+6A9D"});
assert.throws(() => {ms932Encoder.encode("\u6A9E")}, {name:"Error",message:"EncodingError U+6A9E"});
assert.throws(() => {ms932Encoder.encode("\u6A9F")}, {name:"Error",message:"EncodingError U+6A9F"});
r = r && ([...ms932Encoder.encode("檠")].join(",") === "158,249"); // U+6AA0
assert.throws(() => {ms932Encoder.encode("\u6AA1")}, {name:"Error",message:"EncodingError U+6AA1"});
r = r && ([...ms932Encoder.encode("檢檣")].join(",") === "158,251,158,252"); // U+6AA2
assert.throws(() => {ms932Encoder.encode("\u6AA4")}, {name:"Error",message:"EncodingError U+6AA4"});
assert.throws(() => {ms932Encoder.encode("\u6AA5")}, {name:"Error",message:"EncodingError U+6AA5"});
assert.throws(() => {ms932Encoder.encode("\u6AA6")}, {name:"Error",message:"EncodingError U+6AA6"});
assert.throws(() => {ms932Encoder.encode("\u6AA7")}, {name:"Error",message:"EncodingError U+6AA7"});
assert.throws(() => {ms932Encoder.encode("\u6AA8")}, {name:"Error",message:"EncodingError U+6AA8"});
assert.throws(() => {ms932Encoder.encode("\u6AA9")}, {name:"Error",message:"EncodingError U+6AA9"});
r = r && ([...ms932Encoder.encode("檪")].join(",") === "159,75"); // U+6AAA
assert.throws(() => {ms932Encoder.encode("\u6AAB")}, {name:"Error",message:"EncodingError U+6AAB"});
r = r && ([...ms932Encoder.encode("檬")].join(",") === "159,71"); // U+6AAC
assert.throws(() => {ms932Encoder.encode("\u6AAD")}, {name:"Error",message:"EncodingError U+6AAD"});
r = r && ([...ms932Encoder.encode("檮")].join(",") === "158,141"); // U+6AAE
assert.throws(() => {ms932Encoder.encode("\u6AAF")}, {name:"Error",message:"EncodingError U+6AAF"});
assert.throws(() => {ms932Encoder.encode("\u6AB0")}, {name:"Error",message:"EncodingError U+6AB0"});
assert.throws(() => {ms932Encoder.encode("\u6AB1")}, {name:"Error",message:"EncodingError U+6AB1"});
assert.throws(() => {ms932Encoder.encode("\u6AB2")}, {name:"Error",message:"EncodingError U+6AB2"});
r = r && ([...ms932Encoder.encode("檳")].join(",") === "159,70"); // U+6AB3
assert.throws(() => {ms932Encoder.encode("\u6AB4")}, {name:"Error",message:"EncodingError U+6AB4"});
assert.throws(() => {ms932Encoder.encode("\u6AB5")}, {name:"Error",message:"EncodingError U+6AB5"});
assert.throws(() => {ms932Encoder.encode("\u6AB6")}, {name:"Error",message:"EncodingError U+6AB6"});
assert.throws(() => {ms932Encoder.encode("\u6AB7")}, {name:"Error",message:"EncodingError U+6AB7"});
r = r && ([...ms932Encoder.encode("檸")].join(",") === "159,69"); // U+6AB8
assert.throws(() => {ms932Encoder.encode("\u6AB9")}, {name:"Error",message:"EncodingError U+6AB9"});
assert.throws(() => {ms932Encoder.encode("\u6ABA")}, {name:"Error",message:"EncodingError U+6ABA"});
r = r && ([...ms932Encoder.encode("檻")].join(",") === "159,66"); // U+6ABB
assert.throws(() => {ms932Encoder.encode("\u6ABC")}, {name:"Error",message:"EncodingError U+6ABC"});
assert.throws(() => {ms932Encoder.encode("\u6ABD")}, {name:"Error",message:"EncodingError U+6ABD"});
assert.throws(() => {ms932Encoder.encode("\u6ABE")}, {name:"Error",message:"EncodingError U+6ABE"});
assert.throws(() => {ms932Encoder.encode("\u6ABF")}, {name:"Error",message:"EncodingError U+6ABF"});
assert.throws(() => {ms932Encoder.encode("\u6AC0")}, {name:"Error",message:"EncodingError U+6AC0"});
r = r && ([...ms932Encoder.encode("櫁櫂櫃")].join(",") === "158,232,159,68,159,67"); // U+6AC1
assert.throws(() => {ms932Encoder.encode("\u6AC4")}, {name:"Error",message:"EncodingError U+6AC4"});
assert.throws(() => {ms932Encoder.encode("\u6AC5")}, {name:"Error",message:"EncodingError U+6AC5"});
assert.throws(() => {ms932Encoder.encode("\u6AC6")}, {name:"Error",message:"EncodingError U+6AC6"});
assert.throws(() => {ms932Encoder.encode("\u6AC7")}, {name:"Error",message:"EncodingError U+6AC7"});
assert.throws(() => {ms932Encoder.encode("\u6AC8")}, {name:"Error",message:"EncodingError U+6AC8"});
assert.throws(() => {ms932Encoder.encode("\u6AC9")}, {name:"Error",message:"EncodingError U+6AC9"});
assert.throws(() => {ms932Encoder.encode("\u6ACA")}, {name:"Error",message:"EncodingError U+6ACA"});
assert.throws(() => {ms932Encoder.encode("\u6ACB")}, {name:"Error",message:"EncodingError U+6ACB"});
assert.throws(() => {ms932Encoder.encode("\u6ACC")}, {name:"Error",message:"EncodingError U+6ACC"});
assert.throws(() => {ms932Encoder.encode("\u6ACD")}, {name:"Error",message:"EncodingError U+6ACD"});
assert.throws(() => {ms932Encoder.encode("\u6ACE")}, {name:"Error",message:"EncodingError U+6ACE"});
assert.throws(() => {ms932Encoder.encode("\u6ACF")}, {name:"Error",message:"EncodingError U+6ACF"});
assert.throws(() => {ms932Encoder.encode("\u6AD0")}, {name:"Error",message:"EncodingError U+6AD0"});
r = r && ([...ms932Encoder.encode("櫑")].join(",") === "159,73"); // U+6AD1
assert.throws(() => {ms932Encoder.encode("\u6AD2")}, {name:"Error",message:"EncodingError U+6AD2"});
r = r && ([...ms932Encoder.encode("櫓")].join(",") === "152,69"); // U+6AD3
assert.throws(() => {ms932Encoder.encode("\u6AD4")}, {name:"Error",message:"EncodingError U+6AD4"});
assert.throws(() => {ms932Encoder.encode("\u6AD5")}, {name:"Error",message:"EncodingError U+6AD5"});
assert.throws(() => {ms932Encoder.encode("\u6AD6")}, {name:"Error",message:"EncodingError U+6AD6"});
assert.throws(() => {ms932Encoder.encode("\u6AD7")}, {name:"Error",message:"EncodingError U+6AD7"});
assert.throws(() => {ms932Encoder.encode("\u6AD8")}, {name:"Error",message:"EncodingError U+6AD8"});
assert.throws(() => {ms932Encoder.encode("\u6AD9")}, {name:"Error",message:"EncodingError U+6AD9"});
r = r && ([...ms932Encoder.encode("櫚櫛")].join(",") === "159,76,139,249"); // U+6ADA
assert.throws(() => {ms932Encoder.encode("\u6ADC")}, {name:"Error",message:"EncodingError U+6ADC"});
assert.throws(() => {ms932Encoder.encode("\u6ADD")}, {name:"Error",message:"EncodingError U+6ADD"});
r = r && ([...ms932Encoder.encode("櫞櫟")].join(",") === "159,72,159,74"); // U+6ADE
assert.throws(() => {ms932Encoder.encode("\u6AE0")}, {name:"Error",message:"EncodingError U+6AE0"});
assert.throws(() => {ms932Encoder.encode("\u6AE1")}, {name:"Error",message:"EncodingError U+6AE1"});
r = r && ([...ms932Encoder.encode("櫢")].join(",") === "250,242"); // U+6AE2
assert.throws(() => {ms932Encoder.encode("\u6AE3")}, {name:"Error",message:"EncodingError U+6AE3"});
r = r && ([...ms932Encoder.encode("櫤")].join(",") === "250,243"); // U+6AE4
assert.throws(() => {ms932Encoder.encode("\u6AE5")}, {name:"Error",message:"EncodingError U+6AE5"});
assert.throws(() => {ms932Encoder.encode("\u6AE6")}, {name:"Error",message:"EncodingError U+6AE6"});
assert.throws(() => {ms932Encoder.encode("\u6AE7")}, {name:"Error",message:"EncodingError U+6AE7"});
r = r && ([...ms932Encoder.encode("櫨")].join(",") === "148,165"); // U+6AE8
assert.throws(() => {ms932Encoder.encode("\u6AE9")}, {name:"Error",message:"EncodingError U+6AE9"});
r = r && ([...ms932Encoder.encode("櫪")].join(",") === "159,77"); // U+6AEA
assert.throws(() => {ms932Encoder.encode("\u6AEB")}, {name:"Error",message:"EncodingError U+6AEB"});
assert.throws(() => {ms932Encoder.encode("\u6AEC")}, {name:"Error",message:"EncodingError U+6AEC"});
assert.throws(() => {ms932Encoder.encode("\u6AED")}, {name:"Error",message:"EncodingError U+6AED"});
assert.throws(() => {ms932Encoder.encode("\u6AEE")}, {name:"Error",message:"EncodingError U+6AEE"});
assert.throws(() => {ms932Encoder.encode("\u6AEF")}, {name:"Error",message:"EncodingError U+6AEF"});
assert.throws(() => {ms932Encoder.encode("\u6AF0")}, {name:"Error",message:"EncodingError U+6AF0"});
assert.throws(() => {ms932Encoder.encode("\u6AF1")}, {name:"Error",message:"EncodingError U+6AF1"});
assert.throws(() => {ms932Encoder.encode("\u6AF2")}, {name:"Error",message:"EncodingError U+6AF2"});
assert.throws(() => {ms932Encoder.encode("\u6AF3")}, {name:"Error",message:"EncodingError U+6AF3"});
assert.throws(() => {ms932Encoder.encode("\u6AF4")}, {name:"Error",message:"EncodingError U+6AF4"});
assert.throws(() => {ms932Encoder.encode("\u6AF5")}, {name:"Error",message:"EncodingError U+6AF5"});
assert.throws(() => {ms932Encoder.encode("\u6AF6")}, {name:"Error",message:"EncodingError U+6AF6"});
assert.throws(() => {ms932Encoder.encode("\u6AF7")}, {name:"Error",message:"EncodingError U+6AF7"});
assert.throws(() => {ms932Encoder.encode("\u6AF8")}, {name:"Error",message:"EncodingError U+6AF8"});
assert.throws(() => {ms932Encoder.encode("\u6AF9")}, {name:"Error",message:"EncodingError U+6AF9"});
r = r && ([...ms932Encoder.encode("櫺櫻")].join(",") === "159,81,159,78"); // U+6AFA
assert.throws(() => {ms932Encoder.encode("\u6AFC")}, {name:"Error",message:"EncodingError U+6AFC"});
assert.throws(() => {ms932Encoder.encode("\u6AFD")}, {name:"Error",message:"EncodingError U+6AFD"});
assert.throws(() => {ms932Encoder.encode("\u6AFE")}, {name:"Error",message:"EncodingError U+6AFE"});
assert.throws(() => {ms932Encoder.encode("\u6AFF")}, {name:"Error",message:"EncodingError U+6AFF"});
assert.throws(() => {ms932Encoder.encode("\u6B00")}, {name:"Error",message:"EncodingError U+6B00"});
assert.throws(() => {ms932Encoder.encode("\u6B01")}, {name:"Error",message:"EncodingError U+6B01"});
assert.throws(() => {ms932Encoder.encode("\u6B02")}, {name:"Error",message:"EncodingError U+6B02"});
assert.throws(() => {ms932Encoder.encode("\u6B03")}, {name:"Error",message:"EncodingError U+6B03"});
r = r && ([...ms932Encoder.encode("欄欅")].join(",") === "151,147,159,79"); // U+6B04
assert.throws(() => {ms932Encoder.encode("\u6B06")}, {name:"Error",message:"EncodingError U+6B06"});
assert.throws(() => {ms932Encoder.encode("\u6B07")}, {name:"Error",message:"EncodingError U+6B07"});
assert.throws(() => {ms932Encoder.encode("\u6B08")}, {name:"Error",message:"EncodingError U+6B08"});
assert.throws(() => {ms932Encoder.encode("\u6B09")}, {name:"Error",message:"EncodingError U+6B09"});
r = r && ([...ms932Encoder.encode("權")].join(",") === "158,220"); // U+6B0A
assert.throws(() => {ms932Encoder.encode("\u6B0B")}, {name:"Error",message:"EncodingError U+6B0B"});
assert.throws(() => {ms932Encoder.encode("\u6B0C")}, {name:"Error",message:"EncodingError U+6B0C"});
assert.throws(() => {ms932Encoder.encode("\u6B0D")}, {name:"Error",message:"EncodingError U+6B0D"});
assert.throws(() => {ms932Encoder.encode("\u6B0E")}, {name:"Error",message:"EncodingError U+6B0E"});
assert.throws(() => {ms932Encoder.encode("\u6B0F")}, {name:"Error",message:"EncodingError U+6B0F"});
assert.throws(() => {ms932Encoder.encode("\u6B10")}, {name:"Error",message:"EncodingError U+6B10"});
assert.throws(() => {ms932Encoder.encode("\u6B11")}, {name:"Error",message:"EncodingError U+6B11"});
r = r && ([...ms932Encoder.encode("欒")].join(",") === "159,82"); // U+6B12
assert.throws(() => {ms932Encoder.encode("\u6B13")}, {name:"Error",message:"EncodingError U+6B13"});
assert.throws(() => {ms932Encoder.encode("\u6B14")}, {name:"Error",message:"EncodingError U+6B14"});
assert.throws(() => {ms932Encoder.encode("\u6B15")}, {name:"Error",message:"EncodingError U+6B15"});
r = r && ([...ms932Encoder.encode("欖")].join(",") === "159,83"); // U+6B16
assert.throws(() => {ms932Encoder.encode("\u6B17")}, {name:"Error",message:"EncodingError U+6B17"});
assert.throws(() => {ms932Encoder.encode("\u6B18")}, {name:"Error",message:"EncodingError U+6B18"});
assert.throws(() => {ms932Encoder.encode("\u6B19")}, {name:"Error",message:"EncodingError U+6B19"});
assert.throws(() => {ms932Encoder.encode("\u6B1A")}, {name:"Error",message:"EncodingError U+6B1A"});
assert.throws(() => {ms932Encoder.encode("\u6B1B")}, {name:"Error",message:"EncodingError U+6B1B"});
assert.throws(() => {ms932Encoder.encode("\u6B1C")}, {name:"Error",message:"EncodingError U+6B1C"});
r = r && ([...ms932Encoder.encode("欝")].join(",") === "137,84"); // U+6B1D
assert.throws(() => {ms932Encoder.encode("\u6B1E")}, {name:"Error",message:"EncodingError U+6B1E"});
r = r && ([...ms932Encoder.encode("欟欠次")].join(",") === "159,85,140,135,142,159"); // U+6B1F
assert.throws(() => {ms932Encoder.encode("\u6B22")}, {name:"Error",message:"EncodingError U+6B22"});
r = r && ([...ms932Encoder.encode("欣")].join(",") === "139,211"); // U+6B23
assert.throws(() => {ms932Encoder.encode("\u6B24")}, {name:"Error",message:"EncodingError U+6B24"});
assert.throws(() => {ms932Encoder.encode("\u6B25")}, {name:"Error",message:"EncodingError U+6B25"});
assert.throws(() => {ms932Encoder.encode("\u6B26")}, {name:"Error",message:"EncodingError U+6B26"});
r = r && ([...ms932Encoder.encode("欧")].join(",") === "137,162"); // U+6B27
assert.throws(() => {ms932Encoder.encode("\u6B28")}, {name:"Error",message:"EncodingError U+6B28"});
assert.throws(() => {ms932Encoder.encode("\u6B29")}, {name:"Error",message:"EncodingError U+6B29"});
assert.throws(() => {ms932Encoder.encode("\u6B2A")}, {name:"Error",message:"EncodingError U+6B2A"});
assert.throws(() => {ms932Encoder.encode("\u6B2B")}, {name:"Error",message:"EncodingError U+6B2B"});
assert.throws(() => {ms932Encoder.encode("\u6B2C")}, {name:"Error",message:"EncodingError U+6B2C"});
assert.throws(() => {ms932Encoder.encode("\u6B2D")}, {name:"Error",message:"EncodingError U+6B2D"});
assert.throws(() => {ms932Encoder.encode("\u6B2E")}, {name:"Error",message:"EncodingError U+6B2E"});
assert.throws(() => {ms932Encoder.encode("\u6B2F")}, {name:"Error",message:"EncodingError U+6B2F"});
assert.throws(() => {ms932Encoder.encode("\u6B30")}, {name:"Error",message:"EncodingError U+6B30"});
assert.throws(() => {ms932Encoder.encode("\u6B31")}, {name:"Error",message:"EncodingError U+6B31"});
r = r && ([...ms932Encoder.encode("欲")].join(",") === "151,126"); // U+6B32
assert.throws(() => {ms932Encoder.encode("\u6B33")}, {name:"Error",message:"EncodingError U+6B33"});
assert.throws(() => {ms932Encoder.encode("\u6B34")}, {name:"Error",message:"EncodingError U+6B34"});
assert.throws(() => {ms932Encoder.encode("\u6B35")}, {name:"Error",message:"EncodingError U+6B35"});
assert.throws(() => {ms932Encoder.encode("\u6B36")}, {name:"Error",message:"EncodingError U+6B36"});
r = r && ([...ms932Encoder.encode("欷欸欹欺")].join(",") === "159,87,159,86,159,89,139,92"); // U+6B37
assert.throws(() => {ms932Encoder.encode("\u6B3B")}, {name:"Error",message:"EncodingError U+6B3B"});
assert.throws(() => {ms932Encoder.encode("\u6B3C")}, {name:"Error",message:"EncodingError U+6B3C"});
r = r && ([...ms932Encoder.encode("欽款")].join(",") === "139,212,138,188"); // U+6B3D
assert.throws(() => {ms932Encoder.encode("\u6B3F")}, {name:"Error",message:"EncodingError U+6B3F"});
assert.throws(() => {ms932Encoder.encode("\u6B40")}, {name:"Error",message:"EncodingError U+6B40"});
assert.throws(() => {ms932Encoder.encode("\u6B41")}, {name:"Error",message:"EncodingError U+6B41"});
assert.throws(() => {ms932Encoder.encode("\u6B42")}, {name:"Error",message:"EncodingError U+6B42"});
r = r && ([...ms932Encoder.encode("歃")].join(",") === "159,92"); // U+6B43
assert.throws(() => {ms932Encoder.encode("\u6B44")}, {name:"Error",message:"EncodingError U+6B44"});
assert.throws(() => {ms932Encoder.encode("\u6B45")}, {name:"Error",message:"EncodingError U+6B45"});
assert.throws(() => {ms932Encoder.encode("\u6B46")}, {name:"Error",message:"EncodingError U+6B46"});
r = r && ([...ms932Encoder.encode("歇")].join(",") === "159,91"); // U+6B47
assert.throws(() => {ms932Encoder.encode("\u6B48")}, {name:"Error",message:"EncodingError U+6B48"});
r = r && ([...ms932Encoder.encode("歉")].join(",") === "159,93"); // U+6B49
assert.throws(() => {ms932Encoder.encode("\u6B4A")}, {name:"Error",message:"EncodingError U+6B4A"});
assert.throws(() => {ms932Encoder.encode("\u6B4B")}, {name:"Error",message:"EncodingError U+6B4B"});
r = r && ([...ms932Encoder.encode("歌")].join(",") === "137,204"); // U+6B4C
assert.throws(() => {ms932Encoder.encode("\u6B4D")}, {name:"Error",message:"EncodingError U+6B4D"});
r = r && ([...ms932Encoder.encode("歎")].join(",") === "146,86"); // U+6B4E
assert.throws(() => {ms932Encoder.encode("\u6B4F")}, {name:"Error",message:"EncodingError U+6B4F"});
r = r && ([...ms932Encoder.encode("歐")].join(",") === "159,94"); // U+6B50
assert.throws(() => {ms932Encoder.encode("\u6B51")}, {name:"Error",message:"EncodingError U+6B51"});
assert.throws(() => {ms932Encoder.encode("\u6B52")}, {name:"Error",message:"EncodingError U+6B52"});
r = r && ([...ms932Encoder.encode("歓歔")].join(",") === "138,189,159,96"); // U+6B53
assert.throws(() => {ms932Encoder.encode("\u6B55")}, {name:"Error",message:"EncodingError U+6B55"});
assert.throws(() => {ms932Encoder.encode("\u6B56")}, {name:"Error",message:"EncodingError U+6B56"});
assert.throws(() => {ms932Encoder.encode("\u6B57")}, {name:"Error",message:"EncodingError U+6B57"});
assert.throws(() => {ms932Encoder.encode("\u6B58")}, {name:"Error",message:"EncodingError U+6B58"});
r = r && ([...ms932Encoder.encode("歙")].join(",") === "159,95"); // U+6B59
assert.throws(() => {ms932Encoder.encode("\u6B5A")}, {name:"Error",message:"EncodingError U+6B5A"});
r = r && ([...ms932Encoder.encode("歛")].join(",") === "159,97"); // U+6B5B
assert.throws(() => {ms932Encoder.encode("\u6B5C")}, {name:"Error",message:"EncodingError U+6B5C"});
assert.throws(() => {ms932Encoder.encode("\u6B5D")}, {name:"Error",message:"EncodingError U+6B5D"});
assert.throws(() => {ms932Encoder.encode("\u6B5E")}, {name:"Error",message:"EncodingError U+6B5E"});
r = r && ([...ms932Encoder.encode("歟")].join(",") === "159,98"); // U+6B5F
assert.throws(() => {ms932Encoder.encode("\u6B60")}, {name:"Error",message:"EncodingError U+6B60"});
r = r && ([...ms932Encoder.encode("歡止正此")].join(",") === "159,99,142,126,144,179,141,159"); // U+6B61
assert.throws(() => {ms932Encoder.encode("\u6B65")}, {name:"Error",message:"EncodingError U+6B65"});
r = r && ([...ms932Encoder.encode("武")].join(",") === "149,144"); // U+6B66
assert.throws(() => {ms932Encoder.encode("\u6B67")}, {name:"Error",message:"EncodingError U+6B67"});
assert.throws(() => {ms932Encoder.encode("\u6B68")}, {name:"Error",message:"EncodingError U+6B68"});
r = r && ([...ms932Encoder.encode("歩歪")].join(",") === "149,224,152,99"); // U+6B69
assert.throws(() => {ms932Encoder.encode("\u6B6B")}, {name:"Error",message:"EncodingError U+6B6B"});
assert.throws(() => {ms932Encoder.encode("\u6B6C")}, {name:"Error",message:"EncodingError U+6B6C"});
assert.throws(() => {ms932Encoder.encode("\u6B6D")}, {name:"Error",message:"EncodingError U+6B6D"});
assert.throws(() => {ms932Encoder.encode("\u6B6E")}, {name:"Error",message:"EncodingError U+6B6E"});
r = r && ([...ms932Encoder.encode("歯")].join(",") === "142,149"); // U+6B6F
assert.throws(() => {ms932Encoder.encode("\u6B70")}, {name:"Error",message:"EncodingError U+6B70"});
assert.throws(() => {ms932Encoder.encode("\u6B71")}, {name:"Error",message:"EncodingError U+6B71"});
assert.throws(() => {ms932Encoder.encode("\u6B72")}, {name:"Error",message:"EncodingError U+6B72"});
r = r && ([...ms932Encoder.encode("歳歴")].join(",") === "141,206,151,240"); // U+6B73
assert.throws(() => {ms932Encoder.encode("\u6B75")}, {name:"Error",message:"EncodingError U+6B75"});
assert.throws(() => {ms932Encoder.encode("\u6B76")}, {name:"Error",message:"EncodingError U+6B76"});
assert.throws(() => {ms932Encoder.encode("\u6B77")}, {name:"Error",message:"EncodingError U+6B77"});
r = r && ([...ms932Encoder.encode("歸歹")].join(",") === "159,100,159,101"); // U+6B78
assert.throws(() => {ms932Encoder.encode("\u6B7A")}, {name:"Error",message:"EncodingError U+6B7A"});
r = r && ([...ms932Encoder.encode("死")].join(",") === "142,128"); // U+6B7B
assert.throws(() => {ms932Encoder.encode("\u6B7C")}, {name:"Error",message:"EncodingError U+6B7C"});
assert.throws(() => {ms932Encoder.encode("\u6B7D")}, {name:"Error",message:"EncodingError U+6B7D"});
assert.throws(() => {ms932Encoder.encode("\u6B7E")}, {name:"Error",message:"EncodingError U+6B7E"});
r = r && ([...ms932Encoder.encode("歿殀")].join(",") === "159,102,159,103"); // U+6B7F
assert.throws(() => {ms932Encoder.encode("\u6B81")}, {name:"Error",message:"EncodingError U+6B81"});
assert.throws(() => {ms932Encoder.encode("\u6B82")}, {name:"Error",message:"EncodingError U+6B82"});
r = r && ([...ms932Encoder.encode("殃殄")].join(",") === "159,105,159,104"); // U+6B83
assert.throws(() => {ms932Encoder.encode("\u6B85")}, {name:"Error",message:"EncodingError U+6B85"});
r = r && ([...ms932Encoder.encode("殆")].join(",") === "150,119"); // U+6B86
assert.throws(() => {ms932Encoder.encode("\u6B87")}, {name:"Error",message:"EncodingError U+6B87"});
assert.throws(() => {ms932Encoder.encode("\u6B88")}, {name:"Error",message:"EncodingError U+6B88"});
r = r && ([...ms932Encoder.encode("殉殊残")].join(",") === "143,125,142,234,142,99"); // U+6B89
assert.throws(() => {ms932Encoder.encode("\u6B8C")}, {name:"Error",message:"EncodingError U+6B8C"});
r = r && ([...ms932Encoder.encode("殍")].join(",") === "159,106"); // U+6B8D
assert.throws(() => {ms932Encoder.encode("\u6B8E")}, {name:"Error",message:"EncodingError U+6B8E"});
assert.throws(() => {ms932Encoder.encode("\u6B8F")}, {name:"Error",message:"EncodingError U+6B8F"});
assert.throws(() => {ms932Encoder.encode("\u6B90")}, {name:"Error",message:"EncodingError U+6B90"});
assert.throws(() => {ms932Encoder.encode("\u6B91")}, {name:"Error",message:"EncodingError U+6B91"});
assert.throws(() => {ms932Encoder.encode("\u6B92")}, {name:"Error",message:"EncodingError U+6B92"});
assert.throws(() => {ms932Encoder.encode("\u6B93")}, {name:"Error",message:"EncodingError U+6B93"});
assert.throws(() => {ms932Encoder.encode("\u6B94")}, {name:"Error",message:"EncodingError U+6B94"});
r = r && ([...ms932Encoder.encode("殕殖")].join(",") === "159,108,144,66"); // U+6B95
assert.throws(() => {ms932Encoder.encode("\u6B97")}, {name:"Error",message:"EncodingError U+6B97"});
r = r && ([...ms932Encoder.encode("殘")].join(",") === "159,107"); // U+6B98
assert.throws(() => {ms932Encoder.encode("\u6B99")}, {name:"Error",message:"EncodingError U+6B99"});
assert.throws(() => {ms932Encoder.encode("\u6B9A")}, {name:"Error",message:"EncodingError U+6B9A"});
assert.throws(() => {ms932Encoder.encode("\u6B9B")}, {name:"Error",message:"EncodingError U+6B9B"});
assert.throws(() => {ms932Encoder.encode("\u6B9C")}, {name:"Error",message:"EncodingError U+6B9C"});
assert.throws(() => {ms932Encoder.encode("\u6B9D")}, {name:"Error",message:"EncodingError U+6B9D"});
r = r && ([...ms932Encoder.encode("殞")].join(",") === "159,109"); // U+6B9E
assert.throws(() => {ms932Encoder.encode("\u6B9F")}, {name:"Error",message:"EncodingError U+6B9F"});
assert.throws(() => {ms932Encoder.encode("\u6BA0")}, {name:"Error",message:"EncodingError U+6BA0"});
assert.throws(() => {ms932Encoder.encode("\u6BA1")}, {name:"Error",message:"EncodingError U+6BA1"});
assert.throws(() => {ms932Encoder.encode("\u6BA2")}, {name:"Error",message:"EncodingError U+6BA2"});
assert.throws(() => {ms932Encoder.encode("\u6BA3")}, {name:"Error",message:"EncodingError U+6BA3"});
r = r && ([...ms932Encoder.encode("殤")].join(",") === "159,110"); // U+6BA4
assert.throws(() => {ms932Encoder.encode("\u6BA5")}, {name:"Error",message:"EncodingError U+6BA5"});
assert.throws(() => {ms932Encoder.encode("\u6BA6")}, {name:"Error",message:"EncodingError U+6BA6"});
assert.throws(() => {ms932Encoder.encode("\u6BA7")}, {name:"Error",message:"EncodingError U+6BA7"});
assert.throws(() => {ms932Encoder.encode("\u6BA8")}, {name:"Error",message:"EncodingError U+6BA8"});
assert.throws(() => {ms932Encoder.encode("\u6BA9")}, {name:"Error",message:"EncodingError U+6BA9"});
r = r && ([...ms932Encoder.encode("殪殫")].join(",") === "159,111,159,112"); // U+6BAA
assert.throws(() => {ms932Encoder.encode("\u6BAC")}, {name:"Error",message:"EncodingError U+6BAC"});
assert.throws(() => {ms932Encoder.encode("\u6BAD")}, {name:"Error",message:"EncodingError U+6BAD"});
assert.throws(() => {ms932Encoder.encode("\u6BAE")}, {name:"Error",message:"EncodingError U+6BAE"});
r = r && ([...ms932Encoder.encode("殯")].join(",") === "159,113"); // U+6BAF
assert.throws(() => {ms932Encoder.encode("\u6BB0")}, {name:"Error",message:"EncodingError U+6BB0"});
r = r && ([...ms932Encoder.encode("殱殲殳殴段")].join(",") === "159,115,159,114,159,116,137,163,146,105"); // U+6BB1
assert.throws(() => {ms932Encoder.encode("\u6BB6")}, {name:"Error",message:"EncodingError U+6BB6"});
r = r && ([...ms932Encoder.encode("殷")].join(",") === "159,117"); // U+6BB7
assert.throws(() => {ms932Encoder.encode("\u6BB8")}, {name:"Error",message:"EncodingError U+6BB8"});
assert.throws(() => {ms932Encoder.encode("\u6BB9")}, {name:"Error",message:"EncodingError U+6BB9"});
r = r && ([...ms932Encoder.encode("殺殻殼")].join(",") === "142,69,138,107,159,118"); // U+6BBA
assert.throws(() => {ms932Encoder.encode("\u6BBD")}, {name:"Error",message:"EncodingError U+6BBD"});
assert.throws(() => {ms932Encoder.encode("\u6BBE")}, {name:"Error",message:"EncodingError U+6BBE"});
r = r && ([...ms932Encoder.encode("殿毀")].join(",") === "147,97,154,202"); // U+6BBF
assert.throws(() => {ms932Encoder.encode("\u6BC1")}, {name:"Error",message:"EncodingError U+6BC1"});
assert.throws(() => {ms932Encoder.encode("\u6BC2")}, {name:"Error",message:"EncodingError U+6BC2"});
assert.throws(() => {ms932Encoder.encode("\u6BC3")}, {name:"Error",message:"EncodingError U+6BC3"});
assert.throws(() => {ms932Encoder.encode("\u6BC4")}, {name:"Error",message:"EncodingError U+6BC4"});
r = r && ([...ms932Encoder.encode("毅毆")].join(",") === "139,66,159,119"); // U+6BC5
assert.throws(() => {ms932Encoder.encode("\u6BC7")}, {name:"Error",message:"EncodingError U+6BC7"});
assert.throws(() => {ms932Encoder.encode("\u6BC8")}, {name:"Error",message:"EncodingError U+6BC8"});
assert.throws(() => {ms932Encoder.encode("\u6BC9")}, {name:"Error",message:"EncodingError U+6BC9"});
assert.throws(() => {ms932Encoder.encode("\u6BCA")}, {name:"Error",message:"EncodingError U+6BCA"});
r = r && ([...ms932Encoder.encode("毋")].join(",") === "159,120"); // U+6BCB
assert.throws(() => {ms932Encoder.encode("\u6BCC")}, {name:"Error",message:"EncodingError U+6BCC"});
r = r && ([...ms932Encoder.encode("母毎")].join(",") === "149,234,150,136"); // U+6BCD
assert.throws(() => {ms932Encoder.encode("\u6BCF")}, {name:"Error",message:"EncodingError U+6BCF"});
assert.throws(() => {ms932Encoder.encode("\u6BD0")}, {name:"Error",message:"EncodingError U+6BD0"});
assert.throws(() => {ms932Encoder.encode("\u6BD1")}, {name:"Error",message:"EncodingError U+6BD1"});
r = r && ([...ms932Encoder.encode("毒毓比")].join(",") === "147,197,159,121,148,228"); // U+6BD2
assert.throws(() => {ms932Encoder.encode("\u6BD5")}, {name:"Error",message:"EncodingError U+6BD5"});
r = r && ([...ms932Encoder.encode("毖")].join(",") === "250,244"); // U+6BD6
assert.throws(() => {ms932Encoder.encode("\u6BD7")}, {name:"Error",message:"EncodingError U+6BD7"});
r = r && ([...ms932Encoder.encode("毘")].join(",") === "148,249"); // U+6BD8
assert.throws(() => {ms932Encoder.encode("\u6BD9")}, {name:"Error",message:"EncodingError U+6BD9"});
assert.throws(() => {ms932Encoder.encode("\u6BDA")}, {name:"Error",message:"EncodingError U+6BDA"});
r = r && ([...ms932Encoder.encode("毛")].join(",") === "150,209"); // U+6BDB
assert.throws(() => {ms932Encoder.encode("\u6BDC")}, {name:"Error",message:"EncodingError U+6BDC"});
assert.throws(() => {ms932Encoder.encode("\u6BDD")}, {name:"Error",message:"EncodingError U+6BDD"});
assert.throws(() => {ms932Encoder.encode("\u6BDE")}, {name:"Error",message:"EncodingError U+6BDE"});
r = r && ([...ms932Encoder.encode("毟")].join(",") === "159,122"); // U+6BDF
assert.throws(() => {ms932Encoder.encode("\u6BE0")}, {name:"Error",message:"EncodingError U+6BE0"});
assert.throws(() => {ms932Encoder.encode("\u6BE1")}, {name:"Error",message:"EncodingError U+6BE1"});
assert.throws(() => {ms932Encoder.encode("\u6BE2")}, {name:"Error",message:"EncodingError U+6BE2"});
assert.throws(() => {ms932Encoder.encode("\u6BE3")}, {name:"Error",message:"EncodingError U+6BE3"});
assert.throws(() => {ms932Encoder.encode("\u6BE4")}, {name:"Error",message:"EncodingError U+6BE4"});
assert.throws(() => {ms932Encoder.encode("\u6BE5")}, {name:"Error",message:"EncodingError U+6BE5"});
assert.throws(() => {ms932Encoder.encode("\u6BE6")}, {name:"Error",message:"EncodingError U+6BE6"});
assert.throws(() => {ms932Encoder.encode("\u6BE7")}, {name:"Error",message:"EncodingError U+6BE7"});
assert.throws(() => {ms932Encoder.encode("\u6BE8")}, {name:"Error",message:"EncodingError U+6BE8"});
assert.throws(() => {ms932Encoder.encode("\u6BE9")}, {name:"Error",message:"EncodingError U+6BE9"});
assert.throws(() => {ms932Encoder.encode("\u6BEA")}, {name:"Error",message:"EncodingError U+6BEA"});
r = r && ([...ms932Encoder.encode("毫毬")].join(",") === "159,124,159,123"); // U+6BEB
assert.throws(() => {ms932Encoder.encode("\u6BED")}, {name:"Error",message:"EncodingError U+6BED"});
assert.throws(() => {ms932Encoder.encode("\u6BEE")}, {name:"Error",message:"EncodingError U+6BEE"});
r = r && ([...ms932Encoder.encode("毯")].join(",") === "159,126"); // U+6BEF
assert.throws(() => {ms932Encoder.encode("\u6BF0")}, {name:"Error",message:"EncodingError U+6BF0"});
assert.throws(() => {ms932Encoder.encode("\u6BF1")}, {name:"Error",message:"EncodingError U+6BF1"});
assert.throws(() => {ms932Encoder.encode("\u6BF2")}, {name:"Error",message:"EncodingError U+6BF2"});
r = r && ([...ms932Encoder.encode("毳")].join(",") === "159,125"); // U+6BF3
assert.throws(() => {ms932Encoder.encode("\u6BF4")}, {name:"Error",message:"EncodingError U+6BF4"});
assert.throws(() => {ms932Encoder.encode("\u6BF5")}, {name:"Error",message:"EncodingError U+6BF5"});
assert.throws(() => {ms932Encoder.encode("\u6BF6")}, {name:"Error",message:"EncodingError U+6BF6"});
assert.throws(() => {ms932Encoder.encode("\u6BF7")}, {name:"Error",message:"EncodingError U+6BF7"});
assert.throws(() => {ms932Encoder.encode("\u6BF8")}, {name:"Error",message:"EncodingError U+6BF8"});
assert.throws(() => {ms932Encoder.encode("\u6BF9")}, {name:"Error",message:"EncodingError U+6BF9"});
assert.throws(() => {ms932Encoder.encode("\u6BFA")}, {name:"Error",message:"EncodingError U+6BFA"});
assert.throws(() => {ms932Encoder.encode("\u6BFB")}, {name:"Error",message:"EncodingError U+6BFB"});
assert.throws(() => {ms932Encoder.encode("\u6BFC")}, {name:"Error",message:"EncodingError U+6BFC"});
assert.throws(() => {ms932Encoder.encode("\u6BFD")}, {name:"Error",message:"EncodingError U+6BFD"});
assert.throws(() => {ms932Encoder.encode("\u6BFE")}, {name:"Error",message:"EncodingError U+6BFE"});
assert.throws(() => {ms932Encoder.encode("\u6BFF")}, {name:"Error",message:"EncodingError U+6BFF"});

assert.strictEqual(r, true);

  });

});
