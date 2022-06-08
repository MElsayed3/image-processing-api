"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chkMakeDirFunc_1 = __importDefault(require("../../utilitiesFuncs/chkMakeDirFunc"));
const resizeImgFuncs_1 = __importDefault(require("../../utilitiesFuncs/resizeImgFuncs"));
const path_1 = __importDefault(require("path"));
describe('testing my functions in myfuncs file', () => {
    it('resolvePath expects to return a path string', () => {
        expect(chkMakeDirFunc_1.default.resolvePath('mypath')).not.toBeFalsy();
    });
    it('retRszdImgPath expects to return width greater than 100', () => {
        expect(chkMakeDirFunc_1.default.retRszdImgPath(200, 500, 'image').imageWidth).toEqual(200);
    });
    it('makeDirec expects to return false as long as there is no resizedImg directory', () => {
        expect(chkMakeDirFunc_1.default.makeDirec()).toBeFalsy();
    });
    it('checkImgExist expects to return a false states that the image does not exist', () => {
        expect(chkMakeDirFunc_1.default.checkImgExist(path_1.default.resolve('./') + 'images/resizedImg/fjord300-300.jpg')).toEqual(false);
    });
});
describe('test my functions in resizeImgFuncs file', () => {
    it('resizeImg exprects to return status code 201 and create a directory and image in the resizedImg folder', () => {
        expect(resizeImgFuncs_1.default.resizeImg('fjord', 200, 200).status).toBe(201);
    });
    it('checkImgName expects to return status code 201 and create a directory and image in the resizedImg folder', () => {
        expect(resizeImgFuncs_1.default.checkImgName('fjord', path_1.default.resolve('./') + '/images/fjord.jpg', 500, 500).ResStatus).toEqual(201);
    });
});
