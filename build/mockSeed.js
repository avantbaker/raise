import jsf from 'json-schema-faker';
import { schema } from './mockSchema';
import fs from 'fs';
import chalk from 'chalk';

jsf.extend('faker', () => require('faker'));

/* eslint-disable no-console */

const json = JSON.stringify(jsf.generate(schema));

fs.writeFile("./api/db.json", json, function(err) {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Mock data generated"));
    console.log(chalk.whiteBright(''));
    console.log(chalk.whiteBright('==============='));
    console.log(chalk.whiteBright(''));
  }
});
