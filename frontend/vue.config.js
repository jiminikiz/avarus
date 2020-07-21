const path = require('path');

const chainWebpack = config => {
  config.module.rule('csv')
    .test(/\.csv$/)
    .use('csv')
    .loader('csv-loader')
    .options({
      dynamicTyping: true,
      header: true,
      skipEmptyLines: true
    });
}

module.exports = {
  chainWebpack,
  css: {
    loaderOptions: {
      stylus: {
        import: [
          path.resolve(__dirname, './src/assets/styles/index.styl'),
          path.resolve(__dirname, './node_modules/milligram-stylus/dist/milligram.styl'),
        ]
      },
    }
  },
}