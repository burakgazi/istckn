

# isTCKN

[![Known Vulnerabilities](https://snyk.io/test/github/burakgazi/istckn/badge.svg)](https://snyk.io/test/github/burakgazi/istckn)

[![Coverage Status](https://coveralls.io/repos/github/burakgazi/istckn/badge.svg?branch=master)](https://coveralls.io/github/burakgazi/istckn?branch=master)


 [![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)



 A simple, lightweight module to check if given string or number is a valid TCKN-Turkish National Identity. It checks the given value against the TCKN algorithm.





## Example

```javascript
const isTCKN = require('istckn');

isTCKN('[valid tckn]'); // true
isTCKN([valid tckn]); // true

isTCKN('[invalid tckn]'); // false
isTCKN({}); // false
```

