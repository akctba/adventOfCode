const fs = require('fs');
const readline = require('readline');

var distinct = str => [...new Set(str)].join('');

var d7 = {
    d7a: function () {
        try {
            let answer = {"puzzle":"d7a", "answer": 0};

            const data = fs.readFileSync('./inputs/d7.txt', 'UTF-8');

            let groups = data.split(/\r?\n\r?\n/);

            

            return answer;
    
        } catch (err) {
            console.error(err);
        }
    },
    d7b: function () {
        try {
            let answer = {"puzzle":"d7b", "answer": 0};
            
            
            const data = fs.readFileSync('./inputs/d7.txt', 'UTF-8');

            let groups = data.split(/\r?\n\r?\n/);

            

            return answer;
        
        } catch (err) {
            console.error(err);
        }
    }
}

module.exports = d7;

