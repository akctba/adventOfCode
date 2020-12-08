const d1 = require('./puzzles/d1');
const d2 = require('./puzzles/d2');
const d3 = require('./puzzles/d3');
const d4 = require('./puzzles/d4');
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

            break;
        case "6":

            break;
        case "7":

            break;
        case "8":

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

