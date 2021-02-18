module.exports = {
  apps: [
    {
      name: 'Vercel',
      script: 'vc dev',
      ignore_watch: ['.'],
      env: {
        NODE_ENV: 'development',
      },
    },
    {
      name: 'Remix',
      script: 'remix run',
      ignore_watch: ['.'],
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};
