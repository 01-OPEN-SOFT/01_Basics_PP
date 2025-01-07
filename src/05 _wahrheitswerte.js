/* Berechnung Alter */

// Deklaration
let ageJohn, ageMark;
const birthYearJohn = 1980;
const birthYearMark = 1990;

// Berechnung Alter
// let year = 2025;
// ageJohn = year - birthYearJohn;
// ageMark = year - birthYearMark;

// console.log("ageMark: " + ageMark)
// console.log("ageJohn: " + ageJohn)

// Berechnung Alter

let date = new Date();
let year = date.getFullYear();

ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

console.log("ageMark: " + ageMark)
console.log("ageJohn: " + ageJohn)

