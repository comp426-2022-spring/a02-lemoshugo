import * as coinFunctions from './modules/coin.mjs';

import {createRequire} from 'module';

let require = createRequire(import.meta.url);

let input = require('minimist')(process.argv.slice(2));

let guess = input['call'];

if (guess != 'heads' && guess != 'tails') {
    console.log("Error: no input.");

    console.log("Usage: node guess-flip --call[heads|tails]");

} else {
    console.log(coinFunctions.flipACoin(guess));
}