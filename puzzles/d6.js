const fs = require('fs');
const readline = require('readline');

var distinct = str => [...new Set(str)].join('');

var d6 = {
    d6a: function () {
        try {
            let answer = {"puzzle":"d6a", "answer": 0};

            const data = fs.readFileSync('./inputs/d6.txt', 'UTF-8');

            let groups = data.split(/\r?\n\r?\n/);

            groups = groups.map(g => {
                return distinct(g.replace(/\n/g, ''));
            })

            //console.log(groups);

            answer.answer = groups.reduce((count, group) => {
                return count + group.length;
            }, 0);

            return answer;
    
        } catch (err) {
            console.error(err);
        }
    },
    d6b: function () {
        try {
            let answer = {"puzzle":"d6b", "answer": 0};
            
            







            return answer;
        
        } catch (err) {
            console.error(err);
        }
    }
}

module.exports = d6;

