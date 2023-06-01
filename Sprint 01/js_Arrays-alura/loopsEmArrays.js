// Buscando elementos em arrays

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];
function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {

        const alunos = listaDeAlunosEMedias[0];
        const medias = listaDeAlunosEMedias[1];

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}.`);

    } else {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("João");

// Destructuring de objetos

const sam = {
    idade: 23,
    signo: 'gêmeos'
}
const { signo } = sam;

console.log(signo);

// Loop de repetição "for"

const numeros = [100, 200, 300, 400, 500, 600];

for (let indice = 0; indice < numeros.length; indice++) {
    console.log(numeros[indice]);
}

// Calculando média com loop "for"

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);

// Acessando elementos em matriz com loop "for"

const notas1 = [10, 6.5, 8, 7.5];
const notas2 = [9, 6, 6];
const notas3 = [8.5, 9.5];

const notasGerais = [notas1, notas2, notas3];

let mediaNotas = 0

for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) {
        mediaNotas += notasGerais[i][j] / notasGerais[i].length;
    }
}

mediaNotas = mediaNotas / notasGerais.length;

console.log(mediaNotas);

// Percorrendo arrays do fim ao início (in reverse)

const numerosReverse = [100, 200, 300, 400, 500, 600];

for (let i = numerosReverse.length - 1; i >= 0; i--) {
    console.log(numerosReverse[i]);
}

// Percorrendo arrays de dois em dois elementos

const numerosAlternados = [100, 200, 300, 400, 500, 600];

for (let i = numerosAlternados.length - 1; i >= 0; i -= 2) {
    console.log(numerosAlternados[i]);
}

// Percorrendo arrays com condição 

const numerosCondicional = [100, 200, 300, 400, 500, 600];

for (let i = numerosCondicional.length - 1; numerosCondicional[i] >= 300; i -= 2) {
    console.log(numerosCondicional[i]);
}