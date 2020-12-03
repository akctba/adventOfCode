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
                console.log("x [%d] y [%d]", x, y);

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
    d2b: function () {
        try {
            let answer = {"puzzle":"D3b", "answer": 0};

            // read contents of the file
            const data = fs.readFileSync('./d3/d3.txt', 'UTF-8');
            //const data = fs.readFileSync('./d2/test.txt', 'UTF-8');
        
            const passwords = data.split(/\r?\n/);

            for (line of passwords) {
                if (line.length <= 3) continue;
                let rule = line.split(" ");
                let pwd = line.split(": ")[1];

                let p1 = parseInt(rule[0].split("-")[0]);
                let p2 = parseInt(rule[0].split("-")[1]);
                let key = rule[1].replace(":","");

                let match = pwd.charAt(p1-1) == key ? pwd.charAt(p2-1) != key : pwd.charAt(p2-1) == key;
            
                // console.log("p1 [%d] p2 [%d] Key [%s] password [%s] ", p1, p2, key, pwd);
                // console.log("[%s] [%s] [%s] [%s] [%s]", pwd, key, pwd.charAt(p1-1), pwd.charAt(p2-1), match)

                if (match) {
                    answer["answer"] = answer["answer"]+1;
                }
            }
            
            return answer;
        
        } catch (err) {
            console.error(err);
        }
    }
}

module.exports = d3;

