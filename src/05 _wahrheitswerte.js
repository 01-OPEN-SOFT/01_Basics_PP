/* Berechnung Alter */

// Deklaration
let ageJohn, ageMark;
const birthYearJohn = 1980;
const birthYearMark = 1990;

let date = new Date();
let year = date.getFullYear();

ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

console.log("ageMark: " + ageMark)
console.log("ageJohn: " + ageJohn)

// Test
let isJohnOlder;    // Is John older= --> true | false
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

console.log("isJohnOlder = " + isJohnOlder);    // isJohnOlder = true
console.log("isJohnOlder = " + isJohnEqual);    // isJohnEqual = false
