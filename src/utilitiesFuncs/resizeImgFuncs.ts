import { existsSync } from 'fs';
import sharp from 'sharp';
import funcs from './chkMakeDirFunc';

//this file contains
//1-resizeImg(imgName:string, imgWidth:number, imgHeight: number):string
//2-checkImgName(imgName:string, imgBfrRezPath:string, imgWidth:number, imgHeight:number)
//:{ErrorMsg: string, ResStatus: number, ImgPathAfterResize: string}

//resizeImg() with sharp takes width and height as arguments
const resizeImg = (
  imgName: string,
  imgWidth: number,
  imgHeight: number
): { imgPathAfterResize: string; status: number } => {
  //calling the retRszdImgPath and return the paths
  const imgPathAfterResize: string = funcs.retRszdImgPath(
    imgWidth,
    imgHeight,
    imgName
  ).imgAfterResized;

  //check if the resized image already exist using the checkImgExist function
  let status = 0;
  try {
    //calling makeDirec() first to create a directory first
    funcs.makeDirec();
    
    if (!funcs.checkImgExist(imgPathAfterResize)) {
      sharp(funcs.resolvePath(`/images/${imgName}.jpg`))
        .resize({ width: imgWidth, height: imgHeight })
        .toFile(`images/resizedImg/${imgName}${imgWidth}-${imgHeight}.jpg`);
    }
    status = 201;
  } catch (error) {
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
const checkImgName = (
  imgName: string,
  imgBfrRezPath: string,
  imgWidth: number,
  imgHeight: number
): { ErrorMsg: string; ResStatus: number; ImgPathAfterResize: string } => {
  let errorMsg = 'no errors';
  let resStatus = 200;
  let imgPathAfterResize = '';
  if (imgName === undefined || imgName === '') {
    errorMsg = 'please enter a valid image name';
    resStatus = 400;
  } else if (!existsSync(imgBfrRezPath)) {
    errorMsg = 'image is not found !!! please enter a valid image name';
    resStatus = 400;
  } else {
    if (
      imgWidth === undefined ||
      imgHeight === undefined ||
      isNaN(imgWidth) ||
      isNaN(imgHeight)
    ) {
      errorMsg = 'please enter a valid width and height';
      resStatus = 400;
    } else {
      imgPathAfterResize = resizeImg(
        imgName,
        imgWidth,
        imgHeight
      ).imgPathAfterResize;
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

export default { checkImgName, resizeImg };
