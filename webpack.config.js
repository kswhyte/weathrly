const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
}

module.exports = {
  entry: {
    main: PATHS.app + '/index.js'
  },
  output: {
    path: PATHS.build,
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.scss$/, loader: "style!css!sass" },
      { test: /\.jsx?$/, exclude: '/node_modules/', loader: 'babel-loader' },
      { test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
           'file?hash=sha512&digest=hex&name=[hash].[ext]',
           'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
       ]}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: PATHS.build + '/index.html',
      title: 'Weathrly',
      inject: 'body'
    })
  ],
  resolve: {
    extensions: ['', '.scss', '.css', '.js', '.json', '.jsx', '.svg', '.png']
  }
}
