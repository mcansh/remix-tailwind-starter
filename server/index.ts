/* eslint-disable no-console */
import express from 'express';
import { createRequestHandler } from '@remix-run/express';

const app = express();

app.use(express.static('public'));

app.all(
  '*',
  createRequestHandler({
    getLoadContext(req, res) {
      return { req, res };
    },
  })
);

const { PORT = 3000 } = process.env;

app.listen(PORT, () => {
  console.log(`Express server started on http://localhost:${PORT}`);
});
