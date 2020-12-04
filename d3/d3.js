const fs = require('fs');

var d3 = {
    d3a: function () {
        try {
            let answer = {"puzzle":"D3a", "answer": 0};

            // read the file
            const data = fs.readFileSync('./d3/d3.txt', 'UTF-8');

            const map = data.split(/\r?\n/);

            let x = 0;
            for (let y=0; y < map.length; y++) {
                //console.log("x [%d] y [%d]", x, y);

                let square = map[y].charAt(x);
                if (square === "#") {
                    answer["answer"] = 1+answer["answer"];
                }
                
                x+=3;
                if (x >= map[y].length) {
                    x = x-map[y].length;
                }
                
            }
            
            return answer;
    
        } catch (err) {
            console.error(err);
        }
    },
    d3b: function () {
        try {
            let answer = {"puzzle":"D3b", "answer": -1};

            // read contents of the file
            const data = fs.readFileSync('./d3/d3.txt', 'UTF-8');

            const map = data.split(/\r?\n/);

            const slopes = [[1,1],[3,1],[5,1],[7,1],[1,2]];

            let x, trees;
            for (slope of slopes) {
                //console.log("\nSlope " + slope);
                x = 0;
                trees = 0;
   
                for (let y=0; y < map.length; y+=slope[1]) {
                    //console.log("x [%d] y [%d]", x, y);

                    let square = map[y].charAt(x);
                    if (square === "#") {
                        trees++;
                    }
                    
                    x+=slope[0];
                    if (x >= map[y].length) {
                        x = x-map[y].length;
                    }
                }
                answer["answer"] = answer["answer"]<0 ? trees : answer["answer"]*trees;
            }
            
            return answer;
        
        } catch (err) {
            console.error(err);
        }
    }
}

module.exports = d3;

