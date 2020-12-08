const fs = require('fs');
const readline = require('readline');

var d4 = {
    d4a: function () {
        try {
            let answer = {"puzzle":"D4a", "answer": 0};

            const data = fs.readFileSync('./inputs/d4.txt', 'UTF-8');

            let passports = data.split(/\r?\n\r?\n/);

            passports = passports.map(p => p.replace(/\n/g, " ").split(" "));
            answer["total"] = passports.length;

            passports = passports.map(p => p.filter(a => {
                return a.indexOf("cid") != 0;
            }));
            passports = passports.filter(p => {
                return p.length >= 7
            });

            answer.answer = passports.reduce((count, pass) => {
                if (pass.length < 7) return count;
                let byr = false;
                let iyr = false;
                let eyr = false;
                let hgt = false;
                let hcl = false;
                let ecl = false;
                let pid = false;
                for (att of pass) {
                    if (att.indexOf("byr") === 0) byr = true;
                    if (att.indexOf("iyr") === 0) iyr = true;
                    if (att.indexOf("eyr") === 0) eyr = true;
                    if (att.indexOf("hgt") === 0) hgt = true;
                    if (att.indexOf("hcl") === 0) hcl = true;
                    if (att.indexOf("ecl") === 0) ecl = true;
                    if (att.indexOf("pid") === 0) pid = true;
                }
                return count + ((byr && iyr && eyr && hgt && hcl && pid)?1:0);
            }, 0)
            
            return answer;
    
        } catch (err) {
            console.error(err);
        }
    },
    d4b: function () {
        try {
            let answer = {"puzzle":"D4b", "answer": 0};

            

            
            
            return answer;
        
        } catch (err) {
            console.error(err);
        }
    }
}

module.exports = d4;

