"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const promises_1 = require("fs/promises");
//this file contains
//1-resolvePath(anyPath: string): string
//2-retRszdImgPath(imgWidth: number, imgHeight: number, imgname: string): {
//   imgBeforeSizedPath: string;
//   imgAfterResized: string;
//   imageWidth: number;
//   imageHeight: number;
// }
//3-makeDirec(): boolean
//4-checkImgExist(resizedImgPath: string): boolean
//function resolvePath() takes any string path as an argument and returns the resolved path
const resolvePath = (anyPath) => {
    const resolved = path_1.default.resolve('./') + anyPath;
    return resolved;
};
// end of resolvePath()
//function retRszdImgPath() takes image width, height and name as arguments then
//returns width, height, image path before and after being resized
const retRszdImgPath = (imgWidth, imgHeight, imgname) => {
    const beforeRzdImgPath = resolvePath(`/images/${imgname}.jpg`);
    const resizedImgName = `${imgname}${imgWidth}-${imgHeight}`;
    const imgResizedPath = resolvePath(`/images/resizedImg/${resizedImgName}.jpg`);
    return {
        imgBeforeSizedPath: beforeRzdImgPath,
        imgAfterResized: imgResizedPath,
        imageWidth: imgWidth,
        imageHeight: imgHeight,
    };
};
//end of retRszdImgPath()
//function makeDirec() creates a directory returns a boolean status message
const makeDirec = () => {
    if (!(0, fs_1.existsSync)(resolvePath('/images/resizedImg'))) {
        (0, promises_1.mkdir)(resolvePath('/images/resizedImg'));
        return false;
    }
    return true;
};
//end of makeDirec()
//function checkImgExist() takes resized iamge path as an argument then returns
//a boolean value if the resized image exists or not
const checkImgExist = (resizedImgPath) => {
    let isResizedImgExist = false;
    if ((0, fs_1.existsSync)(resizedImgPath)) {
        isResizedImgExist = true;
    }
    else {
        isResizedImgExist = false;
    }
    return isResizedImgExist;
};
// end of checkImgExist()
exports.default = { resolvePath, retRszdImgPath, makeDirec, checkImgExist };
