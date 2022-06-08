import express, { query, Router } from 'express';
import resizeImgFuncs from '../utilitiesFuncs/resizeImgFuncs';
import chkMakeDirFunc from '../utilitiesFuncs/chkMakeDirFunc';

const displayImgRoute = Router();

//new display image using new functions
displayImgRoute.get('/test',(req: express.Request, res: express.Response): void => {
    const imgName = String(req.query.name);
    const imgWidth = Number(req.query.width);
    const imgHeight = Number(req.query.height);

    //calling retRszdImgPath() function to resize the image, save it and return the image before resize path
    const imgBeforeResizePath: string = chkMakeDirFunc.retRszdImgPath(imgWidth, imgHeight, imgName).imgBeforeSizedPath;

    //calling checkImgName() function to check if the image name exists or not and return error message, status code and
    //image after resize path
    const imageInfo: {ErrorMsg: string, ResStatus: number, ImgPathAfterResize: string} =  resizeImgFuncs.checkImgName(
      imgName, imgBeforeResizePath, imgWidth, imgHeight);
    setTimeout(() => {
      try {
        res.status(imageInfo.ResStatus).sendFile(imageInfo.ImgPathAfterResize);
      } catch (error) {
        res
          .status(imageInfo.ResStatus)
          .send(
            `status: ${imageInfo.ResStatus} - ${imageInfo.ErrorMsg} - ${error}`
          );
      }
    }, 200);
    
  }
);
export default displayImgRoute;
