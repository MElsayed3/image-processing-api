"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const resizeImgFuncs_1 = __importDefault(require("../../utilitiesFuncs/resizeImgFuncs"));
const chkMakeDirFunc_1 = __importDefault(require("../../utilitiesFuncs/chkMakeDirFunc"));
const displayImgRoute = (0, express_1.Router)();
//new display image using new functions
displayImgRoute.get('/', (req, res) => {
    const imgName = String(req.query.name);
    const imgWidth = Number(req.query.width);
    const imgHeight = Number(req.query.height);
    const imgBeforeResizePath = chkMakeDirFunc_1.default.retRszdImgPath(imgWidth, imgHeight, imgName).imgBeforeSizedPath;
    //new code 25/4/2022
    const imageInfo = resizeImgFuncs_1.default.checkImgName(imgName, imgBeforeResizePath, imgWidth, imgHeight);
    setTimeout(() => {
        try {
            res.status(imageInfo.ResStatus).sendFile(imageInfo.ImgPathAfterResize);
        }
        catch (error) {
            res
                .status(imageInfo.ResStatus)
                .send(`Status: ${imageInfo.ResStatus} - ${imageInfo.ErrorMsg} - ${error}`);
        }
    }, 200);
});
exports.default = displayImgRoute;
