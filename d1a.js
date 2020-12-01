const fs = require('fs');
const { exit } = require('process');

try {
    // read contents of the file
    const data = fs.readFileSync('d1a.txt', 'UTF-8');

    // split the contents by new line
    const expenses = data.split(/\r?\n/).map((value) => parseInt(value));

    for (let i=0; i<=expenses.length; i++) {
        for (let j=1; j<=expenses.length; j++) {
            if (i === j) continue;
            let sum = expenses[i] + expenses[j];
            if (sum === 2020) {
                console.log("a: " + expenses[i]);
                console.log("b: " + expenses[j]);
                console.log("a*b: " + (expenses[i]*expenses[j]));
                break;
            }
        }
    }

} catch (err) {
    console.error(err);
}
