const prompt = require('prompt-sync')({ sigint: true });

let firstName = prompt('Vorname?:');
let familyName = prompt('Name?:');
console.log('Hallo, ' + firstName + ' ' + familyName + '!');