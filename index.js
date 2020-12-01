const express = require('express');
const { createRequestHandler } = require('@remix-run/express');

const app = express();

app.all(
  '*',
  createRequestHandler({
    enableSessions: false,
    getLoadContext() {},
  })
);

module.exports = app;
