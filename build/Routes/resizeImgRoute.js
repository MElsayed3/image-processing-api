"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const resizeImgFuncs_1 = __importDefault(require("../utilitiesFuncs/resizeImgFuncs"));
const chkMakeDirFunc_1 = __importDefault(require("../utilitiesFuncs/chkMakeDirFunc"));
const displayImgRoute = (0, express_1.Router)();
//new display image using new functions
displayImgRoute.get('/test', (req, res) => {
    const imgName = String(req.query.name);
    const imgWidth = Number(req.query.width);
    const imgHeight = Number(req.query.height);
    //calling retRszdImgPath() function to resize the image, save it and return the image before resize path
    const imgBeforeResizePath = chkMakeDirFunc_1.default.retRszdImgPath(imgWidth, imgHeight, imgName).imgBeforeSizedPath;
    //calling checkImgName() function to check if the image name exists or not and return error message, status code and
    //image after resize path
    const imageInfo = resizeImgFuncs_1.default.checkImgName(imgName, imgBeforeResizePath, imgWidth, imgHeight);
    setTimeout(() => {
        try {
            res.status(imageInfo.ResStatus).sendFile(imageInfo.ImgPathAfterResize);
        }
        catch (error) {
            res
                .status(imageInfo.ResStatus)
                .send(`status: ${imageInfo.ResStatus} - ${imageInfo.ErrorMsg} - ${error}`);
        }
    }, 200);
});
exports.default = displayImgRoute;
