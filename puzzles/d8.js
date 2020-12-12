const fs = require('fs');
const readline = require('readline');

var distinct = str => [...new Set(str)].join('');

var d8 = {
    d8a: function () {
        try {
            let answer = {"puzzle":"d8a", "answer": 0};

            const data = fs.readFileSync('./inputs/d8.txt', 'UTF-8');

            let groups = data.split(/\r?\n\r?\n/);

            

            return answer;
    
        } catch (err) {
            console.error(err);
        }
    },
    d8b: function () {
        try {
            let answer = {"puzzle":"d8b", "answer": 0};
            
            
            const data = fs.readFileSync('./inputs/d8.txt', 'UTF-8');

            let groups = data.split(/\r?\n\r?\n/);

            

            return answer;
        
        } catch (err) {
            console.error(err);
        }
    }
}

module.exports = d8;

