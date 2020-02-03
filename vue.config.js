const path = require('path')
module.exports = {
  pages: {
    index: {
      entry: 'test/main.js',
      // PAGE ENRTY
      template: 'public/index.html',
      // TEMPLATE SOURCE
      filename: 'index.html'
      // OUTPUT OF DIST/INDEX.HTML
    }
  },

  //使 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages')).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
  }
}
