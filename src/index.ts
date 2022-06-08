import express from 'express';
import displayImgRoute from './Routes/resizeImgRoute';

const app = express();
app.use('/', displayImgRoute);

module.exports = app;
