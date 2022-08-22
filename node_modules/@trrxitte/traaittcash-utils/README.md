![image](https://github.com/TRRXITTE/traaittCASH/blob/master/docs/XTCASH.png)

# traaittCASH Javascript Utilities

[![NPM](https://nodei.co/npm/@trrxitte/traaittcash-utils.png?downloads=true&stars=true)](https://nodei.co/npm/@trrxitte/traaittcash-utils/)

![Prerequisite](https://img.shields.io/badge/node-%3E%3D6-blue.svg) [![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://documentation.trrxitte.com) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/trrxitte/traaittcash-utils/graphs/commit-activity) [![License: GPL-3.0](https://img.shields.io/badge/License-GPL--3.0-yellow.svg)](https://github.com/trrxitte/traaittcash-utils/blob/master/LICENSE) [![Twitter: TRRXITTE](https://img.shields.io/twitter/follow/TRRXITTE.svg?style=social)](https://twitter.com/TRRXITTE)

#### Master Build Status
[![Build Status](https://travis-ci.org/trrxitte/traaittcash-utils.svg?branch=master)](https://travis-ci.org/trrxitte/traaittcash-utils)

#### Development Build Status
[![Build Status](https://travis-ci.org/trrxitte/traaittcash-utils.svg?branch=development)](https://travis-ci.org/trrxitte/traaittcash-utils/branches)

This package contains code that wraps [traaittcash-crypto](https://github.com/trrxitte/traaittcash-crypto) primitives into an easier to use interface. This includes the ability to easily discover funds for a wallet, create transactions, sign transactions (ring signatures), create new wallets, verify addresses, and handful of other useful methods. These methods can then be wrapped into a Javascript-based wallet such as [traaittcash-wallet-backend-js](https://github.com/trrxitte/traaittcash-wallet-backend-js).

If you experience any issues with this library, the best way to address such situations is to submit a Pull Request to resolve the issue you are running into.

## Installation

```bash
npm install @trrxitte/traaittcash-utils
```

## Initialization

### JavaScript

```javascript
const traaittCASHUtils = require('@trrxitte/traaittcash-utils').CryptoNote
const coinUtils = new traaittCASHUtils()
```

### TypeScript

```typescript
import { CryptoNote } from '@trrxitte/traaittcash-utils'
const coinUtils = new CryptoNote()
```

You can find TypeScript type definitions [here](index.d.ts)

### Browser Support

When packing for the browser with a tool like [webpack](https://webpack.js.org/) we advise that you use the ready `event` of the webpacked module to determine when the Cryptographic methods are available.

```html
<script src="traaittCASHUtils.js"></script>
<script>
  traaittCASHUtils.on('ready', () => {
    const coinUtils = new traaittCASHUtils.CryptoNote()
  })
</script>
```

### Documentation

You can find the full documentation for this library [here](https://documentation.trrxitte.com)

### Credits

TRRXITTE Int., incorporate 

Special thanks goes out to:
* Lucas Jones
* Paul Shapiro
* Luigi111
* [The MyMonero Project](https://github.com/mymonero/mymonero-app-js)
* The Masari Project: [gnock](https://github.com/gnock)
* The Plentum Project: [DaveLong](https://github.com/DaveLong)
