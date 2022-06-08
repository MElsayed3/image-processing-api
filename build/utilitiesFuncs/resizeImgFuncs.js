"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const sharp_1 = __importDefault(require("sharp"));
const chkMakeDirFunc_1 = __importDefault(require("./chkMakeDirFunc"));
//this file contains
//1-resizeImg(imgName:string, imgWidth:number, imgHeight: number):string
//2-checkImgName(imgName:string, imgBfrRezPath:string, imgWidth:number, imgHeight:number)
//:{ErrorMsg: string, ResStatus: number, ImgPathAfterResize: string}
//resizeImg() with sharp takes width and height as arguments
const resizeImg = (imgName, imgWidth, imgHeight) => {
    //calling the retRszdImgPath and return the paths
    const imgPathAfterResize = chkMakeDirFunc_1.default.retRszdImgPath(imgWidth, imgHeight, imgName).imgAfterResized;
    //check if the resized image already exist using the checkImgExist function
    let status = 0;
    try {
        //calling makeDirec() first to create a directory first
        chkMakeDirFunc_1.default.makeDirec();
        if (!chkMakeDirFunc_1.default.checkImgExist(imgPathAfterResize)) {
            (0, sharp_1.default)(chkMakeDirFunc_1.default.resolvePath(`/images/${imgName}.jpg`))
                .resize({ width: imgWidth, height: imgHeight })
                .toFile(`images/resizedImg/${imgName}${imgWidth}-${imgHeight}.jpg`);
        }
        status = 201;
    }
    catch (error) {
        status = 401;
    }
    return { imgPathAfterResize, status };
};
//end of resizeImg()
//checking if the image name from the query string is empty or undefined
//and sending a message to the user to enter a valid image name
//takes name, before resize path, width and height of image as arguments
//returns error message, response status, image path after resize as an object
/**
   * ErrorMsg:errorMsg,
    ResStatus:resStatus,
    ImgPathAfterResize:imgPathAfterResize
   */
const checkImgName = (imgName, imgBfrRezPath, imgWidth, imgHeight) => {
    let errorMsg = 'no errors';
    let resStatus = 200;
    let imgPathAfterResize = '';
    if (imgName === undefined || imgName === '') {
        errorMsg = 'please enter a valid image name';
        resStatus = 400;
    }
    else if (!(0, fs_1.existsSync)(imgBfrRezPath)) {
        errorMsg = 'image is not found !!! please enter a valid image name';
        resStatus = 400;
    }
    else {
        if (imgWidth === undefined ||
            imgHeight === undefined ||
            isNaN(imgWidth) ||
            isNaN(imgHeight)) {
            errorMsg = 'please enter a valid width and height';
            resStatus = 400;
        }
        else {
            imgPathAfterResize = resizeImg(imgName, imgWidth, imgHeight).imgPathAfterResize;
            resStatus = 201;
        }
    }
    return {
        ErrorMsg: errorMsg,
        ResStatus: resStatus,
        ImgPathAfterResize: imgPathAfterResize,
    };
};
//end of checkImgName()
exports.default = { checkImgName, resizeImg };
