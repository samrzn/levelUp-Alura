// Ponto flutuante com notação exponencial:

/* let myNumberExponencial = 12e-3;

2.25e-3 | 4e-3 | 4.257e10 | 4e2 | 4.257e+2 | 6e+3

console.log(myNumberExponencial); */

let myNumberExponencial = 12e-3.toFixed(3);

console.log(myNumberExponencial);

let myNumberMonetario = 12e3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

console.log(myNumberMonetario);

// Ordenando arrays em ordem alfabética com sort e ordem crescente com sort e função de comparação:

const arrayNumber = [2, 41, 12, 15, 32, 29, 22, 4, 7];

console.log(arrayNumber.sort());

console.log(arrayNumber.sort((a, b) => a - b));

