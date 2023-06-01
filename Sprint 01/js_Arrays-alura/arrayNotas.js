// Arrays: sintaxe, elementos e índice.

// posições:
//             0    1   2   3
const notas = [10, 6.5, 8, 7.5];
const mediaNotas = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(mediaNotas);
console.log(notas[3]);

// Adicionando elementos em arrays

console.log(notas);

notas.push(7);

console.log(notas);

// Removendo elementos em arrays

notas.pop();
console.log(notas);

// Arrays vazios e arrays esparsos

const arrayVazia = [, , ,];

console.log(arrayVazia.length);

arrayVazia.push(50);

console.log(arrayVazia);
console.log(arrayVazia.length);