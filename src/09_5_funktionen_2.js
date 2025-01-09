const fehler1 = "Leider, durch 0 kann nicht dividiert werden"

//TEST
console.log(div(3, 0));

// ALLES "+" "-" "/" "*"
function div(a, b) {
    if (b == 0) {
      console.log(fehler1);
    } 
    
    else {
      return a / b
    }

}

function mult(a, b) {
    return a * b
}

function sub(a, b) {
    return a - b
}

function add(a, b) {
    return a + b
}

// AUSGABE
function output(outputData) {
    console.log(outputData);
}