const fs = require('fs');
const readline = require('readline');

var distinct = str => [...new Set(str)].join('');

var d8 = {
    d8a: function () {
        try {
            let answer = {"puzzle":"d8a", "answer": 0};

            const data = fs.readFileSync('./inputs/d8.txt', 'UTF-8');

            let program = data.split(/\r?\n/);

            program = program.map(i => i.split(" ").concat(0));

            let accumulator = 0;
            let line = 0;
            let loop = 1;

            while (loop <= 1) {
                instruction = program[line];
                let arg = parseInt(instruction[1]);
                program[line][2] = program[line][2]+1;
                loop = program[line][2];

                if(loop <= 1)
                switch (instruction[0]) {
                    case 'acc':
                        accumulator += arg;
                        line++;
                        break;
                    case 'jmp':
                        line += arg;
                        break;
                    case 'nop':
                        line++;
                        break;
                    default:
                        return -1;
                }
            }
            
            answer.answer = accumulator;
            answer["line"] = line;

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

