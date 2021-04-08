const path = require('path');

const express = require('express');
const { createRequestHandler } = require('@remix-run/express');

const app = express();

app.use(express.static('public', { immutable: true, maxAge: '1y' }));

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
