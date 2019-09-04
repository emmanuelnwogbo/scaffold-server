import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const PORT = process.env.PORT || 3030;

const app = express();

app.listen(PORT, error => {
  if (error) {
    return console.log(error)
  }

  return console.log(`server started on port ${PORT}`)
});