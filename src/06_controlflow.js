// // Entscheidungsstrukturen | control flow

// // Deklaration + Assignment
// const ageJohn = 35+;
// const ageMark = 35;

// // Deklaration
// let isJohnOlder, isJohnEqual;

// // Test | Logische Aussage
// isJohnOlder = ageJohn > ageMark;
// isJohnEqual = ageJohn == ageMark;

// // Ausgabe
// console.log('ageJohn: ' + ageJohn); // ageJohn: 30
// console.log('ageMark: ' + ageMark); // ageMark: 30
// console.log('isJohnOlder: ' + isJohnOlder); // isJohnOlder: false
// console.log('isJohnEqual: ' + isJohnEqual); // isJohnEqual: true
// console.log('------------------');

// /************ IF - ELSE  ************/
// // mit Alternative
// // entweder ja oder nein

// if (ageJohn > ageMark) {
//   console.log('John ist älter!');
// }
// // alternative IF Zweig
// else if (isJohnEqual) {
//   console.log('John ist gleich alt');
// } else {
//   console.log('John ist junger!');
// }

/****** Fallunterscheidung / SWITCH|CASE 1 ******/

// const firstName = 'Jane';
// let job;

// job = 'driver'; // .. fährt TAXI! / UBER
// job = 'diver'; // .. taucht im Rhein!
// job = 'artist'; // .. malt ein Bild!
// job = 'pilot'; // .. macht etwas anderes! --> default
// job = 'teacher'; // .. unterrichtet!
// job = 'instructor'; // .. unterrichtet!

// switch (job) {
//   case 'driver': // job = driver
//     console.log(firstName + ' fährt TAXI!');
//     break;

//   case 'diver': // job = driver
//     console.log(firstName + ' taucht im Rhein!');
//     break;

//   case 'artist': // job = artist
//     console.log(firstName + ' malt ein Bild!');
//     break;

//   case 'teacher': // job = teacher
//   case 'instructor': // job = instructor
//     console.log(firstName + ' unterrichtet!');
//     break;

//   default: // WICHTIG!!! Immer als erstes deklarieren.
//     console.log(firstName + ' macht etwas anderes!');
//     break;
// }


/********  Fallunterscheidung / SWITCH|CASE 2 *******/

const cond = false;
const value = 2;

switch (cond) {
    case (value == 1):
        console.log("Value hat den Wert 1.");
        break;
    case (value == 2):
        console.log("Value hat den Wert 2.");
        break;
    default:
        console.log("Value hat einen anderen Wert.");
        break;
}
