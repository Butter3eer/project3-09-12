import * as fs from 'node:fs';
import * as szam from './main.mjs';

console.log(szam.valamilyenSzam);
console.log(szam.felezes(szam.valamilyenSzam));

let t = [];
for (let i = 0; i < 100; i++) {
    t.push(Math.random());
}

//console.log(t);

const file = fs.openSync('kicsik.txt', 'w');
for (let elem of t) {
    if (elem < 0.2) {
        fs.writeSync(file, elem.toString() + "\n");
    }
}

fs.closeSync(file);