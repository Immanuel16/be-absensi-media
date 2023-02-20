import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
// import helmet from 'helmet';
// import compression from 'compression';
import config from './configs/env.config';
import { db } from './models';
import v1 from './routes/v1';
import { httpStatus } from './variables/response.variable';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, X-No-Compression');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Content-Type', 'application/json');

  next();
});
app.use('/v1', v1);

app.get('/', (req, res) => {
  res.send({
    name: config.app.name,
    host: config.app.host,
    version: config.app.version,
    author: config.app.author,
  });
});

// catch 404 and forward to error handler
app.use((req, res) => {
  res.status(httpStatus.ERROR_NOT_FOUND).json({
    message: 'Not Found',
    requestedUrl: req.path,
    userAgent: req.headers['user-agent'],
  });
});

// error handler
app.use((err, req, res) => {
  res.status(err.status).json({
    message: 'Something Went Terribly Wrong on Our Side :(',
    requestedUrl: req.path,
    userAgent: req.headers['user-agent'],
  });
});

export default app;