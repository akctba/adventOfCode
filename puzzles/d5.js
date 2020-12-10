const fs = require('fs');
const readline = require('readline');

let ids = [];

var d5 = {
    d5a: function () {
        try {
            let answer = {"puzzle":"d5a", "answer": 0};

            const data = fs.readFileSync('./inputs/d5.txt', 'UTF-8');

            let passes = data.split(/\r?\n/);

            let highest = -1;

            

            for (pass of passes) {
                minRow = 0;
                maxRow = 127;
                row = 0;
                minCol = 0;
                maxCol = 7;
                col = 0;

                for (let i=0; i<7; i++) {
                    let r = pass.charAt(i);
                    let center = Math.trunc((maxRow-minRow)/2)+minRow;
                    if (r == 'F') {
                        // minRow the same
                        maxRow = center;
                    } else if (r == 'B') {
                        minRow = center+1;
                        //maxRow the same
                    }
                    //console.log("%d %s %d %d", i, r, minRow, maxRow)
                }

                for (let i=7; i<=9; i++) {
                    let r = pass.charAt(i);
                    let middle = Math.trunc((maxCol-minCol)/2)+minCol;
                    if (r == 'L') {
                        // minCol the same
                        maxCol = middle;
                    } else if (r == 'R') {
                        minCol = middle+1;
                        // maxCol the same
                    }

                    //console.log("%d %s %d %d", i, r, minCol, maxCol);
                }

                let seatId = minRow * 8 + minCol;
                ids.push(seatId);

                highest = (seatId > highest ? seatId : highest);
            }

            answer.answer = highest;
            
            return answer;
    
        } catch (err) {
            console.error(err);
        }
    },
    d5b: function () {
        try {
            let answer = {"puzzle":"d5b", "answer": 0};
            
            if(!!ids) {
                ids.sort();
                for(let i=0; i < ids.length; i++) {
                    if(ids[i+1] - ids[i] > 1) {
                        answer.answer = ids[i]+1;
                        break;
                    }
                }
            }

            return answer;
        
        } catch (err) {
            console.error(err);
        }
    }
}

module.exports = d5;

