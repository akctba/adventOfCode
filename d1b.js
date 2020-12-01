const fs = require('fs');
const { exit } = require('process');

try {
    // read contents of the file
    const data = fs.readFileSync('d1a.txt', 'UTF-8');

    // split the contents by new line
    const expenses = data.split(/\r?\n/).map((value) => parseInt(value));

    for (let i=0; i<=expenses.length; i++) {
        for (let j=1; j<=expenses.length; j++) {
            for (let k=2; k<=expenses.length; k++) {
                if (i === j) continue;
                if (j === k) continue;
                if (i === k) continue;

                let sum = expenses[i] + expenses[j] + expenses[k];
                if (sum === 2020) {
                    console.log("a: " + expenses[i]);
                    console.log("b: " + expenses[j]);
                    console.log("c: " + expenses[k]);
                    console.log("a*b*c: " + (expenses[i]*expenses[j]*expenses[k]));
                    break;
                }
            }
        }
    }

} catch (err) {
    console.error(err);
}
