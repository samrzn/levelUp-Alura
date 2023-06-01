// Calculando média de números em um array com forEach()

const notas = [10, 6.5, 8, 7.5];

let totalNotas = 0;

notas.forEach(function (nota) {
    totalNotas += nota;
});

const mediaTotal = totalNotas / notas.length;

console.log(`A média das notas é ${mediaTotal}.`);

// Revisando callbacks (arrow function e external callbacks)

const nomes = ["Evaldo", "Mari", "Camis"];

nomes.forEach(function (nome) {
    console.log(nome);
});

nomes.forEach((nome) => {
    console.log(nome);
});

function imprimeNome(nome) {
    console.log(nome);
}

nomes.forEach(imprimeNome);

// Loop for - demonstração

const lista = [1, 2, 3, 4, 5];

for (let i = 0, j = 0; i < lista.length; i++, j++) {
    console.log(lista[i] + j);
}

// Método forEach() - demonstração

let soma = 0;
lista.forEach(numero => soma += numero);
console.log(soma);

// Alterando strings com map()

const nomesInput = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesPadronizados = nomesInput.map((nome) => nome.toUpperCase());

console.log(nomesPadronizados);

// Demonstração métodos callback

const arrayNums = [1, 2, 3, 4];

function multiplicaPorDez(num) {
    return num * 10;
}

const arraySomada = arrayNums.map(multiplicaPorDez);

console.log(arraySomada);