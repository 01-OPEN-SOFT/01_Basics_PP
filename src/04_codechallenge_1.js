/*********   CODE CHALLENGE 01 **********/

/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({ sigint: true });

let zahl1, zahl2, zahl3;
zahl1 = parseInt(prompt('Bitte erste Zahl eingeben: '));
zahl2 = parseInt(prompt('Bitte zweite Zahl eingeben: '));
zahl3 = zahl1 + zahl2;

console.log('Die Summe der Zahlen ist: summe ' + zahl3);
