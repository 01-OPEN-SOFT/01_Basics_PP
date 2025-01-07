// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
const ageJohn = 32;
const ageMark = 35;

// Deklaration
let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
console.log("ageJohn: " + ageJohn);     // ageJohn: 30
console.log("ageMark: " + ageMark);     // ageMark: 30
console.log("isJohnOlder: " + isJohnOlder);     // isJohnOlder: false
console.log("isJohnEqual: " + isJohnEqual);     // isJohnEqual: true
console.log("------------------");

/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)


if (isJohnOlder)
{
    console.log("John ist älter!");     // John ist älter
}
