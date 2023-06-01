// Filtrando arrays

const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7;
});

console.log(reprovados);

// Somando com reduce()

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0);
    // 0 representa o número de posição do acumulador que coincide com o número de índice do array reduzido.
    const media = somaDasNotas / notasDaSala.length;

    return media;
}

console.log(`A média da sala de JavaScript é ${calculaMedia(salaJS)}`);
console.log(`A média da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`A média da sala de Python é ${calculaMedia(salaPython)}`);

// A estrutura do método reduce()

const numeros = [43, 50, 65, 12];

const soma = numeros.reduce((acc, atual) => {
    return atual + acc;
}, 0);

console.log(soma);

// Método reduce() com callback externo

function operacaoNumerica(acc, atual) {
    return atual + acc;
}

const somaTotal = numeros.reduce(operacaoNumerica, 0);

console.log(somaTotal);

// Copiando arrays

const notas = [7, 7, 8, 9];

const novasNotas = [...notas, 10];

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);

// Removendo elementos repetidos com Set()

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes);

const nomesAtualizados = [...meuSet];

console.log(nomesAtualizados);

// Removendo elementos repetidos com Set() de forma simplificada

const nomesRefactor = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const nomesAtualizadosRefactor = [...new Set(nomes)];

console.log(nomesAtualizadosRefactor);