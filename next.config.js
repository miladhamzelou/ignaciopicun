const webpack = require('webpack')

module.exports = {
  webpack: (cfg) => {
    cfg.plugins.push(
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`
      })
    )

    return cfg
  }
}
