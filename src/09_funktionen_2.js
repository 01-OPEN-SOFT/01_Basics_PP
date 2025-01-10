/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
X 2. Auswahl Rechenart : 
X 3. Fkt. Grundrechenarten : 
X 4. Ausgabe in Konsole :
*/

const ERROR_STR_DIV = 'Teilen durch 0 nicht möglich!';
const ERROR_STR_FEHLER = 'Fehler, es funktioniert nicht!';

const prompt = require('prompt-sync')({ sigint: true });

startApp();
function startApp() {
  output(calculator(getNum1(), getNum2(), getOp()));
}

function getOp() {
  return prompt('OP?: ');
}

function getNum1() {
  return prompt('Zahl 1 eingeben: ');
}

function getNum2() {
  return prompt('Zahl 1 eingeben: ');
}

// MODULE: CALCULATOR
function calculator(a, b, op) {
  switch (op) {
    case '+':
      return add(a, b);
    case '-':
      return sub(a, b);
    case '*':
      return mult(a, b);
    case '/':
    case ':':
      return div(a, b);
    default:
      return ERROR_STR_FEHLER;
      break;
  }
}

// MODULE: DIVISION a / b
function div(a, b) {
  if (b != 0) {
    return a / b;
  } else {
    return ERROR_STR_DIV;
  }
}

// MODULE: MULTIPLICATION a * b
function mult(a, b) {
  return a * b;
}

// MODULE: SUBTRACTION a - b
function sub(a, b) {
  return a - b;
}

// MODULE: ADDITION a + b
function add(a, b) {
  return a + b;
}

// MODULE:OUTPUT
function output(outputData) {
  console.log(outputData);
}
