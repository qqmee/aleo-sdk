const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');
const zlib = require('zlib');

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    filename: 'dist.js',
    path: path.resolve(__dirname, 'dist'),
  },
  experiments: {
    asyncWebAssembly: true,
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new CompressionPlugin({
      filename: '[path][base].gz',
      algorithm: 'gzip',
      test: /\.(js|css|html|svg|wasm)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new CompressionPlugin({
      filename: '[path][base].br',
      algorithm: 'brotliCompress',
      test: /\.(js|css|html|svg|wasm)$/,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 6,
        },
      },
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
  devServer: {
    compress: true,
    port: 9000,
  },
};
