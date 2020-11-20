import express from "express";
import { createRequestHandler } from "@remix-run/express";

const app = express();

app.use(express.static("public"));

app.all(
  "*",
  createRequestHandler({
    getLoadContext(req, res) {
      return { req, res };
    },
  })
);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Express server started on http://localhost:${port}`);
});
