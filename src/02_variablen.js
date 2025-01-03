// console.log('Frohes Neues');    // Frohes Neues

// Zeilenkommentar

/*
Blockkommentar
*/

/**
 * 
 * Variablen 01
 */

// console.log("Hi");          // Hi
// console.log(Hi); so würde es nicht funktionieren. Es fehlen klammern.

/* Deklaration und Wertzuweisung  */
// let firstName;              // Deklaration einer Varible
// console.log(firstName);     // undefined
// firstName = "Max";          // Wertzuweisung
// console.log(firstName)      // Max

// let familyName = "Mütze";   // Variable deklariert und den Wert direkt Zugewiesen

// console.log("Hi, ich bin" + " " + firstName + " " + familyName + ".")       // Hi, ich bin Max Mütze.

/* Wertzuweisung 2 + Datentypen */
// let test;
// console.log("Datentyp: " + typeof test);    // lassen wir uns ein Datentyp ausgeben. Datentyp: undefined
// console.log("Inhalt: " + test);             // Inhalt: undefined
// console.log("-------------------");

// test = "hello";
// console.log("Datentyp: " + typeof test);    // lassen wir uns ein Datentyp ausgeben. Datentyp: undefined
// console.log("Inhalt: " + test);             // Inhalt: hello
// console.log("-------------------");

// test = 2;
// console.log("Datentyp: " + typeof test);    // lassen wir uns ein Datentyp ausgeben. Datentyp: number
// console.log("Inhalt: " + test);             // Inhalt: 2
// console.log("-------------------");

// test = true;
// console.log("Datentyp: " + typeof test);    // lassen wir uns ein Datentyp ausgeben. Datentyp: boolean
// console.log("Inhalt: " + test);             // Inhalt: true
// console.log("-------------------");

/* Variablen vs. Konstanten in JS */

// Variable
let test;                                      // Variable : Deklaration
test = "hi";                                   // Wertzuweisung (Initialisierung)
test = "hello";                                // Überschreiben
console.log("Inhalt: " + test);                // Ausgabe: Inhalt: hello

// Konstante
const test2 = "Hi!";                            // Konstante : Deklaration und Zuweisung
console.log("Inhalt: " + test2);                // Ausgabe: Inhalt: Hi!
test2 = "Hiiiii!";                              // Zuweisung der Konstanten einen anderen Wert 
console.log("Inhalt: " + test2);                // Fehlermeldung. Überschreiben nicht möglich.