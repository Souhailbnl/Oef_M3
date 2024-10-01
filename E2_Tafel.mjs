import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question('Geef een getal:'));

for(let i = 0; i <= 10; i++){

    let resultaat;
    resultaat = getal * (i);
    console.log(getal + " " + "x "+ i + " = " + resultaat);

}


process.exit();