module.exports = {
  devServer: {
    port: 8080,
  },
  css: {
    loaderOptions: {
      sass: {
        prependData : `@import "~@/assets/scss/style.scss";`,
      },
    },
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  }
};
