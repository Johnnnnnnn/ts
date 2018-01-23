var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, './main.js'),
  output: {
    path: path.resolve(__dirname, '../../out'),
    
    // Public path refers to the location from the _browser's_ perspective, so 
    // `/public' would be referring to `mydomain.com/public/` instead of just
    // `mydomain.com`.  --https://stackoverflow.com/questions/36039146/webpack-dev-server-compiles-files-but-does-not-refresh-or-make-compiled-javascri
    // It makes pages do not update automatically by src changed when running on webpack-dev-derver.
    // Because it detects changes of `localhost:$port$publicPath` but `localhost:$port`. 
    /* publicPath: '/out/',*/
    filename: 'core.js'
  },
  //you can find introductions of most of loader on https://webpack.js.org/loaders/
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
     new webpack.ProvidePlugin(
      {
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        jQuery: 'jquery'
      }
    )
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },

  //It is for webpack-dev-server
  devServer: {  
    compress: true,
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    port: 9000
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
