import funcs from '../../utilitiesFuncs/chkMakeDirFunc';
import resizeImgFuncs from '../../utilitiesFuncs/resizeImgFuncs';
import path from 'path';

describe('testing my functions in myfuncs file', () => {
  it('resolvePath expects to return a path string', () => {
    expect(funcs.resolvePath('mypath')).not.toBeFalsy();
  });
  it('retRszdImgPath expects to return width greater than 100', () => {
    expect(funcs.retRszdImgPath(200, 500, 'image').imageWidth).toEqual(200);
  });
  it('makeDirec expects to return false as long as there is no resizedImg directory', () => {
    expect(funcs.makeDirec()).toBeFalsy();
  });
  it('checkImgExist expects to return a false states that the image does not exist', () => {
    expect(
      funcs.checkImgExist(
        path.resolve('./') + 'images/resizedImg/fjord300-300.jpg'
      )
    ).toEqual(false);
  });
});

describe('test my functions in resizeImgFuncs file', () => {
  it('resizeImg exprects to return status code 201 and create a directory and image in the resizedImg folder', () => {
    expect(resizeImgFuncs.resizeImg('fjord', 200, 200).status).toBe(201);
  });

  it('checkImgName expects to return status code 201 and create a directory and image in the resizedImg folder', () => {
    expect(
      resizeImgFuncs.checkImgName(
        'fjord',
        path.resolve('./') + '/images/fjord.jpg',
        500,
        500
      ).ResStatus
    ).toEqual(201);
  });
});
