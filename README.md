

# isTCKN

[![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/istckn)  [![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)


 A simple, lightweight module to check if given string or number is a valid TCKN-Turkish National Identity. It checks the given value against the TCKN algorithm.





## Example

```javascript
const isTCKN = require('istckn');

isTCKN('[valid tckn]'); // true
isTCKN([valid tckn]); // true

isTCKN('[invalid tckn]'); // false
isTCKN({}); // false
```
