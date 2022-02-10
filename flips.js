import {countFlips, coinFlips} from "./modules/coin.mjs";

import {createRequire} from 'module';

let require = createRequire(import.meta.url);

let input = require('minimist')(process.argv.slice(2));

let num = input['number'] || 1;

let flip = coinFlips(num);

console.log(flip);

let result = countFlips(flip);

console.log(result);

