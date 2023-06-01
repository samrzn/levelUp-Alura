// Criando novos arrays com elementos selecionados de outros arrays com método "slice"

const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = alunos.slice(0, alunos.length / 2);
const sala2 = alunos.slice(alunos.length / 2);

console.log(sala1);
console.log(sala2);

// Removendo elementos de posições selecionadas em um array com método "splice"

const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

nomes.splice(4, 1, "Marcela", "Sam");

console.log(nomes);

// Concatenando arrays com método "concat"

const salaJS = ["Evaldo", "Camis", "Mari"];
const salaPython = ["Ju", "Leo", "Raquel"];
const salaJava = ["Eva", "Ronaldo", "Donna"];

const salasUnificadas = salaJS.concat(salaPython, salaJava);

console.log(salasUnificadas);

const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"];
const arrayConcat = arrayOriginal.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"], salaJava);

console.log(arrayConcat);
console.log(arrayOriginal);

// Arrays com 2 dimensões (matrizes)

const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [salasUnificadas, medias];

console.log(
    `O aluno da posição 4 da lista de alunos é: ${listaDeAlunosEMedias[0][4]}.
    A média desse aluno é ${listaDeAlunosEMedias[1][1]}.`
);

// Concatenando arrays e matrizes

const arrayMatrizOriginal = [50, 60, 70];
const arrayMatrizConcat = arrayOriginal.concat([80, [90, 100]], medias, listaDeAlunosEMedias);

console.log(arrayMatrizConcat);
console.log(arrayMatrizOriginal);