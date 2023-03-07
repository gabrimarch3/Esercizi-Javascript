const sum = (a, b) => a + b


const subtract = (a, b) => a - b


const multiply = (a, b) =>a * b;


const divide = (a, b) => a / b;


const log = (value) => console.log(value);


let somma = sum(2, 4);
let somma2 = sum(5, 2);
let moltiplicazione = multiply(somma, somma2);
let sottrazione = subtract(moltiplicazione, 2);
let finale = divide(sottrazione, 5);
log(finale);