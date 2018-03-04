<img src="http://bitcore.io/css/images/module-message.png" alt="berycore message" height="35">
# Berycoin Message Verification and Signing for Berycore


[![NPM Package](https://img.shields.io/npm/v/berycore-message.svg?style=flat-square)](https://www.npmjs.org/package/berycore-message)
[![Build Status](https://img.shields.io/travis/berycoin-project/berycore-message.svg?branch=master&style=flat-square)](https://travis-ci.org/berycoin-project/berycore-message)
[![Coverage Status](https://img.shields.io/coveralls/berycoin-project/berycore-message.svg?style=flat-square)](https://coveralls.io/r/berycoin-project/berycore-message?branch=master)

berycore-message adds support for verifying and signing berycoin messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main berycore repo](https://github.com/berycoin-project/berycore) for more information.

## Getting Started

```sh
npm install berycore-message
```

```sh
bower install berycore-message
```

To sign a message:

```javascript
var berycore = require('berycore-lib');
var Message = require('berycore-message');

var privateKey = berycore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H9XORZInM3B3a8BNS65kwgmbnqEuq73rjAQ5VKyVzTrzPOdHdHOY2lfoph5auvMgLSr7bh+nEQSG/f2kv9TnsbY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/berycoin-project/berycore/blob/master/CONTRIBUTING.md) on the main berycore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/berycoin-project/berycore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
Copyright 2016 The Berycoin Core Developers

