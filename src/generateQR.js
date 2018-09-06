const qrcode = require('qrcode');

const generateQR = (text) => {
    return new Promise(async (resolve, reject) => {
        try {
            let url = await qrcode.toDataURL(text, {
                errorCorrectionLevel: "L"
            });
            return resolve(url);
        } catch (error) {
            return reject(error);
        }
    });
}

module.exports = generateQR