# Readme for image processing api project
Image processing api project is a web application the takes the image, width and height from the user and crop the image as the user wants
## Frameworks, Modules, languages and Libraries and used:

* Typescript
* Javascript
* Node.js
* Express.js
* Prettier
* Eslint
* Jasmine
* Sharp

## Helper functions in src/utilitiesFuncs/chkMakeDirFunc.ts

1. resolvePath(): Function takes any path as an arguments and returns the path after returning to the main directory.
2. retRszdImgPath(): Function takes 3 arguments width and height as a number and name as string and returns width, height, image path before and after being resized.
3. makeDirec(): Function takes no arguments and returns a boolean to check if there is a resizedImg directory or to create a new directory.
4. checkImgExist(): Function takes resized image path as an argument and returns a boolean, checks the resized image exists or not.

## Main functions in src/utilitiesFuncs/resizeImgFuncs.ts
1. resizeImg(): Function takes three arguments name as a string, width and height of the image as number and returns imgPathAfterResize as a string. It calles makeDirec() function, resizes the image the client selected and stores it in a directory called resizedImg.

2. checkImgName() Function takes four arguments imgName:string, imgBfrRezPath:string, imgWidth:number and imgHeight:number. returns {ErrorMsg: string, ResStatus: number, ImgPathAfterResize: string}. It makes sure the client enters a valid name, width and height of the image he wants to resize.

## resizeImgRoute.ts file 
* Imported all the functions from the resizeImgFunc.ts and chkMakeDirFunc files and call them then exported the displayImgRout to use it in the index.ts endpoint under the route path  '/'.

## index.ts file
* Imported the displayImgRoute to the index file and use it with its end point under '/' route path.

## Important scripts in package.json
* Converting Ts code into Js: npm run build.
* Check the code with prettier: npm run prettier.
* Check the code with eslint: npm run lint.
* Test functions with jasmine: npm run jasmine.
* Convert Ts into Js and then test with jasmine: npm run testjasmine.
* Start the server: npm run start.

## /test endpoint
* returns a status of 200 if the name, width and height of the image are correct.

## How to test the endpoint:
1. run the server by typing in the terminal: npm run start
2. type in your browser http://localhost:3000/test?name=fjord&width=200&height=200

## The application code is well tested using prettier and eslint and the functions are tested with jasmine.