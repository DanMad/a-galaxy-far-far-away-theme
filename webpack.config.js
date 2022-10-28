const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');
const path = require('path');
const rogueSquadronTheme = require('./src/rogue-squadron-theme.js');
const theEmpireTheme = require('./src/the-empire-theme.js');

module.exports = {
  mode: 'production',
  output: {
    clean: true,
    path: path.join(__dirname, 'themes'),
  },
  plugins: [
    new GenerateJsonPlugin('rogue-squadron-theme.json', rogueSquadronTheme),
    new GenerateJsonPlugin('the-empire-theme.json', theEmpireTheme),
    new RemovePlugin({
      after: {
        root: './themes',
        include: [ 'main.js' ],
      }
    }),
  ],
  resolve: {
    extensions: ['.js'],
  },
};
