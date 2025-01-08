/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// // Funktionsdeklaration
// function test() {
//   console.log('Hallo, Manuel!'); // Hallo, Manuel!
// }

// // Funktionsaufruf
// test();

// /***** Funktionen 02a *****/
// // 2a. Parametrisierung + Datenübergabe von INNEN

// function ausgabeNamen() {
//   let firstName = 'Manuel';
//   console.log(`Hallo, ${firstName}!`);
//   console.log(`--------------------`);
// }

// ausgabeNamen(); // Hallo, Manuel!

// /***** Funktionen 02b *****/
// // 2b. Parametrisierung + Datenübergabe von AUSSEN

// // Funktion(Parameter)
// function ausgabeName2(firstName) {
//   console.log(`Hallo, ${firstName}!`);
// }
// ausgabeName2('Falk'); // Argumente werden übergeben --> Daten für Übergabe

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente
function ausgabeNamenParams(firstName, secondName) {
  console.log(`Hallo, ${firstName} ${secondName}`);
}

ausgabeNamenParams('Max', 'Mütze'); // Hallo, Max Mütze

const prompt = require('prompt-sync')({ sigint: true });
ausgabeNamenParams(prompt('Vorname? :'), prompt('Name? :')); // Piping

/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Funktionalitäten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

function ausgabeNamenSRP(firstName, secondName) {
  // 1. Funktionalität: string composing
  const GAP = ' ';
  let outputStr = 'Hallo,' + GAP + firstName + GAP + secondName + '!';

  // 2. Funktionalität: string output
  console.log(outputStr);
}
