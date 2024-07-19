const prompt = require("prompt-sync")();

console.clear();

// INTRODUÇÃO
console.log("Seja bem-vindo à calculadora de médias.");

const nomeAluno = prompt("Por favor digite seu nome: ");

console.log(`\nOlá ${nomeAluno}, vamos calcular suas médias.\n`);

// VARIÁVEL PARA GUARDAR AS MATÉRIAS QUE USUÁRIO VAI INSERIR
let materias = [];

console.log(
  "Para começar vamos inserir as matérias que serão calculadas. No mínimo 3, tá?"
);

do {
  let nomeMateria = prompt("Digite o nome da matéria que quer inserir: ");
  materias.push(nomeMateria);

  console.log(
    "\nDeseja inserir mais uma matéria? Digite 1 para SIM ou Qualquer outra tecla para PROSSEGUIR."
  );
  continuarMaterias = +prompt();
  console.log("");

  while (materias.length < 3 && continuarMaterias !== 1) {
    console.log(
      `\nO mínimo de matérias são 3. Insira mais ${
        3 - materias.length
      } matéria(s), por favor.\n`
    );
    nomeMateria = prompt("Digite o nome da matéria que quer inserir: ");
    materias.push(nomeMateria);
  }
} while (continuarMaterias == 1);

console.log("\nMatérias selecionadas:", materias.join(", "), "\n");

// VARIÁVEL PARA GUARDAR AS NOTAS DAS MATÉRIAS
let notas = {};

for (let materia of materias) {
  let notasMateria = [];

  console.log(`\nInsira as notas para a matéria ${materia}:`);
  for (let i = 1; i <= 3; i++) {
    let nota = +prompt(`Nota ${i}: `);
    notasMateria.push(nota);
  }

  notas[materia] = notasMateria;
}

// VARIÁVEL PARA GUARDAR AS FALTAS POR MATÉRIA
let totalDeFaltas = {};

for (let falta of materias) {
  console.log("");
  console.log(`Insira a quantidade faltas para a matéria ${falta}: `);
  let faltas = +prompt("Faltas: ");
  totalDeFaltas[falta] = faltas;
}

// console.log(totalDeFaltas);

// CÁLCULO DAS MÉDIAS PARCIAIS
let medias = {};

for (let materia in notas) {
  let soma = notas[materia].reduce((acc, curr) => acc + curr, 0);
  let media = soma / notas[materia].length;
  medias[materia] = media.toFixed(2);
}

// EXIBIÇÃO DAS MÉDIAS PARCIAIS
console.log(`\n${nomeAluno}, aqui estão suas médias:\n`);
for (let materia in medias) {
  console.log(`Média em ${materia}: ${medias[materia]}`);
}

// EXIBIÇÃO DAS FALTAS TOTAIS
for (let total in totalDeFaltas) {
  console.log(
    `Seu total de faltas em ${total} foi de: ${totalDeFaltas[total]}`
  );
}

