const fs = require('fs');

var d4 = {
    d3a: function () {
        try {
            let answer = {"puzzle":"D4a", "answer": 0};

            // read the file
            const data = fs.readFileSync('./inputs/d4.txt', 'UTF-8');

            const map = data.split(/\r?\n/);

            
            
            return answer;
    
        } catch (err) {
            console.error(err);
        }
    },
    d4b: function () {
        try {
            let answer = {"puzzle":"D4b", "answer": 0};

            // read contents of the file
            const data = fs.readFileSync('./inputs/d4.txt', 'UTF-8');

            const map = data.split(/\r?\n/);

            
            
            return answer;
        
        } catch (err) {
            console.error(err);
        }
    }
}

module.exports = d4;

