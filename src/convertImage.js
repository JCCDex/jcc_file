'use strict';

const jsQR = require('jsqr');
class ConvertBase64 {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");
    this.image = new Image();
  }

  getImageData(base64) {
    return new Promise((resolve, reject) => {
      if (!base64) {
        return reject(new Error('the argument is invalid'));
      }
      const image = this.image;
      const canvas = this.canvas;
      const context = this.context;
      image.addEventListener("load", () => {
          canvas.width = image.width;
          canvas.height = image.height;
          context.drawImage(image, 0, 0, canvas.width, canvas.height);
          const imageData = context.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
          );
          return resolve(imageData);
        },
        false
      );
      image.src = base64;
    });
  }

  destroy() {
    this.image = null;
    this.canvas = null;
  }
}

/**
 * decode base64
 * @param {string} base64
 */
const convertImage = async (base64) => {
  const convert = new ConvertBase64();
  let data;
  try {
    const imageData = await convert.getImageData(base64);
    const code = jsQR(imageData.data, imageData.width, imageData.height);
    data = code.data.trim();
  } catch (error) {
    data = null;
  }
  convert.destroy();
  return data
}

module.exports = convertImage;