const prompt = require("prompt-sync")({ sigint: true });

const FEHLER1 = "Leider, durch 0 kann nicht dividiert werden";
const FEHLER0 = "Es kann nicht funktionieren";

appStart();

function appStart() {
  output(calculator(getA(), getB(), getOp()));
}

function getA() {
  return parseFloat(prompt("Zahl 1 eingeben: "));
}

function getB() {
  return parseFloat(prompt("Zahl 2 eingeben: "));
}

function getOp() {
  return prompt("Operand eingeben: ");
}

// CALCULATOR
function calculator(a, b, op) {
  switch (op) {
    case ":":
    case "/":
      return div(a, b);

    case "*":
      return mult(a, b);

    case "-":
      return sub(a, b);

    case "+":
      return add(a, b);

    default:
      return FEHLER0;
  }
}

// ALLES "+" "-" "/" "*"
function div(a, b) {
  if (b == 0) {
    return FEHLER1;
  }
  return a / b;
}

function mult(a, b) {
  return a * b;
}

function sub(a, b) {
  return a - b;
}

function add(a, b) {
  return a + b;
}

// AUSGABE
function output(outputData) {
  console.log(outputData);
}
