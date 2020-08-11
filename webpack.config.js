var path = require('path');

module.exports = {
  mode: "development",
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js',
    pathinfo: true
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['@babel/preset-env', '@babel/preset-react'],        
            plugins: [
              ["@babel/transform-runtime"]
            ]
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  devServer: {
    contentBase: './'
  }
};

