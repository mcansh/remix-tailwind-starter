const express = require("express");
const { createRequestHandler } = require("@remix-run/express");

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
