const fs = require('fs');

var d2 = {
    d2a: function () {
        try {
            let answer = {"puzzle":"D2a", "answer": 0};

            // read the file
            const data = fs.readFileSync('./d2/d2.txt', 'UTF-8');

            const passwords = data.split(/\r?\n/);

            for (line of passwords) {
                if (line.length <= 3) continue;
                let rule = line.split(" ");
                let pwd = line.split(": ")[1];

                let min = rule[0].split("-")[0];
                let max = rule[0].split("-")[1];
                let key = rule[1].replace(":","");

                let pieces = (pwd.split(key).length)-1;
            
                //console.log("Min [%d] Max [%d] Key [%s] password [%s] pieces [%d]", min, max, key, pwd, pieces);

                if (pieces >= min && pieces <= max) {
                    answer["answer"] = answer["answer"]+1;
                }
            }
            
            return answer;
    
        } catch (err) {
            console.error(err);
        }
    },
    d2b: function () {
        try {
            let answer = {"puzzle":"D2b", "answer": 0};

            // read contents of the file
            const data = fs.readFileSync('./d2/d2.txt', 'UTF-8');
        
            const passwords = data.split(/\r?\n/);

            for (line of passwords) {
                if (line.length <= 3) continue;
                let rule = line.split(" ");
                let pwd = line.split(": ")[1];

                let p1 = parseInt(rule[0].split("-")[0]);
                let p2 = parseInt(rule[0].split("-")[1]);
                let key = rule[1].replace(":","");
            
                // console.log("p1 [%d] p2 [%d] Key [%s] password [%s] ", p1, p2, key, pwd);
                // console.log("[%s] [%s] [%s] [%s] [%s]", pwd, key, pwd.charAt(p1+1), pwd.charAt(p2+1), (pwd.charAt(p1+1) == key || pwd.charAt(p2+1) == key))

                if (pwd.charAt(p1+1) == key ? pwd.charAt(p2+1) != key : pwd.charAt(p2+1) == key){
                    answer["answer"] = answer["answer"]+1;
                }
            }
            
            return answer;
        
        } catch (err) {
            console.error(err);
        }
    }
}

module.exports = d2;

