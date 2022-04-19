import { expect } from '@esm-bundle/chai';
import { Ms932 } from "./index";

describe("Ms932.Encoder.prototype.encode 10", () => {

  it("encode(string) - U+9800-U+9BFF", () => {
    const ms932Encoder = new Ms932.Encoder({fatal:true});

    let r = true;
expect(() => {ms932Encoder.encode("\u9800")}).to.throw(Error, "EncodingError U+9800");
r = r && ([...ms932Encoder.encode("頁頂頃")].join(",") === "149,197,146,184,141,160"); // U+9801
expect(() => {ms932Encoder.encode("\u9804")}).to.throw(Error, "EncodingError U+9804");
r = r && ([...ms932Encoder.encode("項順")].join(",") === "141,128,143,135"); // U+9805
expect(() => {ms932Encoder.encode("\u9807")}).to.throw(Error, "EncodingError U+9807");
r = r && ([...ms932Encoder.encode("須")].join(",") === "144,123"); // U+9808
expect(() => {ms932Encoder.encode("\u9809")}).to.throw(Error, "EncodingError U+9809");
expect(() => {ms932Encoder.encode("\u980A")}).to.throw(Error, "EncodingError U+980A");
expect(() => {ms932Encoder.encode("\u980B")}).to.throw(Error, "EncodingError U+980B");
r = r && ([...ms932Encoder.encode("頌")].join(",") === "232,241"); // U+980C
expect(() => {ms932Encoder.encode("\u980D")}).to.throw(Error, "EncodingError U+980D");
expect(() => {ms932Encoder.encode("\u980E")}).to.throw(Error, "EncodingError U+980E");
r = r && ([...ms932Encoder.encode("頏預頑頒頓")].join(",") === "232,240,151,97,138,230,148,208,147,218"); // U+980F
expect(() => {ms932Encoder.encode("\u9814")}).to.throw(Error, "EncodingError U+9814");
expect(() => {ms932Encoder.encode("\u9815")}).to.throw(Error, "EncodingError U+9815");
expect(() => {ms932Encoder.encode("\u9816")}).to.throw(Error, "EncodingError U+9816");
r = r && ([...ms932Encoder.encode("頗領")].join(",") === "144,156,151,204"); // U+9817
expect(() => {ms932Encoder.encode("\u9819")}).to.throw(Error, "EncodingError U+9819");
r = r && ([...ms932Encoder.encode("頚")].join(",") === "140,122"); // U+981A
expect(() => {ms932Encoder.encode("\u981B")}).to.throw(Error, "EncodingError U+981B");
expect(() => {ms932Encoder.encode("\u981C")}).to.throw(Error, "EncodingError U+981C");
expect(() => {ms932Encoder.encode("\u981D")}).to.throw(Error, "EncodingError U+981D");
expect(() => {ms932Encoder.encode("\u981E")}).to.throw(Error, "EncodingError U+981E");
expect(() => {ms932Encoder.encode("\u981F")}).to.throw(Error, "EncodingError U+981F");
expect(() => {ms932Encoder.encode("\u9820")}).to.throw(Error, "EncodingError U+9820");
r = r && ([...ms932Encoder.encode("頡")].join(",") === "232,244"); // U+9821
expect(() => {ms932Encoder.encode("\u9822")}).to.throw(Error, "EncodingError U+9822");
expect(() => {ms932Encoder.encode("\u9823")}).to.throw(Error, "EncodingError U+9823");
r = r && ([...ms932Encoder.encode("頤")].join(",") === "232,243"); // U+9824
expect(() => {ms932Encoder.encode("\u9825")}).to.throw(Error, "EncodingError U+9825");
expect(() => {ms932Encoder.encode("\u9826")}).to.throw(Error, "EncodingError U+9826");
expect(() => {ms932Encoder.encode("\u9827")}).to.throw(Error, "EncodingError U+9827");
expect(() => {ms932Encoder.encode("\u9828")}).to.throw(Error, "EncodingError U+9828");
expect(() => {ms932Encoder.encode("\u9829")}).to.throw(Error, "EncodingError U+9829");
expect(() => {ms932Encoder.encode("\u982A")}).to.throw(Error, "EncodingError U+982A");
expect(() => {ms932Encoder.encode("\u982B")}).to.throw(Error, "EncodingError U+982B");
r = r && ([...ms932Encoder.encode("頬頭")].join(",") === "150,106,147,170"); // U+982C
expect(() => {ms932Encoder.encode("\u982E")}).to.throw(Error, "EncodingError U+982E");
expect(() => {ms932Encoder.encode("\u982F")}).to.throw(Error, "EncodingError U+982F");
expect(() => {ms932Encoder.encode("\u9830")}).to.throw(Error, "EncodingError U+9830");
expect(() => {ms932Encoder.encode("\u9831")}).to.throw(Error, "EncodingError U+9831");
expect(() => {ms932Encoder.encode("\u9832")}).to.throw(Error, "EncodingError U+9832");
expect(() => {ms932Encoder.encode("\u9833")}).to.throw(Error, "EncodingError U+9833");
r = r && ([...ms932Encoder.encode("頴")].join(",") === "137,111"); // U+9834
expect(() => {ms932Encoder.encode("\u9835")}).to.throw(Error, "EncodingError U+9835");
expect(() => {ms932Encoder.encode("\u9836")}).to.throw(Error, "EncodingError U+9836");
r = r && ([...ms932Encoder.encode("頷頸")].join(",") === "232,245,232,242"); // U+9837
expect(() => {ms932Encoder.encode("\u9839")}).to.throw(Error, "EncodingError U+9839");
expect(() => {ms932Encoder.encode("\u983A")}).to.throw(Error, "EncodingError U+983A");
r = r && ([...ms932Encoder.encode("頻頼頽")].join(",") === "149,112,151,138,232,246"); // U+983B
expect(() => {ms932Encoder.encode("\u983E")}).to.throw(Error, "EncodingError U+983E");
expect(() => {ms932Encoder.encode("\u983F")}).to.throw(Error, "EncodingError U+983F");
expect(() => {ms932Encoder.encode("\u9840")}).to.throw(Error, "EncodingError U+9840");
expect(() => {ms932Encoder.encode("\u9841")}).to.throw(Error, "EncodingError U+9841");
expect(() => {ms932Encoder.encode("\u9842")}).to.throw(Error, "EncodingError U+9842");
expect(() => {ms932Encoder.encode("\u9843")}).to.throw(Error, "EncodingError U+9843");
expect(() => {ms932Encoder.encode("\u9844")}).to.throw(Error, "EncodingError U+9844");
expect(() => {ms932Encoder.encode("\u9845")}).to.throw(Error, "EncodingError U+9845");
r = r && ([...ms932Encoder.encode("顆")].join(",") === "232,247"); // U+9846
expect(() => {ms932Encoder.encode("\u9847")}).to.throw(Error, "EncodingError U+9847");
expect(() => {ms932Encoder.encode("\u9848")}).to.throw(Error, "EncodingError U+9848");
expect(() => {ms932Encoder.encode("\u9849")}).to.throw(Error, "EncodingError U+9849");
expect(() => {ms932Encoder.encode("\u984A")}).to.throw(Error, "EncodingError U+984A");
r = r && ([...ms932Encoder.encode("顋題額顎顏")].join(",") === "232,249,145,232,138,122,138,123,232,248"); // U+984B
expect(() => {ms932Encoder.encode("\u9850")}).to.throw(Error, "EncodingError U+9850");
expect(() => {ms932Encoder.encode("\u9851")}).to.throw(Error, "EncodingError U+9851");
expect(() => {ms932Encoder.encode("\u9852")}).to.throw(Error, "EncodingError U+9852");
expect(() => {ms932Encoder.encode("\u9853")}).to.throw(Error, "EncodingError U+9853");
r = r && ([...ms932Encoder.encode("顔顕")].join(",") === "138,231,140,176"); // U+9854
expect(() => {ms932Encoder.encode("\u9856")}).to.throw(Error, "EncodingError U+9856");
r = r && ([...ms932Encoder.encode("顗願")].join(",") === "251,244,138,232"); // U+9857
expect(() => {ms932Encoder.encode("\u9859")}).to.throw(Error, "EncodingError U+9859");
expect(() => {ms932Encoder.encode("\u985A")}).to.throw(Error, "EncodingError U+985A");
r = r && ([...ms932Encoder.encode("顛")].join(",") === "147,94"); // U+985B
expect(() => {ms932Encoder.encode("\u985C")}).to.throw(Error, "EncodingError U+985C");
expect(() => {ms932Encoder.encode("\u985D")}).to.throw(Error, "EncodingError U+985D");
r = r && ([...ms932Encoder.encode("類")].join(",") === "151,222"); // U+985E
expect(() => {ms932Encoder.encode("\u985F")}).to.throw(Error, "EncodingError U+985F");
expect(() => {ms932Encoder.encode("\u9860")}).to.throw(Error, "EncodingError U+9860");
expect(() => {ms932Encoder.encode("\u9861")}).to.throw(Error, "EncodingError U+9861");
expect(() => {ms932Encoder.encode("\u9862")}).to.throw(Error, "EncodingError U+9862");
expect(() => {ms932Encoder.encode("\u9863")}).to.throw(Error, "EncodingError U+9863");
expect(() => {ms932Encoder.encode("\u9864")}).to.throw(Error, "EncodingError U+9864");
r = r && ([...ms932Encoder.encode("顥")].join(",") === "251,245"); // U+9865
expect(() => {ms932Encoder.encode("\u9866")}).to.throw(Error, "EncodingError U+9866");
r = r && ([...ms932Encoder.encode("顧")].join(",") === "140,218"); // U+9867
expect(() => {ms932Encoder.encode("\u9868")}).to.throw(Error, "EncodingError U+9868");
expect(() => {ms932Encoder.encode("\u9869")}).to.throw(Error, "EncodingError U+9869");
expect(() => {ms932Encoder.encode("\u986A")}).to.throw(Error, "EncodingError U+986A");
r = r && ([...ms932Encoder.encode("顫")].join(",") === "232,250"); // U+986B
expect(() => {ms932Encoder.encode("\u986C")}).to.throw(Error, "EncodingError U+986C");
expect(() => {ms932Encoder.encode("\u986D")}).to.throw(Error, "EncodingError U+986D");
expect(() => {ms932Encoder.encode("\u986E")}).to.throw(Error, "EncodingError U+986E");
r = r && ([...ms932Encoder.encode("顯顰顱")].join(",") === "232,251,232,252,233,64"); // U+986F
expect(() => {ms932Encoder.encode("\u9872")}).to.throw(Error, "EncodingError U+9872");
r = r && ([...ms932Encoder.encode("顳顴")].join(",") === "233,66,233,65"); // U+9873
expect(() => {ms932Encoder.encode("\u9875")}).to.throw(Error, "EncodingError U+9875");
expect(() => {ms932Encoder.encode("\u9876")}).to.throw(Error, "EncodingError U+9876");
expect(() => {ms932Encoder.encode("\u9877")}).to.throw(Error, "EncodingError U+9877");
expect(() => {ms932Encoder.encode("\u9878")}).to.throw(Error, "EncodingError U+9878");
expect(() => {ms932Encoder.encode("\u9879")}).to.throw(Error, "EncodingError U+9879");
expect(() => {ms932Encoder.encode("\u987A")}).to.throw(Error, "EncodingError U+987A");
expect(() => {ms932Encoder.encode("\u987B")}).to.throw(Error, "EncodingError U+987B");
expect(() => {ms932Encoder.encode("\u987C")}).to.throw(Error, "EncodingError U+987C");
expect(() => {ms932Encoder.encode("\u987D")}).to.throw(Error, "EncodingError U+987D");
expect(() => {ms932Encoder.encode("\u987E")}).to.throw(Error, "EncodingError U+987E");
expect(() => {ms932Encoder.encode("\u987F")}).to.throw(Error, "EncodingError U+987F");
expect(() => {ms932Encoder.encode("\u9880")}).to.throw(Error, "EncodingError U+9880");
expect(() => {ms932Encoder.encode("\u9881")}).to.throw(Error, "EncodingError U+9881");
expect(() => {ms932Encoder.encode("\u9882")}).to.throw(Error, "EncodingError U+9882");
expect(() => {ms932Encoder.encode("\u9883")}).to.throw(Error, "EncodingError U+9883");
expect(() => {ms932Encoder.encode("\u9884")}).to.throw(Error, "EncodingError U+9884");
expect(() => {ms932Encoder.encode("\u9885")}).to.throw(Error, "EncodingError U+9885");
expect(() => {ms932Encoder.encode("\u9886")}).to.throw(Error, "EncodingError U+9886");
expect(() => {ms932Encoder.encode("\u9887")}).to.throw(Error, "EncodingError U+9887");
expect(() => {ms932Encoder.encode("\u9888")}).to.throw(Error, "EncodingError U+9888");
expect(() => {ms932Encoder.encode("\u9889")}).to.throw(Error, "EncodingError U+9889");
expect(() => {ms932Encoder.encode("\u988A")}).to.throw(Error, "EncodingError U+988A");
expect(() => {ms932Encoder.encode("\u988B")}).to.throw(Error, "EncodingError U+988B");
expect(() => {ms932Encoder.encode("\u988C")}).to.throw(Error, "EncodingError U+988C");
expect(() => {ms932Encoder.encode("\u988D")}).to.throw(Error, "EncodingError U+988D");
expect(() => {ms932Encoder.encode("\u988E")}).to.throw(Error, "EncodingError U+988E");
expect(() => {ms932Encoder.encode("\u988F")}).to.throw(Error, "EncodingError U+988F");
expect(() => {ms932Encoder.encode("\u9890")}).to.throw(Error, "EncodingError U+9890");
expect(() => {ms932Encoder.encode("\u9891")}).to.throw(Error, "EncodingError U+9891");
expect(() => {ms932Encoder.encode("\u9892")}).to.throw(Error, "EncodingError U+9892");
expect(() => {ms932Encoder.encode("\u9893")}).to.throw(Error, "EncodingError U+9893");
expect(() => {ms932Encoder.encode("\u9894")}).to.throw(Error, "EncodingError U+9894");
expect(() => {ms932Encoder.encode("\u9895")}).to.throw(Error, "EncodingError U+9895");
expect(() => {ms932Encoder.encode("\u9896")}).to.throw(Error, "EncodingError U+9896");
expect(() => {ms932Encoder.encode("\u9897")}).to.throw(Error, "EncodingError U+9897");
expect(() => {ms932Encoder.encode("\u9898")}).to.throw(Error, "EncodingError U+9898");
expect(() => {ms932Encoder.encode("\u9899")}).to.throw(Error, "EncodingError U+9899");
expect(() => {ms932Encoder.encode("\u989A")}).to.throw(Error, "EncodingError U+989A");
expect(() => {ms932Encoder.encode("\u989B")}).to.throw(Error, "EncodingError U+989B");
expect(() => {ms932Encoder.encode("\u989C")}).to.throw(Error, "EncodingError U+989C");
expect(() => {ms932Encoder.encode("\u989D")}).to.throw(Error, "EncodingError U+989D");
expect(() => {ms932Encoder.encode("\u989E")}).to.throw(Error, "EncodingError U+989E");
expect(() => {ms932Encoder.encode("\u989F")}).to.throw(Error, "EncodingError U+989F");
expect(() => {ms932Encoder.encode("\u98A0")}).to.throw(Error, "EncodingError U+98A0");
expect(() => {ms932Encoder.encode("\u98A1")}).to.throw(Error, "EncodingError U+98A1");
expect(() => {ms932Encoder.encode("\u98A2")}).to.throw(Error, "EncodingError U+98A2");
expect(() => {ms932Encoder.encode("\u98A3")}).to.throw(Error, "EncodingError U+98A3");
expect(() => {ms932Encoder.encode("\u98A4")}).to.throw(Error, "EncodingError U+98A4");
expect(() => {ms932Encoder.encode("\u98A5")}).to.throw(Error, "EncodingError U+98A5");
expect(() => {ms932Encoder.encode("\u98A6")}).to.throw(Error, "EncodingError U+98A6");
expect(() => {ms932Encoder.encode("\u98A7")}).to.throw(Error, "EncodingError U+98A7");
r = r && ([...ms932Encoder.encode("風")].join(",") === "149,151"); // U+98A8
expect(() => {ms932Encoder.encode("\u98A9")}).to.throw(Error, "EncodingError U+98A9");
r = r && ([...ms932Encoder.encode("颪")].join(",") === "233,67"); // U+98AA
expect(() => {ms932Encoder.encode("\u98AB")}).to.throw(Error, "EncodingError U+98AB");
expect(() => {ms932Encoder.encode("\u98AC")}).to.throw(Error, "EncodingError U+98AC");
expect(() => {ms932Encoder.encode("\u98AD")}).to.throw(Error, "EncodingError U+98AD");
expect(() => {ms932Encoder.encode("\u98AE")}).to.throw(Error, "EncodingError U+98AE");
r = r && ([...ms932Encoder.encode("颯")].join(",") === "233,68"); // U+98AF
expect(() => {ms932Encoder.encode("\u98B0")}).to.throw(Error, "EncodingError U+98B0");
r = r && ([...ms932Encoder.encode("颱")].join(",") === "233,69"); // U+98B1
expect(() => {ms932Encoder.encode("\u98B2")}).to.throw(Error, "EncodingError U+98B2");
expect(() => {ms932Encoder.encode("\u98B3")}).to.throw(Error, "EncodingError U+98B3");
expect(() => {ms932Encoder.encode("\u98B4")}).to.throw(Error, "EncodingError U+98B4");
expect(() => {ms932Encoder.encode("\u98B5")}).to.throw(Error, "EncodingError U+98B5");
r = r && ([...ms932Encoder.encode("颶")].join(",") === "233,70"); // U+98B6
expect(() => {ms932Encoder.encode("\u98B7")}).to.throw(Error, "EncodingError U+98B7");
expect(() => {ms932Encoder.encode("\u98B8")}).to.throw(Error, "EncodingError U+98B8");
expect(() => {ms932Encoder.encode("\u98B9")}).to.throw(Error, "EncodingError U+98B9");
expect(() => {ms932Encoder.encode("\u98BA")}).to.throw(Error, "EncodingError U+98BA");
expect(() => {ms932Encoder.encode("\u98BB")}).to.throw(Error, "EncodingError U+98BB");
expect(() => {ms932Encoder.encode("\u98BC")}).to.throw(Error, "EncodingError U+98BC");
expect(() => {ms932Encoder.encode("\u98BD")}).to.throw(Error, "EncodingError U+98BD");
expect(() => {ms932Encoder.encode("\u98BE")}).to.throw(Error, "EncodingError U+98BE");
expect(() => {ms932Encoder.encode("\u98BF")}).to.throw(Error, "EncodingError U+98BF");
expect(() => {ms932Encoder.encode("\u98C0")}).to.throw(Error, "EncodingError U+98C0");
expect(() => {ms932Encoder.encode("\u98C1")}).to.throw(Error, "EncodingError U+98C1");
expect(() => {ms932Encoder.encode("\u98C2")}).to.throw(Error, "EncodingError U+98C2");
r = r && ([...ms932Encoder.encode("飃飄")].join(",") === "233,72,233,71"); // U+98C3
expect(() => {ms932Encoder.encode("\u98C5")}).to.throw(Error, "EncodingError U+98C5");
r = r && ([...ms932Encoder.encode("飆")].join(",") === "233,73"); // U+98C6
expect(() => {ms932Encoder.encode("\u98C7")}).to.throw(Error, "EncodingError U+98C7");
expect(() => {ms932Encoder.encode("\u98C8")}).to.throw(Error, "EncodingError U+98C8");
expect(() => {ms932Encoder.encode("\u98C9")}).to.throw(Error, "EncodingError U+98C9");
expect(() => {ms932Encoder.encode("\u98CA")}).to.throw(Error, "EncodingError U+98CA");
expect(() => {ms932Encoder.encode("\u98CB")}).to.throw(Error, "EncodingError U+98CB");
expect(() => {ms932Encoder.encode("\u98CC")}).to.throw(Error, "EncodingError U+98CC");
expect(() => {ms932Encoder.encode("\u98CD")}).to.throw(Error, "EncodingError U+98CD");
expect(() => {ms932Encoder.encode("\u98CE")}).to.throw(Error, "EncodingError U+98CE");
expect(() => {ms932Encoder.encode("\u98CF")}).to.throw(Error, "EncodingError U+98CF");
expect(() => {ms932Encoder.encode("\u98D0")}).to.throw(Error, "EncodingError U+98D0");
expect(() => {ms932Encoder.encode("\u98D1")}).to.throw(Error, "EncodingError U+98D1");
expect(() => {ms932Encoder.encode("\u98D2")}).to.throw(Error, "EncodingError U+98D2");
expect(() => {ms932Encoder.encode("\u98D3")}).to.throw(Error, "EncodingError U+98D3");
expect(() => {ms932Encoder.encode("\u98D4")}).to.throw(Error, "EncodingError U+98D4");
expect(() => {ms932Encoder.encode("\u98D5")}).to.throw(Error, "EncodingError U+98D5");
expect(() => {ms932Encoder.encode("\u98D6")}).to.throw(Error, "EncodingError U+98D6");
expect(() => {ms932Encoder.encode("\u98D7")}).to.throw(Error, "EncodingError U+98D7");
expect(() => {ms932Encoder.encode("\u98D8")}).to.throw(Error, "EncodingError U+98D8");
expect(() => {ms932Encoder.encode("\u98D9")}).to.throw(Error, "EncodingError U+98D9");
expect(() => {ms932Encoder.encode("\u98DA")}).to.throw(Error, "EncodingError U+98DA");
r = r && ([...ms932Encoder.encode("飛飜")].join(",") === "148,242,227,202"); // U+98DB
expect(() => {ms932Encoder.encode("\u98DD")}).to.throw(Error, "EncodingError U+98DD");
expect(() => {ms932Encoder.encode("\u98DE")}).to.throw(Error, "EncodingError U+98DE");
r = r && ([...ms932Encoder.encode("食")].join(",") === "144,72"); // U+98DF
expect(() => {ms932Encoder.encode("\u98E0")}).to.throw(Error, "EncodingError U+98E0");
expect(() => {ms932Encoder.encode("\u98E1")}).to.throw(Error, "EncodingError U+98E1");
r = r && ([...ms932Encoder.encode("飢")].join(",") === "139,81"); // U+98E2
expect(() => {ms932Encoder.encode("\u98E3")}).to.throw(Error, "EncodingError U+98E3");
expect(() => {ms932Encoder.encode("\u98E4")}).to.throw(Error, "EncodingError U+98E4");
expect(() => {ms932Encoder.encode("\u98E5")}).to.throw(Error, "EncodingError U+98E5");
expect(() => {ms932Encoder.encode("\u98E6")}).to.throw(Error, "EncodingError U+98E6");
expect(() => {ms932Encoder.encode("\u98E7")}).to.throw(Error, "EncodingError U+98E7");
expect(() => {ms932Encoder.encode("\u98E8")}).to.throw(Error, "EncodingError U+98E8");
r = r && ([...ms932Encoder.encode("飩")].join(",") === "233,74"); // U+98E9
expect(() => {ms932Encoder.encode("\u98EA")}).to.throw(Error, "EncodingError U+98EA");
r = r && ([...ms932Encoder.encode("飫")].join(",") === "233,75"); // U+98EB
expect(() => {ms932Encoder.encode("\u98EC")}).to.throw(Error, "EncodingError U+98EC");
r = r && ([...ms932Encoder.encode("飭飮飯")].join(",") === "153,170,159,90,148,209"); // U+98ED
expect(() => {ms932Encoder.encode("\u98F0")}).to.throw(Error, "EncodingError U+98F0");
expect(() => {ms932Encoder.encode("\u98F1")}).to.throw(Error, "EncodingError U+98F1");
r = r && ([...ms932Encoder.encode("飲")].join(",") === "136,249"); // U+98F2
expect(() => {ms932Encoder.encode("\u98F3")}).to.throw(Error, "EncodingError U+98F3");
r = r && ([...ms932Encoder.encode("飴")].join(",") === "136,185"); // U+98F4
expect(() => {ms932Encoder.encode("\u98F5")}).to.throw(Error, "EncodingError U+98F5");
expect(() => {ms932Encoder.encode("\u98F6")}).to.throw(Error, "EncodingError U+98F6");
expect(() => {ms932Encoder.encode("\u98F7")}).to.throw(Error, "EncodingError U+98F7");
expect(() => {ms932Encoder.encode("\u98F8")}).to.throw(Error, "EncodingError U+98F8");
expect(() => {ms932Encoder.encode("\u98F9")}).to.throw(Error, "EncodingError U+98F9");
expect(() => {ms932Encoder.encode("\u98FA")}).to.throw(Error, "EncodingError U+98FA");
expect(() => {ms932Encoder.encode("\u98FB")}).to.throw(Error, "EncodingError U+98FB");
r = r && ([...ms932Encoder.encode("飼飽飾")].join(",") === "142,148,150,79,143,252"); // U+98FC
expect(() => {ms932Encoder.encode("\u98FF")}).to.throw(Error, "EncodingError U+98FF");
expect(() => {ms932Encoder.encode("\u9900")}).to.throw(Error, "EncodingError U+9900");
expect(() => {ms932Encoder.encode("\u9901")}).to.throw(Error, "EncodingError U+9901");
expect(() => {ms932Encoder.encode("\u9902")}).to.throw(Error, "EncodingError U+9902");
r = r && ([...ms932Encoder.encode("餃")].join(",") === "233,76"); // U+9903
expect(() => {ms932Encoder.encode("\u9904")}).to.throw(Error, "EncodingError U+9904");
r = r && ([...ms932Encoder.encode("餅")].join(",") === "150,221"); // U+9905
expect(() => {ms932Encoder.encode("\u9906")}).to.throw(Error, "EncodingError U+9906");
expect(() => {ms932Encoder.encode("\u9907")}).to.throw(Error, "EncodingError U+9907");
expect(() => {ms932Encoder.encode("\u9908")}).to.throw(Error, "EncodingError U+9908");
r = r && ([...ms932Encoder.encode("餉養")].join(",") === "233,77,151,123"); // U+9909
expect(() => {ms932Encoder.encode("\u990B")}).to.throw(Error, "EncodingError U+990B");
r = r && ([...ms932Encoder.encode("餌")].join(",") === "137,97"); // U+990C
expect(() => {ms932Encoder.encode("\u990D")}).to.throw(Error, "EncodingError U+990D");
expect(() => {ms932Encoder.encode("\u990E")}).to.throw(Error, "EncodingError U+990E");
expect(() => {ms932Encoder.encode("\u990F")}).to.throw(Error, "EncodingError U+990F");
r = r && ([...ms932Encoder.encode("餐")].join(",") === "142,96"); // U+9910
expect(() => {ms932Encoder.encode("\u9911")}).to.throw(Error, "EncodingError U+9911");
r = r && ([...ms932Encoder.encode("餒餓餔")].join(",") === "233,78,137,236,233,79"); // U+9912
expect(() => {ms932Encoder.encode("\u9915")}).to.throw(Error, "EncodingError U+9915");
expect(() => {ms932Encoder.encode("\u9916")}).to.throw(Error, "EncodingError U+9916");
expect(() => {ms932Encoder.encode("\u9917")}).to.throw(Error, "EncodingError U+9917");
r = r && ([...ms932Encoder.encode("餘")].join(",") === "233,80"); // U+9918
expect(() => {ms932Encoder.encode("\u9919")}).to.throw(Error, "EncodingError U+9919");
expect(() => {ms932Encoder.encode("\u991A")}).to.throw(Error, "EncodingError U+991A");
expect(() => {ms932Encoder.encode("\u991B")}).to.throw(Error, "EncodingError U+991B");
expect(() => {ms932Encoder.encode("\u991C")}).to.throw(Error, "EncodingError U+991C");
r = r && ([...ms932Encoder.encode("餝餞")].join(",") === "233,82,233,83"); // U+991D
expect(() => {ms932Encoder.encode("\u991F")}).to.throw(Error, "EncodingError U+991F");
r = r && ([...ms932Encoder.encode("餠餡")].join(",") === "233,85,233,81"); // U+9920
expect(() => {ms932Encoder.encode("\u9922")}).to.throw(Error, "EncodingError U+9922");
expect(() => {ms932Encoder.encode("\u9923")}).to.throw(Error, "EncodingError U+9923");
r = r && ([...ms932Encoder.encode("餤")].join(",") === "233,84"); // U+9924
expect(() => {ms932Encoder.encode("\u9925")}).to.throw(Error, "EncodingError U+9925");
expect(() => {ms932Encoder.encode("\u9926")}).to.throw(Error, "EncodingError U+9926");
r = r && ([...ms932Encoder.encode("餧館")].join(",") === "251,248,138,217"); // U+9927
expect(() => {ms932Encoder.encode("\u9929")}).to.throw(Error, "EncodingError U+9929");
expect(() => {ms932Encoder.encode("\u992A")}).to.throw(Error, "EncodingError U+992A");
expect(() => {ms932Encoder.encode("\u992B")}).to.throw(Error, "EncodingError U+992B");
r = r && ([...ms932Encoder.encode("餬")].join(",") === "233,86"); // U+992C
expect(() => {ms932Encoder.encode("\u992D")}).to.throw(Error, "EncodingError U+992D");
r = r && ([...ms932Encoder.encode("餮")].join(",") === "233,87"); // U+992E
expect(() => {ms932Encoder.encode("\u992F")}).to.throw(Error, "EncodingError U+992F");
expect(() => {ms932Encoder.encode("\u9930")}).to.throw(Error, "EncodingError U+9930");
expect(() => {ms932Encoder.encode("\u9931")}).to.throw(Error, "EncodingError U+9931");
expect(() => {ms932Encoder.encode("\u9932")}).to.throw(Error, "EncodingError U+9932");
expect(() => {ms932Encoder.encode("\u9933")}).to.throw(Error, "EncodingError U+9933");
expect(() => {ms932Encoder.encode("\u9934")}).to.throw(Error, "EncodingError U+9934");
expect(() => {ms932Encoder.encode("\u9935")}).to.throw(Error, "EncodingError U+9935");
expect(() => {ms932Encoder.encode("\u9936")}).to.throw(Error, "EncodingError U+9936");
expect(() => {ms932Encoder.encode("\u9937")}).to.throw(Error, "EncodingError U+9937");
expect(() => {ms932Encoder.encode("\u9938")}).to.throw(Error, "EncodingError U+9938");
expect(() => {ms932Encoder.encode("\u9939")}).to.throw(Error, "EncodingError U+9939");
expect(() => {ms932Encoder.encode("\u993A")}).to.throw(Error, "EncodingError U+993A");
expect(() => {ms932Encoder.encode("\u993B")}).to.throw(Error, "EncodingError U+993B");
expect(() => {ms932Encoder.encode("\u993C")}).to.throw(Error, "EncodingError U+993C");
r = r && ([...ms932Encoder.encode("餽餾")].join(",") === "233,88,233,89"); // U+993D
expect(() => {ms932Encoder.encode("\u993F")}).to.throw(Error, "EncodingError U+993F");
expect(() => {ms932Encoder.encode("\u9940")}).to.throw(Error, "EncodingError U+9940");
expect(() => {ms932Encoder.encode("\u9941")}).to.throw(Error, "EncodingError U+9941");
r = r && ([...ms932Encoder.encode("饂")].join(",") === "233,90"); // U+9942
expect(() => {ms932Encoder.encode("\u9943")}).to.throw(Error, "EncodingError U+9943");
expect(() => {ms932Encoder.encode("\u9944")}).to.throw(Error, "EncodingError U+9944");
r = r && ([...ms932Encoder.encode("饅")].join(",") === "233,92"); // U+9945
expect(() => {ms932Encoder.encode("\u9946")}).to.throw(Error, "EncodingError U+9946");
expect(() => {ms932Encoder.encode("\u9947")}).to.throw(Error, "EncodingError U+9947");
expect(() => {ms932Encoder.encode("\u9948")}).to.throw(Error, "EncodingError U+9948");
r = r && ([...ms932Encoder.encode("饉")].join(",") === "233,91"); // U+9949
expect(() => {ms932Encoder.encode("\u994A")}).to.throw(Error, "EncodingError U+994A");
r = r && ([...ms932Encoder.encode("饋饌")].join(",") === "233,94,233,97"); // U+994B
expect(() => {ms932Encoder.encode("\u994D")}).to.throw(Error, "EncodingError U+994D");
expect(() => {ms932Encoder.encode("\u994E")}).to.throw(Error, "EncodingError U+994E");
expect(() => {ms932Encoder.encode("\u994F")}).to.throw(Error, "EncodingError U+994F");
r = r && ([...ms932Encoder.encode("饐饑饒")].join(",") === "233,93,233,95,233,96"); // U+9950
expect(() => {ms932Encoder.encode("\u9953")}).to.throw(Error, "EncodingError U+9953");
expect(() => {ms932Encoder.encode("\u9954")}).to.throw(Error, "EncodingError U+9954");
r = r && ([...ms932Encoder.encode("饕")].join(",") === "233,98"); // U+9955
expect(() => {ms932Encoder.encode("\u9956")}).to.throw(Error, "EncodingError U+9956");
r = r && ([...ms932Encoder.encode("饗")].join(",") === "139,192"); // U+9957
expect(() => {ms932Encoder.encode("\u9958")}).to.throw(Error, "EncodingError U+9958");
expect(() => {ms932Encoder.encode("\u9959")}).to.throw(Error, "EncodingError U+9959");
expect(() => {ms932Encoder.encode("\u995A")}).to.throw(Error, "EncodingError U+995A");
expect(() => {ms932Encoder.encode("\u995B")}).to.throw(Error, "EncodingError U+995B");
expect(() => {ms932Encoder.encode("\u995C")}).to.throw(Error, "EncodingError U+995C");
expect(() => {ms932Encoder.encode("\u995D")}).to.throw(Error, "EncodingError U+995D");
expect(() => {ms932Encoder.encode("\u995E")}).to.throw(Error, "EncodingError U+995E");
expect(() => {ms932Encoder.encode("\u995F")}).to.throw(Error, "EncodingError U+995F");
expect(() => {ms932Encoder.encode("\u9960")}).to.throw(Error, "EncodingError U+9960");
expect(() => {ms932Encoder.encode("\u9961")}).to.throw(Error, "EncodingError U+9961");
expect(() => {ms932Encoder.encode("\u9962")}).to.throw(Error, "EncodingError U+9962");
expect(() => {ms932Encoder.encode("\u9963")}).to.throw(Error, "EncodingError U+9963");
expect(() => {ms932Encoder.encode("\u9964")}).to.throw(Error, "EncodingError U+9964");
expect(() => {ms932Encoder.encode("\u9965")}).to.throw(Error, "EncodingError U+9965");
expect(() => {ms932Encoder.encode("\u9966")}).to.throw(Error, "EncodingError U+9966");
expect(() => {ms932Encoder.encode("\u9967")}).to.throw(Error, "EncodingError U+9967");
expect(() => {ms932Encoder.encode("\u9968")}).to.throw(Error, "EncodingError U+9968");
expect(() => {ms932Encoder.encode("\u9969")}).to.throw(Error, "EncodingError U+9969");
expect(() => {ms932Encoder.encode("\u996A")}).to.throw(Error, "EncodingError U+996A");
expect(() => {ms932Encoder.encode("\u996B")}).to.throw(Error, "EncodingError U+996B");
expect(() => {ms932Encoder.encode("\u996C")}).to.throw(Error, "EncodingError U+996C");
expect(() => {ms932Encoder.encode("\u996D")}).to.throw(Error, "EncodingError U+996D");
expect(() => {ms932Encoder.encode("\u996E")}).to.throw(Error, "EncodingError U+996E");
expect(() => {ms932Encoder.encode("\u996F")}).to.throw(Error, "EncodingError U+996F");
expect(() => {ms932Encoder.encode("\u9970")}).to.throw(Error, "EncodingError U+9970");
expect(() => {ms932Encoder.encode("\u9971")}).to.throw(Error, "EncodingError U+9971");
expect(() => {ms932Encoder.encode("\u9972")}).to.throw(Error, "EncodingError U+9972");
expect(() => {ms932Encoder.encode("\u9973")}).to.throw(Error, "EncodingError U+9973");
expect(() => {ms932Encoder.encode("\u9974")}).to.throw(Error, "EncodingError U+9974");
expect(() => {ms932Encoder.encode("\u9975")}).to.throw(Error, "EncodingError U+9975");
expect(() => {ms932Encoder.encode("\u9976")}).to.throw(Error, "EncodingError U+9976");
expect(() => {ms932Encoder.encode("\u9977")}).to.throw(Error, "EncodingError U+9977");
expect(() => {ms932Encoder.encode("\u9978")}).to.throw(Error, "EncodingError U+9978");
expect(() => {ms932Encoder.encode("\u9979")}).to.throw(Error, "EncodingError U+9979");
expect(() => {ms932Encoder.encode("\u997A")}).to.throw(Error, "EncodingError U+997A");
expect(() => {ms932Encoder.encode("\u997B")}).to.throw(Error, "EncodingError U+997B");
expect(() => {ms932Encoder.encode("\u997C")}).to.throw(Error, "EncodingError U+997C");
expect(() => {ms932Encoder.encode("\u997D")}).to.throw(Error, "EncodingError U+997D");
expect(() => {ms932Encoder.encode("\u997E")}).to.throw(Error, "EncodingError U+997E");
expect(() => {ms932Encoder.encode("\u997F")}).to.throw(Error, "EncodingError U+997F");
expect(() => {ms932Encoder.encode("\u9980")}).to.throw(Error, "EncodingError U+9980");
expect(() => {ms932Encoder.encode("\u9981")}).to.throw(Error, "EncodingError U+9981");
expect(() => {ms932Encoder.encode("\u9982")}).to.throw(Error, "EncodingError U+9982");
expect(() => {ms932Encoder.encode("\u9983")}).to.throw(Error, "EncodingError U+9983");
expect(() => {ms932Encoder.encode("\u9984")}).to.throw(Error, "EncodingError U+9984");
expect(() => {ms932Encoder.encode("\u9985")}).to.throw(Error, "EncodingError U+9985");
expect(() => {ms932Encoder.encode("\u9986")}).to.throw(Error, "EncodingError U+9986");
expect(() => {ms932Encoder.encode("\u9987")}).to.throw(Error, "EncodingError U+9987");
expect(() => {ms932Encoder.encode("\u9988")}).to.throw(Error, "EncodingError U+9988");
expect(() => {ms932Encoder.encode("\u9989")}).to.throw(Error, "EncodingError U+9989");
expect(() => {ms932Encoder.encode("\u998A")}).to.throw(Error, "EncodingError U+998A");
expect(() => {ms932Encoder.encode("\u998B")}).to.throw(Error, "EncodingError U+998B");
expect(() => {ms932Encoder.encode("\u998C")}).to.throw(Error, "EncodingError U+998C");
expect(() => {ms932Encoder.encode("\u998D")}).to.throw(Error, "EncodingError U+998D");
expect(() => {ms932Encoder.encode("\u998E")}).to.throw(Error, "EncodingError U+998E");
expect(() => {ms932Encoder.encode("\u998F")}).to.throw(Error, "EncodingError U+998F");
expect(() => {ms932Encoder.encode("\u9990")}).to.throw(Error, "EncodingError U+9990");
expect(() => {ms932Encoder.encode("\u9991")}).to.throw(Error, "EncodingError U+9991");
expect(() => {ms932Encoder.encode("\u9992")}).to.throw(Error, "EncodingError U+9992");
expect(() => {ms932Encoder.encode("\u9993")}).to.throw(Error, "EncodingError U+9993");
expect(() => {ms932Encoder.encode("\u9994")}).to.throw(Error, "EncodingError U+9994");
expect(() => {ms932Encoder.encode("\u9995")}).to.throw(Error, "EncodingError U+9995");
r = r && ([...ms932Encoder.encode("首馗馘香")].join(",") === "142,241,233,99,233,100,141,129"); // U+9996
expect(() => {ms932Encoder.encode("\u999A")}).to.throw(Error, "EncodingError U+999A");
expect(() => {ms932Encoder.encode("\u999B")}).to.throw(Error, "EncodingError U+999B");
expect(() => {ms932Encoder.encode("\u999C")}).to.throw(Error, "EncodingError U+999C");
expect(() => {ms932Encoder.encode("\u999D")}).to.throw(Error, "EncodingError U+999D");
r = r && ([...ms932Encoder.encode("馞")].join(",") === "251,250"); // U+999E
expect(() => {ms932Encoder.encode("\u999F")}).to.throw(Error, "EncodingError U+999F");
expect(() => {ms932Encoder.encode("\u99A0")}).to.throw(Error, "EncodingError U+99A0");
expect(() => {ms932Encoder.encode("\u99A1")}).to.throw(Error, "EncodingError U+99A1");
expect(() => {ms932Encoder.encode("\u99A2")}).to.throw(Error, "EncodingError U+99A2");
expect(() => {ms932Encoder.encode("\u99A3")}).to.throw(Error, "EncodingError U+99A3");
expect(() => {ms932Encoder.encode("\u99A4")}).to.throw(Error, "EncodingError U+99A4");
r = r && ([...ms932Encoder.encode("馥")].join(",") === "233,101"); // U+99A5
expect(() => {ms932Encoder.encode("\u99A6")}).to.throw(Error, "EncodingError U+99A6");
expect(() => {ms932Encoder.encode("\u99A7")}).to.throw(Error, "EncodingError U+99A7");
r = r && ([...ms932Encoder.encode("馨")].join(",") === "138,93"); // U+99A8
expect(() => {ms932Encoder.encode("\u99A9")}).to.throw(Error, "EncodingError U+99A9");
expect(() => {ms932Encoder.encode("\u99AA")}).to.throw(Error, "EncodingError U+99AA");
expect(() => {ms932Encoder.encode("\u99AB")}).to.throw(Error, "EncodingError U+99AB");
r = r && ([...ms932Encoder.encode("馬馭馮")].join(",") === "148,110,233,102,233,103"); // U+99AC
expect(() => {ms932Encoder.encode("\u99AF")}).to.throw(Error, "EncodingError U+99AF");
expect(() => {ms932Encoder.encode("\u99B0")}).to.throw(Error, "EncodingError U+99B0");
expect(() => {ms932Encoder.encode("\u99B1")}).to.throw(Error, "EncodingError U+99B1");
expect(() => {ms932Encoder.encode("\u99B2")}).to.throw(Error, "EncodingError U+99B2");
r = r && ([...ms932Encoder.encode("馳馴")].join(",") === "146,121,147,233"); // U+99B3
expect(() => {ms932Encoder.encode("\u99B5")}).to.throw(Error, "EncodingError U+99B5");
expect(() => {ms932Encoder.encode("\u99B6")}).to.throw(Error, "EncodingError U+99B6");
expect(() => {ms932Encoder.encode("\u99B7")}).to.throw(Error, "EncodingError U+99B7");
expect(() => {ms932Encoder.encode("\u99B8")}).to.throw(Error, "EncodingError U+99B8");
expect(() => {ms932Encoder.encode("\u99B9")}).to.throw(Error, "EncodingError U+99B9");
expect(() => {ms932Encoder.encode("\u99BA")}).to.throw(Error, "EncodingError U+99BA");
expect(() => {ms932Encoder.encode("\u99BB")}).to.throw(Error, "EncodingError U+99BB");
r = r && ([...ms932Encoder.encode("馼")].join(",") === "233,104"); // U+99BC
expect(() => {ms932Encoder.encode("\u99BD")}).to.throw(Error, "EncodingError U+99BD");
expect(() => {ms932Encoder.encode("\u99BE")}).to.throw(Error, "EncodingError U+99BE");
expect(() => {ms932Encoder.encode("\u99BF")}).to.throw(Error, "EncodingError U+99BF");
expect(() => {ms932Encoder.encode("\u99C0")}).to.throw(Error, "EncodingError U+99C0");
r = r && ([...ms932Encoder.encode("駁")].join(",") === "148,157"); // U+99C1
expect(() => {ms932Encoder.encode("\u99C2")}).to.throw(Error, "EncodingError U+99C2");
expect(() => {ms932Encoder.encode("\u99C3")}).to.throw(Error, "EncodingError U+99C3");
r = r && ([...ms932Encoder.encode("駄駅駆")].join(",") === "145,202,137,119,139,236"); // U+99C4
expect(() => {ms932Encoder.encode("\u99C7")}).to.throw(Error, "EncodingError U+99C7");
r = r && ([...ms932Encoder.encode("駈")].join(",") === "139,237"); // U+99C8
expect(() => {ms932Encoder.encode("\u99C9")}).to.throw(Error, "EncodingError U+99C9");
expect(() => {ms932Encoder.encode("\u99CA")}).to.throw(Error, "EncodingError U+99CA");
expect(() => {ms932Encoder.encode("\u99CB")}).to.throw(Error, "EncodingError U+99CB");
expect(() => {ms932Encoder.encode("\u99CC")}).to.throw(Error, "EncodingError U+99CC");
expect(() => {ms932Encoder.encode("\u99CD")}).to.throw(Error, "EncodingError U+99CD");
expect(() => {ms932Encoder.encode("\u99CE")}).to.throw(Error, "EncodingError U+99CE");
expect(() => {ms932Encoder.encode("\u99CF")}).to.throw(Error, "EncodingError U+99CF");
r = r && ([...ms932Encoder.encode("駐駑駒")].join(",") === "146,147,233,109,139,238"); // U+99D0
expect(() => {ms932Encoder.encode("\u99D3")}).to.throw(Error, "EncodingError U+99D3");
expect(() => {ms932Encoder.encode("\u99D4")}).to.throw(Error, "EncodingError U+99D4");
r = r && ([...ms932Encoder.encode("駕")].join(",") === "137,237"); // U+99D5
expect(() => {ms932Encoder.encode("\u99D6")}).to.throw(Error, "EncodingError U+99D6");
expect(() => {ms932Encoder.encode("\u99D7")}).to.throw(Error, "EncodingError U+99D7");
r = r && ([...ms932Encoder.encode("駘")].join(",") === "233,108"); // U+99D8
expect(() => {ms932Encoder.encode("\u99D9")}).to.throw(Error, "EncodingError U+99D9");
expect(() => {ms932Encoder.encode("\u99DA")}).to.throw(Error, "EncodingError U+99DA");
r = r && ([...ms932Encoder.encode("駛")].join(",") === "233,106"); // U+99DB
expect(() => {ms932Encoder.encode("\u99DC")}).to.throw(Error, "EncodingError U+99DC");
r = r && ([...ms932Encoder.encode("駝")].join(",") === "233,107"); // U+99DD
expect(() => {ms932Encoder.encode("\u99DE")}).to.throw(Error, "EncodingError U+99DE");
r = r && ([...ms932Encoder.encode("駟")].join(",") === "233,105"); // U+99DF
expect(() => {ms932Encoder.encode("\u99E0")}).to.throw(Error, "EncodingError U+99E0");
expect(() => {ms932Encoder.encode("\u99E1")}).to.throw(Error, "EncodingError U+99E1");
r = r && ([...ms932Encoder.encode("駢")].join(",") === "233,119"); // U+99E2
expect(() => {ms932Encoder.encode("\u99E3")}).to.throw(Error, "EncodingError U+99E3");
expect(() => {ms932Encoder.encode("\u99E4")}).to.throw(Error, "EncodingError U+99E4");
expect(() => {ms932Encoder.encode("\u99E5")}).to.throw(Error, "EncodingError U+99E5");
expect(() => {ms932Encoder.encode("\u99E6")}).to.throw(Error, "EncodingError U+99E6");
expect(() => {ms932Encoder.encode("\u99E7")}).to.throw(Error, "EncodingError U+99E7");
expect(() => {ms932Encoder.encode("\u99E8")}).to.throw(Error, "EncodingError U+99E8");
expect(() => {ms932Encoder.encode("\u99E9")}).to.throw(Error, "EncodingError U+99E9");
expect(() => {ms932Encoder.encode("\u99EA")}).to.throw(Error, "EncodingError U+99EA");
expect(() => {ms932Encoder.encode("\u99EB")}).to.throw(Error, "EncodingError U+99EB");
expect(() => {ms932Encoder.encode("\u99EC")}).to.throw(Error, "EncodingError U+99EC");
r = r && ([...ms932Encoder.encode("駭駮")].join(",") === "233,110,233,111"); // U+99ED
expect(() => {ms932Encoder.encode("\u99EF")}).to.throw(Error, "EncodingError U+99EF");
expect(() => {ms932Encoder.encode("\u99F0")}).to.throw(Error, "EncodingError U+99F0");
r = r && ([...ms932Encoder.encode("駱駲")].join(",") === "233,112,233,113"); // U+99F1
expect(() => {ms932Encoder.encode("\u99F3")}).to.throw(Error, "EncodingError U+99F3");
expect(() => {ms932Encoder.encode("\u99F4")}).to.throw(Error, "EncodingError U+99F4");
expect(() => {ms932Encoder.encode("\u99F5")}).to.throw(Error, "EncodingError U+99F5");
expect(() => {ms932Encoder.encode("\u99F6")}).to.throw(Error, "EncodingError U+99F6");
expect(() => {ms932Encoder.encode("\u99F7")}).to.throw(Error, "EncodingError U+99F7");
r = r && ([...ms932Encoder.encode("駸")].join(",") === "233,115"); // U+99F8
expect(() => {ms932Encoder.encode("\u99F9")}).to.throw(Error, "EncodingError U+99F9");
expect(() => {ms932Encoder.encode("\u99FA")}).to.throw(Error, "EncodingError U+99FA");
r = r && ([...ms932Encoder.encode("駻")].join(",") === "233,114"); // U+99FB
expect(() => {ms932Encoder.encode("\u99FC")}).to.throw(Error, "EncodingError U+99FC");
expect(() => {ms932Encoder.encode("\u99FD")}).to.throw(Error, "EncodingError U+99FD");
expect(() => {ms932Encoder.encode("\u99FE")}).to.throw(Error, "EncodingError U+99FE");
r = r && ([...ms932Encoder.encode("駿")].join(",") === "143,120"); // U+99FF
expect(() => {ms932Encoder.encode("\u9A00")}).to.throw(Error, "EncodingError U+9A00");
r = r && ([...ms932Encoder.encode("騁")].join(",") === "233,116"); // U+9A01
expect(() => {ms932Encoder.encode("\u9A02")}).to.throw(Error, "EncodingError U+9A02");
expect(() => {ms932Encoder.encode("\u9A03")}).to.throw(Error, "EncodingError U+9A03");
expect(() => {ms932Encoder.encode("\u9A04")}).to.throw(Error, "EncodingError U+9A04");
r = r && ([...ms932Encoder.encode("騅")].join(",") === "233,118"); // U+9A05
expect(() => {ms932Encoder.encode("\u9A06")}).to.throw(Error, "EncodingError U+9A06");
expect(() => {ms932Encoder.encode("\u9A07")}).to.throw(Error, "EncodingError U+9A07");
expect(() => {ms932Encoder.encode("\u9A08")}).to.throw(Error, "EncodingError U+9A08");
expect(() => {ms932Encoder.encode("\u9A09")}).to.throw(Error, "EncodingError U+9A09");
expect(() => {ms932Encoder.encode("\u9A0A")}).to.throw(Error, "EncodingError U+9A0A");
expect(() => {ms932Encoder.encode("\u9A0B")}).to.throw(Error, "EncodingError U+9A0B");
expect(() => {ms932Encoder.encode("\u9A0C")}).to.throw(Error, "EncodingError U+9A0C");
expect(() => {ms932Encoder.encode("\u9A0D")}).to.throw(Error, "EncodingError U+9A0D");
r = r && ([...ms932Encoder.encode("騎騏")].join(",") === "139,82,233,117"); // U+9A0E
expect(() => {ms932Encoder.encode("\u9A10")}).to.throw(Error, "EncodingError U+9A10");
expect(() => {ms932Encoder.encode("\u9A11")}).to.throw(Error, "EncodingError U+9A11");
r = r && ([...ms932Encoder.encode("騒験")].join(",") === "145,155,140,177"); // U+9A12
expect(() => {ms932Encoder.encode("\u9A14")}).to.throw(Error, "EncodingError U+9A14");
expect(() => {ms932Encoder.encode("\u9A15")}).to.throw(Error, "EncodingError U+9A15");
expect(() => {ms932Encoder.encode("\u9A16")}).to.throw(Error, "EncodingError U+9A16");
expect(() => {ms932Encoder.encode("\u9A17")}).to.throw(Error, "EncodingError U+9A17");
expect(() => {ms932Encoder.encode("\u9A18")}).to.throw(Error, "EncodingError U+9A18");
r = r && ([...ms932Encoder.encode("騙")].join(",") === "233,120"); // U+9A19
expect(() => {ms932Encoder.encode("\u9A1A")}).to.throw(Error, "EncodingError U+9A1A");
expect(() => {ms932Encoder.encode("\u9A1B")}).to.throw(Error, "EncodingError U+9A1B");
expect(() => {ms932Encoder.encode("\u9A1C")}).to.throw(Error, "EncodingError U+9A1C");
expect(() => {ms932Encoder.encode("\u9A1D")}).to.throw(Error, "EncodingError U+9A1D");
expect(() => {ms932Encoder.encode("\u9A1E")}).to.throw(Error, "EncodingError U+9A1E");
expect(() => {ms932Encoder.encode("\u9A1F")}).to.throw(Error, "EncodingError U+9A1F");
expect(() => {ms932Encoder.encode("\u9A20")}).to.throw(Error, "EncodingError U+9A20");
expect(() => {ms932Encoder.encode("\u9A21")}).to.throw(Error, "EncodingError U+9A21");
expect(() => {ms932Encoder.encode("\u9A22")}).to.throw(Error, "EncodingError U+9A22");
expect(() => {ms932Encoder.encode("\u9A23")}).to.throw(Error, "EncodingError U+9A23");
expect(() => {ms932Encoder.encode("\u9A24")}).to.throw(Error, "EncodingError U+9A24");
expect(() => {ms932Encoder.encode("\u9A25")}).to.throw(Error, "EncodingError U+9A25");
expect(() => {ms932Encoder.encode("\u9A26")}).to.throw(Error, "EncodingError U+9A26");
expect(() => {ms932Encoder.encode("\u9A27")}).to.throw(Error, "EncodingError U+9A27");
r = r && ([...ms932Encoder.encode("騨")].join(",") === "145,203"); // U+9A28
expect(() => {ms932Encoder.encode("\u9A29")}).to.throw(Error, "EncodingError U+9A29");
expect(() => {ms932Encoder.encode("\u9A2A")}).to.throw(Error, "EncodingError U+9A2A");
r = r && ([...ms932Encoder.encode("騫")].join(",") === "233,121"); // U+9A2B
expect(() => {ms932Encoder.encode("\u9A2C")}).to.throw(Error, "EncodingError U+9A2C");
expect(() => {ms932Encoder.encode("\u9A2D")}).to.throw(Error, "EncodingError U+9A2D");
expect(() => {ms932Encoder.encode("\u9A2E")}).to.throw(Error, "EncodingError U+9A2E");
expect(() => {ms932Encoder.encode("\u9A2F")}).to.throw(Error, "EncodingError U+9A2F");
r = r && ([...ms932Encoder.encode("騰")].join(",") === "147,171"); // U+9A30
expect(() => {ms932Encoder.encode("\u9A31")}).to.throw(Error, "EncodingError U+9A31");
expect(() => {ms932Encoder.encode("\u9A32")}).to.throw(Error, "EncodingError U+9A32");
expect(() => {ms932Encoder.encode("\u9A33")}).to.throw(Error, "EncodingError U+9A33");
expect(() => {ms932Encoder.encode("\u9A34")}).to.throw(Error, "EncodingError U+9A34");
expect(() => {ms932Encoder.encode("\u9A35")}).to.throw(Error, "EncodingError U+9A35");
expect(() => {ms932Encoder.encode("\u9A36")}).to.throw(Error, "EncodingError U+9A36");
r = r && ([...ms932Encoder.encode("騷")].join(",") === "233,122"); // U+9A37
expect(() => {ms932Encoder.encode("\u9A38")}).to.throw(Error, "EncodingError U+9A38");
expect(() => {ms932Encoder.encode("\u9A39")}).to.throw(Error, "EncodingError U+9A39");
expect(() => {ms932Encoder.encode("\u9A3A")}).to.throw(Error, "EncodingError U+9A3A");
expect(() => {ms932Encoder.encode("\u9A3B")}).to.throw(Error, "EncodingError U+9A3B");
expect(() => {ms932Encoder.encode("\u9A3C")}).to.throw(Error, "EncodingError U+9A3C");
expect(() => {ms932Encoder.encode("\u9A3D")}).to.throw(Error, "EncodingError U+9A3D");
r = r && ([...ms932Encoder.encode("騾")].join(",") === "233,128"); // U+9A3E
expect(() => {ms932Encoder.encode("\u9A3F")}).to.throw(Error, "EncodingError U+9A3F");
r = r && ([...ms932Encoder.encode("驀")].join(",") === "233,125"); // U+9A40
expect(() => {ms932Encoder.encode("\u9A41")}).to.throw(Error, "EncodingError U+9A41");
r = r && ([...ms932Encoder.encode("驂驃")].join(",") === "233,124,233,126"); // U+9A42
expect(() => {ms932Encoder.encode("\u9A44")}).to.throw(Error, "EncodingError U+9A44");
r = r && ([...ms932Encoder.encode("驅")].join(",") === "233,123"); // U+9A45
expect(() => {ms932Encoder.encode("\u9A46")}).to.throw(Error, "EncodingError U+9A46");
expect(() => {ms932Encoder.encode("\u9A47")}).to.throw(Error, "EncodingError U+9A47");
expect(() => {ms932Encoder.encode("\u9A48")}).to.throw(Error, "EncodingError U+9A48");
expect(() => {ms932Encoder.encode("\u9A49")}).to.throw(Error, "EncodingError U+9A49");
expect(() => {ms932Encoder.encode("\u9A4A")}).to.throw(Error, "EncodingError U+9A4A");
expect(() => {ms932Encoder.encode("\u9A4B")}).to.throw(Error, "EncodingError U+9A4B");
expect(() => {ms932Encoder.encode("\u9A4C")}).to.throw(Error, "EncodingError U+9A4C");
r = r && ([...ms932Encoder.encode("驍驎")].join(",") === "233,130,251,251"); // U+9A4D
expect(() => {ms932Encoder.encode("\u9A4F")}).to.throw(Error, "EncodingError U+9A4F");
expect(() => {ms932Encoder.encode("\u9A50")}).to.throw(Error, "EncodingError U+9A50");
expect(() => {ms932Encoder.encode("\u9A51")}).to.throw(Error, "EncodingError U+9A51");
expect(() => {ms932Encoder.encode("\u9A52")}).to.throw(Error, "EncodingError U+9A52");
expect(() => {ms932Encoder.encode("\u9A53")}).to.throw(Error, "EncodingError U+9A53");
expect(() => {ms932Encoder.encode("\u9A54")}).to.throw(Error, "EncodingError U+9A54");
r = r && ([...ms932Encoder.encode("驕")].join(",") === "233,129"); // U+9A55
expect(() => {ms932Encoder.encode("\u9A56")}).to.throw(Error, "EncodingError U+9A56");
r = r && ([...ms932Encoder.encode("驗")].join(",") === "233,132"); // U+9A57
expect(() => {ms932Encoder.encode("\u9A58")}).to.throw(Error, "EncodingError U+9A58");
expect(() => {ms932Encoder.encode("\u9A59")}).to.throw(Error, "EncodingError U+9A59");
r = r && ([...ms932Encoder.encode("驚驛")].join(",") === "139,193,233,131"); // U+9A5A
expect(() => {ms932Encoder.encode("\u9A5C")}).to.throw(Error, "EncodingError U+9A5C");
expect(() => {ms932Encoder.encode("\u9A5D")}).to.throw(Error, "EncodingError U+9A5D");
expect(() => {ms932Encoder.encode("\u9A5E")}).to.throw(Error, "EncodingError U+9A5E");
r = r && ([...ms932Encoder.encode("驟")].join(",") === "233,133"); // U+9A5F
expect(() => {ms932Encoder.encode("\u9A60")}).to.throw(Error, "EncodingError U+9A60");
expect(() => {ms932Encoder.encode("\u9A61")}).to.throw(Error, "EncodingError U+9A61");
r = r && ([...ms932Encoder.encode("驢")].join(",") === "233,134"); // U+9A62
expect(() => {ms932Encoder.encode("\u9A63")}).to.throw(Error, "EncodingError U+9A63");
r = r && ([...ms932Encoder.encode("驤驥")].join(",") === "233,136,233,135"); // U+9A64
expect(() => {ms932Encoder.encode("\u9A66")}).to.throw(Error, "EncodingError U+9A66");
expect(() => {ms932Encoder.encode("\u9A67")}).to.throw(Error, "EncodingError U+9A67");
expect(() => {ms932Encoder.encode("\u9A68")}).to.throw(Error, "EncodingError U+9A68");
r = r && ([...ms932Encoder.encode("驩驪驫")].join(",") === "233,137,233,139,233,138"); // U+9A69
expect(() => {ms932Encoder.encode("\u9A6C")}).to.throw(Error, "EncodingError U+9A6C");
expect(() => {ms932Encoder.encode("\u9A6D")}).to.throw(Error, "EncodingError U+9A6D");
expect(() => {ms932Encoder.encode("\u9A6E")}).to.throw(Error, "EncodingError U+9A6E");
expect(() => {ms932Encoder.encode("\u9A6F")}).to.throw(Error, "EncodingError U+9A6F");
expect(() => {ms932Encoder.encode("\u9A70")}).to.throw(Error, "EncodingError U+9A70");
expect(() => {ms932Encoder.encode("\u9A71")}).to.throw(Error, "EncodingError U+9A71");
expect(() => {ms932Encoder.encode("\u9A72")}).to.throw(Error, "EncodingError U+9A72");
expect(() => {ms932Encoder.encode("\u9A73")}).to.throw(Error, "EncodingError U+9A73");
expect(() => {ms932Encoder.encode("\u9A74")}).to.throw(Error, "EncodingError U+9A74");
expect(() => {ms932Encoder.encode("\u9A75")}).to.throw(Error, "EncodingError U+9A75");
expect(() => {ms932Encoder.encode("\u9A76")}).to.throw(Error, "EncodingError U+9A76");
expect(() => {ms932Encoder.encode("\u9A77")}).to.throw(Error, "EncodingError U+9A77");
expect(() => {ms932Encoder.encode("\u9A78")}).to.throw(Error, "EncodingError U+9A78");
expect(() => {ms932Encoder.encode("\u9A79")}).to.throw(Error, "EncodingError U+9A79");
expect(() => {ms932Encoder.encode("\u9A7A")}).to.throw(Error, "EncodingError U+9A7A");
expect(() => {ms932Encoder.encode("\u9A7B")}).to.throw(Error, "EncodingError U+9A7B");
expect(() => {ms932Encoder.encode("\u9A7C")}).to.throw(Error, "EncodingError U+9A7C");
expect(() => {ms932Encoder.encode("\u9A7D")}).to.throw(Error, "EncodingError U+9A7D");
expect(() => {ms932Encoder.encode("\u9A7E")}).to.throw(Error, "EncodingError U+9A7E");
expect(() => {ms932Encoder.encode("\u9A7F")}).to.throw(Error, "EncodingError U+9A7F");
expect(() => {ms932Encoder.encode("\u9A80")}).to.throw(Error, "EncodingError U+9A80");
expect(() => {ms932Encoder.encode("\u9A81")}).to.throw(Error, "EncodingError U+9A81");
expect(() => {ms932Encoder.encode("\u9A82")}).to.throw(Error, "EncodingError U+9A82");
expect(() => {ms932Encoder.encode("\u9A83")}).to.throw(Error, "EncodingError U+9A83");
expect(() => {ms932Encoder.encode("\u9A84")}).to.throw(Error, "EncodingError U+9A84");
expect(() => {ms932Encoder.encode("\u9A85")}).to.throw(Error, "EncodingError U+9A85");
expect(() => {ms932Encoder.encode("\u9A86")}).to.throw(Error, "EncodingError U+9A86");
expect(() => {ms932Encoder.encode("\u9A87")}).to.throw(Error, "EncodingError U+9A87");
expect(() => {ms932Encoder.encode("\u9A88")}).to.throw(Error, "EncodingError U+9A88");
expect(() => {ms932Encoder.encode("\u9A89")}).to.throw(Error, "EncodingError U+9A89");
expect(() => {ms932Encoder.encode("\u9A8A")}).to.throw(Error, "EncodingError U+9A8A");
expect(() => {ms932Encoder.encode("\u9A8B")}).to.throw(Error, "EncodingError U+9A8B");
expect(() => {ms932Encoder.encode("\u9A8C")}).to.throw(Error, "EncodingError U+9A8C");
expect(() => {ms932Encoder.encode("\u9A8D")}).to.throw(Error, "EncodingError U+9A8D");
expect(() => {ms932Encoder.encode("\u9A8E")}).to.throw(Error, "EncodingError U+9A8E");
expect(() => {ms932Encoder.encode("\u9A8F")}).to.throw(Error, "EncodingError U+9A8F");
expect(() => {ms932Encoder.encode("\u9A90")}).to.throw(Error, "EncodingError U+9A90");
expect(() => {ms932Encoder.encode("\u9A91")}).to.throw(Error, "EncodingError U+9A91");
expect(() => {ms932Encoder.encode("\u9A92")}).to.throw(Error, "EncodingError U+9A92");
expect(() => {ms932Encoder.encode("\u9A93")}).to.throw(Error, "EncodingError U+9A93");
expect(() => {ms932Encoder.encode("\u9A94")}).to.throw(Error, "EncodingError U+9A94");
expect(() => {ms932Encoder.encode("\u9A95")}).to.throw(Error, "EncodingError U+9A95");
expect(() => {ms932Encoder.encode("\u9A96")}).to.throw(Error, "EncodingError U+9A96");
expect(() => {ms932Encoder.encode("\u9A97")}).to.throw(Error, "EncodingError U+9A97");
expect(() => {ms932Encoder.encode("\u9A98")}).to.throw(Error, "EncodingError U+9A98");
expect(() => {ms932Encoder.encode("\u9A99")}).to.throw(Error, "EncodingError U+9A99");
expect(() => {ms932Encoder.encode("\u9A9A")}).to.throw(Error, "EncodingError U+9A9A");
expect(() => {ms932Encoder.encode("\u9A9B")}).to.throw(Error, "EncodingError U+9A9B");
expect(() => {ms932Encoder.encode("\u9A9C")}).to.throw(Error, "EncodingError U+9A9C");
expect(() => {ms932Encoder.encode("\u9A9D")}).to.throw(Error, "EncodingError U+9A9D");
expect(() => {ms932Encoder.encode("\u9A9E")}).to.throw(Error, "EncodingError U+9A9E");
expect(() => {ms932Encoder.encode("\u9A9F")}).to.throw(Error, "EncodingError U+9A9F");
expect(() => {ms932Encoder.encode("\u9AA0")}).to.throw(Error, "EncodingError U+9AA0");
expect(() => {ms932Encoder.encode("\u9AA1")}).to.throw(Error, "EncodingError U+9AA1");
expect(() => {ms932Encoder.encode("\u9AA2")}).to.throw(Error, "EncodingError U+9AA2");
expect(() => {ms932Encoder.encode("\u9AA3")}).to.throw(Error, "EncodingError U+9AA3");
expect(() => {ms932Encoder.encode("\u9AA4")}).to.throw(Error, "EncodingError U+9AA4");
expect(() => {ms932Encoder.encode("\u9AA5")}).to.throw(Error, "EncodingError U+9AA5");
expect(() => {ms932Encoder.encode("\u9AA6")}).to.throw(Error, "EncodingError U+9AA6");
expect(() => {ms932Encoder.encode("\u9AA7")}).to.throw(Error, "EncodingError U+9AA7");
r = r && ([...ms932Encoder.encode("骨")].join(",") === "141,156"); // U+9AA8
expect(() => {ms932Encoder.encode("\u9AA9")}).to.throw(Error, "EncodingError U+9AA9");
expect(() => {ms932Encoder.encode("\u9AAA")}).to.throw(Error, "EncodingError U+9AAA");
expect(() => {ms932Encoder.encode("\u9AAB")}).to.throw(Error, "EncodingError U+9AAB");
expect(() => {ms932Encoder.encode("\u9AAC")}).to.throw(Error, "EncodingError U+9AAC");
r = r && ([...ms932Encoder.encode("骭")].join(",") === "233,140"); // U+9AAD
expect(() => {ms932Encoder.encode("\u9AAE")}).to.throw(Error, "EncodingError U+9AAE");
expect(() => {ms932Encoder.encode("\u9AAF")}).to.throw(Error, "EncodingError U+9AAF");
r = r && ([...ms932Encoder.encode("骰")].join(",") === "233,141"); // U+9AB0
expect(() => {ms932Encoder.encode("\u9AB1")}).to.throw(Error, "EncodingError U+9AB1");
expect(() => {ms932Encoder.encode("\u9AB2")}).to.throw(Error, "EncodingError U+9AB2");
expect(() => {ms932Encoder.encode("\u9AB3")}).to.throw(Error, "EncodingError U+9AB3");
expect(() => {ms932Encoder.encode("\u9AB4")}).to.throw(Error, "EncodingError U+9AB4");
expect(() => {ms932Encoder.encode("\u9AB5")}).to.throw(Error, "EncodingError U+9AB5");
expect(() => {ms932Encoder.encode("\u9AB6")}).to.throw(Error, "EncodingError U+9AB6");
expect(() => {ms932Encoder.encode("\u9AB7")}).to.throw(Error, "EncodingError U+9AB7");
r = r && ([...ms932Encoder.encode("骸")].join(",") === "138,91"); // U+9AB8
expect(() => {ms932Encoder.encode("\u9AB9")}).to.throw(Error, "EncodingError U+9AB9");
expect(() => {ms932Encoder.encode("\u9ABA")}).to.throw(Error, "EncodingError U+9ABA");
expect(() => {ms932Encoder.encode("\u9ABB")}).to.throw(Error, "EncodingError U+9ABB");
r = r && ([...ms932Encoder.encode("骼")].join(",") === "233,142"); // U+9ABC
expect(() => {ms932Encoder.encode("\u9ABD")}).to.throw(Error, "EncodingError U+9ABD");
expect(() => {ms932Encoder.encode("\u9ABE")}).to.throw(Error, "EncodingError U+9ABE");
expect(() => {ms932Encoder.encode("\u9ABF")}).to.throw(Error, "EncodingError U+9ABF");
r = r && ([...ms932Encoder.encode("髀")].join(",") === "233,143"); // U+9AC0
expect(() => {ms932Encoder.encode("\u9AC1")}).to.throw(Error, "EncodingError U+9AC1");
expect(() => {ms932Encoder.encode("\u9AC2")}).to.throw(Error, "EncodingError U+9AC2");
expect(() => {ms932Encoder.encode("\u9AC3")}).to.throw(Error, "EncodingError U+9AC3");
r = r && ([...ms932Encoder.encode("髄")].join(",") === "144,145"); // U+9AC4
expect(() => {ms932Encoder.encode("\u9AC5")}).to.throw(Error, "EncodingError U+9AC5");
expect(() => {ms932Encoder.encode("\u9AC6")}).to.throw(Error, "EncodingError U+9AC6");
expect(() => {ms932Encoder.encode("\u9AC7")}).to.throw(Error, "EncodingError U+9AC7");
expect(() => {ms932Encoder.encode("\u9AC8")}).to.throw(Error, "EncodingError U+9AC8");
expect(() => {ms932Encoder.encode("\u9AC9")}).to.throw(Error, "EncodingError U+9AC9");
expect(() => {ms932Encoder.encode("\u9ACA")}).to.throw(Error, "EncodingError U+9ACA");
expect(() => {ms932Encoder.encode("\u9ACB")}).to.throw(Error, "EncodingError U+9ACB");
expect(() => {ms932Encoder.encode("\u9ACC")}).to.throw(Error, "EncodingError U+9ACC");
expect(() => {ms932Encoder.encode("\u9ACD")}).to.throw(Error, "EncodingError U+9ACD");
expect(() => {ms932Encoder.encode("\u9ACE")}).to.throw(Error, "EncodingError U+9ACE");
r = r && ([...ms932Encoder.encode("髏")].join(",") === "233,144"); // U+9ACF
expect(() => {ms932Encoder.encode("\u9AD0")}).to.throw(Error, "EncodingError U+9AD0");
r = r && ([...ms932Encoder.encode("髑")].join(",") === "233,145"); // U+9AD1
expect(() => {ms932Encoder.encode("\u9AD2")}).to.throw(Error, "EncodingError U+9AD2");
r = r && ([...ms932Encoder.encode("髓體")].join(",") === "233,146,233,147"); // U+9AD3
expect(() => {ms932Encoder.encode("\u9AD5")}).to.throw(Error, "EncodingError U+9AD5");
expect(() => {ms932Encoder.encode("\u9AD6")}).to.throw(Error, "EncodingError U+9AD6");
expect(() => {ms932Encoder.encode("\u9AD7")}).to.throw(Error, "EncodingError U+9AD7");
r = r && ([...ms932Encoder.encode("高髙")].join(",") === "141,130,251,252"); // U+9AD8
expect(() => {ms932Encoder.encode("\u9ADA")}).to.throw(Error, "EncodingError U+9ADA");
expect(() => {ms932Encoder.encode("\u9ADB")}).to.throw(Error, "EncodingError U+9ADB");
r = r && ([...ms932Encoder.encode("髜")].join(",") === "252,64"); // U+9ADC
expect(() => {ms932Encoder.encode("\u9ADD")}).to.throw(Error, "EncodingError U+9ADD");
r = r && ([...ms932Encoder.encode("髞髟")].join(",") === "233,148,233,149"); // U+9ADE
expect(() => {ms932Encoder.encode("\u9AE0")}).to.throw(Error, "EncodingError U+9AE0");
expect(() => {ms932Encoder.encode("\u9AE1")}).to.throw(Error, "EncodingError U+9AE1");
r = r && ([...ms932Encoder.encode("髢髣")].join(",") === "233,150,233,151"); // U+9AE2
expect(() => {ms932Encoder.encode("\u9AE4")}).to.throw(Error, "EncodingError U+9AE4");
expect(() => {ms932Encoder.encode("\u9AE5")}).to.throw(Error, "EncodingError U+9AE5");
r = r && ([...ms932Encoder.encode("髦")].join(",") === "233,152"); // U+9AE6
expect(() => {ms932Encoder.encode("\u9AE7")}).to.throw(Error, "EncodingError U+9AE7");
expect(() => {ms932Encoder.encode("\u9AE8")}).to.throw(Error, "EncodingError U+9AE8");
expect(() => {ms932Encoder.encode("\u9AE9")}).to.throw(Error, "EncodingError U+9AE9");
r = r && ([...ms932Encoder.encode("髪髫")].join(",") === "148,175,233,154"); // U+9AEA
expect(() => {ms932Encoder.encode("\u9AEC")}).to.throw(Error, "EncodingError U+9AEC");
r = r && ([...ms932Encoder.encode("髭髮髯")].join(",") === "149,69,233,155,233,153"); // U+9AED
expect(() => {ms932Encoder.encode("\u9AF0")}).to.throw(Error, "EncodingError U+9AF0");
r = r && ([...ms932Encoder.encode("髱")].join(",") === "233,157"); // U+9AF1
expect(() => {ms932Encoder.encode("\u9AF2")}).to.throw(Error, "EncodingError U+9AF2");
expect(() => {ms932Encoder.encode("\u9AF3")}).to.throw(Error, "EncodingError U+9AF3");
r = r && ([...ms932Encoder.encode("髴")].join(",") === "233,156"); // U+9AF4
expect(() => {ms932Encoder.encode("\u9AF5")}).to.throw(Error, "EncodingError U+9AF5");
expect(() => {ms932Encoder.encode("\u9AF6")}).to.throw(Error, "EncodingError U+9AF6");
r = r && ([...ms932Encoder.encode("髷")].join(",") === "233,158"); // U+9AF7
expect(() => {ms932Encoder.encode("\u9AF8")}).to.throw(Error, "EncodingError U+9AF8");
expect(() => {ms932Encoder.encode("\u9AF9")}).to.throw(Error, "EncodingError U+9AF9");
expect(() => {ms932Encoder.encode("\u9AFA")}).to.throw(Error, "EncodingError U+9AFA");
r = r && ([...ms932Encoder.encode("髻")].join(",") === "233,159"); // U+9AFB
expect(() => {ms932Encoder.encode("\u9AFC")}).to.throw(Error, "EncodingError U+9AFC");
expect(() => {ms932Encoder.encode("\u9AFD")}).to.throw(Error, "EncodingError U+9AFD");
expect(() => {ms932Encoder.encode("\u9AFE")}).to.throw(Error, "EncodingError U+9AFE");
expect(() => {ms932Encoder.encode("\u9AFF")}).to.throw(Error, "EncodingError U+9AFF");
expect(() => {ms932Encoder.encode("\u9B00")}).to.throw(Error, "EncodingError U+9B00");
expect(() => {ms932Encoder.encode("\u9B01")}).to.throw(Error, "EncodingError U+9B01");
expect(() => {ms932Encoder.encode("\u9B02")}).to.throw(Error, "EncodingError U+9B02");
expect(() => {ms932Encoder.encode("\u9B03")}).to.throw(Error, "EncodingError U+9B03");
expect(() => {ms932Encoder.encode("\u9B04")}).to.throw(Error, "EncodingError U+9B04");
expect(() => {ms932Encoder.encode("\u9B05")}).to.throw(Error, "EncodingError U+9B05");
r = r && ([...ms932Encoder.encode("鬆")].join(",") === "233,160"); // U+9B06
expect(() => {ms932Encoder.encode("\u9B07")}).to.throw(Error, "EncodingError U+9B07");
expect(() => {ms932Encoder.encode("\u9B08")}).to.throw(Error, "EncodingError U+9B08");
expect(() => {ms932Encoder.encode("\u9B09")}).to.throw(Error, "EncodingError U+9B09");
expect(() => {ms932Encoder.encode("\u9B0A")}).to.throw(Error, "EncodingError U+9B0A");
expect(() => {ms932Encoder.encode("\u9B0B")}).to.throw(Error, "EncodingError U+9B0B");
expect(() => {ms932Encoder.encode("\u9B0C")}).to.throw(Error, "EncodingError U+9B0C");
expect(() => {ms932Encoder.encode("\u9B0D")}).to.throw(Error, "EncodingError U+9B0D");
expect(() => {ms932Encoder.encode("\u9B0E")}).to.throw(Error, "EncodingError U+9B0E");
expect(() => {ms932Encoder.encode("\u9B0F")}).to.throw(Error, "EncodingError U+9B0F");
expect(() => {ms932Encoder.encode("\u9B10")}).to.throw(Error, "EncodingError U+9B10");
expect(() => {ms932Encoder.encode("\u9B11")}).to.throw(Error, "EncodingError U+9B11");
expect(() => {ms932Encoder.encode("\u9B12")}).to.throw(Error, "EncodingError U+9B12");
expect(() => {ms932Encoder.encode("\u9B13")}).to.throw(Error, "EncodingError U+9B13");
expect(() => {ms932Encoder.encode("\u9B14")}).to.throw(Error, "EncodingError U+9B14");
expect(() => {ms932Encoder.encode("\u9B15")}).to.throw(Error, "EncodingError U+9B15");
expect(() => {ms932Encoder.encode("\u9B16")}).to.throw(Error, "EncodingError U+9B16");
expect(() => {ms932Encoder.encode("\u9B17")}).to.throw(Error, "EncodingError U+9B17");
r = r && ([...ms932Encoder.encode("鬘")].join(",") === "233,161"); // U+9B18
expect(() => {ms932Encoder.encode("\u9B19")}).to.throw(Error, "EncodingError U+9B19");
r = r && ([...ms932Encoder.encode("鬚")].join(",") === "233,162"); // U+9B1A
expect(() => {ms932Encoder.encode("\u9B1B")}).to.throw(Error, "EncodingError U+9B1B");
expect(() => {ms932Encoder.encode("\u9B1C")}).to.throw(Error, "EncodingError U+9B1C");
expect(() => {ms932Encoder.encode("\u9B1D")}).to.throw(Error, "EncodingError U+9B1D");
expect(() => {ms932Encoder.encode("\u9B1E")}).to.throw(Error, "EncodingError U+9B1E");
r = r && ([...ms932Encoder.encode("鬟")].join(",") === "233,163"); // U+9B1F
expect(() => {ms932Encoder.encode("\u9B20")}).to.throw(Error, "EncodingError U+9B20");
expect(() => {ms932Encoder.encode("\u9B21")}).to.throw(Error, "EncodingError U+9B21");
r = r && ([...ms932Encoder.encode("鬢鬣")].join(",") === "233,164,233,165"); // U+9B22
expect(() => {ms932Encoder.encode("\u9B24")}).to.throw(Error, "EncodingError U+9B24");
r = r && ([...ms932Encoder.encode("鬥")].join(",") === "233,166"); // U+9B25
expect(() => {ms932Encoder.encode("\u9B26")}).to.throw(Error, "EncodingError U+9B26");
r = r && ([...ms932Encoder.encode("鬧鬨鬩鬪")].join(",") === "233,167,233,168,233,169,233,170"); // U+9B27
expect(() => {ms932Encoder.encode("\u9B2B")}).to.throw(Error, "EncodingError U+9B2B");
expect(() => {ms932Encoder.encode("\u9B2C")}).to.throw(Error, "EncodingError U+9B2C");
expect(() => {ms932Encoder.encode("\u9B2D")}).to.throw(Error, "EncodingError U+9B2D");
r = r && ([...ms932Encoder.encode("鬮鬯")].join(",") === "233,171,233,172"); // U+9B2E
expect(() => {ms932Encoder.encode("\u9B30")}).to.throw(Error, "EncodingError U+9B30");
r = r && ([...ms932Encoder.encode("鬱鬲")].join(",") === "159,84,233,173"); // U+9B31
expect(() => {ms932Encoder.encode("\u9B33")}).to.throw(Error, "EncodingError U+9B33");
expect(() => {ms932Encoder.encode("\u9B34")}).to.throw(Error, "EncodingError U+9B34");
expect(() => {ms932Encoder.encode("\u9B35")}).to.throw(Error, "EncodingError U+9B35");
expect(() => {ms932Encoder.encode("\u9B36")}).to.throw(Error, "EncodingError U+9B36");
expect(() => {ms932Encoder.encode("\u9B37")}).to.throw(Error, "EncodingError U+9B37");
expect(() => {ms932Encoder.encode("\u9B38")}).to.throw(Error, "EncodingError U+9B38");
expect(() => {ms932Encoder.encode("\u9B39")}).to.throw(Error, "EncodingError U+9B39");
expect(() => {ms932Encoder.encode("\u9B3A")}).to.throw(Error, "EncodingError U+9B3A");
r = r && ([...ms932Encoder.encode("鬻鬼")].join(",") === "226,246,139,83"); // U+9B3B
expect(() => {ms932Encoder.encode("\u9B3D")}).to.throw(Error, "EncodingError U+9B3D");
expect(() => {ms932Encoder.encode("\u9B3E")}).to.throw(Error, "EncodingError U+9B3E");
expect(() => {ms932Encoder.encode("\u9B3F")}).to.throw(Error, "EncodingError U+9B3F");
expect(() => {ms932Encoder.encode("\u9B40")}).to.throw(Error, "EncodingError U+9B40");
r = r && ([...ms932Encoder.encode("魁魂魃魄魅")].join(",") === "138,64,141,176,233,175,233,174,150,163"); // U+9B41
expect(() => {ms932Encoder.encode("\u9B46")}).to.throw(Error, "EncodingError U+9B46");
expect(() => {ms932Encoder.encode("\u9B47")}).to.throw(Error, "EncodingError U+9B47");
expect(() => {ms932Encoder.encode("\u9B48")}).to.throw(Error, "EncodingError U+9B48");
expect(() => {ms932Encoder.encode("\u9B49")}).to.throw(Error, "EncodingError U+9B49");
expect(() => {ms932Encoder.encode("\u9B4A")}).to.throw(Error, "EncodingError U+9B4A");
expect(() => {ms932Encoder.encode("\u9B4B")}).to.throw(Error, "EncodingError U+9B4B");
expect(() => {ms932Encoder.encode("\u9B4C")}).to.throw(Error, "EncodingError U+9B4C");
r = r && ([...ms932Encoder.encode("魍魎魏")].join(",") === "233,177,233,178,233,176"); // U+9B4D
expect(() => {ms932Encoder.encode("\u9B50")}).to.throw(Error, "EncodingError U+9B50");
r = r && ([...ms932Encoder.encode("魑")].join(",") === "233,179"); // U+9B51
expect(() => {ms932Encoder.encode("\u9B52")}).to.throw(Error, "EncodingError U+9B52");
expect(() => {ms932Encoder.encode("\u9B53")}).to.throw(Error, "EncodingError U+9B53");
r = r && ([...ms932Encoder.encode("魔")].join(",") === "150,130"); // U+9B54
expect(() => {ms932Encoder.encode("\u9B55")}).to.throw(Error, "EncodingError U+9B55");
expect(() => {ms932Encoder.encode("\u9B56")}).to.throw(Error, "EncodingError U+9B56");
expect(() => {ms932Encoder.encode("\u9B57")}).to.throw(Error, "EncodingError U+9B57");
r = r && ([...ms932Encoder.encode("魘")].join(",") === "233,180"); // U+9B58
expect(() => {ms932Encoder.encode("\u9B59")}).to.throw(Error, "EncodingError U+9B59");
r = r && ([...ms932Encoder.encode("魚")].join(",") === "139,155"); // U+9B5A
expect(() => {ms932Encoder.encode("\u9B5B")}).to.throw(Error, "EncodingError U+9B5B");
expect(() => {ms932Encoder.encode("\u9B5C")}).to.throw(Error, "EncodingError U+9B5C");
expect(() => {ms932Encoder.encode("\u9B5D")}).to.throw(Error, "EncodingError U+9B5D");
expect(() => {ms932Encoder.encode("\u9B5E")}).to.throw(Error, "EncodingError U+9B5E");
expect(() => {ms932Encoder.encode("\u9B5F")}).to.throw(Error, "EncodingError U+9B5F");
expect(() => {ms932Encoder.encode("\u9B60")}).to.throw(Error, "EncodingError U+9B60");
expect(() => {ms932Encoder.encode("\u9B61")}).to.throw(Error, "EncodingError U+9B61");
expect(() => {ms932Encoder.encode("\u9B62")}).to.throw(Error, "EncodingError U+9B62");
expect(() => {ms932Encoder.encode("\u9B63")}).to.throw(Error, "EncodingError U+9B63");
expect(() => {ms932Encoder.encode("\u9B64")}).to.throw(Error, "EncodingError U+9B64");
expect(() => {ms932Encoder.encode("\u9B65")}).to.throw(Error, "EncodingError U+9B65");
expect(() => {ms932Encoder.encode("\u9B66")}).to.throw(Error, "EncodingError U+9B66");
expect(() => {ms932Encoder.encode("\u9B67")}).to.throw(Error, "EncodingError U+9B67");
expect(() => {ms932Encoder.encode("\u9B68")}).to.throw(Error, "EncodingError U+9B68");
expect(() => {ms932Encoder.encode("\u9B69")}).to.throw(Error, "EncodingError U+9B69");
expect(() => {ms932Encoder.encode("\u9B6A")}).to.throw(Error, "EncodingError U+9B6A");
expect(() => {ms932Encoder.encode("\u9B6B")}).to.throw(Error, "EncodingError U+9B6B");
expect(() => {ms932Encoder.encode("\u9B6C")}).to.throw(Error, "EncodingError U+9B6C");
expect(() => {ms932Encoder.encode("\u9B6D")}).to.throw(Error, "EncodingError U+9B6D");
expect(() => {ms932Encoder.encode("\u9B6E")}).to.throw(Error, "EncodingError U+9B6E");
r = r && ([...ms932Encoder.encode("魯")].join(",") === "152,68"); // U+9B6F
expect(() => {ms932Encoder.encode("\u9B70")}).to.throw(Error, "EncodingError U+9B70");
expect(() => {ms932Encoder.encode("\u9B71")}).to.throw(Error, "EncodingError U+9B71");
r = r && ([...ms932Encoder.encode("魲")].join(",") === "252,66"); // U+9B72
expect(() => {ms932Encoder.encode("\u9B73")}).to.throw(Error, "EncodingError U+9B73");
r = r && ([...ms932Encoder.encode("魴魵")].join(",") === "233,181,252,65"); // U+9B74
expect(() => {ms932Encoder.encode("\u9B76")}).to.throw(Error, "EncodingError U+9B76");
expect(() => {ms932Encoder.encode("\u9B77")}).to.throw(Error, "EncodingError U+9B77");
expect(() => {ms932Encoder.encode("\u9B78")}).to.throw(Error, "EncodingError U+9B78");
expect(() => {ms932Encoder.encode("\u9B79")}).to.throw(Error, "EncodingError U+9B79");
expect(() => {ms932Encoder.encode("\u9B7A")}).to.throw(Error, "EncodingError U+9B7A");
expect(() => {ms932Encoder.encode("\u9B7B")}).to.throw(Error, "EncodingError U+9B7B");
expect(() => {ms932Encoder.encode("\u9B7C")}).to.throw(Error, "EncodingError U+9B7C");
expect(() => {ms932Encoder.encode("\u9B7D")}).to.throw(Error, "EncodingError U+9B7D");
expect(() => {ms932Encoder.encode("\u9B7E")}).to.throw(Error, "EncodingError U+9B7E");
expect(() => {ms932Encoder.encode("\u9B7F")}).to.throw(Error, "EncodingError U+9B7F");
expect(() => {ms932Encoder.encode("\u9B80")}).to.throw(Error, "EncodingError U+9B80");
expect(() => {ms932Encoder.encode("\u9B81")}).to.throw(Error, "EncodingError U+9B81");
expect(() => {ms932Encoder.encode("\u9B82")}).to.throw(Error, "EncodingError U+9B82");
r = r && ([...ms932Encoder.encode("鮃")].join(",") === "233,183"); // U+9B83
expect(() => {ms932Encoder.encode("\u9B84")}).to.throw(Error, "EncodingError U+9B84");
expect(() => {ms932Encoder.encode("\u9B85")}).to.throw(Error, "EncodingError U+9B85");
expect(() => {ms932Encoder.encode("\u9B86")}).to.throw(Error, "EncodingError U+9B86");
expect(() => {ms932Encoder.encode("\u9B87")}).to.throw(Error, "EncodingError U+9B87");
expect(() => {ms932Encoder.encode("\u9B88")}).to.throw(Error, "EncodingError U+9B88");
expect(() => {ms932Encoder.encode("\u9B89")}).to.throw(Error, "EncodingError U+9B89");
expect(() => {ms932Encoder.encode("\u9B8A")}).to.throw(Error, "EncodingError U+9B8A");
expect(() => {ms932Encoder.encode("\u9B8B")}).to.throw(Error, "EncodingError U+9B8B");
expect(() => {ms932Encoder.encode("\u9B8C")}).to.throw(Error, "EncodingError U+9B8C");
expect(() => {ms932Encoder.encode("\u9B8D")}).to.throw(Error, "EncodingError U+9B8D");
r = r && ([...ms932Encoder.encode("鮎鮏")].join(",") === "136,188,252,67"); // U+9B8E
expect(() => {ms932Encoder.encode("\u9B90")}).to.throw(Error, "EncodingError U+9B90");
r = r && ([...ms932Encoder.encode("鮑鮒鮓")].join(",") === "233,184,149,169,233,182"); // U+9B91
expect(() => {ms932Encoder.encode("\u9B94")}).to.throw(Error, "EncodingError U+9B94");
expect(() => {ms932Encoder.encode("\u9B95")}).to.throw(Error, "EncodingError U+9B95");
r = r && ([...ms932Encoder.encode("鮖鮗")].join(",") === "233,185,233,186"); // U+9B96
expect(() => {ms932Encoder.encode("\u9B98")}).to.throw(Error, "EncodingError U+9B98");
expect(() => {ms932Encoder.encode("\u9B99")}).to.throw(Error, "EncodingError U+9B99");
expect(() => {ms932Encoder.encode("\u9B9A")}).to.throw(Error, "EncodingError U+9B9A");
expect(() => {ms932Encoder.encode("\u9B9B")}).to.throw(Error, "EncodingError U+9B9B");
expect(() => {ms932Encoder.encode("\u9B9C")}).to.throw(Error, "EncodingError U+9B9C");
expect(() => {ms932Encoder.encode("\u9B9D")}).to.throw(Error, "EncodingError U+9B9D");
expect(() => {ms932Encoder.encode("\u9B9E")}).to.throw(Error, "EncodingError U+9B9E");
r = r && ([...ms932Encoder.encode("鮟鮠")].join(",") === "233,187,233,188"); // U+9B9F
expect(() => {ms932Encoder.encode("\u9BA1")}).to.throw(Error, "EncodingError U+9BA1");
expect(() => {ms932Encoder.encode("\u9BA2")}).to.throw(Error, "EncodingError U+9BA2");
expect(() => {ms932Encoder.encode("\u9BA3")}).to.throw(Error, "EncodingError U+9BA3");
expect(() => {ms932Encoder.encode("\u9BA4")}).to.throw(Error, "EncodingError U+9BA4");
expect(() => {ms932Encoder.encode("\u9BA5")}).to.throw(Error, "EncodingError U+9BA5");
expect(() => {ms932Encoder.encode("\u9BA6")}).to.throw(Error, "EncodingError U+9BA6");
expect(() => {ms932Encoder.encode("\u9BA7")}).to.throw(Error, "EncodingError U+9BA7");
r = r && ([...ms932Encoder.encode("鮨")].join(",") === "233,189"); // U+9BA8
expect(() => {ms932Encoder.encode("\u9BA9")}).to.throw(Error, "EncodingError U+9BA9");
r = r && ([...ms932Encoder.encode("鮪鮫")].join(",") === "150,142,142,76"); // U+9BAA
expect(() => {ms932Encoder.encode("\u9BAC")}).to.throw(Error, "EncodingError U+9BAC");
r = r && ([...ms932Encoder.encode("鮭鮮")].join(",") === "141,248,145,78"); // U+9BAD
expect(() => {ms932Encoder.encode("\u9BAF")}).to.throw(Error, "EncodingError U+9BAF");
expect(() => {ms932Encoder.encode("\u9BB0")}).to.throw(Error, "EncodingError U+9BB0");
r = r && ([...ms932Encoder.encode("鮱")].join(",") === "252,68"); // U+9BB1
expect(() => {ms932Encoder.encode("\u9BB2")}).to.throw(Error, "EncodingError U+9BB2");
expect(() => {ms932Encoder.encode("\u9BB3")}).to.throw(Error, "EncodingError U+9BB3");
r = r && ([...ms932Encoder.encode("鮴")].join(",") === "233,190"); // U+9BB4
expect(() => {ms932Encoder.encode("\u9BB5")}).to.throw(Error, "EncodingError U+9BB5");
expect(() => {ms932Encoder.encode("\u9BB6")}).to.throw(Error, "EncodingError U+9BB6");
expect(() => {ms932Encoder.encode("\u9BB7")}).to.throw(Error, "EncodingError U+9BB7");
expect(() => {ms932Encoder.encode("\u9BB8")}).to.throw(Error, "EncodingError U+9BB8");
r = r && ([...ms932Encoder.encode("鮹")].join(",") === "233,193"); // U+9BB9
expect(() => {ms932Encoder.encode("\u9BBA")}).to.throw(Error, "EncodingError U+9BBA");
r = r && ([...ms932Encoder.encode("鮻")].join(",") === "252,69"); // U+9BBB
expect(() => {ms932Encoder.encode("\u9BBC")}).to.throw(Error, "EncodingError U+9BBC");
expect(() => {ms932Encoder.encode("\u9BBD")}).to.throw(Error, "EncodingError U+9BBD");
expect(() => {ms932Encoder.encode("\u9BBE")}).to.throw(Error, "EncodingError U+9BBE");
expect(() => {ms932Encoder.encode("\u9BBF")}).to.throw(Error, "EncodingError U+9BBF");
r = r && ([...ms932Encoder.encode("鯀")].join(",") === "233,191"); // U+9BC0
expect(() => {ms932Encoder.encode("\u9BC1")}).to.throw(Error, "EncodingError U+9BC1");
expect(() => {ms932Encoder.encode("\u9BC2")}).to.throw(Error, "EncodingError U+9BC2");
expect(() => {ms932Encoder.encode("\u9BC3")}).to.throw(Error, "EncodingError U+9BC3");
expect(() => {ms932Encoder.encode("\u9BC4")}).to.throw(Error, "EncodingError U+9BC4");
expect(() => {ms932Encoder.encode("\u9BC5")}).to.throw(Error, "EncodingError U+9BC5");
r = r && ([...ms932Encoder.encode("鯆")].join(",") === "233,194"); // U+9BC6
expect(() => {ms932Encoder.encode("\u9BC7")}).to.throw(Error, "EncodingError U+9BC7");
expect(() => {ms932Encoder.encode("\u9BC8")}).to.throw(Error, "EncodingError U+9BC8");
r = r && ([...ms932Encoder.encode("鯉鯊")].join(",") === "140,239,233,192"); // U+9BC9
expect(() => {ms932Encoder.encode("\u9BCB")}).to.throw(Error, "EncodingError U+9BCB");
expect(() => {ms932Encoder.encode("\u9BCC")}).to.throw(Error, "EncodingError U+9BCC");
expect(() => {ms932Encoder.encode("\u9BCD")}).to.throw(Error, "EncodingError U+9BCD");
expect(() => {ms932Encoder.encode("\u9BCE")}).to.throw(Error, "EncodingError U+9BCE");
r = r && ([...ms932Encoder.encode("鯏")].join(",") === "233,195"); // U+9BCF
expect(() => {ms932Encoder.encode("\u9BD0")}).to.throw(Error, "EncodingError U+9BD0");
r = r && ([...ms932Encoder.encode("鯑鯒")].join(",") === "233,196,233,197"); // U+9BD1
expect(() => {ms932Encoder.encode("\u9BD3")}).to.throw(Error, "EncodingError U+9BD3");
r = r && ([...ms932Encoder.encode("鯔")].join(",") === "233,201"); // U+9BD4
expect(() => {ms932Encoder.encode("\u9BD5")}).to.throw(Error, "EncodingError U+9BD5");
r = r && ([...ms932Encoder.encode("鯖")].join(",") === "142,73"); // U+9BD6
expect(() => {ms932Encoder.encode("\u9BD7")}).to.throw(Error, "EncodingError U+9BD7");
expect(() => {ms932Encoder.encode("\u9BD8")}).to.throw(Error, "EncodingError U+9BD8");
expect(() => {ms932Encoder.encode("\u9BD9")}).to.throw(Error, "EncodingError U+9BD9");
expect(() => {ms932Encoder.encode("\u9BDA")}).to.throw(Error, "EncodingError U+9BDA");
r = r && ([...ms932Encoder.encode("鯛")].join(",") === "145,226"); // U+9BDB
expect(() => {ms932Encoder.encode("\u9BDC")}).to.throw(Error, "EncodingError U+9BDC");
expect(() => {ms932Encoder.encode("\u9BDD")}).to.throw(Error, "EncodingError U+9BDD");
expect(() => {ms932Encoder.encode("\u9BDE")}).to.throw(Error, "EncodingError U+9BDE");
expect(() => {ms932Encoder.encode("\u9BDF")}).to.throw(Error, "EncodingError U+9BDF");
expect(() => {ms932Encoder.encode("\u9BE0")}).to.throw(Error, "EncodingError U+9BE0");
r = r && ([...ms932Encoder.encode("鯡鯢鯣鯤")].join(",") === "233,202,233,199,233,198,233,200"); // U+9BE1
expect(() => {ms932Encoder.encode("\u9BE5")}).to.throw(Error, "EncodingError U+9BE5");
expect(() => {ms932Encoder.encode("\u9BE6")}).to.throw(Error, "EncodingError U+9BE6");
expect(() => {ms932Encoder.encode("\u9BE7")}).to.throw(Error, "EncodingError U+9BE7");
r = r && ([...ms932Encoder.encode("鯨")].join(",") === "140,126"); // U+9BE8
expect(() => {ms932Encoder.encode("\u9BE9")}).to.throw(Error, "EncodingError U+9BE9");
expect(() => {ms932Encoder.encode("\u9BEA")}).to.throw(Error, "EncodingError U+9BEA");
expect(() => {ms932Encoder.encode("\u9BEB")}).to.throw(Error, "EncodingError U+9BEB");
expect(() => {ms932Encoder.encode("\u9BEC")}).to.throw(Error, "EncodingError U+9BEC");
expect(() => {ms932Encoder.encode("\u9BED")}).to.throw(Error, "EncodingError U+9BED");
expect(() => {ms932Encoder.encode("\u9BEE")}).to.throw(Error, "EncodingError U+9BEE");
expect(() => {ms932Encoder.encode("\u9BEF")}).to.throw(Error, "EncodingError U+9BEF");
r = r && ([...ms932Encoder.encode("鯰鯱鯲")].join(",") === "233,206,233,205,233,204"); // U+9BF0
expect(() => {ms932Encoder.encode("\u9BF3")}).to.throw(Error, "EncodingError U+9BF3");
expect(() => {ms932Encoder.encode("\u9BF4")}).to.throw(Error, "EncodingError U+9BF4");
r = r && ([...ms932Encoder.encode("鯵")].join(",") === "136,177"); // U+9BF5
expect(() => {ms932Encoder.encode("\u9BF6")}).to.throw(Error, "EncodingError U+9BF6");
expect(() => {ms932Encoder.encode("\u9BF7")}).to.throw(Error, "EncodingError U+9BF7");
expect(() => {ms932Encoder.encode("\u9BF8")}).to.throw(Error, "EncodingError U+9BF8");
expect(() => {ms932Encoder.encode("\u9BF9")}).to.throw(Error, "EncodingError U+9BF9");
expect(() => {ms932Encoder.encode("\u9BFA")}).to.throw(Error, "EncodingError U+9BFA");
expect(() => {ms932Encoder.encode("\u9BFB")}).to.throw(Error, "EncodingError U+9BFB");
expect(() => {ms932Encoder.encode("\u9BFC")}).to.throw(Error, "EncodingError U+9BFC");
expect(() => {ms932Encoder.encode("\u9BFD")}).to.throw(Error, "EncodingError U+9BFD");
expect(() => {ms932Encoder.encode("\u9BFE")}).to.throw(Error, "EncodingError U+9BFE");
expect(() => {ms932Encoder.encode("\u9BFF")}).to.throw(Error, "EncodingError U+9BFF");

expect(r).to.equal(true);

  });

});
