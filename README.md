# @i-xi-dev/ms932-encoder

A JavaScript Windows-31J encoder, implements [Shift_JIS encoder](https://encoding.spec.whatwg.org/#shift_jis-encoder) defined in WHATWG Encoding Standard.


## `Ms932Encoder` class

The `Ms932Encoder` implements the [`TextEncoder`](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder) interface.


### Installation

#### npm

```console
$ npm i @i-xi-dev/ms932-encoder
```

```javascript
import { Ms932Encoder } from "@i-xi-dev/ms932-encoder";
```

#### CDN

```javascript
import { Ms932Encoder } from "https://cdn.skypack.dev/@i-xi-dev/ms932-encoder";
```

```javascript
import { Ms932Encoder } from "https://unpkg.com/@i-xi-dev/ms932-encoder/dist/index.js";
```

```javascript
import { Ms932Encoder } from "https://cdn.jsdelivr.net/npm/@i-xi-dev/ms932-encoder/dist/index.js";
```


### Usage

```javascript
const encoder = new Ms932Encoder();

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
const encoder = new Ms932Encoder({ fatal: false }); // default

encoder.encode("𩸽");
// → Uint8Array[ 0x3F ]
```

```javascript
const encoder = new Ms932Encoder({ fatal: true });

encoder.encode("𩸽");
// → throws Error.
```


## `Ms932EncoderStream` class

The `Ms932EncoderStream` implements [`TextEncoderStream`](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoderStream) interface.


### Requirement
`Ms932EncoderStream` requires [`TransformStream`](https://developer.mozilla.org/en-US/docs/Web/API/TransformStream).

- Chrome
- Edge
- Safari 14.1+
- Deno
- Node.js 16.5.0+


### Installation

#### npm

```console
$ npm i @i-xi-dev/ms932-encoder
```

```javascript
import { Ms932EncoderStream } from "@i-xi-dev/ms932-encoder/stream";
```

#### CDN

```javascript
import { Ms932EncoderStream } from "https://cdn.skypack.dev/@i-xi-dev/ms932-encoder/stream";
```

```javascript
import { Ms932EncoderStream } from "https://unpkg.com/@i-xi-dev/ms932-encoder/dist/stream/index.js";
```

```javascript
import { Ms932EncoderStream } from "https://cdn.jsdelivr.net/npm/@i-xi-dev/ms932-encoder/dist/stream/index.js";
```


### Usage
```javascript
const encoderStream = new Ms932EncoderStream();

readableStream.pipeThrough(encoderStream).pipeTo(writableStream);
```
