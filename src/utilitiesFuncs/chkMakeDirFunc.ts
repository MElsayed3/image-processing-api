import path from 'path';
import { existsSync } from 'fs';
import { mkdir } from 'fs/promises';

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
const resolvePath = (anyPath: string): string => {
  const resolved = path.resolve('./') + anyPath;
  return resolved;
};
// end of resolvePath()

//function retRszdImgPath() takes image width, height and name as arguments then
//returns width, height, image path before and after being resized
const retRszdImgPath = (
  imgWidth: number,
  imgHeight: number,
  imgname: string
): {
  imgBeforeSizedPath: string;
  imgAfterResized: string;
  imageWidth: number;
  imageHeight: number;
} => {
  const beforeRzdImgPath = resolvePath(`/images/${imgname}.jpg`);
  const resizedImgName = `${imgname}${imgWidth}-${imgHeight}`;
  const imgResizedPath = resolvePath(
    `/images/resizedImg/${resizedImgName}.jpg`
  );
  return {
    imgBeforeSizedPath: beforeRzdImgPath,
    imgAfterResized: imgResizedPath,
    imageWidth: imgWidth,
    imageHeight: imgHeight,
  };
};
//end of retRszdImgPath()

//function makeDirec() creates a directory returns a boolean status message
const makeDirec = (): boolean => {
  if (!existsSync(resolvePath('/images/resizedImg'))) {
    mkdir(resolvePath('/images/resizedImg'));
    return false;
  }
  return true;
};
//end of makeDirec()

//function checkImgExist() takes resized iamge path as an argument then returns
//a boolean value if the resized image exists or not
const checkImgExist = (resizedImgPath: string): boolean => {
  let isResizedImgExist = false;
  if (existsSync(resizedImgPath)) {
    isResizedImgExist = true;
  } else {
    isResizedImgExist = false;
  }
  return isResizedImgExist;
};
// end of checkImgExist()
export default { resolvePath, retRszdImgPath, makeDirec, checkImgExist };
