# jcc_file

![npm](https://img.shields.io/npm/v/jcc_file.svg)
[![Build Status](https://travis-ci.com/JCCDex/jcc_file.svg?branch=master)](https://travis-ci.com/JCCDex/jcc_file)
[![Coverage Status](https://coveralls.io/repos/github/JCCDex/jcc_file/badge.svg?branch=master)](https://coveralls.io/github/JCCDex/jcc_file?branch=master)
[![npm downloads](https://img.shields.io/npm/dm/jcc_file.svg)](http://npm-stat.com/charts.html?package=jcc_file)

将文件内容或者二维码图片导入，获取文本内容，或者将文本内容导出成文件或者图片。在威链平台通常用这个工具来导入导出keystore格式的钱包。

井畅应用交流群: 557524730

JCCDex Tech support QQ group ID: 557524730

## Installtion

```shell
npm install jcc_file
```

## API

### importFile

import file to get result, if we need, we also could decode qrcode image.

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
