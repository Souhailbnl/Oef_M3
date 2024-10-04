import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});


let hoogte = await userInput.question('Geef een hoogte:');

for ( let i = 0; i <= hoogte; i++)
    {

        for (let j = 0 ; j < hoogte; j++)
        {
            process.stdout.write("*");
        }
        
        console.log(" ")
    }

    for ( let i = 0; i >= hoogte; i--)
        {
    
            for (let j = 1 ; j > hoogte; j++)
            {
                console.log(" ")
            }
            
            process.stdout.write("*");
        }

    process.exit();