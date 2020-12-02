const fs = require('fs');

var d1 = {
    d1a: function () {
        try {
            let answer = {"puzzle":"D1a"};

            // read contents of the file
            const data = fs.readFileSync('./d1/d1.txt', 'UTF-8');
    
            // split the contents by new line
            const expenses = data.split(/\r?\n/).map((value) => parseInt(value));
    
            for (let i=0; i<=expenses.length; i++) {
                for (let j=1; j<=expenses.length; j++) {
                    if (i === j) continue;
                    let sum = expenses[i] + expenses[j];
                    if (sum === 2020) {
                        answer["a"] = expenses[i];
                        answer["b"] = expenses[j];
                        answer["answer"] = expenses[i]*expenses[j];

                        return answer;
                    }
                }
            }
    
        } catch (err) {
            console.error(err);
        }
    },
    d1b: function () {
        try {
            let answer = {"puzzle":"D1b"};

            // read contents of the file
            const data = fs.readFileSync('./d1/d1.txt', 'UTF-8');
        
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

                            answer["a"] = expenses[i];
                            answer["b"] = expenses[j];
                            answer["c"] = expenses[k];
                            answer["answer"] = expenses[i]*expenses[j]*expenses[k];

                            return answer;
                        }
                    }
                }
            }
        
        } catch (err) {
            console.error(err);
        }
    }
}

module.exports = d1;

