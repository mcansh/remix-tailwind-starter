const express = require('express');
const { createRequestHandler } = require('@remix-run/express');

const app = express();

app.use(express.static('public'));

// it doesn't appear fly.io will auto upgrade connections
app.use((req, res, next) => {
  if (req.get('X-Forwarded-Proto') === 'http') {
    return res.redirect(`https://${req.headers.host}${req.url}`);
  }
  return next();
});

app.all(
  '*',
  createRequestHandler({
    build: require('./build'),
  })
);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Express server started on http://localhost:${port}`);
});
