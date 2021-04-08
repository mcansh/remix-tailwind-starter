const path = require('path');

const express = require('express');
const { createRequestHandler } = require('@remix-run/express');

const app = express();

app.use(
  express.static('public', {
    setHeaders(res, absolutePath) {
      if (process.env.NODE_ENV === 'production') {
        const filePath = path.relative(process.cwd(), absolutePath);
        if (filePath.startsWith('public/build/')) {
          res.set('Cache-Control', 'public, max-age=31536000');
        }
      }
    },
  })
);

// it doesn't appear fly.io will auto upgrade connections
app.use((req, res, next) => {
  if (req.get('X-Forwarded-Proto') === 'http') {
    return res.redirect(`https://${req.headers.host}${req.url}`);
  }
  return next();
});

if (process.env.NODE_ENV !== 'production') {
  const cwd = process.cwd();
  app.all('*', (req, res) => {
    for (const key in require.cache) {
      if (key.startsWith(path.join(cwd, 'build'))) {
        delete require.cache[key];
        // eslint-disable-next-line no-console
        console.log('deleted', key);
      }
    }
    return createRequestHandler({
      build: require('./build'),
    })(req, res);
  });
} else {
  app.all(
    '*',
    createRequestHandler({
      build: require('./build'),
    })
  );
}

const port = process.env.PORT || 3000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Express server started on http://localhost:${port}`);
});
