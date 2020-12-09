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

            const data = fs.readFileSync('./inputs/d4.txt', 'UTF-8');

            let passports = data.split(/\r?\n\r?\n/);

            passports = passports.map(p => p.replace(/\n/g, " ").split(" "));
            answer["total"] = passports.length;

            passports = passports.map(p => p.sort().filter(a => {
                return a.indexOf("cid:") < 0;
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
                    if (att.indexOf("byr") === 0) {
                        let birthYear = att.split(":")[1];
                        byr = (birthYear >= 1920 && birthYear <= 2002);
                    };
                    if (att.indexOf("iyr") === 0) {
                        let iy = att.split(":")[1];
                        iyr = (iy >= 2010 && iy <= 2020);
                    };
                    if (att.indexOf("eyr") === 0) {
                        let ey = att.split(":")[1];
                        eyr = (ey >= 2020 && ey <= 2030);
                    };
                    if (att.indexOf("hgt") === 0) {
                        let hg = att.split(":")[1];
                        if (hg.indexOf("cm") > 0) {
                            let hight = parseInt(hg.replace("cm", ""));
                            hgt = hight >= 150 && hight <= 193;
                        } else if (hg.indexOf("in") > 0) {
                            let hight = parseInt(hg.replace("in", ""));
                            hgt = hight >= 59 && hight <= 76;
                        }
                    };
                    if (att.indexOf("hcl") === 0) {
                        let hair = att.split(":")[1];
                        var patt = /#[0-9a-f]{6}/g;
                        hcl = patt.test(hair);
                    };
                    if (att.indexOf("ecl") === 0) {
                        let eye = att.split(":")[1];
                        var patt = /amb|blu|brn|gry|grn|hzl|oth/;
                        ecl = patt.test(eye)
                    };
                    if (att.indexOf("pid") === 0) {
                        let passId = att.split(":")[1];
                        passId = passId.trim();
                        var patt = /\d{9}/g;
                        pid = patt.test(passId);
                    };
                }
                //if (!(byr && iyr && eyr && hgt && hcl && pid)) console.log("FAIL >> " + pass);
                return count + ((byr && iyr && eyr && hgt && hcl && pid)?1:0);
            }, 0)
            
            return answer;
        
        } catch (err) {
            console.error(err);
        }
    }
}

module.exports = d4;

