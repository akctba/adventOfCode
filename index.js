const d1 = require('./puzzles/d1');
const d2 = require('./puzzles/d2');
const d3 = require('./puzzles/d3');
const d4 = require('./puzzles/d4');
const d5 = require('./puzzles/d5');
const d6 = require('./puzzles/d6');
const d7 = require('./puzzles/d7');
const d8 = require('./puzzles/d8');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question(`Do you wanna run which advent puzzle? (1-25)\n`, (puzzle) => {

    console.log();

    switch (puzzle) {
        case "1":
            let w_d1a = d1.d1a();
            console.log(JSON.stringify(w_d1a));
            
            let w_d1b = d1.d1b();
            console.log(JSON.stringify(w_d1b));
            break;
        case "2":
            let w_d2a = d2.d2a();
            console.log(JSON.stringify(w_d2a));
            
            let w_d2b = d2.d2b();
            console.log(JSON.stringify(w_d2b));
            break;
        case "3":
            let w_d3a = d3.d3a();
            console.log(JSON.stringify(w_d3a));

            let w_d3b = d3.d3b();
            console.log(JSON.stringify(w_d3b));
            break;
        case "4":
            let w_d4a = d4.d4a();
            console.log(JSON.stringify(w_d4a));

            let w_d4b = d4.d4b();
            console.log(JSON.stringify(w_d4b));

            break;
        case "5":
            let w_d5a = d5.d5a();
            console.log(JSON.stringify(w_d5a));

            let w_d5b = d5.d5b();
            console.log(JSON.stringify(w_d5b));
            break;
        case "6":
            let w_d6a = d6.d6a();
            console.log(JSON.stringify(w_d6a));

            let w_d6b = d6.d6b();
            console.log(JSON.stringify(w_d6b));
            break;
        case "7":
            let w_d7a = d7.d7a();
            console.log(JSON.stringify(w_d7a));

            let w_d7b = d7.d7b();
            console.log(JSON.stringify(w_d7b));
            break;
        case "8":
            let w_d8a = d8.d8a();
            console.log(JSON.stringify(w_d7a));

            let w_d8b = d8.d8b();
            console.log(JSON.stringify(w_d8b));
            break;
        case "9":

            break;
        case "10":

            break;
        default:
            console.log("Okey, bye!");
            break;
    }
    rl.close();
});

