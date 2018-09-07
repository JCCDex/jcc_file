# jcc_file

![npm](https://img.shields.io/npm/v/jcc_file.svg)
[![Build Status](https://travis-ci.com/JCCDex/jcc_file.svg?branch=master)](https://travis-ci.com/JCCDex/jcc_file)
[![Coverage Status](https://coveralls.io/repos/github/JCCDex/jcc_file/badge.svg?branch=master)](https://coveralls.io/github/JCCDex/jcc_file?branch=master)
[![npm downloads](https://img.shields.io/npm/dm/jcc_file.svg)](http://npm-stat.com/charts.html?package=jcc_file)

## Installtion

```shell
npm install jcc_file
```

## API

### importFile

import file to get result, if we need, we aslo could decode qrcode image.

```javascript
const importFile = require('jcc_file').importFile
// import { importFile } from 'jcc_file';
importFile(event, needConvert).then(res => {}).catch(error => {})
```

Parameters

- `event`- `object`
- `needConvert`- `boolean`
  
  - if decode image

### exportToText

export text content to text file

```javascript
const exportToText = require('jcc_file').exportToText
// import { exportToText } from 'jcc_file';
exportToText(text, name).then(() => {}).catch(error => {})
```

Parameters

- `text`- `string`
- `name`- `string`

### exportToQR

export text content to qrcode image

```javascript
const exportToQR = require('jcc_file').exportToQR
// import { exportToQR } from 'jcc_file';
exportToQR(text, name).then(() => {}).catch(error => {})
```

Parameters

- `text`- `string`
- `name`- `string`