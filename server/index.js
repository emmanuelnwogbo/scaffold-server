require('dotenv').config()

import express from 'express';
import bodyParser from 'body-parser';
const { mongoose } = require('./db/mongoose');
import cors from 'cors';

import AuthRoute from './routes/Auth';

const { SignUp, SignIn } = AuthRoute;

const PORT = process.env.PORT || 3030;
const app = express();

SignUp(app);
SignIn(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
  extended: false
}));
app.use(cors());

app.listen(PORT, error => {
  if (error) {
    return console.log(error)
  }

  return console.log(`server started on port ${PORT}`)
});