const path = require('path');

module.exports = {
    mode: 'development',
    context: __dirname,
    entry: {
        scratchTests: './scratch.tests.ts'
    },
    output: {
      path: path.join(__dirname, 'dist'),
      libraryTarget: 'commonjs',
      filename: '[name].js',
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'babel-loader',
        },
      ],
    },
    target: 'web',
    externals: /k6(\/.*)?/,
    //externals: /^(k6|https?\:\/\/)(\/.*)?/,
    devtool: 'source-map',
    stats: {
      colors: true,
    },
};
