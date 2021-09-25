import express from 'express';
import tweetsRouter from './tweetsRouter.js';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import 'express-async-error';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));

app.use('/tweets', tweetsRouter);

//처리해 줄 수 없는 url일 경우
app.use((req, res, next) => {
  console.log('end');
  res.sendStatus(404);
});

// error 처리
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('sorry try later');
});

app.listen(8000, () => {
  console.log('get in server');
});
