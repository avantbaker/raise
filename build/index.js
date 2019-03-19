/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.whiteBright(''));
console.log(chalk.whiteBright('==============='));
console.log(chalk.whiteBright(''));
console.log(chalk.magenta('Generating minified bundle for production. This will take a moment...'))
console.log(chalk.whiteBright(''));
console.log(chalk.whiteBright('==============='));
console.log(chalk.whiteBright(''));

webpack(webpackConfig).run((err) => {
  if (err) {
    console.log(chalk.red(err));
    return 1;
  }
  return 0;
})
