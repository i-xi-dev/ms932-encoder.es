import { expect } from '@esm-bundle/chai';
import { Ms932 } from "./index";

describe("Ms932.Encoder.prototype.encode 7", () => {

  it("encode(string) - U+6800-U+6BFF", () => {
    const ms932Encoder = new Ms932.Encoder({fatal:true});

    let r = true;
expect(() => {ms932Encoder.encode("\u6800")}).to.throw(Error, "EncodingError U+6800");
r = r && ([...ms932Encoder.encode("栁栂栃栄")].join(",") === "250,229,146,204,147,200,137,104"); // U+6801
expect(() => {ms932Encoder.encode("\u6805")}).to.throw(Error, "EncodingError U+6805");
expect(() => {ms932Encoder.encode("\u6806")}).to.throw(Error, "EncodingError U+6806");
expect(() => {ms932Encoder.encode("\u6807")}).to.throw(Error, "EncodingError U+6807");
expect(() => {ms932Encoder.encode("\u6808")}).to.throw(Error, "EncodingError U+6808");
expect(() => {ms932Encoder.encode("\u6809")}).to.throw(Error, "EncodingError U+6809");
expect(() => {ms932Encoder.encode("\u680A")}).to.throw(Error, "EncodingError U+680A");
expect(() => {ms932Encoder.encode("\u680B")}).to.throw(Error, "EncodingError U+680B");
expect(() => {ms932Encoder.encode("\u680C")}).to.throw(Error, "EncodingError U+680C");
expect(() => {ms932Encoder.encode("\u680D")}).to.throw(Error, "EncodingError U+680D");
expect(() => {ms932Encoder.encode("\u680E")}).to.throw(Error, "EncodingError U+680E");
expect(() => {ms932Encoder.encode("\u680F")}).to.throw(Error, "EncodingError U+680F");
expect(() => {ms932Encoder.encode("\u6810")}).to.throw(Error, "EncodingError U+6810");
expect(() => {ms932Encoder.encode("\u6811")}).to.throw(Error, "EncodingError U+6811");
expect(() => {ms932Encoder.encode("\u6812")}).to.throw(Error, "EncodingError U+6812");
r = r && ([...ms932Encoder.encode("栓")].join(",") === "144,240"); // U+6813
expect(() => {ms932Encoder.encode("\u6814")}).to.throw(Error, "EncodingError U+6814");
expect(() => {ms932Encoder.encode("\u6815")}).to.throw(Error, "EncodingError U+6815");
r = r && ([...ms932Encoder.encode("栖栗")].join(",") === "144,178,140,73"); // U+6816
expect(() => {ms932Encoder.encode("\u6818")}).to.throw(Error, "EncodingError U+6818");
expect(() => {ms932Encoder.encode("\u6819")}).to.throw(Error, "EncodingError U+6819");
expect(() => {ms932Encoder.encode("\u681A")}).to.throw(Error, "EncodingError U+681A");
expect(() => {ms932Encoder.encode("\u681B")}).to.throw(Error, "EncodingError U+681B");
expect(() => {ms932Encoder.encode("\u681C")}).to.throw(Error, "EncodingError U+681C");
expect(() => {ms932Encoder.encode("\u681D")}).to.throw(Error, "EncodingError U+681D");
r = r && ([...ms932Encoder.encode("栞")].join(",") === "158,120"); // U+681E
expect(() => {ms932Encoder.encode("\u681F")}).to.throw(Error, "EncodingError U+681F");
expect(() => {ms932Encoder.encode("\u6820")}).to.throw(Error, "EncodingError U+6820");
r = r && ([...ms932Encoder.encode("校栢")].join(",") === "141,90,138,156"); // U+6821
expect(() => {ms932Encoder.encode("\u6823")}).to.throw(Error, "EncodingError U+6823");
expect(() => {ms932Encoder.encode("\u6824")}).to.throw(Error, "EncodingError U+6824");
expect(() => {ms932Encoder.encode("\u6825")}).to.throw(Error, "EncodingError U+6825");
expect(() => {ms932Encoder.encode("\u6826")}).to.throw(Error, "EncodingError U+6826");
expect(() => {ms932Encoder.encode("\u6827")}).to.throw(Error, "EncodingError U+6827");
expect(() => {ms932Encoder.encode("\u6828")}).to.throw(Error, "EncodingError U+6828");
r = r && ([...ms932Encoder.encode("栩株栫")].join(",") === "158,122,138,148,158,129"); // U+6829
expect(() => {ms932Encoder.encode("\u682C")}).to.throw(Error, "EncodingError U+682C");
expect(() => {ms932Encoder.encode("\u682D")}).to.throw(Error, "EncodingError U+682D");
expect(() => {ms932Encoder.encode("\u682E")}).to.throw(Error, "EncodingError U+682E");
expect(() => {ms932Encoder.encode("\u682F")}).to.throw(Error, "EncodingError U+682F");
expect(() => {ms932Encoder.encode("\u6830")}).to.throw(Error, "EncodingError U+6830");
expect(() => {ms932Encoder.encode("\u6831")}).to.throw(Error, "EncodingError U+6831");
r = r && ([...ms932Encoder.encode("栲")].join(",") === "158,125"); // U+6832
expect(() => {ms932Encoder.encode("\u6833")}).to.throw(Error, "EncodingError U+6833");
r = r && ([...ms932Encoder.encode("栴")].join(",") === "144,241"); // U+6834
expect(() => {ms932Encoder.encode("\u6835")}).to.throw(Error, "EncodingError U+6835");
expect(() => {ms932Encoder.encode("\u6836")}).to.throw(Error, "EncodingError U+6836");
expect(() => {ms932Encoder.encode("\u6837")}).to.throw(Error, "EncodingError U+6837");
r = r && ([...ms932Encoder.encode("核根")].join(",") === "138,106,141,170"); // U+6838
expect(() => {ms932Encoder.encode("\u683A")}).to.throw(Error, "EncodingError U+683A");
expect(() => {ms932Encoder.encode("\u683B")}).to.throw(Error, "EncodingError U+683B");
r = r && ([...ms932Encoder.encode("格栽")].join(",") === "138,105,141,205"); // U+683C
expect(() => {ms932Encoder.encode("\u683E")}).to.throw(Error, "EncodingError U+683E");
expect(() => {ms932Encoder.encode("\u683F")}).to.throw(Error, "EncodingError U+683F");
r = r && ([...ms932Encoder.encode("桀桁桂桃桄")].join(",") === "158,123,140,133,140,106,147,141,250,230"); // U+6840
expect(() => {ms932Encoder.encode("\u6845")}).to.throw(Error, "EncodingError U+6845");
r = r && ([...ms932Encoder.encode("框")].join(",") === "158,121"); // U+6846
expect(() => {ms932Encoder.encode("\u6847")}).to.throw(Error, "EncodingError U+6847");
r = r && ([...ms932Encoder.encode("案")].join(",") === "136,196"); // U+6848
expect(() => {ms932Encoder.encode("\u6849")}).to.throw(Error, "EncodingError U+6849");
expect(() => {ms932Encoder.encode("\u684A")}).to.throw(Error, "EncodingError U+684A");
expect(() => {ms932Encoder.encode("\u684B")}).to.throw(Error, "EncodingError U+684B");
expect(() => {ms932Encoder.encode("\u684C")}).to.throw(Error, "EncodingError U+684C");
r = r && ([...ms932Encoder.encode("桍桎")].join(",") === "158,124,158,126"); // U+684D
expect(() => {ms932Encoder.encode("\u684F")}).to.throw(Error, "EncodingError U+684F");
r = r && ([...ms932Encoder.encode("桐桑桒桓桔")].join(",") === "139,203,140,75,250,227,138,186,139,106"); // U+6850
expect(() => {ms932Encoder.encode("\u6855")}).to.throw(Error, "EncodingError U+6855");
expect(() => {ms932Encoder.encode("\u6856")}).to.throw(Error, "EncodingError U+6856");
expect(() => {ms932Encoder.encode("\u6857")}).to.throw(Error, "EncodingError U+6857");
expect(() => {ms932Encoder.encode("\u6858")}).to.throw(Error, "EncodingError U+6858");
r = r && ([...ms932Encoder.encode("桙")].join(",") === "158,130"); // U+6859
expect(() => {ms932Encoder.encode("\u685A")}).to.throw(Error, "EncodingError U+685A");
expect(() => {ms932Encoder.encode("\u685B")}).to.throw(Error, "EncodingError U+685B");
r = r && ([...ms932Encoder.encode("桜桝")].join(",") === "141,247,150,145"); // U+685C
expect(() => {ms932Encoder.encode("\u685E")}).to.throw(Error, "EncodingError U+685E");
r = r && ([...ms932Encoder.encode("桟")].join(",") === "142,86"); // U+685F
expect(() => {ms932Encoder.encode("\u6860")}).to.throw(Error, "EncodingError U+6860");
expect(() => {ms932Encoder.encode("\u6861")}).to.throw(Error, "EncodingError U+6861");
expect(() => {ms932Encoder.encode("\u6862")}).to.throw(Error, "EncodingError U+6862");
r = r && ([...ms932Encoder.encode("档")].join(",") === "158,131"); // U+6863
expect(() => {ms932Encoder.encode("\u6864")}).to.throw(Error, "EncodingError U+6864");
expect(() => {ms932Encoder.encode("\u6865")}).to.throw(Error, "EncodingError U+6865");
expect(() => {ms932Encoder.encode("\u6866")}).to.throw(Error, "EncodingError U+6866");
r = r && ([...ms932Encoder.encode("桧")].join(",") === "149,79"); // U+6867
expect(() => {ms932Encoder.encode("\u6868")}).to.throw(Error, "EncodingError U+6868");
expect(() => {ms932Encoder.encode("\u6869")}).to.throw(Error, "EncodingError U+6869");
expect(() => {ms932Encoder.encode("\u686A")}).to.throw(Error, "EncodingError U+686A");
expect(() => {ms932Encoder.encode("\u686B")}).to.throw(Error, "EncodingError U+686B");
expect(() => {ms932Encoder.encode("\u686C")}).to.throw(Error, "EncodingError U+686C");
expect(() => {ms932Encoder.encode("\u686D")}).to.throw(Error, "EncodingError U+686D");
expect(() => {ms932Encoder.encode("\u686E")}).to.throw(Error, "EncodingError U+686E");
expect(() => {ms932Encoder.encode("\u686F")}).to.throw(Error, "EncodingError U+686F");
expect(() => {ms932Encoder.encode("\u6870")}).to.throw(Error, "EncodingError U+6870");
expect(() => {ms932Encoder.encode("\u6871")}).to.throw(Error, "EncodingError U+6871");
expect(() => {ms932Encoder.encode("\u6872")}).to.throw(Error, "EncodingError U+6872");
expect(() => {ms932Encoder.encode("\u6873")}).to.throw(Error, "EncodingError U+6873");
r = r && ([...ms932Encoder.encode("桴")].join(",") === "158,143"); // U+6874
expect(() => {ms932Encoder.encode("\u6875")}).to.throw(Error, "EncodingError U+6875");
r = r && ([...ms932Encoder.encode("桶桷")].join(",") === "137,177,158,132"); // U+6876
expect(() => {ms932Encoder.encode("\u6878")}).to.throw(Error, "EncodingError U+6878");
expect(() => {ms932Encoder.encode("\u6879")}).to.throw(Error, "EncodingError U+6879");
expect(() => {ms932Encoder.encode("\u687A")}).to.throw(Error, "EncodingError U+687A");
expect(() => {ms932Encoder.encode("\u687B")}).to.throw(Error, "EncodingError U+687B");
expect(() => {ms932Encoder.encode("\u687C")}).to.throw(Error, "EncodingError U+687C");
expect(() => {ms932Encoder.encode("\u687D")}).to.throw(Error, "EncodingError U+687D");
r = r && ([...ms932Encoder.encode("桾桿")].join(",") === "158,149,158,133"); // U+687E
expect(() => {ms932Encoder.encode("\u6880")}).to.throw(Error, "EncodingError U+6880");
r = r && ([...ms932Encoder.encode("梁")].join(",") === "151,192"); // U+6881
expect(() => {ms932Encoder.encode("\u6882")}).to.throw(Error, "EncodingError U+6882");
r = r && ([...ms932Encoder.encode("梃")].join(",") === "158,140"); // U+6883
expect(() => {ms932Encoder.encode("\u6884")}).to.throw(Error, "EncodingError U+6884");
r = r && ([...ms932Encoder.encode("梅")].join(",") === "148,126"); // U+6885
expect(() => {ms932Encoder.encode("\u6886")}).to.throw(Error, "EncodingError U+6886");
expect(() => {ms932Encoder.encode("\u6887")}).to.throw(Error, "EncodingError U+6887");
expect(() => {ms932Encoder.encode("\u6888")}).to.throw(Error, "EncodingError U+6888");
expect(() => {ms932Encoder.encode("\u6889")}).to.throw(Error, "EncodingError U+6889");
expect(() => {ms932Encoder.encode("\u688A")}).to.throw(Error, "EncodingError U+688A");
expect(() => {ms932Encoder.encode("\u688B")}).to.throw(Error, "EncodingError U+688B");
expect(() => {ms932Encoder.encode("\u688C")}).to.throw(Error, "EncodingError U+688C");
r = r && ([...ms932Encoder.encode("梍")].join(",") === "158,148"); // U+688D
expect(() => {ms932Encoder.encode("\u688E")}).to.throw(Error, "EncodingError U+688E");
r = r && ([...ms932Encoder.encode("梏")].join(",") === "158,135"); // U+688F
expect(() => {ms932Encoder.encode("\u6890")}).to.throw(Error, "EncodingError U+6890");
expect(() => {ms932Encoder.encode("\u6891")}).to.throw(Error, "EncodingError U+6891");
expect(() => {ms932Encoder.encode("\u6892")}).to.throw(Error, "EncodingError U+6892");
r = r && ([...ms932Encoder.encode("梓梔")].join(",") === "136,178,158,137"); // U+6893
expect(() => {ms932Encoder.encode("\u6895")}).to.throw(Error, "EncodingError U+6895");
expect(() => {ms932Encoder.encode("\u6896")}).to.throw(Error, "EncodingError U+6896");
r = r && ([...ms932Encoder.encode("梗")].join(",") === "141,91"); // U+6897
expect(() => {ms932Encoder.encode("\u6898")}).to.throw(Error, "EncodingError U+6898");
expect(() => {ms932Encoder.encode("\u6899")}).to.throw(Error, "EncodingError U+6899");
expect(() => {ms932Encoder.encode("\u689A")}).to.throw(Error, "EncodingError U+689A");
r = r && ([...ms932Encoder.encode("梛")].join(",") === "158,139"); // U+689B
expect(() => {ms932Encoder.encode("\u689C")}).to.throw(Error, "EncodingError U+689C");
r = r && ([...ms932Encoder.encode("條")].join(",") === "158,138"); // U+689D
expect(() => {ms932Encoder.encode("\u689E")}).to.throw(Error, "EncodingError U+689E");
r = r && ([...ms932Encoder.encode("梟梠")].join(",") === "158,134,158,145"); // U+689F
expect(() => {ms932Encoder.encode("\u68A1")}).to.throw(Error, "EncodingError U+68A1");
r = r && ([...ms932Encoder.encode("梢")].join(",") === "143,189"); // U+68A2
expect(() => {ms932Encoder.encode("\u68A3")}).to.throw(Error, "EncodingError U+68A3");
expect(() => {ms932Encoder.encode("\u68A4")}).to.throw(Error, "EncodingError U+68A4");
expect(() => {ms932Encoder.encode("\u68A5")}).to.throw(Error, "EncodingError U+68A5");
r = r && ([...ms932Encoder.encode("梦梧梨")].join(",") === "154,235,140,230,151,156"); // U+68A6
expect(() => {ms932Encoder.encode("\u68A9")}).to.throw(Error, "EncodingError U+68A9");
expect(() => {ms932Encoder.encode("\u68AA")}).to.throw(Error, "EncodingError U+68AA");
expect(() => {ms932Encoder.encode("\u68AB")}).to.throw(Error, "EncodingError U+68AB");
expect(() => {ms932Encoder.encode("\u68AC")}).to.throw(Error, "EncodingError U+68AC");
r = r && ([...ms932Encoder.encode("梭")].join(",") === "158,136"); // U+68AD
expect(() => {ms932Encoder.encode("\u68AE")}).to.throw(Error, "EncodingError U+68AE");
r = r && ([...ms932Encoder.encode("梯械梱")].join(",") === "146,242,138,66,141,171"); // U+68AF
expect(() => {ms932Encoder.encode("\u68B2")}).to.throw(Error, "EncodingError U+68B2");
r = r && ([...ms932Encoder.encode("梳")].join(",") === "158,128"); // U+68B3
expect(() => {ms932Encoder.encode("\u68B4")}).to.throw(Error, "EncodingError U+68B4");
r = r && ([...ms932Encoder.encode("梵梶")].join(",") === "158,144,138,129"); // U+68B5
expect(() => {ms932Encoder.encode("\u68B7")}).to.throw(Error, "EncodingError U+68B7");
expect(() => {ms932Encoder.encode("\u68B8")}).to.throw(Error, "EncodingError U+68B8");
r = r && ([...ms932Encoder.encode("梹梺")].join(",") === "158,142,158,146"); // U+68B9
expect(() => {ms932Encoder.encode("\u68BB")}).to.throw(Error, "EncodingError U+68BB");
r = r && ([...ms932Encoder.encode("梼")].join(",") === "147,142"); // U+68BC
expect(() => {ms932Encoder.encode("\u68BD")}).to.throw(Error, "EncodingError U+68BD");
expect(() => {ms932Encoder.encode("\u68BE")}).to.throw(Error, "EncodingError U+68BE");
expect(() => {ms932Encoder.encode("\u68BF")}).to.throw(Error, "EncodingError U+68BF");
expect(() => {ms932Encoder.encode("\u68C0")}).to.throw(Error, "EncodingError U+68C0");
expect(() => {ms932Encoder.encode("\u68C1")}).to.throw(Error, "EncodingError U+68C1");
expect(() => {ms932Encoder.encode("\u68C2")}).to.throw(Error, "EncodingError U+68C2");
expect(() => {ms932Encoder.encode("\u68C3")}).to.throw(Error, "EncodingError U+68C3");
r = r && ([...ms932Encoder.encode("棄")].join(",") === "138,252"); // U+68C4
expect(() => {ms932Encoder.encode("\u68C5")}).to.throw(Error, "EncodingError U+68C5");
r = r && ([...ms932Encoder.encode("棆")].join(",") === "158,176"); // U+68C6
expect(() => {ms932Encoder.encode("\u68C7")}).to.throw(Error, "EncodingError U+68C7");
r = r && ([...ms932Encoder.encode("棈棉棊棋")].join(",") === "250,100,150,199,158,151,138,251"); // U+68C8
expect(() => {ms932Encoder.encode("\u68CC")}).to.throw(Error, "EncodingError U+68CC");
r = r && ([...ms932Encoder.encode("棍")].join(",") === "158,158"); // U+68CD
expect(() => {ms932Encoder.encode("\u68CE")}).to.throw(Error, "EncodingError U+68CE");
r = r && ([...ms932Encoder.encode("棏")].join(",") === "250,231"); // U+68CF
expect(() => {ms932Encoder.encode("\u68D0")}).to.throw(Error, "EncodingError U+68D0");
expect(() => {ms932Encoder.encode("\u68D1")}).to.throw(Error, "EncodingError U+68D1");
r = r && ([...ms932Encoder.encode("棒")].join(",") === "150,95"); // U+68D2
expect(() => {ms932Encoder.encode("\u68D3")}).to.throw(Error, "EncodingError U+68D3");
r = r && ([...ms932Encoder.encode("棔棕")].join(",") === "158,159,158,161"); // U+68D4
expect(() => {ms932Encoder.encode("\u68D6")}).to.throw(Error, "EncodingError U+68D6");
r = r && ([...ms932Encoder.encode("棗棘")].join(",") === "158,165,158,153"); // U+68D7
expect(() => {ms932Encoder.encode("\u68D9")}).to.throw(Error, "EncodingError U+68D9");
r = r && ([...ms932Encoder.encode("棚")].join(",") === "146,73"); // U+68DA
expect(() => {ms932Encoder.encode("\u68DB")}).to.throw(Error, "EncodingError U+68DB");
expect(() => {ms932Encoder.encode("\u68DC")}).to.throw(Error, "EncodingError U+68DC");
expect(() => {ms932Encoder.encode("\u68DD")}).to.throw(Error, "EncodingError U+68DD");
expect(() => {ms932Encoder.encode("\u68DE")}).to.throw(Error, "EncodingError U+68DE");
r = r && ([...ms932Encoder.encode("棟棠棡")].join(",") === "147,143,158,169,158,156"); // U+68DF
expect(() => {ms932Encoder.encode("\u68E2")}).to.throw(Error, "EncodingError U+68E2");
r = r && ([...ms932Encoder.encode("棣")].join(",") === "158,166"); // U+68E3
expect(() => {ms932Encoder.encode("\u68E4")}).to.throw(Error, "EncodingError U+68E4");
expect(() => {ms932Encoder.encode("\u68E5")}).to.throw(Error, "EncodingError U+68E5");
expect(() => {ms932Encoder.encode("\u68E6")}).to.throw(Error, "EncodingError U+68E6");
r = r && ([...ms932Encoder.encode("棧")].join(",") === "158,160"); // U+68E7
expect(() => {ms932Encoder.encode("\u68E8")}).to.throw(Error, "EncodingError U+68E8");
expect(() => {ms932Encoder.encode("\u68E9")}).to.throw(Error, "EncodingError U+68E9");
expect(() => {ms932Encoder.encode("\u68EA")}).to.throw(Error, "EncodingError U+68EA");
expect(() => {ms932Encoder.encode("\u68EB")}).to.throw(Error, "EncodingError U+68EB");
expect(() => {ms932Encoder.encode("\u68EC")}).to.throw(Error, "EncodingError U+68EC");
expect(() => {ms932Encoder.encode("\u68ED")}).to.throw(Error, "EncodingError U+68ED");
r = r && ([...ms932Encoder.encode("森棯")].join(",") === "144,88,158,170"); // U+68EE
expect(() => {ms932Encoder.encode("\u68F0")}).to.throw(Error, "EncodingError U+68F0");
expect(() => {ms932Encoder.encode("\u68F1")}).to.throw(Error, "EncodingError U+68F1");
r = r && ([...ms932Encoder.encode("棲")].join(",") === "144,177"); // U+68F2
expect(() => {ms932Encoder.encode("\u68F3")}).to.throw(Error, "EncodingError U+68F3");
expect(() => {ms932Encoder.encode("\u68F4")}).to.throw(Error, "EncodingError U+68F4");
expect(() => {ms932Encoder.encode("\u68F5")}).to.throw(Error, "EncodingError U+68F5");
expect(() => {ms932Encoder.encode("\u68F6")}).to.throw(Error, "EncodingError U+68F6");
expect(() => {ms932Encoder.encode("\u68F7")}).to.throw(Error, "EncodingError U+68F7");
expect(() => {ms932Encoder.encode("\u68F8")}).to.throw(Error, "EncodingError U+68F8");
r = r && ([...ms932Encoder.encode("棹棺")].join(",") === "158,168,138,187"); // U+68F9
expect(() => {ms932Encoder.encode("\u68FB")}).to.throw(Error, "EncodingError U+68FB");
expect(() => {ms932Encoder.encode("\u68FC")}).to.throw(Error, "EncodingError U+68FC");
expect(() => {ms932Encoder.encode("\u68FD")}).to.throw(Error, "EncodingError U+68FD");
expect(() => {ms932Encoder.encode("\u68FE")}).to.throw(Error, "EncodingError U+68FE");
expect(() => {ms932Encoder.encode("\u68FF")}).to.throw(Error, "EncodingError U+68FF");
r = r && ([...ms932Encoder.encode("椀椁")].join(",") === "152,111,158,150"); // U+6900
expect(() => {ms932Encoder.encode("\u6902")}).to.throw(Error, "EncodingError U+6902");
expect(() => {ms932Encoder.encode("\u6903")}).to.throw(Error, "EncodingError U+6903");
r = r && ([...ms932Encoder.encode("椄椅")].join(",") === "158,164,136,214"); // U+6904
expect(() => {ms932Encoder.encode("\u6906")}).to.throw(Error, "EncodingError U+6906");
expect(() => {ms932Encoder.encode("\u6907")}).to.throw(Error, "EncodingError U+6907");
r = r && ([...ms932Encoder.encode("椈")].join(",") === "158,152"); // U+6908
expect(() => {ms932Encoder.encode("\u6909")}).to.throw(Error, "EncodingError U+6909");
expect(() => {ms932Encoder.encode("\u690A")}).to.throw(Error, "EncodingError U+690A");
r = r && ([...ms932Encoder.encode("椋椌植椎椏")].join(",") === "150,184,158,157,144,65,146,197,158,147"); // U+690B
expect(() => {ms932Encoder.encode("\u6910")}).to.throw(Error, "EncodingError U+6910");
expect(() => {ms932Encoder.encode("\u6911")}).to.throw(Error, "EncodingError U+6911");
r = r && ([...ms932Encoder.encode("椒")].join(",") === "158,163"); // U+6912
expect(() => {ms932Encoder.encode("\u6913")}).to.throw(Error, "EncodingError U+6913");
expect(() => {ms932Encoder.encode("\u6914")}).to.throw(Error, "EncodingError U+6914");
expect(() => {ms932Encoder.encode("\u6915")}).to.throw(Error, "EncodingError U+6915");
expect(() => {ms932Encoder.encode("\u6916")}).to.throw(Error, "EncodingError U+6916");
expect(() => {ms932Encoder.encode("\u6917")}).to.throw(Error, "EncodingError U+6917");
expect(() => {ms932Encoder.encode("\u6918")}).to.throw(Error, "EncodingError U+6918");
r = r && ([...ms932Encoder.encode("椙椚椛検")].join(",") === "144,154,158,173,138,145,140,159"); // U+6919
expect(() => {ms932Encoder.encode("\u691D")}).to.throw(Error, "EncodingError U+691D");
expect(() => {ms932Encoder.encode("\u691E")}).to.throw(Error, "EncodingError U+691E");
expect(() => {ms932Encoder.encode("\u691F")}).to.throw(Error, "EncodingError U+691F");
expect(() => {ms932Encoder.encode("\u6920")}).to.throw(Error, "EncodingError U+6920");
r = r && ([...ms932Encoder.encode("椡椢椣")].join(",") === "158,175,158,154,158,174"); // U+6921
expect(() => {ms932Encoder.encode("\u6924")}).to.throw(Error, "EncodingError U+6924");
r = r && ([...ms932Encoder.encode("椥椦")].join(",") === "158,167,158,155"); // U+6925
expect(() => {ms932Encoder.encode("\u6927")}).to.throw(Error, "EncodingError U+6927");
r = r && ([...ms932Encoder.encode("椨")].join(",") === "158,171"); // U+6928
expect(() => {ms932Encoder.encode("\u6929")}).to.throw(Error, "EncodingError U+6929");
r = r && ([...ms932Encoder.encode("椪")].join(",") === "158,172"); // U+692A
expect(() => {ms932Encoder.encode("\u692B")}).to.throw(Error, "EncodingError U+692B");
expect(() => {ms932Encoder.encode("\u692C")}).to.throw(Error, "EncodingError U+692C");
expect(() => {ms932Encoder.encode("\u692D")}).to.throw(Error, "EncodingError U+692D");
expect(() => {ms932Encoder.encode("\u692E")}).to.throw(Error, "EncodingError U+692E");
expect(() => {ms932Encoder.encode("\u692F")}).to.throw(Error, "EncodingError U+692F");
r = r && ([...ms932Encoder.encode("椰")].join(",") === "158,189"); // U+6930
expect(() => {ms932Encoder.encode("\u6931")}).to.throw(Error, "EncodingError U+6931");
expect(() => {ms932Encoder.encode("\u6932")}).to.throw(Error, "EncodingError U+6932");
expect(() => {ms932Encoder.encode("\u6933")}).to.throw(Error, "EncodingError U+6933");
r = r && ([...ms932Encoder.encode("椴")].join(",") === "147,204"); // U+6934
expect(() => {ms932Encoder.encode("\u6935")}).to.throw(Error, "EncodingError U+6935");
r = r && ([...ms932Encoder.encode("椶")].join(",") === "158,162"); // U+6936
expect(() => {ms932Encoder.encode("\u6937")}).to.throw(Error, "EncodingError U+6937");
expect(() => {ms932Encoder.encode("\u6938")}).to.throw(Error, "EncodingError U+6938");
r = r && ([...ms932Encoder.encode("椹")].join(",") === "158,185"); // U+6939
expect(() => {ms932Encoder.encode("\u693A")}).to.throw(Error, "EncodingError U+693A");
expect(() => {ms932Encoder.encode("\u693B")}).to.throw(Error, "EncodingError U+693B");
expect(() => {ms932Encoder.encode("\u693C")}).to.throw(Error, "EncodingError U+693C");
r = r && ([...ms932Encoder.encode("椽")].join(",") === "158,187"); // U+693D
expect(() => {ms932Encoder.encode("\u693E")}).to.throw(Error, "EncodingError U+693E");
r = r && ([...ms932Encoder.encode("椿")].join(",") === "146,214"); // U+693F
expect(() => {ms932Encoder.encode("\u6940")}).to.throw(Error, "EncodingError U+6940");
expect(() => {ms932Encoder.encode("\u6941")}).to.throw(Error, "EncodingError U+6941");
expect(() => {ms932Encoder.encode("\u6942")}).to.throw(Error, "EncodingError U+6942");
expect(() => {ms932Encoder.encode("\u6943")}).to.throw(Error, "EncodingError U+6943");
expect(() => {ms932Encoder.encode("\u6944")}).to.throw(Error, "EncodingError U+6944");
expect(() => {ms932Encoder.encode("\u6945")}).to.throw(Error, "EncodingError U+6945");
expect(() => {ms932Encoder.encode("\u6946")}).to.throw(Error, "EncodingError U+6946");
expect(() => {ms932Encoder.encode("\u6947")}).to.throw(Error, "EncodingError U+6947");
expect(() => {ms932Encoder.encode("\u6948")}).to.throw(Error, "EncodingError U+6948");
expect(() => {ms932Encoder.encode("\u6949")}).to.throw(Error, "EncodingError U+6949");
r = r && ([...ms932Encoder.encode("楊")].join(",") === "151,107"); // U+694A
expect(() => {ms932Encoder.encode("\u694B")}).to.throw(Error, "EncodingError U+694B");
expect(() => {ms932Encoder.encode("\u694C")}).to.throw(Error, "EncodingError U+694C");
expect(() => {ms932Encoder.encode("\u694D")}).to.throw(Error, "EncodingError U+694D");
expect(() => {ms932Encoder.encode("\u694E")}).to.throw(Error, "EncodingError U+694E");
expect(() => {ms932Encoder.encode("\u694F")}).to.throw(Error, "EncodingError U+694F");
expect(() => {ms932Encoder.encode("\u6950")}).to.throw(Error, "EncodingError U+6950");
expect(() => {ms932Encoder.encode("\u6951")}).to.throw(Error, "EncodingError U+6951");
expect(() => {ms932Encoder.encode("\u6952")}).to.throw(Error, "EncodingError U+6952");
r = r && ([...ms932Encoder.encode("楓楔楕")].join(",") === "149,150,158,182,145,200"); // U+6953
expect(() => {ms932Encoder.encode("\u6956")}).to.throw(Error, "EncodingError U+6956");
expect(() => {ms932Encoder.encode("\u6957")}).to.throw(Error, "EncodingError U+6957");
expect(() => {ms932Encoder.encode("\u6958")}).to.throw(Error, "EncodingError U+6958");
r = r && ([...ms932Encoder.encode("楙楚")].join(",") === "158,188,145,94"); // U+6959
expect(() => {ms932Encoder.encode("\u695B")}).to.throw(Error, "EncodingError U+695B");
r = r && ([...ms932Encoder.encode("楜楝楞")].join(",") === "158,179,158,192,158,191"); // U+695C
expect(() => {ms932Encoder.encode("\u695F")}).to.throw(Error, "EncodingError U+695F");
r = r && ([...ms932Encoder.encode("楠楡楢")].join(",") === "147,237,158,190,147,232"); // U+6960
expect(() => {ms932Encoder.encode("\u6963")}).to.throw(Error, "EncodingError U+6963");
expect(() => {ms932Encoder.encode("\u6964")}).to.throw(Error, "EncodingError U+6964");
expect(() => {ms932Encoder.encode("\u6965")}).to.throw(Error, "EncodingError U+6965");
expect(() => {ms932Encoder.encode("\u6966")}).to.throw(Error, "EncodingError U+6966");
expect(() => {ms932Encoder.encode("\u6967")}).to.throw(Error, "EncodingError U+6967");
r = r && ([...ms932Encoder.encode("楨")].join(",") === "250,233"); // U+6968
expect(() => {ms932Encoder.encode("\u6969")}).to.throw(Error, "EncodingError U+6969");
r = r && ([...ms932Encoder.encode("楪楫")].join(",") === "158,194,158,181"); // U+696A
expect(() => {ms932Encoder.encode("\u696C")}).to.throw(Error, "EncodingError U+696C");
r = r && ([...ms932Encoder.encode("業楮楯")].join(",") === "139,198,158,184,143,124"); // U+696D
expect(() => {ms932Encoder.encode("\u6970")}).to.throw(Error, "EncodingError U+6970");
expect(() => {ms932Encoder.encode("\u6971")}).to.throw(Error, "EncodingError U+6971");
expect(() => {ms932Encoder.encode("\u6972")}).to.throw(Error, "EncodingError U+6972");
r = r && ([...ms932Encoder.encode("楳楴極")].join(",") === "148,128,158,186,139,201"); // U+6973
expect(() => {ms932Encoder.encode("\u6976")}).to.throw(Error, "EncodingError U+6976");
r = r && ([...ms932Encoder.encode("楷楸楹")].join(",") === "158,178,158,180,158,177"); // U+6977
expect(() => {ms932Encoder.encode("\u697A")}).to.throw(Error, "EncodingError U+697A");
expect(() => {ms932Encoder.encode("\u697B")}).to.throw(Error, "EncodingError U+697B");
r = r && ([...ms932Encoder.encode("楼楽楾")].join(",") === "152,79,138,121,158,183"); // U+697C
expect(() => {ms932Encoder.encode("\u697F")}).to.throw(Error, "EncodingError U+697F");
expect(() => {ms932Encoder.encode("\u6980")}).to.throw(Error, "EncodingError U+6980");
r = r && ([...ms932Encoder.encode("榁概")].join(",") === "158,193,138,84"); // U+6981
expect(() => {ms932Encoder.encode("\u6983")}).to.throw(Error, "EncodingError U+6983");
expect(() => {ms932Encoder.encode("\u6984")}).to.throw(Error, "EncodingError U+6984");
expect(() => {ms932Encoder.encode("\u6985")}).to.throw(Error, "EncodingError U+6985");
expect(() => {ms932Encoder.encode("\u6986")}).to.throw(Error, "EncodingError U+6986");
expect(() => {ms932Encoder.encode("\u6987")}).to.throw(Error, "EncodingError U+6987");
expect(() => {ms932Encoder.encode("\u6988")}).to.throw(Error, "EncodingError U+6988");
expect(() => {ms932Encoder.encode("\u6989")}).to.throw(Error, "EncodingError U+6989");
r = r && ([...ms932Encoder.encode("榊")].join(",") === "141,229"); // U+698A
expect(() => {ms932Encoder.encode("\u698B")}).to.throw(Error, "EncodingError U+698B");
expect(() => {ms932Encoder.encode("\u698C")}).to.throw(Error, "EncodingError U+698C");
expect(() => {ms932Encoder.encode("\u698D")}).to.throw(Error, "EncodingError U+698D");
r = r && ([...ms932Encoder.encode("榎")].join(",") === "137,124"); // U+698E
expect(() => {ms932Encoder.encode("\u698F")}).to.throw(Error, "EncodingError U+698F");
expect(() => {ms932Encoder.encode("\u6990")}).to.throw(Error, "EncodingError U+6990");
r = r && ([...ms932Encoder.encode("榑")].join(",") === "158,210"); // U+6991
expect(() => {ms932Encoder.encode("\u6992")}).to.throw(Error, "EncodingError U+6992");
expect(() => {ms932Encoder.encode("\u6993")}).to.throw(Error, "EncodingError U+6993");
r = r && ([...ms932Encoder.encode("榔榕")].join(",") === "152,80,158,213"); // U+6994
expect(() => {ms932Encoder.encode("\u6996")}).to.throw(Error, "EncodingError U+6996");
expect(() => {ms932Encoder.encode("\u6997")}).to.throw(Error, "EncodingError U+6997");
r = r && ([...ms932Encoder.encode("榘")].join(",") === "250,235"); // U+6998
expect(() => {ms932Encoder.encode("\u6999")}).to.throw(Error, "EncodingError U+6999");
expect(() => {ms932Encoder.encode("\u699A")}).to.throw(Error, "EncodingError U+699A");
r = r && ([...ms932Encoder.encode("榛榜")].join(",") === "144,89,158,212"); // U+699B
expect(() => {ms932Encoder.encode("\u699D")}).to.throw(Error, "EncodingError U+699D");
expect(() => {ms932Encoder.encode("\u699E")}).to.throw(Error, "EncodingError U+699E");
expect(() => {ms932Encoder.encode("\u699F")}).to.throw(Error, "EncodingError U+699F");
r = r && ([...ms932Encoder.encode("榠")].join(",") === "158,211"); // U+69A0
expect(() => {ms932Encoder.encode("\u69A1")}).to.throw(Error, "EncodingError U+69A1");
expect(() => {ms932Encoder.encode("\u69A2")}).to.throw(Error, "EncodingError U+69A2");
expect(() => {ms932Encoder.encode("\u69A3")}).to.throw(Error, "EncodingError U+69A3");
expect(() => {ms932Encoder.encode("\u69A4")}).to.throw(Error, "EncodingError U+69A4");
expect(() => {ms932Encoder.encode("\u69A5")}).to.throw(Error, "EncodingError U+69A5");
expect(() => {ms932Encoder.encode("\u69A6")}).to.throw(Error, "EncodingError U+69A6");
r = r && ([...ms932Encoder.encode("榧")].join(",") === "158,208"); // U+69A7
expect(() => {ms932Encoder.encode("\u69A8")}).to.throw(Error, "EncodingError U+69A8");
expect(() => {ms932Encoder.encode("\u69A9")}).to.throw(Error, "EncodingError U+69A9");
expect(() => {ms932Encoder.encode("\u69AA")}).to.throw(Error, "EncodingError U+69AA");
expect(() => {ms932Encoder.encode("\u69AB")}).to.throw(Error, "EncodingError U+69AB");
expect(() => {ms932Encoder.encode("\u69AC")}).to.throw(Error, "EncodingError U+69AC");
expect(() => {ms932Encoder.encode("\u69AD")}).to.throw(Error, "EncodingError U+69AD");
r = r && ([...ms932Encoder.encode("榮")].join(",") === "158,196"); // U+69AE
expect(() => {ms932Encoder.encode("\u69AF")}).to.throw(Error, "EncodingError U+69AF");
expect(() => {ms932Encoder.encode("\u69B0")}).to.throw(Error, "EncodingError U+69B0");
r = r && ([...ms932Encoder.encode("榱榲")].join(",") === "158,225,158,195"); // U+69B1
expect(() => {ms932Encoder.encode("\u69B3")}).to.throw(Error, "EncodingError U+69B3");
r = r && ([...ms932Encoder.encode("榴")].join(",") === "158,214"); // U+69B4
expect(() => {ms932Encoder.encode("\u69B5")}).to.throw(Error, "EncodingError U+69B5");
expect(() => {ms932Encoder.encode("\u69B6")}).to.throw(Error, "EncodingError U+69B6");
expect(() => {ms932Encoder.encode("\u69B7")}).to.throw(Error, "EncodingError U+69B7");
expect(() => {ms932Encoder.encode("\u69B8")}).to.throw(Error, "EncodingError U+69B8");
expect(() => {ms932Encoder.encode("\u69B9")}).to.throw(Error, "EncodingError U+69B9");
expect(() => {ms932Encoder.encode("\u69BA")}).to.throw(Error, "EncodingError U+69BA");
r = r && ([...ms932Encoder.encode("榻")].join(",") === "158,206"); // U+69BB
expect(() => {ms932Encoder.encode("\u69BC")}).to.throw(Error, "EncodingError U+69BC");
expect(() => {ms932Encoder.encode("\u69BD")}).to.throw(Error, "EncodingError U+69BD");
r = r && ([...ms932Encoder.encode("榾榿")].join(",") === "158,201,158,198"); // U+69BE
expect(() => {ms932Encoder.encode("\u69C0")}).to.throw(Error, "EncodingError U+69C0");
r = r && ([...ms932Encoder.encode("槁")].join(",") === "158,199"); // U+69C1
expect(() => {ms932Encoder.encode("\u69C2")}).to.throw(Error, "EncodingError U+69C2");
r = r && ([...ms932Encoder.encode("槃")].join(",") === "158,207"); // U+69C3
expect(() => {ms932Encoder.encode("\u69C4")}).to.throw(Error, "EncodingError U+69C4");
expect(() => {ms932Encoder.encode("\u69C5")}).to.throw(Error, "EncodingError U+69C5");
expect(() => {ms932Encoder.encode("\u69C6")}).to.throw(Error, "EncodingError U+69C6");
r = r && ([...ms932Encoder.encode("槇")].join(",") === "234,160"); // U+69C7
expect(() => {ms932Encoder.encode("\u69C8")}).to.throw(Error, "EncodingError U+69C8");
expect(() => {ms932Encoder.encode("\u69C9")}).to.throw(Error, "EncodingError U+69C9");
r = r && ([...ms932Encoder.encode("槊構槌槍槎")].join(",") === "158,204,141,92,146,198,145,132,158,202"); // U+69CA
expect(() => {ms932Encoder.encode("\u69CF")}).to.throw(Error, "EncodingError U+69CF");
r = r && ([...ms932Encoder.encode("槐")].join(",") === "158,197"); // U+69D0
expect(() => {ms932Encoder.encode("\u69D1")}).to.throw(Error, "EncodingError U+69D1");
expect(() => {ms932Encoder.encode("\u69D2")}).to.throw(Error, "EncodingError U+69D2");
r = r && ([...ms932Encoder.encode("槓")].join(",") === "158,200"); // U+69D3
expect(() => {ms932Encoder.encode("\u69D4")}).to.throw(Error, "EncodingError U+69D4");
expect(() => {ms932Encoder.encode("\u69D5")}).to.throw(Error, "EncodingError U+69D5");
expect(() => {ms932Encoder.encode("\u69D6")}).to.throw(Error, "EncodingError U+69D6");
expect(() => {ms932Encoder.encode("\u69D7")}).to.throw(Error, "EncodingError U+69D7");
r = r && ([...ms932Encoder.encode("様槙")].join(",") === "151,108,150,138"); // U+69D8
expect(() => {ms932Encoder.encode("\u69DA")}).to.throw(Error, "EncodingError U+69DA");
expect(() => {ms932Encoder.encode("\u69DB")}).to.throw(Error, "EncodingError U+69DB");
expect(() => {ms932Encoder.encode("\u69DC")}).to.throw(Error, "EncodingError U+69DC");
r = r && ([...ms932Encoder.encode("槝槞")].join(",") === "158,205,158,215"); // U+69DD
expect(() => {ms932Encoder.encode("\u69DF")}).to.throw(Error, "EncodingError U+69DF");
expect(() => {ms932Encoder.encode("\u69E0")}).to.throw(Error, "EncodingError U+69E0");
expect(() => {ms932Encoder.encode("\u69E1")}).to.throw(Error, "EncodingError U+69E1");
r = r && ([...ms932Encoder.encode("槢")].join(",") === "250,236"); // U+69E2
expect(() => {ms932Encoder.encode("\u69E3")}).to.throw(Error, "EncodingError U+69E3");
expect(() => {ms932Encoder.encode("\u69E4")}).to.throw(Error, "EncodingError U+69E4");
expect(() => {ms932Encoder.encode("\u69E5")}).to.throw(Error, "EncodingError U+69E5");
expect(() => {ms932Encoder.encode("\u69E6")}).to.throw(Error, "EncodingError U+69E6");
r = r && ([...ms932Encoder.encode("槧槨")].join(",") === "158,223,158,216"); // U+69E7
expect(() => {ms932Encoder.encode("\u69E9")}).to.throw(Error, "EncodingError U+69E9");
expect(() => {ms932Encoder.encode("\u69EA")}).to.throw(Error, "EncodingError U+69EA");
r = r && ([...ms932Encoder.encode("槫")].join(",") === "158,229"); // U+69EB
expect(() => {ms932Encoder.encode("\u69EC")}).to.throw(Error, "EncodingError U+69EC");
r = r && ([...ms932Encoder.encode("槭")].join(",") === "158,227"); // U+69ED
expect(() => {ms932Encoder.encode("\u69EE")}).to.throw(Error, "EncodingError U+69EE");
expect(() => {ms932Encoder.encode("\u69EF")}).to.throw(Error, "EncodingError U+69EF");
expect(() => {ms932Encoder.encode("\u69F0")}).to.throw(Error, "EncodingError U+69F0");
expect(() => {ms932Encoder.encode("\u69F1")}).to.throw(Error, "EncodingError U+69F1");
r = r && ([...ms932Encoder.encode("槲")].join(",") === "158,222"); // U+69F2
expect(() => {ms932Encoder.encode("\u69F3")}).to.throw(Error, "EncodingError U+69F3");
expect(() => {ms932Encoder.encode("\u69F4")}).to.throw(Error, "EncodingError U+69F4");
expect(() => {ms932Encoder.encode("\u69F5")}).to.throw(Error, "EncodingError U+69F5");
expect(() => {ms932Encoder.encode("\u69F6")}).to.throw(Error, "EncodingError U+69F6");
expect(() => {ms932Encoder.encode("\u69F7")}).to.throw(Error, "EncodingError U+69F7");
expect(() => {ms932Encoder.encode("\u69F8")}).to.throw(Error, "EncodingError U+69F8");
r = r && ([...ms932Encoder.encode("槹")].join(",") === "158,221"); // U+69F9
expect(() => {ms932Encoder.encode("\u69FA")}).to.throw(Error, "EncodingError U+69FA");
r = r && ([...ms932Encoder.encode("槻")].join(",") === "146,206"); // U+69FB
expect(() => {ms932Encoder.encode("\u69FC")}).to.throw(Error, "EncodingError U+69FC");
r = r && ([...ms932Encoder.encode("槽")].join(",") === "145,133"); // U+69FD
expect(() => {ms932Encoder.encode("\u69FE")}).to.throw(Error, "EncodingError U+69FE");
r = r && ([...ms932Encoder.encode("槿")].join(",") === "158,219"); // U+69FF
expect(() => {ms932Encoder.encode("\u6A00")}).to.throw(Error, "EncodingError U+6A00");
expect(() => {ms932Encoder.encode("\u6A01")}).to.throw(Error, "EncodingError U+6A01");
r = r && ([...ms932Encoder.encode("樂")].join(",") === "158,217"); // U+6A02
expect(() => {ms932Encoder.encode("\u6A03")}).to.throw(Error, "EncodingError U+6A03");
expect(() => {ms932Encoder.encode("\u6A04")}).to.throw(Error, "EncodingError U+6A04");
r = r && ([...ms932Encoder.encode("樅")].join(",") === "158,224"); // U+6A05
expect(() => {ms932Encoder.encode("\u6A06")}).to.throw(Error, "EncodingError U+6A06");
expect(() => {ms932Encoder.encode("\u6A07")}).to.throw(Error, "EncodingError U+6A07");
expect(() => {ms932Encoder.encode("\u6A08")}).to.throw(Error, "EncodingError U+6A08");
expect(() => {ms932Encoder.encode("\u6A09")}).to.throw(Error, "EncodingError U+6A09");
r = r && ([...ms932Encoder.encode("樊樋樌")].join(",") === "158,230,148,243,158,236"); // U+6A0A
expect(() => {ms932Encoder.encode("\u6A0D")}).to.throw(Error, "EncodingError U+6A0D");
expect(() => {ms932Encoder.encode("\u6A0E")}).to.throw(Error, "EncodingError U+6A0E");
expect(() => {ms932Encoder.encode("\u6A0F")}).to.throw(Error, "EncodingError U+6A0F");
expect(() => {ms932Encoder.encode("\u6A10")}).to.throw(Error, "EncodingError U+6A10");
expect(() => {ms932Encoder.encode("\u6A11")}).to.throw(Error, "EncodingError U+6A11");
r = r && ([...ms932Encoder.encode("樒樓樔")].join(",") === "158,231,158,234,158,228"); // U+6A12
expect(() => {ms932Encoder.encode("\u6A15")}).to.throw(Error, "EncodingError U+6A15");
expect(() => {ms932Encoder.encode("\u6A16")}).to.throw(Error, "EncodingError U+6A16");
r = r && ([...ms932Encoder.encode("樗")].join(",") === "146,148"); // U+6A17
expect(() => {ms932Encoder.encode("\u6A18")}).to.throw(Error, "EncodingError U+6A18");
r = r && ([...ms932Encoder.encode("標")].join(",") === "149,87"); // U+6A19
expect(() => {ms932Encoder.encode("\u6A1A")}).to.throw(Error, "EncodingError U+6A1A");
r = r && ([...ms932Encoder.encode("樛")].join(",") === "158,218"); // U+6A1B
expect(() => {ms932Encoder.encode("\u6A1C")}).to.throw(Error, "EncodingError U+6A1C");
expect(() => {ms932Encoder.encode("\u6A1D")}).to.throw(Error, "EncodingError U+6A1D");
r = r && ([...ms932Encoder.encode("樞樟")].join(",") === "158,226,143,190"); // U+6A1E
expect(() => {ms932Encoder.encode("\u6A20")}).to.throw(Error, "EncodingError U+6A20");
r = r && ([...ms932Encoder.encode("模樢樣")].join(",") === "150,205,158,246,158,233"); // U+6A21
expect(() => {ms932Encoder.encode("\u6A24")}).to.throw(Error, "EncodingError U+6A24");
expect(() => {ms932Encoder.encode("\u6A25")}).to.throw(Error, "EncodingError U+6A25");
expect(() => {ms932Encoder.encode("\u6A26")}).to.throw(Error, "EncodingError U+6A26");
expect(() => {ms932Encoder.encode("\u6A27")}).to.throw(Error, "EncodingError U+6A27");
expect(() => {ms932Encoder.encode("\u6A28")}).to.throw(Error, "EncodingError U+6A28");
r = r && ([...ms932Encoder.encode("権横樫")].join(",") === "140,160,137,161,138,126"); // U+6A29
expect(() => {ms932Encoder.encode("\u6A2C")}).to.throw(Error, "EncodingError U+6A2C");
expect(() => {ms932Encoder.encode("\u6A2D")}).to.throw(Error, "EncodingError U+6A2D");
r = r && ([...ms932Encoder.encode("樮")].join(",") === "158,209"); // U+6A2E
expect(() => {ms932Encoder.encode("\u6A2F")}).to.throw(Error, "EncodingError U+6A2F");
r = r && ([...ms932Encoder.encode("樰")].join(",") === "250,237"); // U+6A30
expect(() => {ms932Encoder.encode("\u6A31")}).to.throw(Error, "EncodingError U+6A31");
expect(() => {ms932Encoder.encode("\u6A32")}).to.throw(Error, "EncodingError U+6A32");
expect(() => {ms932Encoder.encode("\u6A33")}).to.throw(Error, "EncodingError U+6A33");
expect(() => {ms932Encoder.encode("\u6A34")}).to.throw(Error, "EncodingError U+6A34");
r = r && ([...ms932Encoder.encode("樵樶")].join(",") === "143,191,158,238"); // U+6A35
expect(() => {ms932Encoder.encode("\u6A37")}).to.throw(Error, "EncodingError U+6A37");
r = r && ([...ms932Encoder.encode("樸樹樺")].join(",") === "158,245,142,247,138,146"); // U+6A38
expect(() => {ms932Encoder.encode("\u6A3B")}).to.throw(Error, "EncodingError U+6A3B");
expect(() => {ms932Encoder.encode("\u6A3C")}).to.throw(Error, "EncodingError U+6A3C");
r = r && ([...ms932Encoder.encode("樽")].join(",") === "146,77"); // U+6A3D
expect(() => {ms932Encoder.encode("\u6A3E")}).to.throw(Error, "EncodingError U+6A3E");
expect(() => {ms932Encoder.encode("\u6A3F")}).to.throw(Error, "EncodingError U+6A3F");
expect(() => {ms932Encoder.encode("\u6A40")}).to.throw(Error, "EncodingError U+6A40");
expect(() => {ms932Encoder.encode("\u6A41")}).to.throw(Error, "EncodingError U+6A41");
expect(() => {ms932Encoder.encode("\u6A42")}).to.throw(Error, "EncodingError U+6A42");
expect(() => {ms932Encoder.encode("\u6A43")}).to.throw(Error, "EncodingError U+6A43");
r = r && ([...ms932Encoder.encode("橄")].join(",") === "158,235"); // U+6A44
expect(() => {ms932Encoder.encode("\u6A45")}).to.throw(Error, "EncodingError U+6A45");
r = r && ([...ms932Encoder.encode("橆橇橈")].join(",") === "250,239,158,240,158,244"); // U+6A46
expect(() => {ms932Encoder.encode("\u6A49")}).to.throw(Error, "EncodingError U+6A49");
expect(() => {ms932Encoder.encode("\u6A4A")}).to.throw(Error, "EncodingError U+6A4A");
r = r && ([...ms932Encoder.encode("橋")].join(",") === "139,180"); // U+6A4B
expect(() => {ms932Encoder.encode("\u6A4C")}).to.throw(Error, "EncodingError U+6A4C");
expect(() => {ms932Encoder.encode("\u6A4D")}).to.throw(Error, "EncodingError U+6A4D");
expect(() => {ms932Encoder.encode("\u6A4E")}).to.throw(Error, "EncodingError U+6A4E");
expect(() => {ms932Encoder.encode("\u6A4F")}).to.throw(Error, "EncodingError U+6A4F");
expect(() => {ms932Encoder.encode("\u6A50")}).to.throw(Error, "EncodingError U+6A50");
expect(() => {ms932Encoder.encode("\u6A51")}).to.throw(Error, "EncodingError U+6A51");
expect(() => {ms932Encoder.encode("\u6A52")}).to.throw(Error, "EncodingError U+6A52");
expect(() => {ms932Encoder.encode("\u6A53")}).to.throw(Error, "EncodingError U+6A53");
expect(() => {ms932Encoder.encode("\u6A54")}).to.throw(Error, "EncodingError U+6A54");
expect(() => {ms932Encoder.encode("\u6A55")}).to.throw(Error, "EncodingError U+6A55");
expect(() => {ms932Encoder.encode("\u6A56")}).to.throw(Error, "EncodingError U+6A56");
expect(() => {ms932Encoder.encode("\u6A57")}).to.throw(Error, "EncodingError U+6A57");
r = r && ([...ms932Encoder.encode("橘橙")].join(",") === "139,107,158,242"); // U+6A58
expect(() => {ms932Encoder.encode("\u6A5A")}).to.throw(Error, "EncodingError U+6A5A");
expect(() => {ms932Encoder.encode("\u6A5B")}).to.throw(Error, "EncodingError U+6A5B");
expect(() => {ms932Encoder.encode("\u6A5C")}).to.throw(Error, "EncodingError U+6A5C");
expect(() => {ms932Encoder.encode("\u6A5D")}).to.throw(Error, "EncodingError U+6A5D");
expect(() => {ms932Encoder.encode("\u6A5E")}).to.throw(Error, "EncodingError U+6A5E");
r = r && ([...ms932Encoder.encode("機")].join(",") === "139,64"); // U+6A5F
expect(() => {ms932Encoder.encode("\u6A60")}).to.throw(Error, "EncodingError U+6A60");
r = r && ([...ms932Encoder.encode("橡橢")].join(",") === "147,201,158,241"); // U+6A61
expect(() => {ms932Encoder.encode("\u6A63")}).to.throw(Error, "EncodingError U+6A63");
expect(() => {ms932Encoder.encode("\u6A64")}).to.throw(Error, "EncodingError U+6A64");
expect(() => {ms932Encoder.encode("\u6A65")}).to.throw(Error, "EncodingError U+6A65");
r = r && ([...ms932Encoder.encode("橦")].join(",") === "158,243"); // U+6A66
expect(() => {ms932Encoder.encode("\u6A67")}).to.throw(Error, "EncodingError U+6A67");
expect(() => {ms932Encoder.encode("\u6A68")}).to.throw(Error, "EncodingError U+6A68");
expect(() => {ms932Encoder.encode("\u6A69")}).to.throw(Error, "EncodingError U+6A69");
expect(() => {ms932Encoder.encode("\u6A6A")}).to.throw(Error, "EncodingError U+6A6A");
r = r && ([...ms932Encoder.encode("橫")].join(",") === "250,238"); // U+6A6B
expect(() => {ms932Encoder.encode("\u6A6C")}).to.throw(Error, "EncodingError U+6A6C");
expect(() => {ms932Encoder.encode("\u6A6D")}).to.throw(Error, "EncodingError U+6A6D");
expect(() => {ms932Encoder.encode("\u6A6E")}).to.throw(Error, "EncodingError U+6A6E");
expect(() => {ms932Encoder.encode("\u6A6F")}).to.throw(Error, "EncodingError U+6A6F");
expect(() => {ms932Encoder.encode("\u6A70")}).to.throw(Error, "EncodingError U+6A70");
expect(() => {ms932Encoder.encode("\u6A71")}).to.throw(Error, "EncodingError U+6A71");
r = r && ([...ms932Encoder.encode("橲橳")].join(",") === "158,237,250,240"); // U+6A72
expect(() => {ms932Encoder.encode("\u6A74")}).to.throw(Error, "EncodingError U+6A74");
expect(() => {ms932Encoder.encode("\u6A75")}).to.throw(Error, "EncodingError U+6A75");
expect(() => {ms932Encoder.encode("\u6A76")}).to.throw(Error, "EncodingError U+6A76");
expect(() => {ms932Encoder.encode("\u6A77")}).to.throw(Error, "EncodingError U+6A77");
r = r && ([...ms932Encoder.encode("橸")].join(",") === "158,239"); // U+6A78
expect(() => {ms932Encoder.encode("\u6A79")}).to.throw(Error, "EncodingError U+6A79");
expect(() => {ms932Encoder.encode("\u6A7A")}).to.throw(Error, "EncodingError U+6A7A");
expect(() => {ms932Encoder.encode("\u6A7B")}).to.throw(Error, "EncodingError U+6A7B");
expect(() => {ms932Encoder.encode("\u6A7C")}).to.throw(Error, "EncodingError U+6A7C");
expect(() => {ms932Encoder.encode("\u6A7D")}).to.throw(Error, "EncodingError U+6A7D");
r = r && ([...ms932Encoder.encode("橾橿檀")].join(",") === "250,241,138,128,146,104"); // U+6A7E
expect(() => {ms932Encoder.encode("\u6A81")}).to.throw(Error, "EncodingError U+6A81");
expect(() => {ms932Encoder.encode("\u6A82")}).to.throw(Error, "EncodingError U+6A82");
expect(() => {ms932Encoder.encode("\u6A83")}).to.throw(Error, "EncodingError U+6A83");
r = r && ([...ms932Encoder.encode("檄")].join(",") === "158,250"); // U+6A84
expect(() => {ms932Encoder.encode("\u6A85")}).to.throw(Error, "EncodingError U+6A85");
expect(() => {ms932Encoder.encode("\u6A86")}).to.throw(Error, "EncodingError U+6A86");
expect(() => {ms932Encoder.encode("\u6A87")}).to.throw(Error, "EncodingError U+6A87");
expect(() => {ms932Encoder.encode("\u6A88")}).to.throw(Error, "EncodingError U+6A88");
expect(() => {ms932Encoder.encode("\u6A89")}).to.throw(Error, "EncodingError U+6A89");
expect(() => {ms932Encoder.encode("\u6A8A")}).to.throw(Error, "EncodingError U+6A8A");
expect(() => {ms932Encoder.encode("\u6A8B")}).to.throw(Error, "EncodingError U+6A8B");
expect(() => {ms932Encoder.encode("\u6A8C")}).to.throw(Error, "EncodingError U+6A8C");
r = r && ([...ms932Encoder.encode("檍檎")].join(",") === "158,248,140,231"); // U+6A8D
expect(() => {ms932Encoder.encode("\u6A8F")}).to.throw(Error, "EncodingError U+6A8F");
r = r && ([...ms932Encoder.encode("檐")].join(",") === "158,247"); // U+6A90
expect(() => {ms932Encoder.encode("\u6A91")}).to.throw(Error, "EncodingError U+6A91");
expect(() => {ms932Encoder.encode("\u6A92")}).to.throw(Error, "EncodingError U+6A92");
expect(() => {ms932Encoder.encode("\u6A93")}).to.throw(Error, "EncodingError U+6A93");
expect(() => {ms932Encoder.encode("\u6A94")}).to.throw(Error, "EncodingError U+6A94");
expect(() => {ms932Encoder.encode("\u6A95")}).to.throw(Error, "EncodingError U+6A95");
expect(() => {ms932Encoder.encode("\u6A96")}).to.throw(Error, "EncodingError U+6A96");
r = r && ([...ms932Encoder.encode("檗")].join(",") === "159,64"); // U+6A97
expect(() => {ms932Encoder.encode("\u6A98")}).to.throw(Error, "EncodingError U+6A98");
expect(() => {ms932Encoder.encode("\u6A99")}).to.throw(Error, "EncodingError U+6A99");
expect(() => {ms932Encoder.encode("\u6A9A")}).to.throw(Error, "EncodingError U+6A9A");
expect(() => {ms932Encoder.encode("\u6A9B")}).to.throw(Error, "EncodingError U+6A9B");
r = r && ([...ms932Encoder.encode("檜")].join(",") === "158,119"); // U+6A9C
expect(() => {ms932Encoder.encode("\u6A9D")}).to.throw(Error, "EncodingError U+6A9D");
expect(() => {ms932Encoder.encode("\u6A9E")}).to.throw(Error, "EncodingError U+6A9E");
expect(() => {ms932Encoder.encode("\u6A9F")}).to.throw(Error, "EncodingError U+6A9F");
r = r && ([...ms932Encoder.encode("檠")].join(",") === "158,249"); // U+6AA0
expect(() => {ms932Encoder.encode("\u6AA1")}).to.throw(Error, "EncodingError U+6AA1");
r = r && ([...ms932Encoder.encode("檢檣")].join(",") === "158,251,158,252"); // U+6AA2
expect(() => {ms932Encoder.encode("\u6AA4")}).to.throw(Error, "EncodingError U+6AA4");
expect(() => {ms932Encoder.encode("\u6AA5")}).to.throw(Error, "EncodingError U+6AA5");
expect(() => {ms932Encoder.encode("\u6AA6")}).to.throw(Error, "EncodingError U+6AA6");
expect(() => {ms932Encoder.encode("\u6AA7")}).to.throw(Error, "EncodingError U+6AA7");
expect(() => {ms932Encoder.encode("\u6AA8")}).to.throw(Error, "EncodingError U+6AA8");
expect(() => {ms932Encoder.encode("\u6AA9")}).to.throw(Error, "EncodingError U+6AA9");
r = r && ([...ms932Encoder.encode("檪")].join(",") === "159,75"); // U+6AAA
expect(() => {ms932Encoder.encode("\u6AAB")}).to.throw(Error, "EncodingError U+6AAB");
r = r && ([...ms932Encoder.encode("檬")].join(",") === "159,71"); // U+6AAC
expect(() => {ms932Encoder.encode("\u6AAD")}).to.throw(Error, "EncodingError U+6AAD");
r = r && ([...ms932Encoder.encode("檮")].join(",") === "158,141"); // U+6AAE
expect(() => {ms932Encoder.encode("\u6AAF")}).to.throw(Error, "EncodingError U+6AAF");
expect(() => {ms932Encoder.encode("\u6AB0")}).to.throw(Error, "EncodingError U+6AB0");
expect(() => {ms932Encoder.encode("\u6AB1")}).to.throw(Error, "EncodingError U+6AB1");
expect(() => {ms932Encoder.encode("\u6AB2")}).to.throw(Error, "EncodingError U+6AB2");
r = r && ([...ms932Encoder.encode("檳")].join(",") === "159,70"); // U+6AB3
expect(() => {ms932Encoder.encode("\u6AB4")}).to.throw(Error, "EncodingError U+6AB4");
expect(() => {ms932Encoder.encode("\u6AB5")}).to.throw(Error, "EncodingError U+6AB5");
expect(() => {ms932Encoder.encode("\u6AB6")}).to.throw(Error, "EncodingError U+6AB6");
expect(() => {ms932Encoder.encode("\u6AB7")}).to.throw(Error, "EncodingError U+6AB7");
r = r && ([...ms932Encoder.encode("檸")].join(",") === "159,69"); // U+6AB8
expect(() => {ms932Encoder.encode("\u6AB9")}).to.throw(Error, "EncodingError U+6AB9");
expect(() => {ms932Encoder.encode("\u6ABA")}).to.throw(Error, "EncodingError U+6ABA");
r = r && ([...ms932Encoder.encode("檻")].join(",") === "159,66"); // U+6ABB
expect(() => {ms932Encoder.encode("\u6ABC")}).to.throw(Error, "EncodingError U+6ABC");
expect(() => {ms932Encoder.encode("\u6ABD")}).to.throw(Error, "EncodingError U+6ABD");
expect(() => {ms932Encoder.encode("\u6ABE")}).to.throw(Error, "EncodingError U+6ABE");
expect(() => {ms932Encoder.encode("\u6ABF")}).to.throw(Error, "EncodingError U+6ABF");
expect(() => {ms932Encoder.encode("\u6AC0")}).to.throw(Error, "EncodingError U+6AC0");
r = r && ([...ms932Encoder.encode("櫁櫂櫃")].join(",") === "158,232,159,68,159,67"); // U+6AC1
expect(() => {ms932Encoder.encode("\u6AC4")}).to.throw(Error, "EncodingError U+6AC4");
expect(() => {ms932Encoder.encode("\u6AC5")}).to.throw(Error, "EncodingError U+6AC5");
expect(() => {ms932Encoder.encode("\u6AC6")}).to.throw(Error, "EncodingError U+6AC6");
expect(() => {ms932Encoder.encode("\u6AC7")}).to.throw(Error, "EncodingError U+6AC7");
expect(() => {ms932Encoder.encode("\u6AC8")}).to.throw(Error, "EncodingError U+6AC8");
expect(() => {ms932Encoder.encode("\u6AC9")}).to.throw(Error, "EncodingError U+6AC9");
expect(() => {ms932Encoder.encode("\u6ACA")}).to.throw(Error, "EncodingError U+6ACA");
expect(() => {ms932Encoder.encode("\u6ACB")}).to.throw(Error, "EncodingError U+6ACB");
expect(() => {ms932Encoder.encode("\u6ACC")}).to.throw(Error, "EncodingError U+6ACC");
expect(() => {ms932Encoder.encode("\u6ACD")}).to.throw(Error, "EncodingError U+6ACD");
expect(() => {ms932Encoder.encode("\u6ACE")}).to.throw(Error, "EncodingError U+6ACE");
expect(() => {ms932Encoder.encode("\u6ACF")}).to.throw(Error, "EncodingError U+6ACF");
expect(() => {ms932Encoder.encode("\u6AD0")}).to.throw(Error, "EncodingError U+6AD0");
r = r && ([...ms932Encoder.encode("櫑")].join(",") === "159,73"); // U+6AD1
expect(() => {ms932Encoder.encode("\u6AD2")}).to.throw(Error, "EncodingError U+6AD2");
r = r && ([...ms932Encoder.encode("櫓")].join(",") === "152,69"); // U+6AD3
expect(() => {ms932Encoder.encode("\u6AD4")}).to.throw(Error, "EncodingError U+6AD4");
expect(() => {ms932Encoder.encode("\u6AD5")}).to.throw(Error, "EncodingError U+6AD5");
expect(() => {ms932Encoder.encode("\u6AD6")}).to.throw(Error, "EncodingError U+6AD6");
expect(() => {ms932Encoder.encode("\u6AD7")}).to.throw(Error, "EncodingError U+6AD7");
expect(() => {ms932Encoder.encode("\u6AD8")}).to.throw(Error, "EncodingError U+6AD8");
expect(() => {ms932Encoder.encode("\u6AD9")}).to.throw(Error, "EncodingError U+6AD9");
r = r && ([...ms932Encoder.encode("櫚櫛")].join(",") === "159,76,139,249"); // U+6ADA
expect(() => {ms932Encoder.encode("\u6ADC")}).to.throw(Error, "EncodingError U+6ADC");
expect(() => {ms932Encoder.encode("\u6ADD")}).to.throw(Error, "EncodingError U+6ADD");
r = r && ([...ms932Encoder.encode("櫞櫟")].join(",") === "159,72,159,74"); // U+6ADE
expect(() => {ms932Encoder.encode("\u6AE0")}).to.throw(Error, "EncodingError U+6AE0");
expect(() => {ms932Encoder.encode("\u6AE1")}).to.throw(Error, "EncodingError U+6AE1");
r = r && ([...ms932Encoder.encode("櫢")].join(",") === "250,242"); // U+6AE2
expect(() => {ms932Encoder.encode("\u6AE3")}).to.throw(Error, "EncodingError U+6AE3");
r = r && ([...ms932Encoder.encode("櫤")].join(",") === "250,243"); // U+6AE4
expect(() => {ms932Encoder.encode("\u6AE5")}).to.throw(Error, "EncodingError U+6AE5");
expect(() => {ms932Encoder.encode("\u6AE6")}).to.throw(Error, "EncodingError U+6AE6");
expect(() => {ms932Encoder.encode("\u6AE7")}).to.throw(Error, "EncodingError U+6AE7");
r = r && ([...ms932Encoder.encode("櫨")].join(",") === "148,165"); // U+6AE8
expect(() => {ms932Encoder.encode("\u6AE9")}).to.throw(Error, "EncodingError U+6AE9");
r = r && ([...ms932Encoder.encode("櫪")].join(",") === "159,77"); // U+6AEA
expect(() => {ms932Encoder.encode("\u6AEB")}).to.throw(Error, "EncodingError U+6AEB");
expect(() => {ms932Encoder.encode("\u6AEC")}).to.throw(Error, "EncodingError U+6AEC");
expect(() => {ms932Encoder.encode("\u6AED")}).to.throw(Error, "EncodingError U+6AED");
expect(() => {ms932Encoder.encode("\u6AEE")}).to.throw(Error, "EncodingError U+6AEE");
expect(() => {ms932Encoder.encode("\u6AEF")}).to.throw(Error, "EncodingError U+6AEF");
expect(() => {ms932Encoder.encode("\u6AF0")}).to.throw(Error, "EncodingError U+6AF0");
expect(() => {ms932Encoder.encode("\u6AF1")}).to.throw(Error, "EncodingError U+6AF1");
expect(() => {ms932Encoder.encode("\u6AF2")}).to.throw(Error, "EncodingError U+6AF2");
expect(() => {ms932Encoder.encode("\u6AF3")}).to.throw(Error, "EncodingError U+6AF3");
expect(() => {ms932Encoder.encode("\u6AF4")}).to.throw(Error, "EncodingError U+6AF4");
expect(() => {ms932Encoder.encode("\u6AF5")}).to.throw(Error, "EncodingError U+6AF5");
expect(() => {ms932Encoder.encode("\u6AF6")}).to.throw(Error, "EncodingError U+6AF6");
expect(() => {ms932Encoder.encode("\u6AF7")}).to.throw(Error, "EncodingError U+6AF7");
expect(() => {ms932Encoder.encode("\u6AF8")}).to.throw(Error, "EncodingError U+6AF8");
expect(() => {ms932Encoder.encode("\u6AF9")}).to.throw(Error, "EncodingError U+6AF9");
r = r && ([...ms932Encoder.encode("櫺櫻")].join(",") === "159,81,159,78"); // U+6AFA
expect(() => {ms932Encoder.encode("\u6AFC")}).to.throw(Error, "EncodingError U+6AFC");
expect(() => {ms932Encoder.encode("\u6AFD")}).to.throw(Error, "EncodingError U+6AFD");
expect(() => {ms932Encoder.encode("\u6AFE")}).to.throw(Error, "EncodingError U+6AFE");
expect(() => {ms932Encoder.encode("\u6AFF")}).to.throw(Error, "EncodingError U+6AFF");
expect(() => {ms932Encoder.encode("\u6B00")}).to.throw(Error, "EncodingError U+6B00");
expect(() => {ms932Encoder.encode("\u6B01")}).to.throw(Error, "EncodingError U+6B01");
expect(() => {ms932Encoder.encode("\u6B02")}).to.throw(Error, "EncodingError U+6B02");
expect(() => {ms932Encoder.encode("\u6B03")}).to.throw(Error, "EncodingError U+6B03");
r = r && ([...ms932Encoder.encode("欄欅")].join(",") === "151,147,159,79"); // U+6B04
expect(() => {ms932Encoder.encode("\u6B06")}).to.throw(Error, "EncodingError U+6B06");
expect(() => {ms932Encoder.encode("\u6B07")}).to.throw(Error, "EncodingError U+6B07");
expect(() => {ms932Encoder.encode("\u6B08")}).to.throw(Error, "EncodingError U+6B08");
expect(() => {ms932Encoder.encode("\u6B09")}).to.throw(Error, "EncodingError U+6B09");
r = r && ([...ms932Encoder.encode("權")].join(",") === "158,220"); // U+6B0A
expect(() => {ms932Encoder.encode("\u6B0B")}).to.throw(Error, "EncodingError U+6B0B");
expect(() => {ms932Encoder.encode("\u6B0C")}).to.throw(Error, "EncodingError U+6B0C");
expect(() => {ms932Encoder.encode("\u6B0D")}).to.throw(Error, "EncodingError U+6B0D");
expect(() => {ms932Encoder.encode("\u6B0E")}).to.throw(Error, "EncodingError U+6B0E");
expect(() => {ms932Encoder.encode("\u6B0F")}).to.throw(Error, "EncodingError U+6B0F");
expect(() => {ms932Encoder.encode("\u6B10")}).to.throw(Error, "EncodingError U+6B10");
expect(() => {ms932Encoder.encode("\u6B11")}).to.throw(Error, "EncodingError U+6B11");
r = r && ([...ms932Encoder.encode("欒")].join(",") === "159,82"); // U+6B12
expect(() => {ms932Encoder.encode("\u6B13")}).to.throw(Error, "EncodingError U+6B13");
expect(() => {ms932Encoder.encode("\u6B14")}).to.throw(Error, "EncodingError U+6B14");
expect(() => {ms932Encoder.encode("\u6B15")}).to.throw(Error, "EncodingError U+6B15");
r = r && ([...ms932Encoder.encode("欖")].join(",") === "159,83"); // U+6B16
expect(() => {ms932Encoder.encode("\u6B17")}).to.throw(Error, "EncodingError U+6B17");
expect(() => {ms932Encoder.encode("\u6B18")}).to.throw(Error, "EncodingError U+6B18");
expect(() => {ms932Encoder.encode("\u6B19")}).to.throw(Error, "EncodingError U+6B19");
expect(() => {ms932Encoder.encode("\u6B1A")}).to.throw(Error, "EncodingError U+6B1A");
expect(() => {ms932Encoder.encode("\u6B1B")}).to.throw(Error, "EncodingError U+6B1B");
expect(() => {ms932Encoder.encode("\u6B1C")}).to.throw(Error, "EncodingError U+6B1C");
r = r && ([...ms932Encoder.encode("欝")].join(",") === "137,84"); // U+6B1D
expect(() => {ms932Encoder.encode("\u6B1E")}).to.throw(Error, "EncodingError U+6B1E");
r = r && ([...ms932Encoder.encode("欟欠次")].join(",") === "159,85,140,135,142,159"); // U+6B1F
expect(() => {ms932Encoder.encode("\u6B22")}).to.throw(Error, "EncodingError U+6B22");
r = r && ([...ms932Encoder.encode("欣")].join(",") === "139,211"); // U+6B23
expect(() => {ms932Encoder.encode("\u6B24")}).to.throw(Error, "EncodingError U+6B24");
expect(() => {ms932Encoder.encode("\u6B25")}).to.throw(Error, "EncodingError U+6B25");
expect(() => {ms932Encoder.encode("\u6B26")}).to.throw(Error, "EncodingError U+6B26");
r = r && ([...ms932Encoder.encode("欧")].join(",") === "137,162"); // U+6B27
expect(() => {ms932Encoder.encode("\u6B28")}).to.throw(Error, "EncodingError U+6B28");
expect(() => {ms932Encoder.encode("\u6B29")}).to.throw(Error, "EncodingError U+6B29");
expect(() => {ms932Encoder.encode("\u6B2A")}).to.throw(Error, "EncodingError U+6B2A");
expect(() => {ms932Encoder.encode("\u6B2B")}).to.throw(Error, "EncodingError U+6B2B");
expect(() => {ms932Encoder.encode("\u6B2C")}).to.throw(Error, "EncodingError U+6B2C");
expect(() => {ms932Encoder.encode("\u6B2D")}).to.throw(Error, "EncodingError U+6B2D");
expect(() => {ms932Encoder.encode("\u6B2E")}).to.throw(Error, "EncodingError U+6B2E");
expect(() => {ms932Encoder.encode("\u6B2F")}).to.throw(Error, "EncodingError U+6B2F");
expect(() => {ms932Encoder.encode("\u6B30")}).to.throw(Error, "EncodingError U+6B30");
expect(() => {ms932Encoder.encode("\u6B31")}).to.throw(Error, "EncodingError U+6B31");
r = r && ([...ms932Encoder.encode("欲")].join(",") === "151,126"); // U+6B32
expect(() => {ms932Encoder.encode("\u6B33")}).to.throw(Error, "EncodingError U+6B33");
expect(() => {ms932Encoder.encode("\u6B34")}).to.throw(Error, "EncodingError U+6B34");
expect(() => {ms932Encoder.encode("\u6B35")}).to.throw(Error, "EncodingError U+6B35");
expect(() => {ms932Encoder.encode("\u6B36")}).to.throw(Error, "EncodingError U+6B36");
r = r && ([...ms932Encoder.encode("欷欸欹欺")].join(",") === "159,87,159,86,159,89,139,92"); // U+6B37
expect(() => {ms932Encoder.encode("\u6B3B")}).to.throw(Error, "EncodingError U+6B3B");
expect(() => {ms932Encoder.encode("\u6B3C")}).to.throw(Error, "EncodingError U+6B3C");
r = r && ([...ms932Encoder.encode("欽款")].join(",") === "139,212,138,188"); // U+6B3D
expect(() => {ms932Encoder.encode("\u6B3F")}).to.throw(Error, "EncodingError U+6B3F");
expect(() => {ms932Encoder.encode("\u6B40")}).to.throw(Error, "EncodingError U+6B40");
expect(() => {ms932Encoder.encode("\u6B41")}).to.throw(Error, "EncodingError U+6B41");
expect(() => {ms932Encoder.encode("\u6B42")}).to.throw(Error, "EncodingError U+6B42");
r = r && ([...ms932Encoder.encode("歃")].join(",") === "159,92"); // U+6B43
expect(() => {ms932Encoder.encode("\u6B44")}).to.throw(Error, "EncodingError U+6B44");
expect(() => {ms932Encoder.encode("\u6B45")}).to.throw(Error, "EncodingError U+6B45");
expect(() => {ms932Encoder.encode("\u6B46")}).to.throw(Error, "EncodingError U+6B46");
r = r && ([...ms932Encoder.encode("歇")].join(",") === "159,91"); // U+6B47
expect(() => {ms932Encoder.encode("\u6B48")}).to.throw(Error, "EncodingError U+6B48");
r = r && ([...ms932Encoder.encode("歉")].join(",") === "159,93"); // U+6B49
expect(() => {ms932Encoder.encode("\u6B4A")}).to.throw(Error, "EncodingError U+6B4A");
expect(() => {ms932Encoder.encode("\u6B4B")}).to.throw(Error, "EncodingError U+6B4B");
r = r && ([...ms932Encoder.encode("歌")].join(",") === "137,204"); // U+6B4C
expect(() => {ms932Encoder.encode("\u6B4D")}).to.throw(Error, "EncodingError U+6B4D");
r = r && ([...ms932Encoder.encode("歎")].join(",") === "146,86"); // U+6B4E
expect(() => {ms932Encoder.encode("\u6B4F")}).to.throw(Error, "EncodingError U+6B4F");
r = r && ([...ms932Encoder.encode("歐")].join(",") === "159,94"); // U+6B50
expect(() => {ms932Encoder.encode("\u6B51")}).to.throw(Error, "EncodingError U+6B51");
expect(() => {ms932Encoder.encode("\u6B52")}).to.throw(Error, "EncodingError U+6B52");
r = r && ([...ms932Encoder.encode("歓歔")].join(",") === "138,189,159,96"); // U+6B53
expect(() => {ms932Encoder.encode("\u6B55")}).to.throw(Error, "EncodingError U+6B55");
expect(() => {ms932Encoder.encode("\u6B56")}).to.throw(Error, "EncodingError U+6B56");
expect(() => {ms932Encoder.encode("\u6B57")}).to.throw(Error, "EncodingError U+6B57");
expect(() => {ms932Encoder.encode("\u6B58")}).to.throw(Error, "EncodingError U+6B58");
r = r && ([...ms932Encoder.encode("歙")].join(",") === "159,95"); // U+6B59
expect(() => {ms932Encoder.encode("\u6B5A")}).to.throw(Error, "EncodingError U+6B5A");
r = r && ([...ms932Encoder.encode("歛")].join(",") === "159,97"); // U+6B5B
expect(() => {ms932Encoder.encode("\u6B5C")}).to.throw(Error, "EncodingError U+6B5C");
expect(() => {ms932Encoder.encode("\u6B5D")}).to.throw(Error, "EncodingError U+6B5D");
expect(() => {ms932Encoder.encode("\u6B5E")}).to.throw(Error, "EncodingError U+6B5E");
r = r && ([...ms932Encoder.encode("歟")].join(",") === "159,98"); // U+6B5F
expect(() => {ms932Encoder.encode("\u6B60")}).to.throw(Error, "EncodingError U+6B60");
r = r && ([...ms932Encoder.encode("歡止正此")].join(",") === "159,99,142,126,144,179,141,159"); // U+6B61
expect(() => {ms932Encoder.encode("\u6B65")}).to.throw(Error, "EncodingError U+6B65");
r = r && ([...ms932Encoder.encode("武")].join(",") === "149,144"); // U+6B66
expect(() => {ms932Encoder.encode("\u6B67")}).to.throw(Error, "EncodingError U+6B67");
expect(() => {ms932Encoder.encode("\u6B68")}).to.throw(Error, "EncodingError U+6B68");
r = r && ([...ms932Encoder.encode("歩歪")].join(",") === "149,224,152,99"); // U+6B69
expect(() => {ms932Encoder.encode("\u6B6B")}).to.throw(Error, "EncodingError U+6B6B");
expect(() => {ms932Encoder.encode("\u6B6C")}).to.throw(Error, "EncodingError U+6B6C");
expect(() => {ms932Encoder.encode("\u6B6D")}).to.throw(Error, "EncodingError U+6B6D");
expect(() => {ms932Encoder.encode("\u6B6E")}).to.throw(Error, "EncodingError U+6B6E");
r = r && ([...ms932Encoder.encode("歯")].join(",") === "142,149"); // U+6B6F
expect(() => {ms932Encoder.encode("\u6B70")}).to.throw(Error, "EncodingError U+6B70");
expect(() => {ms932Encoder.encode("\u6B71")}).to.throw(Error, "EncodingError U+6B71");
expect(() => {ms932Encoder.encode("\u6B72")}).to.throw(Error, "EncodingError U+6B72");
r = r && ([...ms932Encoder.encode("歳歴")].join(",") === "141,206,151,240"); // U+6B73
expect(() => {ms932Encoder.encode("\u6B75")}).to.throw(Error, "EncodingError U+6B75");
expect(() => {ms932Encoder.encode("\u6B76")}).to.throw(Error, "EncodingError U+6B76");
expect(() => {ms932Encoder.encode("\u6B77")}).to.throw(Error, "EncodingError U+6B77");
r = r && ([...ms932Encoder.encode("歸歹")].join(",") === "159,100,159,101"); // U+6B78
expect(() => {ms932Encoder.encode("\u6B7A")}).to.throw(Error, "EncodingError U+6B7A");
r = r && ([...ms932Encoder.encode("死")].join(",") === "142,128"); // U+6B7B
expect(() => {ms932Encoder.encode("\u6B7C")}).to.throw(Error, "EncodingError U+6B7C");
expect(() => {ms932Encoder.encode("\u6B7D")}).to.throw(Error, "EncodingError U+6B7D");
expect(() => {ms932Encoder.encode("\u6B7E")}).to.throw(Error, "EncodingError U+6B7E");
r = r && ([...ms932Encoder.encode("歿殀")].join(",") === "159,102,159,103"); // U+6B7F
expect(() => {ms932Encoder.encode("\u6B81")}).to.throw(Error, "EncodingError U+6B81");
expect(() => {ms932Encoder.encode("\u6B82")}).to.throw(Error, "EncodingError U+6B82");
r = r && ([...ms932Encoder.encode("殃殄")].join(",") === "159,105,159,104"); // U+6B83
expect(() => {ms932Encoder.encode("\u6B85")}).to.throw(Error, "EncodingError U+6B85");
r = r && ([...ms932Encoder.encode("殆")].join(",") === "150,119"); // U+6B86
expect(() => {ms932Encoder.encode("\u6B87")}).to.throw(Error, "EncodingError U+6B87");
expect(() => {ms932Encoder.encode("\u6B88")}).to.throw(Error, "EncodingError U+6B88");
r = r && ([...ms932Encoder.encode("殉殊残")].join(",") === "143,125,142,234,142,99"); // U+6B89
expect(() => {ms932Encoder.encode("\u6B8C")}).to.throw(Error, "EncodingError U+6B8C");
r = r && ([...ms932Encoder.encode("殍")].join(",") === "159,106"); // U+6B8D
expect(() => {ms932Encoder.encode("\u6B8E")}).to.throw(Error, "EncodingError U+6B8E");
expect(() => {ms932Encoder.encode("\u6B8F")}).to.throw(Error, "EncodingError U+6B8F");
expect(() => {ms932Encoder.encode("\u6B90")}).to.throw(Error, "EncodingError U+6B90");
expect(() => {ms932Encoder.encode("\u6B91")}).to.throw(Error, "EncodingError U+6B91");
expect(() => {ms932Encoder.encode("\u6B92")}).to.throw(Error, "EncodingError U+6B92");
expect(() => {ms932Encoder.encode("\u6B93")}).to.throw(Error, "EncodingError U+6B93");
expect(() => {ms932Encoder.encode("\u6B94")}).to.throw(Error, "EncodingError U+6B94");
r = r && ([...ms932Encoder.encode("殕殖")].join(",") === "159,108,144,66"); // U+6B95
expect(() => {ms932Encoder.encode("\u6B97")}).to.throw(Error, "EncodingError U+6B97");
r = r && ([...ms932Encoder.encode("殘")].join(",") === "159,107"); // U+6B98
expect(() => {ms932Encoder.encode("\u6B99")}).to.throw(Error, "EncodingError U+6B99");
expect(() => {ms932Encoder.encode("\u6B9A")}).to.throw(Error, "EncodingError U+6B9A");
expect(() => {ms932Encoder.encode("\u6B9B")}).to.throw(Error, "EncodingError U+6B9B");
expect(() => {ms932Encoder.encode("\u6B9C")}).to.throw(Error, "EncodingError U+6B9C");
expect(() => {ms932Encoder.encode("\u6B9D")}).to.throw(Error, "EncodingError U+6B9D");
r = r && ([...ms932Encoder.encode("殞")].join(",") === "159,109"); // U+6B9E
expect(() => {ms932Encoder.encode("\u6B9F")}).to.throw(Error, "EncodingError U+6B9F");
expect(() => {ms932Encoder.encode("\u6BA0")}).to.throw(Error, "EncodingError U+6BA0");
expect(() => {ms932Encoder.encode("\u6BA1")}).to.throw(Error, "EncodingError U+6BA1");
expect(() => {ms932Encoder.encode("\u6BA2")}).to.throw(Error, "EncodingError U+6BA2");
expect(() => {ms932Encoder.encode("\u6BA3")}).to.throw(Error, "EncodingError U+6BA3");
r = r && ([...ms932Encoder.encode("殤")].join(",") === "159,110"); // U+6BA4
expect(() => {ms932Encoder.encode("\u6BA5")}).to.throw(Error, "EncodingError U+6BA5");
expect(() => {ms932Encoder.encode("\u6BA6")}).to.throw(Error, "EncodingError U+6BA6");
expect(() => {ms932Encoder.encode("\u6BA7")}).to.throw(Error, "EncodingError U+6BA7");
expect(() => {ms932Encoder.encode("\u6BA8")}).to.throw(Error, "EncodingError U+6BA8");
expect(() => {ms932Encoder.encode("\u6BA9")}).to.throw(Error, "EncodingError U+6BA9");
r = r && ([...ms932Encoder.encode("殪殫")].join(",") === "159,111,159,112"); // U+6BAA
expect(() => {ms932Encoder.encode("\u6BAC")}).to.throw(Error, "EncodingError U+6BAC");
expect(() => {ms932Encoder.encode("\u6BAD")}).to.throw(Error, "EncodingError U+6BAD");
expect(() => {ms932Encoder.encode("\u6BAE")}).to.throw(Error, "EncodingError U+6BAE");
r = r && ([...ms932Encoder.encode("殯")].join(",") === "159,113"); // U+6BAF
expect(() => {ms932Encoder.encode("\u6BB0")}).to.throw(Error, "EncodingError U+6BB0");
r = r && ([...ms932Encoder.encode("殱殲殳殴段")].join(",") === "159,115,159,114,159,116,137,163,146,105"); // U+6BB1
expect(() => {ms932Encoder.encode("\u6BB6")}).to.throw(Error, "EncodingError U+6BB6");
r = r && ([...ms932Encoder.encode("殷")].join(",") === "159,117"); // U+6BB7
expect(() => {ms932Encoder.encode("\u6BB8")}).to.throw(Error, "EncodingError U+6BB8");
expect(() => {ms932Encoder.encode("\u6BB9")}).to.throw(Error, "EncodingError U+6BB9");
r = r && ([...ms932Encoder.encode("殺殻殼")].join(",") === "142,69,138,107,159,118"); // U+6BBA
expect(() => {ms932Encoder.encode("\u6BBD")}).to.throw(Error, "EncodingError U+6BBD");
expect(() => {ms932Encoder.encode("\u6BBE")}).to.throw(Error, "EncodingError U+6BBE");
r = r && ([...ms932Encoder.encode("殿毀")].join(",") === "147,97,154,202"); // U+6BBF
expect(() => {ms932Encoder.encode("\u6BC1")}).to.throw(Error, "EncodingError U+6BC1");
expect(() => {ms932Encoder.encode("\u6BC2")}).to.throw(Error, "EncodingError U+6BC2");
expect(() => {ms932Encoder.encode("\u6BC3")}).to.throw(Error, "EncodingError U+6BC3");
expect(() => {ms932Encoder.encode("\u6BC4")}).to.throw(Error, "EncodingError U+6BC4");
r = r && ([...ms932Encoder.encode("毅毆")].join(",") === "139,66,159,119"); // U+6BC5
expect(() => {ms932Encoder.encode("\u6BC7")}).to.throw(Error, "EncodingError U+6BC7");
expect(() => {ms932Encoder.encode("\u6BC8")}).to.throw(Error, "EncodingError U+6BC8");
expect(() => {ms932Encoder.encode("\u6BC9")}).to.throw(Error, "EncodingError U+6BC9");
expect(() => {ms932Encoder.encode("\u6BCA")}).to.throw(Error, "EncodingError U+6BCA");
r = r && ([...ms932Encoder.encode("毋")].join(",") === "159,120"); // U+6BCB
expect(() => {ms932Encoder.encode("\u6BCC")}).to.throw(Error, "EncodingError U+6BCC");
r = r && ([...ms932Encoder.encode("母毎")].join(",") === "149,234,150,136"); // U+6BCD
expect(() => {ms932Encoder.encode("\u6BCF")}).to.throw(Error, "EncodingError U+6BCF");
expect(() => {ms932Encoder.encode("\u6BD0")}).to.throw(Error, "EncodingError U+6BD0");
expect(() => {ms932Encoder.encode("\u6BD1")}).to.throw(Error, "EncodingError U+6BD1");
r = r && ([...ms932Encoder.encode("毒毓比")].join(",") === "147,197,159,121,148,228"); // U+6BD2
expect(() => {ms932Encoder.encode("\u6BD5")}).to.throw(Error, "EncodingError U+6BD5");
r = r && ([...ms932Encoder.encode("毖")].join(",") === "250,244"); // U+6BD6
expect(() => {ms932Encoder.encode("\u6BD7")}).to.throw(Error, "EncodingError U+6BD7");
r = r && ([...ms932Encoder.encode("毘")].join(",") === "148,249"); // U+6BD8
expect(() => {ms932Encoder.encode("\u6BD9")}).to.throw(Error, "EncodingError U+6BD9");
expect(() => {ms932Encoder.encode("\u6BDA")}).to.throw(Error, "EncodingError U+6BDA");
r = r && ([...ms932Encoder.encode("毛")].join(",") === "150,209"); // U+6BDB
expect(() => {ms932Encoder.encode("\u6BDC")}).to.throw(Error, "EncodingError U+6BDC");
expect(() => {ms932Encoder.encode("\u6BDD")}).to.throw(Error, "EncodingError U+6BDD");
expect(() => {ms932Encoder.encode("\u6BDE")}).to.throw(Error, "EncodingError U+6BDE");
r = r && ([...ms932Encoder.encode("毟")].join(",") === "159,122"); // U+6BDF
expect(() => {ms932Encoder.encode("\u6BE0")}).to.throw(Error, "EncodingError U+6BE0");
expect(() => {ms932Encoder.encode("\u6BE1")}).to.throw(Error, "EncodingError U+6BE1");
expect(() => {ms932Encoder.encode("\u6BE2")}).to.throw(Error, "EncodingError U+6BE2");
expect(() => {ms932Encoder.encode("\u6BE3")}).to.throw(Error, "EncodingError U+6BE3");
expect(() => {ms932Encoder.encode("\u6BE4")}).to.throw(Error, "EncodingError U+6BE4");
expect(() => {ms932Encoder.encode("\u6BE5")}).to.throw(Error, "EncodingError U+6BE5");
expect(() => {ms932Encoder.encode("\u6BE6")}).to.throw(Error, "EncodingError U+6BE6");
expect(() => {ms932Encoder.encode("\u6BE7")}).to.throw(Error, "EncodingError U+6BE7");
expect(() => {ms932Encoder.encode("\u6BE8")}).to.throw(Error, "EncodingError U+6BE8");
expect(() => {ms932Encoder.encode("\u6BE9")}).to.throw(Error, "EncodingError U+6BE9");
expect(() => {ms932Encoder.encode("\u6BEA")}).to.throw(Error, "EncodingError U+6BEA");
r = r && ([...ms932Encoder.encode("毫毬")].join(",") === "159,124,159,123"); // U+6BEB
expect(() => {ms932Encoder.encode("\u6BED")}).to.throw(Error, "EncodingError U+6BED");
expect(() => {ms932Encoder.encode("\u6BEE")}).to.throw(Error, "EncodingError U+6BEE");
r = r && ([...ms932Encoder.encode("毯")].join(",") === "159,126"); // U+6BEF
expect(() => {ms932Encoder.encode("\u6BF0")}).to.throw(Error, "EncodingError U+6BF0");
expect(() => {ms932Encoder.encode("\u6BF1")}).to.throw(Error, "EncodingError U+6BF1");
expect(() => {ms932Encoder.encode("\u6BF2")}).to.throw(Error, "EncodingError U+6BF2");
r = r && ([...ms932Encoder.encode("毳")].join(",") === "159,125"); // U+6BF3
expect(() => {ms932Encoder.encode("\u6BF4")}).to.throw(Error, "EncodingError U+6BF4");
expect(() => {ms932Encoder.encode("\u6BF5")}).to.throw(Error, "EncodingError U+6BF5");
expect(() => {ms932Encoder.encode("\u6BF6")}).to.throw(Error, "EncodingError U+6BF6");
expect(() => {ms932Encoder.encode("\u6BF7")}).to.throw(Error, "EncodingError U+6BF7");
expect(() => {ms932Encoder.encode("\u6BF8")}).to.throw(Error, "EncodingError U+6BF8");
expect(() => {ms932Encoder.encode("\u6BF9")}).to.throw(Error, "EncodingError U+6BF9");
expect(() => {ms932Encoder.encode("\u6BFA")}).to.throw(Error, "EncodingError U+6BFA");
expect(() => {ms932Encoder.encode("\u6BFB")}).to.throw(Error, "EncodingError U+6BFB");
expect(() => {ms932Encoder.encode("\u6BFC")}).to.throw(Error, "EncodingError U+6BFC");
expect(() => {ms932Encoder.encode("\u6BFD")}).to.throw(Error, "EncodingError U+6BFD");
expect(() => {ms932Encoder.encode("\u6BFE")}).to.throw(Error, "EncodingError U+6BFE");
expect(() => {ms932Encoder.encode("\u6BFF")}).to.throw(Error, "EncodingError U+6BFF");

expect(r).to.equal(true);

  });

});
