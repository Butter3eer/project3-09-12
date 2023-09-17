import * as fs from 'node:fs';

const file = fs.openSync('hello.txt', 'w');

fs.writeSync(file, 'Hello World!');
fs.closeSync(file);

export let valamilyenSzam = 30;

export function felezes(szam) {
    let eredmeny = szam / 2;

    return eredmeny;
}