const chai = require('chai');
const expect = chai.expect;
const jsdom = require('jsdom')
const {
    JSDOM
} = jsdom
const a = new JSDOM('<!doctype html><html><body></body></html>', {
    resources: 'usable'
});
const {
    window
} = a;
global.document = window.document
global.Image = window.Image
global.MouseEvent = window.MouseEvent
describe('test convertImage', function () {
    const convertImage = require('../src/convertImage');
    it('get correct result when decode valid qrcode image', async function () {
        let testImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAEYCAIAAAAI7H7bAAAEhUlEQVR4nO3dS24cMRAFwR7D97+yfAQTULpcbEWsjfF8lODmgf35+vp6gO/59b/fALyBkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgICQI/D75R5/P51+/j81O5ognX1H1OqGFb2mbwzGqEwkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgcLS1O3Hp/XjVkOzSj1+59OOHM0InEgSEBAEhQUBIEBASBIQEASFBQEgQEBIEhAQBIUEg29qdWHhpW8Vm769e/Os/TiRICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCwOjW7sWqh7EeDtJePMm7lBMJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQIGBr1xi+1+7kv7PHm+REgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQKjo9UXzyiHP1p1H+Xk237xr/84kSAhJAgICQJCgoCQICAkCAgJAkKCgJAgICQICAkC2dauuiHxUtWw7dKHMf/wX/9xIkFCSBAQEgSEBAEhQUBIEBASBIQEASFBQEgQEBIEPttWW5cavkRu2511OJEgICQICAkCQoKAkCAgJAgICQJCgoCQICAkCAgJAm/e2lWXrU1+RQvvtVt4Zd/kWzr8qp1IEBASBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBIGjZ8hOPiF0ePu3bbQWvtTw2Kxy6R+bEwkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgcLS1qyzc0S0cm50I75F7q+Ff1okEASFBQEgQEBIEhAQBIUFASBAQEgSEBAEhQUBIEBASBEYfxnzpQvTGhzofmvxFhke0w9+2EwkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgkD2M+WTatPDGxm23KIbvZ9u0b9v7edI/NicSBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBAEhQWD0XrsXu/TStmps9uKFpK0dzBESBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBIGjrd22y9+G/fA54vAjdC+d/zmRICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQJHz5A9cekgrRqSLbzYbXKQdvI64WJz28d/nEiQEBIEhAQBIUFASBAQEgSEBAEhQUBIEBASBIQEgWxrd+LSB61W/9fwHu/Etq/oWbmjO+FEgoCQICAkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQKjo9UfbniQOjkRXvjRht+SEwkCQoKAkCAgJAgICQJCgoCQICAkCAgJAkKCgJAgYGs3Z+FC7NJHaJ+opoYexgxzhAQBIUFASBAQEgSEBAEhQUBIEBASBIQEASFBYHRr9+Jl14nqEcLtSyWvs/CjudcO7iMkCAgJAkKCgJAgICQICAkCQoKAkCAgJAgICQLZ1m7yiaWXGl6IXTpaqwx/NCcSBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBAEhQeBz6ZIKVnEiQUBIEBASBIQEASFBQEgQEBIEhAQBIUFASBAQEgSEBIE/mJUZJvdqz90AAAAASUVORK5CYII=';
        let result = await convertImage(testImg)
        expect(result).to.equal('test');
    });

    it('get null if qrcode image is invalid', async function () {
        let testImg = ''
        let result = await convertImage(testImg)
        expect(result).to.equal(null);
    });
});

describe('test generateQR', function () {
    const generateQR = require('../src/generateQR');
    const convertImage = require('../src/convertImage');
    it('generate qr successfully if the arguments is valid', async function () {
        this.timeout(0)
        let url = await generateQR('test');
        let result = await convertImage(url);
        expect(result).to.equal('test');
    });

    it('throw if the arguments is invalid', async function () {
        this.timeout(0)
        generateQR('').catch(error => {
            expect(true);
        });
    });
});