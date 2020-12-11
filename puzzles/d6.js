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
            
            
            const data = fs.readFileSync('./inputs/d6.txt', 'UTF-8');

            let groups = data.split(/\r?\n\r?\n/);

            groups = groups.map(g => {
                return g.split(/\r?\n/).sort((a,b)=>{return a.length-b.length});
            })

            groups.forEach((group, i) => {
                //console.log("Group:\n" + group);
                let members = group.length;

                let first = group[0];

                for(q of first) {
                    let count = 0;
                    for (memb of group) {
                        if(memb.indexOf(q) >= 0) {
                            count++;
                        }
                    }
                    if (members === count) {
                        answer.answer = answer.answer+1;
                    }
                }
            });

            return answer;
        
        } catch (err) {
            console.error(err);
        }
    }
}

module.exports = d6;

