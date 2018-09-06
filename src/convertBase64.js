'use strict';

class ConvertBase64 {
    constructor() {
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");
        this.image = new Image();
    }

    getImageData(base64) {
        return new Promise((resolve, reject) => {
            if (!base64) {
                reject(new Error('the argument is invalid'));
            }
            let image = this.image;
            let canvas = this.canvas;
            let context = this.context;
            image.addEventListener("load", () => {
                    canvas.width = image.width;
                    canvas.height = image.height;
                    context.drawImage(image, 0, 0, canvas.width, canvas.height);
                    let imageData = context.getImageData(
                        0,
                        0,
                        canvas.width,
                        canvas.height
                    );
                    resolve(imageData);
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

module.exports = ConvertBase64;