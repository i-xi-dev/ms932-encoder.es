# @i-xi-dev/ms932-encoder

A JavaScript Windows-31J encoder, implements Shift_JIS decoder defined in WHATWG Encoding Standard.


## Installation

### npm

```console
$ npm i @i-xi-dev/ms932-encoder
```

```javascript
import { Ms932Encoder } from "@i-xi-dev/ms932-encoder";
```

### CDN

```javascript
import { Ms932Encoder } from "https://unpkg.com/@i-xi-dev/ms932-encoder";
```


## Usage
```javascript
const encoder = new Ms932Encoder();

encoder.encode("あいうえお");
// → Uint8Array[ 0x82, 0xA0, 0x82, 0xA2, 0x82, 0xA4, 0x82, 0xA6, 0x82, 0xA8 ]
```

### Encoding error handling
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

