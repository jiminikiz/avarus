const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        import: [
          path.resolve(__dirname, './node_modules/milligram-stylus/dist/milligram.styl')
        ]
      }
    }
  },
}