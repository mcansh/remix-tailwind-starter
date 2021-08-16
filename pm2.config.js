module.exports = {
  apps: [
    {
      name: 'Remix',
      script: 'remix run',
      ignore_watch: ['.'],
    },
    {
      name: 'CSS',
      script: 'postcss styles --base styles --dir app/styles --ext css -w',
      ignore_watch: ['.'],
    },
  ],
};
