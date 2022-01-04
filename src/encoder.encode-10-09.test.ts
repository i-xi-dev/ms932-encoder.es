import assert from "node:assert";
import { Ms932Encoder } from "./encoder";

describe("Ms932Encoder.prototype.encode 10", () => {

  it("encode(string) - U+9800-U+9BFF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

    let r = true;
assert.throws(() => {ms932Encoder.encode("\u9800")}, {name:"Error",message:"EncodingError U+9800"});
r = r && ([...ms932Encoder.encode("頁頂頃")].join(",") === "149,197,146,184,141,160"); // U+9801
assert.throws(() => {ms932Encoder.encode("\u9804")}, {name:"Error",message:"EncodingError U+9804"});
r = r && ([...ms932Encoder.encode("項順")].join(",") === "141,128,143,135"); // U+9805
assert.throws(() => {ms932Encoder.encode("\u9807")}, {name:"Error",message:"EncodingError U+9807"});
r = r && ([...ms932Encoder.encode("須")].join(",") === "144,123"); // U+9808
assert.throws(() => {ms932Encoder.encode("\u9809")}, {name:"Error",message:"EncodingError U+9809"});
assert.throws(() => {ms932Encoder.encode("\u980A")}, {name:"Error",message:"EncodingError U+980A"});
assert.throws(() => {ms932Encoder.encode("\u980B")}, {name:"Error",message:"EncodingError U+980B"});
r = r && ([...ms932Encoder.encode("頌")].join(",") === "232,241"); // U+980C
assert.throws(() => {ms932Encoder.encode("\u980D")}, {name:"Error",message:"EncodingError U+980D"});
assert.throws(() => {ms932Encoder.encode("\u980E")}, {name:"Error",message:"EncodingError U+980E"});
r = r && ([...ms932Encoder.encode("頏預頑頒頓")].join(",") === "232,240,151,97,138,230,148,208,147,218"); // U+980F
assert.throws(() => {ms932Encoder.encode("\u9814")}, {name:"Error",message:"EncodingError U+9814"});
assert.throws(() => {ms932Encoder.encode("\u9815")}, {name:"Error",message:"EncodingError U+9815"});
assert.throws(() => {ms932Encoder.encode("\u9816")}, {name:"Error",message:"EncodingError U+9816"});
r = r && ([...ms932Encoder.encode("頗領")].join(",") === "144,156,151,204"); // U+9817
assert.throws(() => {ms932Encoder.encode("\u9819")}, {name:"Error",message:"EncodingError U+9819"});
r = r && ([...ms932Encoder.encode("頚")].join(",") === "140,122"); // U+981A
assert.throws(() => {ms932Encoder.encode("\u981B")}, {name:"Error",message:"EncodingError U+981B"});
assert.throws(() => {ms932Encoder.encode("\u981C")}, {name:"Error",message:"EncodingError U+981C"});
assert.throws(() => {ms932Encoder.encode("\u981D")}, {name:"Error",message:"EncodingError U+981D"});
assert.throws(() => {ms932Encoder.encode("\u981E")}, {name:"Error",message:"EncodingError U+981E"});
assert.throws(() => {ms932Encoder.encode("\u981F")}, {name:"Error",message:"EncodingError U+981F"});
assert.throws(() => {ms932Encoder.encode("\u9820")}, {name:"Error",message:"EncodingError U+9820"});
r = r && ([...ms932Encoder.encode("頡")].join(",") === "232,244"); // U+9821
assert.throws(() => {ms932Encoder.encode("\u9822")}, {name:"Error",message:"EncodingError U+9822"});
assert.throws(() => {ms932Encoder.encode("\u9823")}, {name:"Error",message:"EncodingError U+9823"});
r = r && ([...ms932Encoder.encode("頤")].join(",") === "232,243"); // U+9824
assert.throws(() => {ms932Encoder.encode("\u9825")}, {name:"Error",message:"EncodingError U+9825"});
assert.throws(() => {ms932Encoder.encode("\u9826")}, {name:"Error",message:"EncodingError U+9826"});
assert.throws(() => {ms932Encoder.encode("\u9827")}, {name:"Error",message:"EncodingError U+9827"});
assert.throws(() => {ms932Encoder.encode("\u9828")}, {name:"Error",message:"EncodingError U+9828"});
assert.throws(() => {ms932Encoder.encode("\u9829")}, {name:"Error",message:"EncodingError U+9829"});
assert.throws(() => {ms932Encoder.encode("\u982A")}, {name:"Error",message:"EncodingError U+982A"});
assert.throws(() => {ms932Encoder.encode("\u982B")}, {name:"Error",message:"EncodingError U+982B"});
r = r && ([...ms932Encoder.encode("頬頭")].join(",") === "150,106,147,170"); // U+982C
assert.throws(() => {ms932Encoder.encode("\u982E")}, {name:"Error",message:"EncodingError U+982E"});
assert.throws(() => {ms932Encoder.encode("\u982F")}, {name:"Error",message:"EncodingError U+982F"});
assert.throws(() => {ms932Encoder.encode("\u9830")}, {name:"Error",message:"EncodingError U+9830"});
assert.throws(() => {ms932Encoder.encode("\u9831")}, {name:"Error",message:"EncodingError U+9831"});
assert.throws(() => {ms932Encoder.encode("\u9832")}, {name:"Error",message:"EncodingError U+9832"});
assert.throws(() => {ms932Encoder.encode("\u9833")}, {name:"Error",message:"EncodingError U+9833"});
r = r && ([...ms932Encoder.encode("頴")].join(",") === "137,111"); // U+9834
assert.throws(() => {ms932Encoder.encode("\u9835")}, {name:"Error",message:"EncodingError U+9835"});
assert.throws(() => {ms932Encoder.encode("\u9836")}, {name:"Error",message:"EncodingError U+9836"});
r = r && ([...ms932Encoder.encode("頷頸")].join(",") === "232,245,232,242"); // U+9837
assert.throws(() => {ms932Encoder.encode("\u9839")}, {name:"Error",message:"EncodingError U+9839"});
assert.throws(() => {ms932Encoder.encode("\u983A")}, {name:"Error",message:"EncodingError U+983A"});
r = r && ([...ms932Encoder.encode("頻頼頽")].join(",") === "149,112,151,138,232,246"); // U+983B
assert.throws(() => {ms932Encoder.encode("\u983E")}, {name:"Error",message:"EncodingError U+983E"});
assert.throws(() => {ms932Encoder.encode("\u983F")}, {name:"Error",message:"EncodingError U+983F"});
assert.throws(() => {ms932Encoder.encode("\u9840")}, {name:"Error",message:"EncodingError U+9840"});
assert.throws(() => {ms932Encoder.encode("\u9841")}, {name:"Error",message:"EncodingError U+9841"});
assert.throws(() => {ms932Encoder.encode("\u9842")}, {name:"Error",message:"EncodingError U+9842"});
assert.throws(() => {ms932Encoder.encode("\u9843")}, {name:"Error",message:"EncodingError U+9843"});
assert.throws(() => {ms932Encoder.encode("\u9844")}, {name:"Error",message:"EncodingError U+9844"});
assert.throws(() => {ms932Encoder.encode("\u9845")}, {name:"Error",message:"EncodingError U+9845"});
r = r && ([...ms932Encoder.encode("顆")].join(",") === "232,247"); // U+9846
assert.throws(() => {ms932Encoder.encode("\u9847")}, {name:"Error",message:"EncodingError U+9847"});
assert.throws(() => {ms932Encoder.encode("\u9848")}, {name:"Error",message:"EncodingError U+9848"});
assert.throws(() => {ms932Encoder.encode("\u9849")}, {name:"Error",message:"EncodingError U+9849"});
assert.throws(() => {ms932Encoder.encode("\u984A")}, {name:"Error",message:"EncodingError U+984A"});
r = r && ([...ms932Encoder.encode("顋題額顎顏")].join(",") === "232,249,145,232,138,122,138,123,232,248"); // U+984B
assert.throws(() => {ms932Encoder.encode("\u9850")}, {name:"Error",message:"EncodingError U+9850"});
assert.throws(() => {ms932Encoder.encode("\u9851")}, {name:"Error",message:"EncodingError U+9851"});
assert.throws(() => {ms932Encoder.encode("\u9852")}, {name:"Error",message:"EncodingError U+9852"});
assert.throws(() => {ms932Encoder.encode("\u9853")}, {name:"Error",message:"EncodingError U+9853"});
r = r && ([...ms932Encoder.encode("顔顕")].join(",") === "138,231,140,176"); // U+9854
assert.throws(() => {ms932Encoder.encode("\u9856")}, {name:"Error",message:"EncodingError U+9856"});
r = r && ([...ms932Encoder.encode("顗願")].join(",") === "251,244,138,232"); // U+9857
assert.throws(() => {ms932Encoder.encode("\u9859")}, {name:"Error",message:"EncodingError U+9859"});
assert.throws(() => {ms932Encoder.encode("\u985A")}, {name:"Error",message:"EncodingError U+985A"});
r = r && ([...ms932Encoder.encode("顛")].join(",") === "147,94"); // U+985B
assert.throws(() => {ms932Encoder.encode("\u985C")}, {name:"Error",message:"EncodingError U+985C"});
assert.throws(() => {ms932Encoder.encode("\u985D")}, {name:"Error",message:"EncodingError U+985D"});
r = r && ([...ms932Encoder.encode("類")].join(",") === "151,222"); // U+985E
assert.throws(() => {ms932Encoder.encode("\u985F")}, {name:"Error",message:"EncodingError U+985F"});
assert.throws(() => {ms932Encoder.encode("\u9860")}, {name:"Error",message:"EncodingError U+9860"});
assert.throws(() => {ms932Encoder.encode("\u9861")}, {name:"Error",message:"EncodingError U+9861"});
assert.throws(() => {ms932Encoder.encode("\u9862")}, {name:"Error",message:"EncodingError U+9862"});
assert.throws(() => {ms932Encoder.encode("\u9863")}, {name:"Error",message:"EncodingError U+9863"});
assert.throws(() => {ms932Encoder.encode("\u9864")}, {name:"Error",message:"EncodingError U+9864"});
r = r && ([...ms932Encoder.encode("顥")].join(",") === "251,245"); // U+9865
assert.throws(() => {ms932Encoder.encode("\u9866")}, {name:"Error",message:"EncodingError U+9866"});
r = r && ([...ms932Encoder.encode("顧")].join(",") === "140,218"); // U+9867
assert.throws(() => {ms932Encoder.encode("\u9868")}, {name:"Error",message:"EncodingError U+9868"});
assert.throws(() => {ms932Encoder.encode("\u9869")}, {name:"Error",message:"EncodingError U+9869"});
assert.throws(() => {ms932Encoder.encode("\u986A")}, {name:"Error",message:"EncodingError U+986A"});
r = r && ([...ms932Encoder.encode("顫")].join(",") === "232,250"); // U+986B
assert.throws(() => {ms932Encoder.encode("\u986C")}, {name:"Error",message:"EncodingError U+986C"});
assert.throws(() => {ms932Encoder.encode("\u986D")}, {name:"Error",message:"EncodingError U+986D"});
assert.throws(() => {ms932Encoder.encode("\u986E")}, {name:"Error",message:"EncodingError U+986E"});
r = r && ([...ms932Encoder.encode("顯顰顱")].join(",") === "232,251,232,252,233,64"); // U+986F
assert.throws(() => {ms932Encoder.encode("\u9872")}, {name:"Error",message:"EncodingError U+9872"});
r = r && ([...ms932Encoder.encode("顳顴")].join(",") === "233,66,233,65"); // U+9873
assert.throws(() => {ms932Encoder.encode("\u9875")}, {name:"Error",message:"EncodingError U+9875"});
assert.throws(() => {ms932Encoder.encode("\u9876")}, {name:"Error",message:"EncodingError U+9876"});
assert.throws(() => {ms932Encoder.encode("\u9877")}, {name:"Error",message:"EncodingError U+9877"});
assert.throws(() => {ms932Encoder.encode("\u9878")}, {name:"Error",message:"EncodingError U+9878"});
assert.throws(() => {ms932Encoder.encode("\u9879")}, {name:"Error",message:"EncodingError U+9879"});
assert.throws(() => {ms932Encoder.encode("\u987A")}, {name:"Error",message:"EncodingError U+987A"});
assert.throws(() => {ms932Encoder.encode("\u987B")}, {name:"Error",message:"EncodingError U+987B"});
assert.throws(() => {ms932Encoder.encode("\u987C")}, {name:"Error",message:"EncodingError U+987C"});
assert.throws(() => {ms932Encoder.encode("\u987D")}, {name:"Error",message:"EncodingError U+987D"});
assert.throws(() => {ms932Encoder.encode("\u987E")}, {name:"Error",message:"EncodingError U+987E"});
assert.throws(() => {ms932Encoder.encode("\u987F")}, {name:"Error",message:"EncodingError U+987F"});
assert.throws(() => {ms932Encoder.encode("\u9880")}, {name:"Error",message:"EncodingError U+9880"});
assert.throws(() => {ms932Encoder.encode("\u9881")}, {name:"Error",message:"EncodingError U+9881"});
assert.throws(() => {ms932Encoder.encode("\u9882")}, {name:"Error",message:"EncodingError U+9882"});
assert.throws(() => {ms932Encoder.encode("\u9883")}, {name:"Error",message:"EncodingError U+9883"});
assert.throws(() => {ms932Encoder.encode("\u9884")}, {name:"Error",message:"EncodingError U+9884"});
assert.throws(() => {ms932Encoder.encode("\u9885")}, {name:"Error",message:"EncodingError U+9885"});
assert.throws(() => {ms932Encoder.encode("\u9886")}, {name:"Error",message:"EncodingError U+9886"});
assert.throws(() => {ms932Encoder.encode("\u9887")}, {name:"Error",message:"EncodingError U+9887"});
assert.throws(() => {ms932Encoder.encode("\u9888")}, {name:"Error",message:"EncodingError U+9888"});
assert.throws(() => {ms932Encoder.encode("\u9889")}, {name:"Error",message:"EncodingError U+9889"});
assert.throws(() => {ms932Encoder.encode("\u988A")}, {name:"Error",message:"EncodingError U+988A"});
assert.throws(() => {ms932Encoder.encode("\u988B")}, {name:"Error",message:"EncodingError U+988B"});
assert.throws(() => {ms932Encoder.encode("\u988C")}, {name:"Error",message:"EncodingError U+988C"});
assert.throws(() => {ms932Encoder.encode("\u988D")}, {name:"Error",message:"EncodingError U+988D"});
assert.throws(() => {ms932Encoder.encode("\u988E")}, {name:"Error",message:"EncodingError U+988E"});
assert.throws(() => {ms932Encoder.encode("\u988F")}, {name:"Error",message:"EncodingError U+988F"});
assert.throws(() => {ms932Encoder.encode("\u9890")}, {name:"Error",message:"EncodingError U+9890"});
assert.throws(() => {ms932Encoder.encode("\u9891")}, {name:"Error",message:"EncodingError U+9891"});
assert.throws(() => {ms932Encoder.encode("\u9892")}, {name:"Error",message:"EncodingError U+9892"});
assert.throws(() => {ms932Encoder.encode("\u9893")}, {name:"Error",message:"EncodingError U+9893"});
assert.throws(() => {ms932Encoder.encode("\u9894")}, {name:"Error",message:"EncodingError U+9894"});
assert.throws(() => {ms932Encoder.encode("\u9895")}, {name:"Error",message:"EncodingError U+9895"});
assert.throws(() => {ms932Encoder.encode("\u9896")}, {name:"Error",message:"EncodingError U+9896"});
assert.throws(() => {ms932Encoder.encode("\u9897")}, {name:"Error",message:"EncodingError U+9897"});
assert.throws(() => {ms932Encoder.encode("\u9898")}, {name:"Error",message:"EncodingError U+9898"});
assert.throws(() => {ms932Encoder.encode("\u9899")}, {name:"Error",message:"EncodingError U+9899"});
assert.throws(() => {ms932Encoder.encode("\u989A")}, {name:"Error",message:"EncodingError U+989A"});
assert.throws(() => {ms932Encoder.encode("\u989B")}, {name:"Error",message:"EncodingError U+989B"});
assert.throws(() => {ms932Encoder.encode("\u989C")}, {name:"Error",message:"EncodingError U+989C"});
assert.throws(() => {ms932Encoder.encode("\u989D")}, {name:"Error",message:"EncodingError U+989D"});
assert.throws(() => {ms932Encoder.encode("\u989E")}, {name:"Error",message:"EncodingError U+989E"});
assert.throws(() => {ms932Encoder.encode("\u989F")}, {name:"Error",message:"EncodingError U+989F"});
assert.throws(() => {ms932Encoder.encode("\u98A0")}, {name:"Error",message:"EncodingError U+98A0"});
assert.throws(() => {ms932Encoder.encode("\u98A1")}, {name:"Error",message:"EncodingError U+98A1"});
assert.throws(() => {ms932Encoder.encode("\u98A2")}, {name:"Error",message:"EncodingError U+98A2"});
assert.throws(() => {ms932Encoder.encode("\u98A3")}, {name:"Error",message:"EncodingError U+98A3"});
assert.throws(() => {ms932Encoder.encode("\u98A4")}, {name:"Error",message:"EncodingError U+98A4"});
assert.throws(() => {ms932Encoder.encode("\u98A5")}, {name:"Error",message:"EncodingError U+98A5"});
assert.throws(() => {ms932Encoder.encode("\u98A6")}, {name:"Error",message:"EncodingError U+98A6"});
assert.throws(() => {ms932Encoder.encode("\u98A7")}, {name:"Error",message:"EncodingError U+98A7"});
r = r && ([...ms932Encoder.encode("風")].join(",") === "149,151"); // U+98A8
assert.throws(() => {ms932Encoder.encode("\u98A9")}, {name:"Error",message:"EncodingError U+98A9"});
r = r && ([...ms932Encoder.encode("颪")].join(",") === "233,67"); // U+98AA
assert.throws(() => {ms932Encoder.encode("\u98AB")}, {name:"Error",message:"EncodingError U+98AB"});
assert.throws(() => {ms932Encoder.encode("\u98AC")}, {name:"Error",message:"EncodingError U+98AC"});
assert.throws(() => {ms932Encoder.encode("\u98AD")}, {name:"Error",message:"EncodingError U+98AD"});
assert.throws(() => {ms932Encoder.encode("\u98AE")}, {name:"Error",message:"EncodingError U+98AE"});
r = r && ([...ms932Encoder.encode("颯")].join(",") === "233,68"); // U+98AF
assert.throws(() => {ms932Encoder.encode("\u98B0")}, {name:"Error",message:"EncodingError U+98B0"});
r = r && ([...ms932Encoder.encode("颱")].join(",") === "233,69"); // U+98B1
assert.throws(() => {ms932Encoder.encode("\u98B2")}, {name:"Error",message:"EncodingError U+98B2"});
assert.throws(() => {ms932Encoder.encode("\u98B3")}, {name:"Error",message:"EncodingError U+98B3"});
assert.throws(() => {ms932Encoder.encode("\u98B4")}, {name:"Error",message:"EncodingError U+98B4"});
assert.throws(() => {ms932Encoder.encode("\u98B5")}, {name:"Error",message:"EncodingError U+98B5"});
r = r && ([...ms932Encoder.encode("颶")].join(",") === "233,70"); // U+98B6
assert.throws(() => {ms932Encoder.encode("\u98B7")}, {name:"Error",message:"EncodingError U+98B7"});
assert.throws(() => {ms932Encoder.encode("\u98B8")}, {name:"Error",message:"EncodingError U+98B8"});
assert.throws(() => {ms932Encoder.encode("\u98B9")}, {name:"Error",message:"EncodingError U+98B9"});
assert.throws(() => {ms932Encoder.encode("\u98BA")}, {name:"Error",message:"EncodingError U+98BA"});
assert.throws(() => {ms932Encoder.encode("\u98BB")}, {name:"Error",message:"EncodingError U+98BB"});
assert.throws(() => {ms932Encoder.encode("\u98BC")}, {name:"Error",message:"EncodingError U+98BC"});
assert.throws(() => {ms932Encoder.encode("\u98BD")}, {name:"Error",message:"EncodingError U+98BD"});
assert.throws(() => {ms932Encoder.encode("\u98BE")}, {name:"Error",message:"EncodingError U+98BE"});
assert.throws(() => {ms932Encoder.encode("\u98BF")}, {name:"Error",message:"EncodingError U+98BF"});
assert.throws(() => {ms932Encoder.encode("\u98C0")}, {name:"Error",message:"EncodingError U+98C0"});
assert.throws(() => {ms932Encoder.encode("\u98C1")}, {name:"Error",message:"EncodingError U+98C1"});
assert.throws(() => {ms932Encoder.encode("\u98C2")}, {name:"Error",message:"EncodingError U+98C2"});
r = r && ([...ms932Encoder.encode("飃飄")].join(",") === "233,72,233,71"); // U+98C3
assert.throws(() => {ms932Encoder.encode("\u98C5")}, {name:"Error",message:"EncodingError U+98C5"});
r = r && ([...ms932Encoder.encode("飆")].join(",") === "233,73"); // U+98C6
assert.throws(() => {ms932Encoder.encode("\u98C7")}, {name:"Error",message:"EncodingError U+98C7"});
assert.throws(() => {ms932Encoder.encode("\u98C8")}, {name:"Error",message:"EncodingError U+98C8"});
assert.throws(() => {ms932Encoder.encode("\u98C9")}, {name:"Error",message:"EncodingError U+98C9"});
assert.throws(() => {ms932Encoder.encode("\u98CA")}, {name:"Error",message:"EncodingError U+98CA"});
assert.throws(() => {ms932Encoder.encode("\u98CB")}, {name:"Error",message:"EncodingError U+98CB"});
assert.throws(() => {ms932Encoder.encode("\u98CC")}, {name:"Error",message:"EncodingError U+98CC"});
assert.throws(() => {ms932Encoder.encode("\u98CD")}, {name:"Error",message:"EncodingError U+98CD"});
assert.throws(() => {ms932Encoder.encode("\u98CE")}, {name:"Error",message:"EncodingError U+98CE"});
assert.throws(() => {ms932Encoder.encode("\u98CF")}, {name:"Error",message:"EncodingError U+98CF"});
assert.throws(() => {ms932Encoder.encode("\u98D0")}, {name:"Error",message:"EncodingError U+98D0"});
assert.throws(() => {ms932Encoder.encode("\u98D1")}, {name:"Error",message:"EncodingError U+98D1"});
assert.throws(() => {ms932Encoder.encode("\u98D2")}, {name:"Error",message:"EncodingError U+98D2"});
assert.throws(() => {ms932Encoder.encode("\u98D3")}, {name:"Error",message:"EncodingError U+98D3"});
assert.throws(() => {ms932Encoder.encode("\u98D4")}, {name:"Error",message:"EncodingError U+98D4"});
assert.throws(() => {ms932Encoder.encode("\u98D5")}, {name:"Error",message:"EncodingError U+98D5"});
assert.throws(() => {ms932Encoder.encode("\u98D6")}, {name:"Error",message:"EncodingError U+98D6"});
assert.throws(() => {ms932Encoder.encode("\u98D7")}, {name:"Error",message:"EncodingError U+98D7"});
assert.throws(() => {ms932Encoder.encode("\u98D8")}, {name:"Error",message:"EncodingError U+98D8"});
assert.throws(() => {ms932Encoder.encode("\u98D9")}, {name:"Error",message:"EncodingError U+98D9"});
assert.throws(() => {ms932Encoder.encode("\u98DA")}, {name:"Error",message:"EncodingError U+98DA"});
r = r && ([...ms932Encoder.encode("飛飜")].join(",") === "148,242,227,202"); // U+98DB
assert.throws(() => {ms932Encoder.encode("\u98DD")}, {name:"Error",message:"EncodingError U+98DD"});
assert.throws(() => {ms932Encoder.encode("\u98DE")}, {name:"Error",message:"EncodingError U+98DE"});
r = r && ([...ms932Encoder.encode("食")].join(",") === "144,72"); // U+98DF
assert.throws(() => {ms932Encoder.encode("\u98E0")}, {name:"Error",message:"EncodingError U+98E0"});
assert.throws(() => {ms932Encoder.encode("\u98E1")}, {name:"Error",message:"EncodingError U+98E1"});
r = r && ([...ms932Encoder.encode("飢")].join(",") === "139,81"); // U+98E2
assert.throws(() => {ms932Encoder.encode("\u98E3")}, {name:"Error",message:"EncodingError U+98E3"});
assert.throws(() => {ms932Encoder.encode("\u98E4")}, {name:"Error",message:"EncodingError U+98E4"});
assert.throws(() => {ms932Encoder.encode("\u98E5")}, {name:"Error",message:"EncodingError U+98E5"});
assert.throws(() => {ms932Encoder.encode("\u98E6")}, {name:"Error",message:"EncodingError U+98E6"});
assert.throws(() => {ms932Encoder.encode("\u98E7")}, {name:"Error",message:"EncodingError U+98E7"});
assert.throws(() => {ms932Encoder.encode("\u98E8")}, {name:"Error",message:"EncodingError U+98E8"});
r = r && ([...ms932Encoder.encode("飩")].join(",") === "233,74"); // U+98E9
assert.throws(() => {ms932Encoder.encode("\u98EA")}, {name:"Error",message:"EncodingError U+98EA"});
r = r && ([...ms932Encoder.encode("飫")].join(",") === "233,75"); // U+98EB
assert.throws(() => {ms932Encoder.encode("\u98EC")}, {name:"Error",message:"EncodingError U+98EC"});
r = r && ([...ms932Encoder.encode("飭飮飯")].join(",") === "153,170,159,90,148,209"); // U+98ED
assert.throws(() => {ms932Encoder.encode("\u98F0")}, {name:"Error",message:"EncodingError U+98F0"});
assert.throws(() => {ms932Encoder.encode("\u98F1")}, {name:"Error",message:"EncodingError U+98F1"});
r = r && ([...ms932Encoder.encode("飲")].join(",") === "136,249"); // U+98F2
assert.throws(() => {ms932Encoder.encode("\u98F3")}, {name:"Error",message:"EncodingError U+98F3"});
r = r && ([...ms932Encoder.encode("飴")].join(",") === "136,185"); // U+98F4
assert.throws(() => {ms932Encoder.encode("\u98F5")}, {name:"Error",message:"EncodingError U+98F5"});
assert.throws(() => {ms932Encoder.encode("\u98F6")}, {name:"Error",message:"EncodingError U+98F6"});
assert.throws(() => {ms932Encoder.encode("\u98F7")}, {name:"Error",message:"EncodingError U+98F7"});
assert.throws(() => {ms932Encoder.encode("\u98F8")}, {name:"Error",message:"EncodingError U+98F8"});
assert.throws(() => {ms932Encoder.encode("\u98F9")}, {name:"Error",message:"EncodingError U+98F9"});
assert.throws(() => {ms932Encoder.encode("\u98FA")}, {name:"Error",message:"EncodingError U+98FA"});
assert.throws(() => {ms932Encoder.encode("\u98FB")}, {name:"Error",message:"EncodingError U+98FB"});
r = r && ([...ms932Encoder.encode("飼飽飾")].join(",") === "142,148,150,79,143,252"); // U+98FC
assert.throws(() => {ms932Encoder.encode("\u98FF")}, {name:"Error",message:"EncodingError U+98FF"});
assert.throws(() => {ms932Encoder.encode("\u9900")}, {name:"Error",message:"EncodingError U+9900"});
assert.throws(() => {ms932Encoder.encode("\u9901")}, {name:"Error",message:"EncodingError U+9901"});
assert.throws(() => {ms932Encoder.encode("\u9902")}, {name:"Error",message:"EncodingError U+9902"});
r = r && ([...ms932Encoder.encode("餃")].join(",") === "233,76"); // U+9903
assert.throws(() => {ms932Encoder.encode("\u9904")}, {name:"Error",message:"EncodingError U+9904"});
r = r && ([...ms932Encoder.encode("餅")].join(",") === "150,221"); // U+9905
assert.throws(() => {ms932Encoder.encode("\u9906")}, {name:"Error",message:"EncodingError U+9906"});
assert.throws(() => {ms932Encoder.encode("\u9907")}, {name:"Error",message:"EncodingError U+9907"});
assert.throws(() => {ms932Encoder.encode("\u9908")}, {name:"Error",message:"EncodingError U+9908"});
r = r && ([...ms932Encoder.encode("餉養")].join(",") === "233,77,151,123"); // U+9909
assert.throws(() => {ms932Encoder.encode("\u990B")}, {name:"Error",message:"EncodingError U+990B"});
r = r && ([...ms932Encoder.encode("餌")].join(",") === "137,97"); // U+990C
assert.throws(() => {ms932Encoder.encode("\u990D")}, {name:"Error",message:"EncodingError U+990D"});
assert.throws(() => {ms932Encoder.encode("\u990E")}, {name:"Error",message:"EncodingError U+990E"});
assert.throws(() => {ms932Encoder.encode("\u990F")}, {name:"Error",message:"EncodingError U+990F"});
r = r && ([...ms932Encoder.encode("餐")].join(",") === "142,96"); // U+9910
assert.throws(() => {ms932Encoder.encode("\u9911")}, {name:"Error",message:"EncodingError U+9911"});
r = r && ([...ms932Encoder.encode("餒餓餔")].join(",") === "233,78,137,236,233,79"); // U+9912
assert.throws(() => {ms932Encoder.encode("\u9915")}, {name:"Error",message:"EncodingError U+9915"});
assert.throws(() => {ms932Encoder.encode("\u9916")}, {name:"Error",message:"EncodingError U+9916"});
assert.throws(() => {ms932Encoder.encode("\u9917")}, {name:"Error",message:"EncodingError U+9917"});
r = r && ([...ms932Encoder.encode("餘")].join(",") === "233,80"); // U+9918
assert.throws(() => {ms932Encoder.encode("\u9919")}, {name:"Error",message:"EncodingError U+9919"});
assert.throws(() => {ms932Encoder.encode("\u991A")}, {name:"Error",message:"EncodingError U+991A"});
assert.throws(() => {ms932Encoder.encode("\u991B")}, {name:"Error",message:"EncodingError U+991B"});
assert.throws(() => {ms932Encoder.encode("\u991C")}, {name:"Error",message:"EncodingError U+991C"});
r = r && ([...ms932Encoder.encode("餝餞")].join(",") === "233,82,233,83"); // U+991D
assert.throws(() => {ms932Encoder.encode("\u991F")}, {name:"Error",message:"EncodingError U+991F"});
r = r && ([...ms932Encoder.encode("餠餡")].join(",") === "233,85,233,81"); // U+9920
assert.throws(() => {ms932Encoder.encode("\u9922")}, {name:"Error",message:"EncodingError U+9922"});
assert.throws(() => {ms932Encoder.encode("\u9923")}, {name:"Error",message:"EncodingError U+9923"});
r = r && ([...ms932Encoder.encode("餤")].join(",") === "233,84"); // U+9924
assert.throws(() => {ms932Encoder.encode("\u9925")}, {name:"Error",message:"EncodingError U+9925"});
assert.throws(() => {ms932Encoder.encode("\u9926")}, {name:"Error",message:"EncodingError U+9926"});
r = r && ([...ms932Encoder.encode("餧館")].join(",") === "251,248,138,217"); // U+9927
assert.throws(() => {ms932Encoder.encode("\u9929")}, {name:"Error",message:"EncodingError U+9929"});
assert.throws(() => {ms932Encoder.encode("\u992A")}, {name:"Error",message:"EncodingError U+992A"});
assert.throws(() => {ms932Encoder.encode("\u992B")}, {name:"Error",message:"EncodingError U+992B"});
r = r && ([...ms932Encoder.encode("餬")].join(",") === "233,86"); // U+992C
assert.throws(() => {ms932Encoder.encode("\u992D")}, {name:"Error",message:"EncodingError U+992D"});
r = r && ([...ms932Encoder.encode("餮")].join(",") === "233,87"); // U+992E
assert.throws(() => {ms932Encoder.encode("\u992F")}, {name:"Error",message:"EncodingError U+992F"});
assert.throws(() => {ms932Encoder.encode("\u9930")}, {name:"Error",message:"EncodingError U+9930"});
assert.throws(() => {ms932Encoder.encode("\u9931")}, {name:"Error",message:"EncodingError U+9931"});
assert.throws(() => {ms932Encoder.encode("\u9932")}, {name:"Error",message:"EncodingError U+9932"});
assert.throws(() => {ms932Encoder.encode("\u9933")}, {name:"Error",message:"EncodingError U+9933"});
assert.throws(() => {ms932Encoder.encode("\u9934")}, {name:"Error",message:"EncodingError U+9934"});
assert.throws(() => {ms932Encoder.encode("\u9935")}, {name:"Error",message:"EncodingError U+9935"});
assert.throws(() => {ms932Encoder.encode("\u9936")}, {name:"Error",message:"EncodingError U+9936"});
assert.throws(() => {ms932Encoder.encode("\u9937")}, {name:"Error",message:"EncodingError U+9937"});
assert.throws(() => {ms932Encoder.encode("\u9938")}, {name:"Error",message:"EncodingError U+9938"});
assert.throws(() => {ms932Encoder.encode("\u9939")}, {name:"Error",message:"EncodingError U+9939"});
assert.throws(() => {ms932Encoder.encode("\u993A")}, {name:"Error",message:"EncodingError U+993A"});
assert.throws(() => {ms932Encoder.encode("\u993B")}, {name:"Error",message:"EncodingError U+993B"});
assert.throws(() => {ms932Encoder.encode("\u993C")}, {name:"Error",message:"EncodingError U+993C"});
r = r && ([...ms932Encoder.encode("餽餾")].join(",") === "233,88,233,89"); // U+993D
assert.throws(() => {ms932Encoder.encode("\u993F")}, {name:"Error",message:"EncodingError U+993F"});
assert.throws(() => {ms932Encoder.encode("\u9940")}, {name:"Error",message:"EncodingError U+9940"});
assert.throws(() => {ms932Encoder.encode("\u9941")}, {name:"Error",message:"EncodingError U+9941"});
r = r && ([...ms932Encoder.encode("饂")].join(",") === "233,90"); // U+9942
assert.throws(() => {ms932Encoder.encode("\u9943")}, {name:"Error",message:"EncodingError U+9943"});
assert.throws(() => {ms932Encoder.encode("\u9944")}, {name:"Error",message:"EncodingError U+9944"});
r = r && ([...ms932Encoder.encode("饅")].join(",") === "233,92"); // U+9945
assert.throws(() => {ms932Encoder.encode("\u9946")}, {name:"Error",message:"EncodingError U+9946"});
assert.throws(() => {ms932Encoder.encode("\u9947")}, {name:"Error",message:"EncodingError U+9947"});
assert.throws(() => {ms932Encoder.encode("\u9948")}, {name:"Error",message:"EncodingError U+9948"});
r = r && ([...ms932Encoder.encode("饉")].join(",") === "233,91"); // U+9949
assert.throws(() => {ms932Encoder.encode("\u994A")}, {name:"Error",message:"EncodingError U+994A"});
r = r && ([...ms932Encoder.encode("饋饌")].join(",") === "233,94,233,97"); // U+994B
assert.throws(() => {ms932Encoder.encode("\u994D")}, {name:"Error",message:"EncodingError U+994D"});
assert.throws(() => {ms932Encoder.encode("\u994E")}, {name:"Error",message:"EncodingError U+994E"});
assert.throws(() => {ms932Encoder.encode("\u994F")}, {name:"Error",message:"EncodingError U+994F"});
r = r && ([...ms932Encoder.encode("饐饑饒")].join(",") === "233,93,233,95,233,96"); // U+9950
assert.throws(() => {ms932Encoder.encode("\u9953")}, {name:"Error",message:"EncodingError U+9953"});
assert.throws(() => {ms932Encoder.encode("\u9954")}, {name:"Error",message:"EncodingError U+9954"});
r = r && ([...ms932Encoder.encode("饕")].join(",") === "233,98"); // U+9955
assert.throws(() => {ms932Encoder.encode("\u9956")}, {name:"Error",message:"EncodingError U+9956"});
r = r && ([...ms932Encoder.encode("饗")].join(",") === "139,192"); // U+9957
assert.throws(() => {ms932Encoder.encode("\u9958")}, {name:"Error",message:"EncodingError U+9958"});
assert.throws(() => {ms932Encoder.encode("\u9959")}, {name:"Error",message:"EncodingError U+9959"});
assert.throws(() => {ms932Encoder.encode("\u995A")}, {name:"Error",message:"EncodingError U+995A"});
assert.throws(() => {ms932Encoder.encode("\u995B")}, {name:"Error",message:"EncodingError U+995B"});
assert.throws(() => {ms932Encoder.encode("\u995C")}, {name:"Error",message:"EncodingError U+995C"});
assert.throws(() => {ms932Encoder.encode("\u995D")}, {name:"Error",message:"EncodingError U+995D"});
assert.throws(() => {ms932Encoder.encode("\u995E")}, {name:"Error",message:"EncodingError U+995E"});
assert.throws(() => {ms932Encoder.encode("\u995F")}, {name:"Error",message:"EncodingError U+995F"});
assert.throws(() => {ms932Encoder.encode("\u9960")}, {name:"Error",message:"EncodingError U+9960"});
assert.throws(() => {ms932Encoder.encode("\u9961")}, {name:"Error",message:"EncodingError U+9961"});
assert.throws(() => {ms932Encoder.encode("\u9962")}, {name:"Error",message:"EncodingError U+9962"});
assert.throws(() => {ms932Encoder.encode("\u9963")}, {name:"Error",message:"EncodingError U+9963"});
assert.throws(() => {ms932Encoder.encode("\u9964")}, {name:"Error",message:"EncodingError U+9964"});
assert.throws(() => {ms932Encoder.encode("\u9965")}, {name:"Error",message:"EncodingError U+9965"});
assert.throws(() => {ms932Encoder.encode("\u9966")}, {name:"Error",message:"EncodingError U+9966"});
assert.throws(() => {ms932Encoder.encode("\u9967")}, {name:"Error",message:"EncodingError U+9967"});
assert.throws(() => {ms932Encoder.encode("\u9968")}, {name:"Error",message:"EncodingError U+9968"});
assert.throws(() => {ms932Encoder.encode("\u9969")}, {name:"Error",message:"EncodingError U+9969"});
assert.throws(() => {ms932Encoder.encode("\u996A")}, {name:"Error",message:"EncodingError U+996A"});
assert.throws(() => {ms932Encoder.encode("\u996B")}, {name:"Error",message:"EncodingError U+996B"});
assert.throws(() => {ms932Encoder.encode("\u996C")}, {name:"Error",message:"EncodingError U+996C"});
assert.throws(() => {ms932Encoder.encode("\u996D")}, {name:"Error",message:"EncodingError U+996D"});
assert.throws(() => {ms932Encoder.encode("\u996E")}, {name:"Error",message:"EncodingError U+996E"});
assert.throws(() => {ms932Encoder.encode("\u996F")}, {name:"Error",message:"EncodingError U+996F"});
assert.throws(() => {ms932Encoder.encode("\u9970")}, {name:"Error",message:"EncodingError U+9970"});
assert.throws(() => {ms932Encoder.encode("\u9971")}, {name:"Error",message:"EncodingError U+9971"});
assert.throws(() => {ms932Encoder.encode("\u9972")}, {name:"Error",message:"EncodingError U+9972"});
assert.throws(() => {ms932Encoder.encode("\u9973")}, {name:"Error",message:"EncodingError U+9973"});
assert.throws(() => {ms932Encoder.encode("\u9974")}, {name:"Error",message:"EncodingError U+9974"});
assert.throws(() => {ms932Encoder.encode("\u9975")}, {name:"Error",message:"EncodingError U+9975"});
assert.throws(() => {ms932Encoder.encode("\u9976")}, {name:"Error",message:"EncodingError U+9976"});
assert.throws(() => {ms932Encoder.encode("\u9977")}, {name:"Error",message:"EncodingError U+9977"});
assert.throws(() => {ms932Encoder.encode("\u9978")}, {name:"Error",message:"EncodingError U+9978"});
assert.throws(() => {ms932Encoder.encode("\u9979")}, {name:"Error",message:"EncodingError U+9979"});
assert.throws(() => {ms932Encoder.encode("\u997A")}, {name:"Error",message:"EncodingError U+997A"});
assert.throws(() => {ms932Encoder.encode("\u997B")}, {name:"Error",message:"EncodingError U+997B"});
assert.throws(() => {ms932Encoder.encode("\u997C")}, {name:"Error",message:"EncodingError U+997C"});
assert.throws(() => {ms932Encoder.encode("\u997D")}, {name:"Error",message:"EncodingError U+997D"});
assert.throws(() => {ms932Encoder.encode("\u997E")}, {name:"Error",message:"EncodingError U+997E"});
assert.throws(() => {ms932Encoder.encode("\u997F")}, {name:"Error",message:"EncodingError U+997F"});
assert.throws(() => {ms932Encoder.encode("\u9980")}, {name:"Error",message:"EncodingError U+9980"});
assert.throws(() => {ms932Encoder.encode("\u9981")}, {name:"Error",message:"EncodingError U+9981"});
assert.throws(() => {ms932Encoder.encode("\u9982")}, {name:"Error",message:"EncodingError U+9982"});
assert.throws(() => {ms932Encoder.encode("\u9983")}, {name:"Error",message:"EncodingError U+9983"});
assert.throws(() => {ms932Encoder.encode("\u9984")}, {name:"Error",message:"EncodingError U+9984"});
assert.throws(() => {ms932Encoder.encode("\u9985")}, {name:"Error",message:"EncodingError U+9985"});
assert.throws(() => {ms932Encoder.encode("\u9986")}, {name:"Error",message:"EncodingError U+9986"});
assert.throws(() => {ms932Encoder.encode("\u9987")}, {name:"Error",message:"EncodingError U+9987"});
assert.throws(() => {ms932Encoder.encode("\u9988")}, {name:"Error",message:"EncodingError U+9988"});
assert.throws(() => {ms932Encoder.encode("\u9989")}, {name:"Error",message:"EncodingError U+9989"});
assert.throws(() => {ms932Encoder.encode("\u998A")}, {name:"Error",message:"EncodingError U+998A"});
assert.throws(() => {ms932Encoder.encode("\u998B")}, {name:"Error",message:"EncodingError U+998B"});
assert.throws(() => {ms932Encoder.encode("\u998C")}, {name:"Error",message:"EncodingError U+998C"});
assert.throws(() => {ms932Encoder.encode("\u998D")}, {name:"Error",message:"EncodingError U+998D"});
assert.throws(() => {ms932Encoder.encode("\u998E")}, {name:"Error",message:"EncodingError U+998E"});
assert.throws(() => {ms932Encoder.encode("\u998F")}, {name:"Error",message:"EncodingError U+998F"});
assert.throws(() => {ms932Encoder.encode("\u9990")}, {name:"Error",message:"EncodingError U+9990"});
assert.throws(() => {ms932Encoder.encode("\u9991")}, {name:"Error",message:"EncodingError U+9991"});
assert.throws(() => {ms932Encoder.encode("\u9992")}, {name:"Error",message:"EncodingError U+9992"});
assert.throws(() => {ms932Encoder.encode("\u9993")}, {name:"Error",message:"EncodingError U+9993"});
assert.throws(() => {ms932Encoder.encode("\u9994")}, {name:"Error",message:"EncodingError U+9994"});
assert.throws(() => {ms932Encoder.encode("\u9995")}, {name:"Error",message:"EncodingError U+9995"});
r = r && ([...ms932Encoder.encode("首馗馘香")].join(",") === "142,241,233,99,233,100,141,129"); // U+9996
assert.throws(() => {ms932Encoder.encode("\u999A")}, {name:"Error",message:"EncodingError U+999A"});
assert.throws(() => {ms932Encoder.encode("\u999B")}, {name:"Error",message:"EncodingError U+999B"});
assert.throws(() => {ms932Encoder.encode("\u999C")}, {name:"Error",message:"EncodingError U+999C"});
assert.throws(() => {ms932Encoder.encode("\u999D")}, {name:"Error",message:"EncodingError U+999D"});
r = r && ([...ms932Encoder.encode("馞")].join(",") === "251,250"); // U+999E
assert.throws(() => {ms932Encoder.encode("\u999F")}, {name:"Error",message:"EncodingError U+999F"});
assert.throws(() => {ms932Encoder.encode("\u99A0")}, {name:"Error",message:"EncodingError U+99A0"});
assert.throws(() => {ms932Encoder.encode("\u99A1")}, {name:"Error",message:"EncodingError U+99A1"});
assert.throws(() => {ms932Encoder.encode("\u99A2")}, {name:"Error",message:"EncodingError U+99A2"});
assert.throws(() => {ms932Encoder.encode("\u99A3")}, {name:"Error",message:"EncodingError U+99A3"});
assert.throws(() => {ms932Encoder.encode("\u99A4")}, {name:"Error",message:"EncodingError U+99A4"});
r = r && ([...ms932Encoder.encode("馥")].join(",") === "233,101"); // U+99A5
assert.throws(() => {ms932Encoder.encode("\u99A6")}, {name:"Error",message:"EncodingError U+99A6"});
assert.throws(() => {ms932Encoder.encode("\u99A7")}, {name:"Error",message:"EncodingError U+99A7"});
r = r && ([...ms932Encoder.encode("馨")].join(",") === "138,93"); // U+99A8
assert.throws(() => {ms932Encoder.encode("\u99A9")}, {name:"Error",message:"EncodingError U+99A9"});
assert.throws(() => {ms932Encoder.encode("\u99AA")}, {name:"Error",message:"EncodingError U+99AA"});
assert.throws(() => {ms932Encoder.encode("\u99AB")}, {name:"Error",message:"EncodingError U+99AB"});
r = r && ([...ms932Encoder.encode("馬馭馮")].join(",") === "148,110,233,102,233,103"); // U+99AC
assert.throws(() => {ms932Encoder.encode("\u99AF")}, {name:"Error",message:"EncodingError U+99AF"});
assert.throws(() => {ms932Encoder.encode("\u99B0")}, {name:"Error",message:"EncodingError U+99B0"});
assert.throws(() => {ms932Encoder.encode("\u99B1")}, {name:"Error",message:"EncodingError U+99B1"});
assert.throws(() => {ms932Encoder.encode("\u99B2")}, {name:"Error",message:"EncodingError U+99B2"});
r = r && ([...ms932Encoder.encode("馳馴")].join(",") === "146,121,147,233"); // U+99B3
assert.throws(() => {ms932Encoder.encode("\u99B5")}, {name:"Error",message:"EncodingError U+99B5"});
assert.throws(() => {ms932Encoder.encode("\u99B6")}, {name:"Error",message:"EncodingError U+99B6"});
assert.throws(() => {ms932Encoder.encode("\u99B7")}, {name:"Error",message:"EncodingError U+99B7"});
assert.throws(() => {ms932Encoder.encode("\u99B8")}, {name:"Error",message:"EncodingError U+99B8"});
assert.throws(() => {ms932Encoder.encode("\u99B9")}, {name:"Error",message:"EncodingError U+99B9"});
assert.throws(() => {ms932Encoder.encode("\u99BA")}, {name:"Error",message:"EncodingError U+99BA"});
assert.throws(() => {ms932Encoder.encode("\u99BB")}, {name:"Error",message:"EncodingError U+99BB"});
r = r && ([...ms932Encoder.encode("馼")].join(",") === "233,104"); // U+99BC
assert.throws(() => {ms932Encoder.encode("\u99BD")}, {name:"Error",message:"EncodingError U+99BD"});
assert.throws(() => {ms932Encoder.encode("\u99BE")}, {name:"Error",message:"EncodingError U+99BE"});
assert.throws(() => {ms932Encoder.encode("\u99BF")}, {name:"Error",message:"EncodingError U+99BF"});
assert.throws(() => {ms932Encoder.encode("\u99C0")}, {name:"Error",message:"EncodingError U+99C0"});
r = r && ([...ms932Encoder.encode("駁")].join(",") === "148,157"); // U+99C1
assert.throws(() => {ms932Encoder.encode("\u99C2")}, {name:"Error",message:"EncodingError U+99C2"});
assert.throws(() => {ms932Encoder.encode("\u99C3")}, {name:"Error",message:"EncodingError U+99C3"});
r = r && ([...ms932Encoder.encode("駄駅駆")].join(",") === "145,202,137,119,139,236"); // U+99C4
assert.throws(() => {ms932Encoder.encode("\u99C7")}, {name:"Error",message:"EncodingError U+99C7"});
r = r && ([...ms932Encoder.encode("駈")].join(",") === "139,237"); // U+99C8
assert.throws(() => {ms932Encoder.encode("\u99C9")}, {name:"Error",message:"EncodingError U+99C9"});
assert.throws(() => {ms932Encoder.encode("\u99CA")}, {name:"Error",message:"EncodingError U+99CA"});
assert.throws(() => {ms932Encoder.encode("\u99CB")}, {name:"Error",message:"EncodingError U+99CB"});
assert.throws(() => {ms932Encoder.encode("\u99CC")}, {name:"Error",message:"EncodingError U+99CC"});
assert.throws(() => {ms932Encoder.encode("\u99CD")}, {name:"Error",message:"EncodingError U+99CD"});
assert.throws(() => {ms932Encoder.encode("\u99CE")}, {name:"Error",message:"EncodingError U+99CE"});
assert.throws(() => {ms932Encoder.encode("\u99CF")}, {name:"Error",message:"EncodingError U+99CF"});
r = r && ([...ms932Encoder.encode("駐駑駒")].join(",") === "146,147,233,109,139,238"); // U+99D0
assert.throws(() => {ms932Encoder.encode("\u99D3")}, {name:"Error",message:"EncodingError U+99D3"});
assert.throws(() => {ms932Encoder.encode("\u99D4")}, {name:"Error",message:"EncodingError U+99D4"});
r = r && ([...ms932Encoder.encode("駕")].join(",") === "137,237"); // U+99D5
assert.throws(() => {ms932Encoder.encode("\u99D6")}, {name:"Error",message:"EncodingError U+99D6"});
assert.throws(() => {ms932Encoder.encode("\u99D7")}, {name:"Error",message:"EncodingError U+99D7"});
r = r && ([...ms932Encoder.encode("駘")].join(",") === "233,108"); // U+99D8
assert.throws(() => {ms932Encoder.encode("\u99D9")}, {name:"Error",message:"EncodingError U+99D9"});
assert.throws(() => {ms932Encoder.encode("\u99DA")}, {name:"Error",message:"EncodingError U+99DA"});
r = r && ([...ms932Encoder.encode("駛")].join(",") === "233,106"); // U+99DB
assert.throws(() => {ms932Encoder.encode("\u99DC")}, {name:"Error",message:"EncodingError U+99DC"});
r = r && ([...ms932Encoder.encode("駝")].join(",") === "233,107"); // U+99DD
assert.throws(() => {ms932Encoder.encode("\u99DE")}, {name:"Error",message:"EncodingError U+99DE"});
r = r && ([...ms932Encoder.encode("駟")].join(",") === "233,105"); // U+99DF
assert.throws(() => {ms932Encoder.encode("\u99E0")}, {name:"Error",message:"EncodingError U+99E0"});
assert.throws(() => {ms932Encoder.encode("\u99E1")}, {name:"Error",message:"EncodingError U+99E1"});
r = r && ([...ms932Encoder.encode("駢")].join(",") === "233,119"); // U+99E2
assert.throws(() => {ms932Encoder.encode("\u99E3")}, {name:"Error",message:"EncodingError U+99E3"});
assert.throws(() => {ms932Encoder.encode("\u99E4")}, {name:"Error",message:"EncodingError U+99E4"});
assert.throws(() => {ms932Encoder.encode("\u99E5")}, {name:"Error",message:"EncodingError U+99E5"});
assert.throws(() => {ms932Encoder.encode("\u99E6")}, {name:"Error",message:"EncodingError U+99E6"});
assert.throws(() => {ms932Encoder.encode("\u99E7")}, {name:"Error",message:"EncodingError U+99E7"});
assert.throws(() => {ms932Encoder.encode("\u99E8")}, {name:"Error",message:"EncodingError U+99E8"});
assert.throws(() => {ms932Encoder.encode("\u99E9")}, {name:"Error",message:"EncodingError U+99E9"});
assert.throws(() => {ms932Encoder.encode("\u99EA")}, {name:"Error",message:"EncodingError U+99EA"});
assert.throws(() => {ms932Encoder.encode("\u99EB")}, {name:"Error",message:"EncodingError U+99EB"});
assert.throws(() => {ms932Encoder.encode("\u99EC")}, {name:"Error",message:"EncodingError U+99EC"});
r = r && ([...ms932Encoder.encode("駭駮")].join(",") === "233,110,233,111"); // U+99ED
assert.throws(() => {ms932Encoder.encode("\u99EF")}, {name:"Error",message:"EncodingError U+99EF"});
assert.throws(() => {ms932Encoder.encode("\u99F0")}, {name:"Error",message:"EncodingError U+99F0"});
r = r && ([...ms932Encoder.encode("駱駲")].join(",") === "233,112,233,113"); // U+99F1
assert.throws(() => {ms932Encoder.encode("\u99F3")}, {name:"Error",message:"EncodingError U+99F3"});
assert.throws(() => {ms932Encoder.encode("\u99F4")}, {name:"Error",message:"EncodingError U+99F4"});
assert.throws(() => {ms932Encoder.encode("\u99F5")}, {name:"Error",message:"EncodingError U+99F5"});
assert.throws(() => {ms932Encoder.encode("\u99F6")}, {name:"Error",message:"EncodingError U+99F6"});
assert.throws(() => {ms932Encoder.encode("\u99F7")}, {name:"Error",message:"EncodingError U+99F7"});
r = r && ([...ms932Encoder.encode("駸")].join(",") === "233,115"); // U+99F8
assert.throws(() => {ms932Encoder.encode("\u99F9")}, {name:"Error",message:"EncodingError U+99F9"});
assert.throws(() => {ms932Encoder.encode("\u99FA")}, {name:"Error",message:"EncodingError U+99FA"});
r = r && ([...ms932Encoder.encode("駻")].join(",") === "233,114"); // U+99FB
assert.throws(() => {ms932Encoder.encode("\u99FC")}, {name:"Error",message:"EncodingError U+99FC"});
assert.throws(() => {ms932Encoder.encode("\u99FD")}, {name:"Error",message:"EncodingError U+99FD"});
assert.throws(() => {ms932Encoder.encode("\u99FE")}, {name:"Error",message:"EncodingError U+99FE"});
r = r && ([...ms932Encoder.encode("駿")].join(",") === "143,120"); // U+99FF
assert.throws(() => {ms932Encoder.encode("\u9A00")}, {name:"Error",message:"EncodingError U+9A00"});
r = r && ([...ms932Encoder.encode("騁")].join(",") === "233,116"); // U+9A01
assert.throws(() => {ms932Encoder.encode("\u9A02")}, {name:"Error",message:"EncodingError U+9A02"});
assert.throws(() => {ms932Encoder.encode("\u9A03")}, {name:"Error",message:"EncodingError U+9A03"});
assert.throws(() => {ms932Encoder.encode("\u9A04")}, {name:"Error",message:"EncodingError U+9A04"});
r = r && ([...ms932Encoder.encode("騅")].join(",") === "233,118"); // U+9A05
assert.throws(() => {ms932Encoder.encode("\u9A06")}, {name:"Error",message:"EncodingError U+9A06"});
assert.throws(() => {ms932Encoder.encode("\u9A07")}, {name:"Error",message:"EncodingError U+9A07"});
assert.throws(() => {ms932Encoder.encode("\u9A08")}, {name:"Error",message:"EncodingError U+9A08"});
assert.throws(() => {ms932Encoder.encode("\u9A09")}, {name:"Error",message:"EncodingError U+9A09"});
assert.throws(() => {ms932Encoder.encode("\u9A0A")}, {name:"Error",message:"EncodingError U+9A0A"});
assert.throws(() => {ms932Encoder.encode("\u9A0B")}, {name:"Error",message:"EncodingError U+9A0B"});
assert.throws(() => {ms932Encoder.encode("\u9A0C")}, {name:"Error",message:"EncodingError U+9A0C"});
assert.throws(() => {ms932Encoder.encode("\u9A0D")}, {name:"Error",message:"EncodingError U+9A0D"});
r = r && ([...ms932Encoder.encode("騎騏")].join(",") === "139,82,233,117"); // U+9A0E
assert.throws(() => {ms932Encoder.encode("\u9A10")}, {name:"Error",message:"EncodingError U+9A10"});
assert.throws(() => {ms932Encoder.encode("\u9A11")}, {name:"Error",message:"EncodingError U+9A11"});
r = r && ([...ms932Encoder.encode("騒験")].join(",") === "145,155,140,177"); // U+9A12
assert.throws(() => {ms932Encoder.encode("\u9A14")}, {name:"Error",message:"EncodingError U+9A14"});
assert.throws(() => {ms932Encoder.encode("\u9A15")}, {name:"Error",message:"EncodingError U+9A15"});
assert.throws(() => {ms932Encoder.encode("\u9A16")}, {name:"Error",message:"EncodingError U+9A16"});
assert.throws(() => {ms932Encoder.encode("\u9A17")}, {name:"Error",message:"EncodingError U+9A17"});
assert.throws(() => {ms932Encoder.encode("\u9A18")}, {name:"Error",message:"EncodingError U+9A18"});
r = r && ([...ms932Encoder.encode("騙")].join(",") === "233,120"); // U+9A19
assert.throws(() => {ms932Encoder.encode("\u9A1A")}, {name:"Error",message:"EncodingError U+9A1A"});
assert.throws(() => {ms932Encoder.encode("\u9A1B")}, {name:"Error",message:"EncodingError U+9A1B"});
assert.throws(() => {ms932Encoder.encode("\u9A1C")}, {name:"Error",message:"EncodingError U+9A1C"});
assert.throws(() => {ms932Encoder.encode("\u9A1D")}, {name:"Error",message:"EncodingError U+9A1D"});
assert.throws(() => {ms932Encoder.encode("\u9A1E")}, {name:"Error",message:"EncodingError U+9A1E"});
assert.throws(() => {ms932Encoder.encode("\u9A1F")}, {name:"Error",message:"EncodingError U+9A1F"});
assert.throws(() => {ms932Encoder.encode("\u9A20")}, {name:"Error",message:"EncodingError U+9A20"});
assert.throws(() => {ms932Encoder.encode("\u9A21")}, {name:"Error",message:"EncodingError U+9A21"});
assert.throws(() => {ms932Encoder.encode("\u9A22")}, {name:"Error",message:"EncodingError U+9A22"});
assert.throws(() => {ms932Encoder.encode("\u9A23")}, {name:"Error",message:"EncodingError U+9A23"});
assert.throws(() => {ms932Encoder.encode("\u9A24")}, {name:"Error",message:"EncodingError U+9A24"});
assert.throws(() => {ms932Encoder.encode("\u9A25")}, {name:"Error",message:"EncodingError U+9A25"});
assert.throws(() => {ms932Encoder.encode("\u9A26")}, {name:"Error",message:"EncodingError U+9A26"});
assert.throws(() => {ms932Encoder.encode("\u9A27")}, {name:"Error",message:"EncodingError U+9A27"});
r = r && ([...ms932Encoder.encode("騨")].join(",") === "145,203"); // U+9A28
assert.throws(() => {ms932Encoder.encode("\u9A29")}, {name:"Error",message:"EncodingError U+9A29"});
assert.throws(() => {ms932Encoder.encode("\u9A2A")}, {name:"Error",message:"EncodingError U+9A2A"});
r = r && ([...ms932Encoder.encode("騫")].join(",") === "233,121"); // U+9A2B
assert.throws(() => {ms932Encoder.encode("\u9A2C")}, {name:"Error",message:"EncodingError U+9A2C"});
assert.throws(() => {ms932Encoder.encode("\u9A2D")}, {name:"Error",message:"EncodingError U+9A2D"});
assert.throws(() => {ms932Encoder.encode("\u9A2E")}, {name:"Error",message:"EncodingError U+9A2E"});
assert.throws(() => {ms932Encoder.encode("\u9A2F")}, {name:"Error",message:"EncodingError U+9A2F"});
r = r && ([...ms932Encoder.encode("騰")].join(",") === "147,171"); // U+9A30
assert.throws(() => {ms932Encoder.encode("\u9A31")}, {name:"Error",message:"EncodingError U+9A31"});
assert.throws(() => {ms932Encoder.encode("\u9A32")}, {name:"Error",message:"EncodingError U+9A32"});
assert.throws(() => {ms932Encoder.encode("\u9A33")}, {name:"Error",message:"EncodingError U+9A33"});
assert.throws(() => {ms932Encoder.encode("\u9A34")}, {name:"Error",message:"EncodingError U+9A34"});
assert.throws(() => {ms932Encoder.encode("\u9A35")}, {name:"Error",message:"EncodingError U+9A35"});
assert.throws(() => {ms932Encoder.encode("\u9A36")}, {name:"Error",message:"EncodingError U+9A36"});
r = r && ([...ms932Encoder.encode("騷")].join(",") === "233,122"); // U+9A37
assert.throws(() => {ms932Encoder.encode("\u9A38")}, {name:"Error",message:"EncodingError U+9A38"});
assert.throws(() => {ms932Encoder.encode("\u9A39")}, {name:"Error",message:"EncodingError U+9A39"});
assert.throws(() => {ms932Encoder.encode("\u9A3A")}, {name:"Error",message:"EncodingError U+9A3A"});
assert.throws(() => {ms932Encoder.encode("\u9A3B")}, {name:"Error",message:"EncodingError U+9A3B"});
assert.throws(() => {ms932Encoder.encode("\u9A3C")}, {name:"Error",message:"EncodingError U+9A3C"});
assert.throws(() => {ms932Encoder.encode("\u9A3D")}, {name:"Error",message:"EncodingError U+9A3D"});
r = r && ([...ms932Encoder.encode("騾")].join(",") === "233,128"); // U+9A3E
assert.throws(() => {ms932Encoder.encode("\u9A3F")}, {name:"Error",message:"EncodingError U+9A3F"});
r = r && ([...ms932Encoder.encode("驀")].join(",") === "233,125"); // U+9A40
assert.throws(() => {ms932Encoder.encode("\u9A41")}, {name:"Error",message:"EncodingError U+9A41"});
r = r && ([...ms932Encoder.encode("驂驃")].join(",") === "233,124,233,126"); // U+9A42
assert.throws(() => {ms932Encoder.encode("\u9A44")}, {name:"Error",message:"EncodingError U+9A44"});
r = r && ([...ms932Encoder.encode("驅")].join(",") === "233,123"); // U+9A45
assert.throws(() => {ms932Encoder.encode("\u9A46")}, {name:"Error",message:"EncodingError U+9A46"});
assert.throws(() => {ms932Encoder.encode("\u9A47")}, {name:"Error",message:"EncodingError U+9A47"});
assert.throws(() => {ms932Encoder.encode("\u9A48")}, {name:"Error",message:"EncodingError U+9A48"});
assert.throws(() => {ms932Encoder.encode("\u9A49")}, {name:"Error",message:"EncodingError U+9A49"});
assert.throws(() => {ms932Encoder.encode("\u9A4A")}, {name:"Error",message:"EncodingError U+9A4A"});
assert.throws(() => {ms932Encoder.encode("\u9A4B")}, {name:"Error",message:"EncodingError U+9A4B"});
assert.throws(() => {ms932Encoder.encode("\u9A4C")}, {name:"Error",message:"EncodingError U+9A4C"});
r = r && ([...ms932Encoder.encode("驍驎")].join(",") === "233,130,251,251"); // U+9A4D
assert.throws(() => {ms932Encoder.encode("\u9A4F")}, {name:"Error",message:"EncodingError U+9A4F"});
assert.throws(() => {ms932Encoder.encode("\u9A50")}, {name:"Error",message:"EncodingError U+9A50"});
assert.throws(() => {ms932Encoder.encode("\u9A51")}, {name:"Error",message:"EncodingError U+9A51"});
assert.throws(() => {ms932Encoder.encode("\u9A52")}, {name:"Error",message:"EncodingError U+9A52"});
assert.throws(() => {ms932Encoder.encode("\u9A53")}, {name:"Error",message:"EncodingError U+9A53"});
assert.throws(() => {ms932Encoder.encode("\u9A54")}, {name:"Error",message:"EncodingError U+9A54"});
r = r && ([...ms932Encoder.encode("驕")].join(",") === "233,129"); // U+9A55
assert.throws(() => {ms932Encoder.encode("\u9A56")}, {name:"Error",message:"EncodingError U+9A56"});
r = r && ([...ms932Encoder.encode("驗")].join(",") === "233,132"); // U+9A57
assert.throws(() => {ms932Encoder.encode("\u9A58")}, {name:"Error",message:"EncodingError U+9A58"});
assert.throws(() => {ms932Encoder.encode("\u9A59")}, {name:"Error",message:"EncodingError U+9A59"});
r = r && ([...ms932Encoder.encode("驚驛")].join(",") === "139,193,233,131"); // U+9A5A
assert.throws(() => {ms932Encoder.encode("\u9A5C")}, {name:"Error",message:"EncodingError U+9A5C"});
assert.throws(() => {ms932Encoder.encode("\u9A5D")}, {name:"Error",message:"EncodingError U+9A5D"});
assert.throws(() => {ms932Encoder.encode("\u9A5E")}, {name:"Error",message:"EncodingError U+9A5E"});
r = r && ([...ms932Encoder.encode("驟")].join(",") === "233,133"); // U+9A5F
assert.throws(() => {ms932Encoder.encode("\u9A60")}, {name:"Error",message:"EncodingError U+9A60"});
assert.throws(() => {ms932Encoder.encode("\u9A61")}, {name:"Error",message:"EncodingError U+9A61"});
r = r && ([...ms932Encoder.encode("驢")].join(",") === "233,134"); // U+9A62
assert.throws(() => {ms932Encoder.encode("\u9A63")}, {name:"Error",message:"EncodingError U+9A63"});
r = r && ([...ms932Encoder.encode("驤驥")].join(",") === "233,136,233,135"); // U+9A64
assert.throws(() => {ms932Encoder.encode("\u9A66")}, {name:"Error",message:"EncodingError U+9A66"});
assert.throws(() => {ms932Encoder.encode("\u9A67")}, {name:"Error",message:"EncodingError U+9A67"});
assert.throws(() => {ms932Encoder.encode("\u9A68")}, {name:"Error",message:"EncodingError U+9A68"});
r = r && ([...ms932Encoder.encode("驩驪驫")].join(",") === "233,137,233,139,233,138"); // U+9A69
assert.throws(() => {ms932Encoder.encode("\u9A6C")}, {name:"Error",message:"EncodingError U+9A6C"});
assert.throws(() => {ms932Encoder.encode("\u9A6D")}, {name:"Error",message:"EncodingError U+9A6D"});
assert.throws(() => {ms932Encoder.encode("\u9A6E")}, {name:"Error",message:"EncodingError U+9A6E"});
assert.throws(() => {ms932Encoder.encode("\u9A6F")}, {name:"Error",message:"EncodingError U+9A6F"});
assert.throws(() => {ms932Encoder.encode("\u9A70")}, {name:"Error",message:"EncodingError U+9A70"});
assert.throws(() => {ms932Encoder.encode("\u9A71")}, {name:"Error",message:"EncodingError U+9A71"});
assert.throws(() => {ms932Encoder.encode("\u9A72")}, {name:"Error",message:"EncodingError U+9A72"});
assert.throws(() => {ms932Encoder.encode("\u9A73")}, {name:"Error",message:"EncodingError U+9A73"});
assert.throws(() => {ms932Encoder.encode("\u9A74")}, {name:"Error",message:"EncodingError U+9A74"});
assert.throws(() => {ms932Encoder.encode("\u9A75")}, {name:"Error",message:"EncodingError U+9A75"});
assert.throws(() => {ms932Encoder.encode("\u9A76")}, {name:"Error",message:"EncodingError U+9A76"});
assert.throws(() => {ms932Encoder.encode("\u9A77")}, {name:"Error",message:"EncodingError U+9A77"});
assert.throws(() => {ms932Encoder.encode("\u9A78")}, {name:"Error",message:"EncodingError U+9A78"});
assert.throws(() => {ms932Encoder.encode("\u9A79")}, {name:"Error",message:"EncodingError U+9A79"});
assert.throws(() => {ms932Encoder.encode("\u9A7A")}, {name:"Error",message:"EncodingError U+9A7A"});
assert.throws(() => {ms932Encoder.encode("\u9A7B")}, {name:"Error",message:"EncodingError U+9A7B"});
assert.throws(() => {ms932Encoder.encode("\u9A7C")}, {name:"Error",message:"EncodingError U+9A7C"});
assert.throws(() => {ms932Encoder.encode("\u9A7D")}, {name:"Error",message:"EncodingError U+9A7D"});
assert.throws(() => {ms932Encoder.encode("\u9A7E")}, {name:"Error",message:"EncodingError U+9A7E"});
assert.throws(() => {ms932Encoder.encode("\u9A7F")}, {name:"Error",message:"EncodingError U+9A7F"});
assert.throws(() => {ms932Encoder.encode("\u9A80")}, {name:"Error",message:"EncodingError U+9A80"});
assert.throws(() => {ms932Encoder.encode("\u9A81")}, {name:"Error",message:"EncodingError U+9A81"});
assert.throws(() => {ms932Encoder.encode("\u9A82")}, {name:"Error",message:"EncodingError U+9A82"});
assert.throws(() => {ms932Encoder.encode("\u9A83")}, {name:"Error",message:"EncodingError U+9A83"});
assert.throws(() => {ms932Encoder.encode("\u9A84")}, {name:"Error",message:"EncodingError U+9A84"});
assert.throws(() => {ms932Encoder.encode("\u9A85")}, {name:"Error",message:"EncodingError U+9A85"});
assert.throws(() => {ms932Encoder.encode("\u9A86")}, {name:"Error",message:"EncodingError U+9A86"});
assert.throws(() => {ms932Encoder.encode("\u9A87")}, {name:"Error",message:"EncodingError U+9A87"});
assert.throws(() => {ms932Encoder.encode("\u9A88")}, {name:"Error",message:"EncodingError U+9A88"});
assert.throws(() => {ms932Encoder.encode("\u9A89")}, {name:"Error",message:"EncodingError U+9A89"});
assert.throws(() => {ms932Encoder.encode("\u9A8A")}, {name:"Error",message:"EncodingError U+9A8A"});
assert.throws(() => {ms932Encoder.encode("\u9A8B")}, {name:"Error",message:"EncodingError U+9A8B"});
assert.throws(() => {ms932Encoder.encode("\u9A8C")}, {name:"Error",message:"EncodingError U+9A8C"});
assert.throws(() => {ms932Encoder.encode("\u9A8D")}, {name:"Error",message:"EncodingError U+9A8D"});
assert.throws(() => {ms932Encoder.encode("\u9A8E")}, {name:"Error",message:"EncodingError U+9A8E"});
assert.throws(() => {ms932Encoder.encode("\u9A8F")}, {name:"Error",message:"EncodingError U+9A8F"});
assert.throws(() => {ms932Encoder.encode("\u9A90")}, {name:"Error",message:"EncodingError U+9A90"});
assert.throws(() => {ms932Encoder.encode("\u9A91")}, {name:"Error",message:"EncodingError U+9A91"});
assert.throws(() => {ms932Encoder.encode("\u9A92")}, {name:"Error",message:"EncodingError U+9A92"});
assert.throws(() => {ms932Encoder.encode("\u9A93")}, {name:"Error",message:"EncodingError U+9A93"});
assert.throws(() => {ms932Encoder.encode("\u9A94")}, {name:"Error",message:"EncodingError U+9A94"});
assert.throws(() => {ms932Encoder.encode("\u9A95")}, {name:"Error",message:"EncodingError U+9A95"});
assert.throws(() => {ms932Encoder.encode("\u9A96")}, {name:"Error",message:"EncodingError U+9A96"});
assert.throws(() => {ms932Encoder.encode("\u9A97")}, {name:"Error",message:"EncodingError U+9A97"});
assert.throws(() => {ms932Encoder.encode("\u9A98")}, {name:"Error",message:"EncodingError U+9A98"});
assert.throws(() => {ms932Encoder.encode("\u9A99")}, {name:"Error",message:"EncodingError U+9A99"});
assert.throws(() => {ms932Encoder.encode("\u9A9A")}, {name:"Error",message:"EncodingError U+9A9A"});
assert.throws(() => {ms932Encoder.encode("\u9A9B")}, {name:"Error",message:"EncodingError U+9A9B"});
assert.throws(() => {ms932Encoder.encode("\u9A9C")}, {name:"Error",message:"EncodingError U+9A9C"});
assert.throws(() => {ms932Encoder.encode("\u9A9D")}, {name:"Error",message:"EncodingError U+9A9D"});
assert.throws(() => {ms932Encoder.encode("\u9A9E")}, {name:"Error",message:"EncodingError U+9A9E"});
assert.throws(() => {ms932Encoder.encode("\u9A9F")}, {name:"Error",message:"EncodingError U+9A9F"});
assert.throws(() => {ms932Encoder.encode("\u9AA0")}, {name:"Error",message:"EncodingError U+9AA0"});
assert.throws(() => {ms932Encoder.encode("\u9AA1")}, {name:"Error",message:"EncodingError U+9AA1"});
assert.throws(() => {ms932Encoder.encode("\u9AA2")}, {name:"Error",message:"EncodingError U+9AA2"});
assert.throws(() => {ms932Encoder.encode("\u9AA3")}, {name:"Error",message:"EncodingError U+9AA3"});
assert.throws(() => {ms932Encoder.encode("\u9AA4")}, {name:"Error",message:"EncodingError U+9AA4"});
assert.throws(() => {ms932Encoder.encode("\u9AA5")}, {name:"Error",message:"EncodingError U+9AA5"});
assert.throws(() => {ms932Encoder.encode("\u9AA6")}, {name:"Error",message:"EncodingError U+9AA6"});
assert.throws(() => {ms932Encoder.encode("\u9AA7")}, {name:"Error",message:"EncodingError U+9AA7"});
r = r && ([...ms932Encoder.encode("骨")].join(",") === "141,156"); // U+9AA8
assert.throws(() => {ms932Encoder.encode("\u9AA9")}, {name:"Error",message:"EncodingError U+9AA9"});
assert.throws(() => {ms932Encoder.encode("\u9AAA")}, {name:"Error",message:"EncodingError U+9AAA"});
assert.throws(() => {ms932Encoder.encode("\u9AAB")}, {name:"Error",message:"EncodingError U+9AAB"});
assert.throws(() => {ms932Encoder.encode("\u9AAC")}, {name:"Error",message:"EncodingError U+9AAC"});
r = r && ([...ms932Encoder.encode("骭")].join(",") === "233,140"); // U+9AAD
assert.throws(() => {ms932Encoder.encode("\u9AAE")}, {name:"Error",message:"EncodingError U+9AAE"});
assert.throws(() => {ms932Encoder.encode("\u9AAF")}, {name:"Error",message:"EncodingError U+9AAF"});
r = r && ([...ms932Encoder.encode("骰")].join(",") === "233,141"); // U+9AB0
assert.throws(() => {ms932Encoder.encode("\u9AB1")}, {name:"Error",message:"EncodingError U+9AB1"});
assert.throws(() => {ms932Encoder.encode("\u9AB2")}, {name:"Error",message:"EncodingError U+9AB2"});
assert.throws(() => {ms932Encoder.encode("\u9AB3")}, {name:"Error",message:"EncodingError U+9AB3"});
assert.throws(() => {ms932Encoder.encode("\u9AB4")}, {name:"Error",message:"EncodingError U+9AB4"});
assert.throws(() => {ms932Encoder.encode("\u9AB5")}, {name:"Error",message:"EncodingError U+9AB5"});
assert.throws(() => {ms932Encoder.encode("\u9AB6")}, {name:"Error",message:"EncodingError U+9AB6"});
assert.throws(() => {ms932Encoder.encode("\u9AB7")}, {name:"Error",message:"EncodingError U+9AB7"});
r = r && ([...ms932Encoder.encode("骸")].join(",") === "138,91"); // U+9AB8
assert.throws(() => {ms932Encoder.encode("\u9AB9")}, {name:"Error",message:"EncodingError U+9AB9"});
assert.throws(() => {ms932Encoder.encode("\u9ABA")}, {name:"Error",message:"EncodingError U+9ABA"});
assert.throws(() => {ms932Encoder.encode("\u9ABB")}, {name:"Error",message:"EncodingError U+9ABB"});
r = r && ([...ms932Encoder.encode("骼")].join(",") === "233,142"); // U+9ABC
assert.throws(() => {ms932Encoder.encode("\u9ABD")}, {name:"Error",message:"EncodingError U+9ABD"});
assert.throws(() => {ms932Encoder.encode("\u9ABE")}, {name:"Error",message:"EncodingError U+9ABE"});
assert.throws(() => {ms932Encoder.encode("\u9ABF")}, {name:"Error",message:"EncodingError U+9ABF"});
r = r && ([...ms932Encoder.encode("髀")].join(",") === "233,143"); // U+9AC0
assert.throws(() => {ms932Encoder.encode("\u9AC1")}, {name:"Error",message:"EncodingError U+9AC1"});
assert.throws(() => {ms932Encoder.encode("\u9AC2")}, {name:"Error",message:"EncodingError U+9AC2"});
assert.throws(() => {ms932Encoder.encode("\u9AC3")}, {name:"Error",message:"EncodingError U+9AC3"});
r = r && ([...ms932Encoder.encode("髄")].join(",") === "144,145"); // U+9AC4
assert.throws(() => {ms932Encoder.encode("\u9AC5")}, {name:"Error",message:"EncodingError U+9AC5"});
assert.throws(() => {ms932Encoder.encode("\u9AC6")}, {name:"Error",message:"EncodingError U+9AC6"});
assert.throws(() => {ms932Encoder.encode("\u9AC7")}, {name:"Error",message:"EncodingError U+9AC7"});
assert.throws(() => {ms932Encoder.encode("\u9AC8")}, {name:"Error",message:"EncodingError U+9AC8"});
assert.throws(() => {ms932Encoder.encode("\u9AC9")}, {name:"Error",message:"EncodingError U+9AC9"});
assert.throws(() => {ms932Encoder.encode("\u9ACA")}, {name:"Error",message:"EncodingError U+9ACA"});
assert.throws(() => {ms932Encoder.encode("\u9ACB")}, {name:"Error",message:"EncodingError U+9ACB"});
assert.throws(() => {ms932Encoder.encode("\u9ACC")}, {name:"Error",message:"EncodingError U+9ACC"});
assert.throws(() => {ms932Encoder.encode("\u9ACD")}, {name:"Error",message:"EncodingError U+9ACD"});
assert.throws(() => {ms932Encoder.encode("\u9ACE")}, {name:"Error",message:"EncodingError U+9ACE"});
r = r && ([...ms932Encoder.encode("髏")].join(",") === "233,144"); // U+9ACF
assert.throws(() => {ms932Encoder.encode("\u9AD0")}, {name:"Error",message:"EncodingError U+9AD0"});
r = r && ([...ms932Encoder.encode("髑")].join(",") === "233,145"); // U+9AD1
assert.throws(() => {ms932Encoder.encode("\u9AD2")}, {name:"Error",message:"EncodingError U+9AD2"});
r = r && ([...ms932Encoder.encode("髓體")].join(",") === "233,146,233,147"); // U+9AD3
assert.throws(() => {ms932Encoder.encode("\u9AD5")}, {name:"Error",message:"EncodingError U+9AD5"});
assert.throws(() => {ms932Encoder.encode("\u9AD6")}, {name:"Error",message:"EncodingError U+9AD6"});
assert.throws(() => {ms932Encoder.encode("\u9AD7")}, {name:"Error",message:"EncodingError U+9AD7"});
r = r && ([...ms932Encoder.encode("高髙")].join(",") === "141,130,251,252"); // U+9AD8
assert.throws(() => {ms932Encoder.encode("\u9ADA")}, {name:"Error",message:"EncodingError U+9ADA"});
assert.throws(() => {ms932Encoder.encode("\u9ADB")}, {name:"Error",message:"EncodingError U+9ADB"});
r = r && ([...ms932Encoder.encode("髜")].join(",") === "252,64"); // U+9ADC
assert.throws(() => {ms932Encoder.encode("\u9ADD")}, {name:"Error",message:"EncodingError U+9ADD"});
r = r && ([...ms932Encoder.encode("髞髟")].join(",") === "233,148,233,149"); // U+9ADE
assert.throws(() => {ms932Encoder.encode("\u9AE0")}, {name:"Error",message:"EncodingError U+9AE0"});
assert.throws(() => {ms932Encoder.encode("\u9AE1")}, {name:"Error",message:"EncodingError U+9AE1"});
r = r && ([...ms932Encoder.encode("髢髣")].join(",") === "233,150,233,151"); // U+9AE2
assert.throws(() => {ms932Encoder.encode("\u9AE4")}, {name:"Error",message:"EncodingError U+9AE4"});
assert.throws(() => {ms932Encoder.encode("\u9AE5")}, {name:"Error",message:"EncodingError U+9AE5"});
r = r && ([...ms932Encoder.encode("髦")].join(",") === "233,152"); // U+9AE6
assert.throws(() => {ms932Encoder.encode("\u9AE7")}, {name:"Error",message:"EncodingError U+9AE7"});
assert.throws(() => {ms932Encoder.encode("\u9AE8")}, {name:"Error",message:"EncodingError U+9AE8"});
assert.throws(() => {ms932Encoder.encode("\u9AE9")}, {name:"Error",message:"EncodingError U+9AE9"});
r = r && ([...ms932Encoder.encode("髪髫")].join(",") === "148,175,233,154"); // U+9AEA
assert.throws(() => {ms932Encoder.encode("\u9AEC")}, {name:"Error",message:"EncodingError U+9AEC"});
r = r && ([...ms932Encoder.encode("髭髮髯")].join(",") === "149,69,233,155,233,153"); // U+9AED
assert.throws(() => {ms932Encoder.encode("\u9AF0")}, {name:"Error",message:"EncodingError U+9AF0"});
r = r && ([...ms932Encoder.encode("髱")].join(",") === "233,157"); // U+9AF1
assert.throws(() => {ms932Encoder.encode("\u9AF2")}, {name:"Error",message:"EncodingError U+9AF2"});
assert.throws(() => {ms932Encoder.encode("\u9AF3")}, {name:"Error",message:"EncodingError U+9AF3"});
r = r && ([...ms932Encoder.encode("髴")].join(",") === "233,156"); // U+9AF4
assert.throws(() => {ms932Encoder.encode("\u9AF5")}, {name:"Error",message:"EncodingError U+9AF5"});
assert.throws(() => {ms932Encoder.encode("\u9AF6")}, {name:"Error",message:"EncodingError U+9AF6"});
r = r && ([...ms932Encoder.encode("髷")].join(",") === "233,158"); // U+9AF7
assert.throws(() => {ms932Encoder.encode("\u9AF8")}, {name:"Error",message:"EncodingError U+9AF8"});
assert.throws(() => {ms932Encoder.encode("\u9AF9")}, {name:"Error",message:"EncodingError U+9AF9"});
assert.throws(() => {ms932Encoder.encode("\u9AFA")}, {name:"Error",message:"EncodingError U+9AFA"});
r = r && ([...ms932Encoder.encode("髻")].join(",") === "233,159"); // U+9AFB
assert.throws(() => {ms932Encoder.encode("\u9AFC")}, {name:"Error",message:"EncodingError U+9AFC"});
assert.throws(() => {ms932Encoder.encode("\u9AFD")}, {name:"Error",message:"EncodingError U+9AFD"});
assert.throws(() => {ms932Encoder.encode("\u9AFE")}, {name:"Error",message:"EncodingError U+9AFE"});
assert.throws(() => {ms932Encoder.encode("\u9AFF")}, {name:"Error",message:"EncodingError U+9AFF"});
assert.throws(() => {ms932Encoder.encode("\u9B00")}, {name:"Error",message:"EncodingError U+9B00"});
assert.throws(() => {ms932Encoder.encode("\u9B01")}, {name:"Error",message:"EncodingError U+9B01"});
assert.throws(() => {ms932Encoder.encode("\u9B02")}, {name:"Error",message:"EncodingError U+9B02"});
assert.throws(() => {ms932Encoder.encode("\u9B03")}, {name:"Error",message:"EncodingError U+9B03"});
assert.throws(() => {ms932Encoder.encode("\u9B04")}, {name:"Error",message:"EncodingError U+9B04"});
assert.throws(() => {ms932Encoder.encode("\u9B05")}, {name:"Error",message:"EncodingError U+9B05"});
r = r && ([...ms932Encoder.encode("鬆")].join(",") === "233,160"); // U+9B06
assert.throws(() => {ms932Encoder.encode("\u9B07")}, {name:"Error",message:"EncodingError U+9B07"});
assert.throws(() => {ms932Encoder.encode("\u9B08")}, {name:"Error",message:"EncodingError U+9B08"});
assert.throws(() => {ms932Encoder.encode("\u9B09")}, {name:"Error",message:"EncodingError U+9B09"});
assert.throws(() => {ms932Encoder.encode("\u9B0A")}, {name:"Error",message:"EncodingError U+9B0A"});
assert.throws(() => {ms932Encoder.encode("\u9B0B")}, {name:"Error",message:"EncodingError U+9B0B"});
assert.throws(() => {ms932Encoder.encode("\u9B0C")}, {name:"Error",message:"EncodingError U+9B0C"});
assert.throws(() => {ms932Encoder.encode("\u9B0D")}, {name:"Error",message:"EncodingError U+9B0D"});
assert.throws(() => {ms932Encoder.encode("\u9B0E")}, {name:"Error",message:"EncodingError U+9B0E"});
assert.throws(() => {ms932Encoder.encode("\u9B0F")}, {name:"Error",message:"EncodingError U+9B0F"});
assert.throws(() => {ms932Encoder.encode("\u9B10")}, {name:"Error",message:"EncodingError U+9B10"});
assert.throws(() => {ms932Encoder.encode("\u9B11")}, {name:"Error",message:"EncodingError U+9B11"});
assert.throws(() => {ms932Encoder.encode("\u9B12")}, {name:"Error",message:"EncodingError U+9B12"});
assert.throws(() => {ms932Encoder.encode("\u9B13")}, {name:"Error",message:"EncodingError U+9B13"});
assert.throws(() => {ms932Encoder.encode("\u9B14")}, {name:"Error",message:"EncodingError U+9B14"});
assert.throws(() => {ms932Encoder.encode("\u9B15")}, {name:"Error",message:"EncodingError U+9B15"});
assert.throws(() => {ms932Encoder.encode("\u9B16")}, {name:"Error",message:"EncodingError U+9B16"});
assert.throws(() => {ms932Encoder.encode("\u9B17")}, {name:"Error",message:"EncodingError U+9B17"});
r = r && ([...ms932Encoder.encode("鬘")].join(",") === "233,161"); // U+9B18
assert.throws(() => {ms932Encoder.encode("\u9B19")}, {name:"Error",message:"EncodingError U+9B19"});
r = r && ([...ms932Encoder.encode("鬚")].join(",") === "233,162"); // U+9B1A
assert.throws(() => {ms932Encoder.encode("\u9B1B")}, {name:"Error",message:"EncodingError U+9B1B"});
assert.throws(() => {ms932Encoder.encode("\u9B1C")}, {name:"Error",message:"EncodingError U+9B1C"});
assert.throws(() => {ms932Encoder.encode("\u9B1D")}, {name:"Error",message:"EncodingError U+9B1D"});
assert.throws(() => {ms932Encoder.encode("\u9B1E")}, {name:"Error",message:"EncodingError U+9B1E"});
r = r && ([...ms932Encoder.encode("鬟")].join(",") === "233,163"); // U+9B1F
assert.throws(() => {ms932Encoder.encode("\u9B20")}, {name:"Error",message:"EncodingError U+9B20"});
assert.throws(() => {ms932Encoder.encode("\u9B21")}, {name:"Error",message:"EncodingError U+9B21"});
r = r && ([...ms932Encoder.encode("鬢鬣")].join(",") === "233,164,233,165"); // U+9B22
assert.throws(() => {ms932Encoder.encode("\u9B24")}, {name:"Error",message:"EncodingError U+9B24"});
r = r && ([...ms932Encoder.encode("鬥")].join(",") === "233,166"); // U+9B25
assert.throws(() => {ms932Encoder.encode("\u9B26")}, {name:"Error",message:"EncodingError U+9B26"});
r = r && ([...ms932Encoder.encode("鬧鬨鬩鬪")].join(",") === "233,167,233,168,233,169,233,170"); // U+9B27
assert.throws(() => {ms932Encoder.encode("\u9B2B")}, {name:"Error",message:"EncodingError U+9B2B"});
assert.throws(() => {ms932Encoder.encode("\u9B2C")}, {name:"Error",message:"EncodingError U+9B2C"});
assert.throws(() => {ms932Encoder.encode("\u9B2D")}, {name:"Error",message:"EncodingError U+9B2D"});
r = r && ([...ms932Encoder.encode("鬮鬯")].join(",") === "233,171,233,172"); // U+9B2E
assert.throws(() => {ms932Encoder.encode("\u9B30")}, {name:"Error",message:"EncodingError U+9B30"});
r = r && ([...ms932Encoder.encode("鬱鬲")].join(",") === "159,84,233,173"); // U+9B31
assert.throws(() => {ms932Encoder.encode("\u9B33")}, {name:"Error",message:"EncodingError U+9B33"});
assert.throws(() => {ms932Encoder.encode("\u9B34")}, {name:"Error",message:"EncodingError U+9B34"});
assert.throws(() => {ms932Encoder.encode("\u9B35")}, {name:"Error",message:"EncodingError U+9B35"});
assert.throws(() => {ms932Encoder.encode("\u9B36")}, {name:"Error",message:"EncodingError U+9B36"});
assert.throws(() => {ms932Encoder.encode("\u9B37")}, {name:"Error",message:"EncodingError U+9B37"});
assert.throws(() => {ms932Encoder.encode("\u9B38")}, {name:"Error",message:"EncodingError U+9B38"});
assert.throws(() => {ms932Encoder.encode("\u9B39")}, {name:"Error",message:"EncodingError U+9B39"});
assert.throws(() => {ms932Encoder.encode("\u9B3A")}, {name:"Error",message:"EncodingError U+9B3A"});
r = r && ([...ms932Encoder.encode("鬻鬼")].join(",") === "226,246,139,83"); // U+9B3B
assert.throws(() => {ms932Encoder.encode("\u9B3D")}, {name:"Error",message:"EncodingError U+9B3D"});
assert.throws(() => {ms932Encoder.encode("\u9B3E")}, {name:"Error",message:"EncodingError U+9B3E"});
assert.throws(() => {ms932Encoder.encode("\u9B3F")}, {name:"Error",message:"EncodingError U+9B3F"});
assert.throws(() => {ms932Encoder.encode("\u9B40")}, {name:"Error",message:"EncodingError U+9B40"});
r = r && ([...ms932Encoder.encode("魁魂魃魄魅")].join(",") === "138,64,141,176,233,175,233,174,150,163"); // U+9B41
assert.throws(() => {ms932Encoder.encode("\u9B46")}, {name:"Error",message:"EncodingError U+9B46"});
assert.throws(() => {ms932Encoder.encode("\u9B47")}, {name:"Error",message:"EncodingError U+9B47"});
assert.throws(() => {ms932Encoder.encode("\u9B48")}, {name:"Error",message:"EncodingError U+9B48"});
assert.throws(() => {ms932Encoder.encode("\u9B49")}, {name:"Error",message:"EncodingError U+9B49"});
assert.throws(() => {ms932Encoder.encode("\u9B4A")}, {name:"Error",message:"EncodingError U+9B4A"});
assert.throws(() => {ms932Encoder.encode("\u9B4B")}, {name:"Error",message:"EncodingError U+9B4B"});
assert.throws(() => {ms932Encoder.encode("\u9B4C")}, {name:"Error",message:"EncodingError U+9B4C"});
r = r && ([...ms932Encoder.encode("魍魎魏")].join(",") === "233,177,233,178,233,176"); // U+9B4D
assert.throws(() => {ms932Encoder.encode("\u9B50")}, {name:"Error",message:"EncodingError U+9B50"});
r = r && ([...ms932Encoder.encode("魑")].join(",") === "233,179"); // U+9B51
assert.throws(() => {ms932Encoder.encode("\u9B52")}, {name:"Error",message:"EncodingError U+9B52"});
assert.throws(() => {ms932Encoder.encode("\u9B53")}, {name:"Error",message:"EncodingError U+9B53"});
r = r && ([...ms932Encoder.encode("魔")].join(",") === "150,130"); // U+9B54
assert.throws(() => {ms932Encoder.encode("\u9B55")}, {name:"Error",message:"EncodingError U+9B55"});
assert.throws(() => {ms932Encoder.encode("\u9B56")}, {name:"Error",message:"EncodingError U+9B56"});
assert.throws(() => {ms932Encoder.encode("\u9B57")}, {name:"Error",message:"EncodingError U+9B57"});
r = r && ([...ms932Encoder.encode("魘")].join(",") === "233,180"); // U+9B58
assert.throws(() => {ms932Encoder.encode("\u9B59")}, {name:"Error",message:"EncodingError U+9B59"});
r = r && ([...ms932Encoder.encode("魚")].join(",") === "139,155"); // U+9B5A
assert.throws(() => {ms932Encoder.encode("\u9B5B")}, {name:"Error",message:"EncodingError U+9B5B"});
assert.throws(() => {ms932Encoder.encode("\u9B5C")}, {name:"Error",message:"EncodingError U+9B5C"});
assert.throws(() => {ms932Encoder.encode("\u9B5D")}, {name:"Error",message:"EncodingError U+9B5D"});
assert.throws(() => {ms932Encoder.encode("\u9B5E")}, {name:"Error",message:"EncodingError U+9B5E"});
assert.throws(() => {ms932Encoder.encode("\u9B5F")}, {name:"Error",message:"EncodingError U+9B5F"});
assert.throws(() => {ms932Encoder.encode("\u9B60")}, {name:"Error",message:"EncodingError U+9B60"});
assert.throws(() => {ms932Encoder.encode("\u9B61")}, {name:"Error",message:"EncodingError U+9B61"});
assert.throws(() => {ms932Encoder.encode("\u9B62")}, {name:"Error",message:"EncodingError U+9B62"});
assert.throws(() => {ms932Encoder.encode("\u9B63")}, {name:"Error",message:"EncodingError U+9B63"});
assert.throws(() => {ms932Encoder.encode("\u9B64")}, {name:"Error",message:"EncodingError U+9B64"});
assert.throws(() => {ms932Encoder.encode("\u9B65")}, {name:"Error",message:"EncodingError U+9B65"});
assert.throws(() => {ms932Encoder.encode("\u9B66")}, {name:"Error",message:"EncodingError U+9B66"});
assert.throws(() => {ms932Encoder.encode("\u9B67")}, {name:"Error",message:"EncodingError U+9B67"});
assert.throws(() => {ms932Encoder.encode("\u9B68")}, {name:"Error",message:"EncodingError U+9B68"});
assert.throws(() => {ms932Encoder.encode("\u9B69")}, {name:"Error",message:"EncodingError U+9B69"});
assert.throws(() => {ms932Encoder.encode("\u9B6A")}, {name:"Error",message:"EncodingError U+9B6A"});
assert.throws(() => {ms932Encoder.encode("\u9B6B")}, {name:"Error",message:"EncodingError U+9B6B"});
assert.throws(() => {ms932Encoder.encode("\u9B6C")}, {name:"Error",message:"EncodingError U+9B6C"});
assert.throws(() => {ms932Encoder.encode("\u9B6D")}, {name:"Error",message:"EncodingError U+9B6D"});
assert.throws(() => {ms932Encoder.encode("\u9B6E")}, {name:"Error",message:"EncodingError U+9B6E"});
r = r && ([...ms932Encoder.encode("魯")].join(",") === "152,68"); // U+9B6F
assert.throws(() => {ms932Encoder.encode("\u9B70")}, {name:"Error",message:"EncodingError U+9B70"});
assert.throws(() => {ms932Encoder.encode("\u9B71")}, {name:"Error",message:"EncodingError U+9B71"});
r = r && ([...ms932Encoder.encode("魲")].join(",") === "252,66"); // U+9B72
assert.throws(() => {ms932Encoder.encode("\u9B73")}, {name:"Error",message:"EncodingError U+9B73"});
r = r && ([...ms932Encoder.encode("魴魵")].join(",") === "233,181,252,65"); // U+9B74
assert.throws(() => {ms932Encoder.encode("\u9B76")}, {name:"Error",message:"EncodingError U+9B76"});
assert.throws(() => {ms932Encoder.encode("\u9B77")}, {name:"Error",message:"EncodingError U+9B77"});
assert.throws(() => {ms932Encoder.encode("\u9B78")}, {name:"Error",message:"EncodingError U+9B78"});
assert.throws(() => {ms932Encoder.encode("\u9B79")}, {name:"Error",message:"EncodingError U+9B79"});
assert.throws(() => {ms932Encoder.encode("\u9B7A")}, {name:"Error",message:"EncodingError U+9B7A"});
assert.throws(() => {ms932Encoder.encode("\u9B7B")}, {name:"Error",message:"EncodingError U+9B7B"});
assert.throws(() => {ms932Encoder.encode("\u9B7C")}, {name:"Error",message:"EncodingError U+9B7C"});
assert.throws(() => {ms932Encoder.encode("\u9B7D")}, {name:"Error",message:"EncodingError U+9B7D"});
assert.throws(() => {ms932Encoder.encode("\u9B7E")}, {name:"Error",message:"EncodingError U+9B7E"});
assert.throws(() => {ms932Encoder.encode("\u9B7F")}, {name:"Error",message:"EncodingError U+9B7F"});
assert.throws(() => {ms932Encoder.encode("\u9B80")}, {name:"Error",message:"EncodingError U+9B80"});
assert.throws(() => {ms932Encoder.encode("\u9B81")}, {name:"Error",message:"EncodingError U+9B81"});
assert.throws(() => {ms932Encoder.encode("\u9B82")}, {name:"Error",message:"EncodingError U+9B82"});
r = r && ([...ms932Encoder.encode("鮃")].join(",") === "233,183"); // U+9B83
assert.throws(() => {ms932Encoder.encode("\u9B84")}, {name:"Error",message:"EncodingError U+9B84"});
assert.throws(() => {ms932Encoder.encode("\u9B85")}, {name:"Error",message:"EncodingError U+9B85"});
assert.throws(() => {ms932Encoder.encode("\u9B86")}, {name:"Error",message:"EncodingError U+9B86"});
assert.throws(() => {ms932Encoder.encode("\u9B87")}, {name:"Error",message:"EncodingError U+9B87"});
assert.throws(() => {ms932Encoder.encode("\u9B88")}, {name:"Error",message:"EncodingError U+9B88"});
assert.throws(() => {ms932Encoder.encode("\u9B89")}, {name:"Error",message:"EncodingError U+9B89"});
assert.throws(() => {ms932Encoder.encode("\u9B8A")}, {name:"Error",message:"EncodingError U+9B8A"});
assert.throws(() => {ms932Encoder.encode("\u9B8B")}, {name:"Error",message:"EncodingError U+9B8B"});
assert.throws(() => {ms932Encoder.encode("\u9B8C")}, {name:"Error",message:"EncodingError U+9B8C"});
assert.throws(() => {ms932Encoder.encode("\u9B8D")}, {name:"Error",message:"EncodingError U+9B8D"});
r = r && ([...ms932Encoder.encode("鮎鮏")].join(",") === "136,188,252,67"); // U+9B8E
assert.throws(() => {ms932Encoder.encode("\u9B90")}, {name:"Error",message:"EncodingError U+9B90"});
r = r && ([...ms932Encoder.encode("鮑鮒鮓")].join(",") === "233,184,149,169,233,182"); // U+9B91
assert.throws(() => {ms932Encoder.encode("\u9B94")}, {name:"Error",message:"EncodingError U+9B94"});
assert.throws(() => {ms932Encoder.encode("\u9B95")}, {name:"Error",message:"EncodingError U+9B95"});
r = r && ([...ms932Encoder.encode("鮖鮗")].join(",") === "233,185,233,186"); // U+9B96
assert.throws(() => {ms932Encoder.encode("\u9B98")}, {name:"Error",message:"EncodingError U+9B98"});
assert.throws(() => {ms932Encoder.encode("\u9B99")}, {name:"Error",message:"EncodingError U+9B99"});
assert.throws(() => {ms932Encoder.encode("\u9B9A")}, {name:"Error",message:"EncodingError U+9B9A"});
assert.throws(() => {ms932Encoder.encode("\u9B9B")}, {name:"Error",message:"EncodingError U+9B9B"});
assert.throws(() => {ms932Encoder.encode("\u9B9C")}, {name:"Error",message:"EncodingError U+9B9C"});
assert.throws(() => {ms932Encoder.encode("\u9B9D")}, {name:"Error",message:"EncodingError U+9B9D"});
assert.throws(() => {ms932Encoder.encode("\u9B9E")}, {name:"Error",message:"EncodingError U+9B9E"});
r = r && ([...ms932Encoder.encode("鮟鮠")].join(",") === "233,187,233,188"); // U+9B9F
assert.throws(() => {ms932Encoder.encode("\u9BA1")}, {name:"Error",message:"EncodingError U+9BA1"});
assert.throws(() => {ms932Encoder.encode("\u9BA2")}, {name:"Error",message:"EncodingError U+9BA2"});
assert.throws(() => {ms932Encoder.encode("\u9BA3")}, {name:"Error",message:"EncodingError U+9BA3"});
assert.throws(() => {ms932Encoder.encode("\u9BA4")}, {name:"Error",message:"EncodingError U+9BA4"});
assert.throws(() => {ms932Encoder.encode("\u9BA5")}, {name:"Error",message:"EncodingError U+9BA5"});
assert.throws(() => {ms932Encoder.encode("\u9BA6")}, {name:"Error",message:"EncodingError U+9BA6"});
assert.throws(() => {ms932Encoder.encode("\u9BA7")}, {name:"Error",message:"EncodingError U+9BA7"});
r = r && ([...ms932Encoder.encode("鮨")].join(",") === "233,189"); // U+9BA8
assert.throws(() => {ms932Encoder.encode("\u9BA9")}, {name:"Error",message:"EncodingError U+9BA9"});
r = r && ([...ms932Encoder.encode("鮪鮫")].join(",") === "150,142,142,76"); // U+9BAA
assert.throws(() => {ms932Encoder.encode("\u9BAC")}, {name:"Error",message:"EncodingError U+9BAC"});
r = r && ([...ms932Encoder.encode("鮭鮮")].join(",") === "141,248,145,78"); // U+9BAD
assert.throws(() => {ms932Encoder.encode("\u9BAF")}, {name:"Error",message:"EncodingError U+9BAF"});
assert.throws(() => {ms932Encoder.encode("\u9BB0")}, {name:"Error",message:"EncodingError U+9BB0"});
r = r && ([...ms932Encoder.encode("鮱")].join(",") === "252,68"); // U+9BB1
assert.throws(() => {ms932Encoder.encode("\u9BB2")}, {name:"Error",message:"EncodingError U+9BB2"});
assert.throws(() => {ms932Encoder.encode("\u9BB3")}, {name:"Error",message:"EncodingError U+9BB3"});
r = r && ([...ms932Encoder.encode("鮴")].join(",") === "233,190"); // U+9BB4
assert.throws(() => {ms932Encoder.encode("\u9BB5")}, {name:"Error",message:"EncodingError U+9BB5"});
assert.throws(() => {ms932Encoder.encode("\u9BB6")}, {name:"Error",message:"EncodingError U+9BB6"});
assert.throws(() => {ms932Encoder.encode("\u9BB7")}, {name:"Error",message:"EncodingError U+9BB7"});
assert.throws(() => {ms932Encoder.encode("\u9BB8")}, {name:"Error",message:"EncodingError U+9BB8"});
r = r && ([...ms932Encoder.encode("鮹")].join(",") === "233,193"); // U+9BB9
assert.throws(() => {ms932Encoder.encode("\u9BBA")}, {name:"Error",message:"EncodingError U+9BBA"});
r = r && ([...ms932Encoder.encode("鮻")].join(",") === "252,69"); // U+9BBB
assert.throws(() => {ms932Encoder.encode("\u9BBC")}, {name:"Error",message:"EncodingError U+9BBC"});
assert.throws(() => {ms932Encoder.encode("\u9BBD")}, {name:"Error",message:"EncodingError U+9BBD"});
assert.throws(() => {ms932Encoder.encode("\u9BBE")}, {name:"Error",message:"EncodingError U+9BBE"});
assert.throws(() => {ms932Encoder.encode("\u9BBF")}, {name:"Error",message:"EncodingError U+9BBF"});
r = r && ([...ms932Encoder.encode("鯀")].join(",") === "233,191"); // U+9BC0
assert.throws(() => {ms932Encoder.encode("\u9BC1")}, {name:"Error",message:"EncodingError U+9BC1"});
assert.throws(() => {ms932Encoder.encode("\u9BC2")}, {name:"Error",message:"EncodingError U+9BC2"});
assert.throws(() => {ms932Encoder.encode("\u9BC3")}, {name:"Error",message:"EncodingError U+9BC3"});
assert.throws(() => {ms932Encoder.encode("\u9BC4")}, {name:"Error",message:"EncodingError U+9BC4"});
assert.throws(() => {ms932Encoder.encode("\u9BC5")}, {name:"Error",message:"EncodingError U+9BC5"});
r = r && ([...ms932Encoder.encode("鯆")].join(",") === "233,194"); // U+9BC6
assert.throws(() => {ms932Encoder.encode("\u9BC7")}, {name:"Error",message:"EncodingError U+9BC7"});
assert.throws(() => {ms932Encoder.encode("\u9BC8")}, {name:"Error",message:"EncodingError U+9BC8"});
r = r && ([...ms932Encoder.encode("鯉鯊")].join(",") === "140,239,233,192"); // U+9BC9
assert.throws(() => {ms932Encoder.encode("\u9BCB")}, {name:"Error",message:"EncodingError U+9BCB"});
assert.throws(() => {ms932Encoder.encode("\u9BCC")}, {name:"Error",message:"EncodingError U+9BCC"});
assert.throws(() => {ms932Encoder.encode("\u9BCD")}, {name:"Error",message:"EncodingError U+9BCD"});
assert.throws(() => {ms932Encoder.encode("\u9BCE")}, {name:"Error",message:"EncodingError U+9BCE"});
r = r && ([...ms932Encoder.encode("鯏")].join(",") === "233,195"); // U+9BCF
assert.throws(() => {ms932Encoder.encode("\u9BD0")}, {name:"Error",message:"EncodingError U+9BD0"});
r = r && ([...ms932Encoder.encode("鯑鯒")].join(",") === "233,196,233,197"); // U+9BD1
assert.throws(() => {ms932Encoder.encode("\u9BD3")}, {name:"Error",message:"EncodingError U+9BD3"});
r = r && ([...ms932Encoder.encode("鯔")].join(",") === "233,201"); // U+9BD4
assert.throws(() => {ms932Encoder.encode("\u9BD5")}, {name:"Error",message:"EncodingError U+9BD5"});
r = r && ([...ms932Encoder.encode("鯖")].join(",") === "142,73"); // U+9BD6
assert.throws(() => {ms932Encoder.encode("\u9BD7")}, {name:"Error",message:"EncodingError U+9BD7"});
assert.throws(() => {ms932Encoder.encode("\u9BD8")}, {name:"Error",message:"EncodingError U+9BD8"});
assert.throws(() => {ms932Encoder.encode("\u9BD9")}, {name:"Error",message:"EncodingError U+9BD9"});
assert.throws(() => {ms932Encoder.encode("\u9BDA")}, {name:"Error",message:"EncodingError U+9BDA"});
r = r && ([...ms932Encoder.encode("鯛")].join(",") === "145,226"); // U+9BDB
assert.throws(() => {ms932Encoder.encode("\u9BDC")}, {name:"Error",message:"EncodingError U+9BDC"});
assert.throws(() => {ms932Encoder.encode("\u9BDD")}, {name:"Error",message:"EncodingError U+9BDD"});
assert.throws(() => {ms932Encoder.encode("\u9BDE")}, {name:"Error",message:"EncodingError U+9BDE"});
assert.throws(() => {ms932Encoder.encode("\u9BDF")}, {name:"Error",message:"EncodingError U+9BDF"});
assert.throws(() => {ms932Encoder.encode("\u9BE0")}, {name:"Error",message:"EncodingError U+9BE0"});
r = r && ([...ms932Encoder.encode("鯡鯢鯣鯤")].join(",") === "233,202,233,199,233,198,233,200"); // U+9BE1
assert.throws(() => {ms932Encoder.encode("\u9BE5")}, {name:"Error",message:"EncodingError U+9BE5"});
assert.throws(() => {ms932Encoder.encode("\u9BE6")}, {name:"Error",message:"EncodingError U+9BE6"});
assert.throws(() => {ms932Encoder.encode("\u9BE7")}, {name:"Error",message:"EncodingError U+9BE7"});
r = r && ([...ms932Encoder.encode("鯨")].join(",") === "140,126"); // U+9BE8
assert.throws(() => {ms932Encoder.encode("\u9BE9")}, {name:"Error",message:"EncodingError U+9BE9"});
assert.throws(() => {ms932Encoder.encode("\u9BEA")}, {name:"Error",message:"EncodingError U+9BEA"});
assert.throws(() => {ms932Encoder.encode("\u9BEB")}, {name:"Error",message:"EncodingError U+9BEB"});
assert.throws(() => {ms932Encoder.encode("\u9BEC")}, {name:"Error",message:"EncodingError U+9BEC"});
assert.throws(() => {ms932Encoder.encode("\u9BED")}, {name:"Error",message:"EncodingError U+9BED"});
assert.throws(() => {ms932Encoder.encode("\u9BEE")}, {name:"Error",message:"EncodingError U+9BEE"});
assert.throws(() => {ms932Encoder.encode("\u9BEF")}, {name:"Error",message:"EncodingError U+9BEF"});
r = r && ([...ms932Encoder.encode("鯰鯱鯲")].join(",") === "233,206,233,205,233,204"); // U+9BF0
assert.throws(() => {ms932Encoder.encode("\u9BF3")}, {name:"Error",message:"EncodingError U+9BF3"});
assert.throws(() => {ms932Encoder.encode("\u9BF4")}, {name:"Error",message:"EncodingError U+9BF4"});
r = r && ([...ms932Encoder.encode("鯵")].join(",") === "136,177"); // U+9BF5
assert.throws(() => {ms932Encoder.encode("\u9BF6")}, {name:"Error",message:"EncodingError U+9BF6"});
assert.throws(() => {ms932Encoder.encode("\u9BF7")}, {name:"Error",message:"EncodingError U+9BF7"});
assert.throws(() => {ms932Encoder.encode("\u9BF8")}, {name:"Error",message:"EncodingError U+9BF8"});
assert.throws(() => {ms932Encoder.encode("\u9BF9")}, {name:"Error",message:"EncodingError U+9BF9"});
assert.throws(() => {ms932Encoder.encode("\u9BFA")}, {name:"Error",message:"EncodingError U+9BFA"});
assert.throws(() => {ms932Encoder.encode("\u9BFB")}, {name:"Error",message:"EncodingError U+9BFB"});
assert.throws(() => {ms932Encoder.encode("\u9BFC")}, {name:"Error",message:"EncodingError U+9BFC"});
assert.throws(() => {ms932Encoder.encode("\u9BFD")}, {name:"Error",message:"EncodingError U+9BFD"});
assert.throws(() => {ms932Encoder.encode("\u9BFE")}, {name:"Error",message:"EncodingError U+9BFE"});
assert.throws(() => {ms932Encoder.encode("\u9BFF")}, {name:"Error",message:"EncodingError U+9BFF"});

assert.strictEqual(r, true);

  });

});
