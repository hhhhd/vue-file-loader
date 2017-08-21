module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.vue$/,
        loaders: [
          {
            loader: 'vue-loader',
            options: vueLoaderConfig
          },
          {
            loader: 'vue-file-loader',
            options: {
              style: {
                filename: 'style.less',
                scoped: true
              }
            }
          }
        ],
      },
      // ...
    ]
  }
}
