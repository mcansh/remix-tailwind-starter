// express uses module.exports = () => {}
// and this makes TypeScript sad...
// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require("express");

import { createRequestHandler } from "@remix-run/express";

let app = express();

app.use(express.static("public"));

app.all(
  "*",
  createRequestHandler({
    getLoadContext(req, res) {
      return { req, res };
    },
  })
);

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Express server started on http://localhost:${port}`);
});
