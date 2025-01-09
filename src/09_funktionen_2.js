/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
X 4. Ausgabe in Konsole :
*/

// module: div a / b |  test:
// output(div(4,2));
// output(div(3,2));
// output(div(3,-2));
// output(div(0,2));
// output(div(3,0));
// output(div(0,0));

// MODULE: DIVISION a / b
function div(a, b) {
  return a / b;
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
