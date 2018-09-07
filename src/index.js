/**
MIT License

Copyright (c) 2018 JCC Dex

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */
/**
 * @author https://github.com/GinMu
 */

const convertImage = require('./convertImage');
const generateQR = require('./generateQR');

/**
 * import file
 * @param {object} event
 * @param {boolean} needConvert
 */
const importFile = (event, needConvert = false) => {
    let files = event.target.files || event.dataTransfer.files;
    return new Promise((resolve, reject) => {
        if (files.length) {
            let file = files[0];
            let reader = new FileReader();
            if (/image+/.test(file.type)) {
                reader.onload = async () => {
                    let data;
                    if (needConvert) {
                        data = await convertImage(reader.result);
                    } else {
                        data = reader.result;
                    }
                    return resolve(data);
                };
                reader.readAsDataURL(file);
            } else {
                reader.onload = () => {
                    return resolve(reader.result);
                };
                reader.readAsText(file);
            }
        } else {
            return reject(new Error('files is empty'));
        }
    })
}

/**
 * export text content to qrcode image
 * @param {string} text
 * @param {string} name
 */
const exportToQR = (text, name = 'weidex') => {
    return new Promise((resolve, reject) => {
        try {
            let url = generateQR(text);
            let a = document.createElement("a");
            let e = new MouseEvent("click");
            a.download = name.replace(/\./g, "_");
            a.href = url;
            a.dispatchEvent(e);
            return resolve();
        } catch (error) {
            return reject(error);
        }
    })
}

/**
 * export text content to text file
 * @param {string} text
 * @param {string} name
 */
const exportToText = (text, name = 'weidex') => {
    return new Promise((resolve, reject) => {
        try {
            let a = document.createElement("a");
            let blob = new Blob([text]);
            let e = new MouseEvent("click");
            a.download = name.replace(/\./g, "_");
            a.href = URL.createObjectURL(blob);
            a.dispatchEvent(e);
            return resolve();
        } catch (error) {
            return reject(error);
        }
    })
}

exports = module.exports = {
    importFile,
    exportToQR,
    exportToText
}