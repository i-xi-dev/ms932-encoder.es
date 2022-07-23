# @i-xi-dev/ms932-encoder

A JavaScript Windows-31J encoder, implements
[Shift_JIS encoder](https://encoding.spec.whatwg.org/#shift_jis-encoder) defined
in WHATWG Encoding Standard.


## Requirement

### `Ms932.Encoder` class

| Chrome | Edge | Firefox | Safari | Deno | Node.js |
| :---: | :---: | :---: | :---: | :---: | :---: |
| ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

### `Ms932.EncoderStream` class

`Ms932.EncoderStream` requires
[`TransformStream`](https://developer.mozilla.org/en-US/docs/Web/API/TransformStream).

| Chrome | Edge | Firefox | Safari | Deno | Node.js |
| :---: | :---: | :---: | :---: | :---: | :---: |
| ✅ | ✅ | ✅<br />102+ | ✅<br />14.1+ | ✅ | ✅<br />16.5+ |


## Installation

### npm

```console
$ npm i @i-xi-dev/ms932-encoder
```

```javascript
import { Ms932 } from "@i-xi-dev/ms932-encoder";
```

### CDN

Example for Skypack

```javascript
import { Ms932 } from "https://cdn.skypack.dev/@i-xi-dev/ms932-encoder";
```

## Usage

### [`Ms932.Encoder`](https://doc.deno.land/https://raw.githubusercontent.com/i-xi-dev/ms932-encoder.es/2.0.6/mod.ts/~/Ms932.Encoder) class

The `Ms932.Encoder` implements the
[`TextEncoder`](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder)
interface.

```javascript
const encoder = new Ms932.Encoder();

encoder.encode("あいうえお");
// → Uint8Array[ 0x82, 0xA0, 0x82, 0xA2, 0x82, 0xA4, 0x82, 0xA6, 0x82, 0xA8 ]

const bytes = new Uint8Array(10);
const { read, written } = encoder.encodeInto("あいうえお", bytes);
// → read: 5
//   written: 10
//   bytes: Uint8Array[ 0x82, 0xA0, 0x82, 0xA2, 0x82, 0xA4, 0x82, 0xA6, 0x82, 0xA8 ]
```

#### Encoding error handling

```javascript
const encoder = new Ms932.Encoder({ fatal: false }); // default

encoder.encode("𩸽");
// → Uint8Array[ 0x3F ]
```

```javascript
const encoder = new Ms932.Encoder({ replacementChar: "■" });

encoder.encode("𩸽");
// → Uint8Array[ 0x81, 0xA1 ]
```

```javascript
const encoder = new Ms932.Encoder({ fatal: true });

encoder.encode("𩸽");
// → throws Error.
```

### [`Ms932.EncoderStream`](https://doc.deno.land/https://raw.githubusercontent.com/i-xi-dev/ms932-encoder.es/2.0.6/mod.ts/~/Ms932.EncoderStream) class

The `Ms932.EncoderStream` implements
[`TextEncoderStream`](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoderStream)
interface.

```javascript
const encoderStream = new Ms932.EncoderStream();

// readableStream: ReadableStream<string>
// writableStream: WritableStream<Uint8Array>
readableStream.pipeThrough(encoderStream).pipeTo(writableStream);
```

## FAQ

**Q:** Where is Ms932.Decoder?

**A:** Browsers and Node.js implement the
[Shift_JIS decoder](https://encoding.spec.whatwg.org/#shift_jis-decoder). Use a
[`TextDecoder`](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder).

```javascript
const decoder = new TextDecoder("shift_jis");
```
