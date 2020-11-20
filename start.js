if (process.env.NODE_ENV === 'production') {
  require('./build/server');
} else {
  require('ts-node').register({
    dir: __dirname,
    pretty: true,
    transpileOnly: true,
    ignore: ['/node_modules/, /__tests__/'],
    project: require.resolve('./tsconfig.json'),
  });
  require('./server');
}
