const prompt = require("prompt-sync")();

console.clear();

// INTRODUÇÃO
console.log("Seja bem-vindo à calculadora de médias.");

const nomeAluno = prompt("Por favor digite seu nome: ");

console.log(`\nOlá ${nomeAluno}, vamos calcular suas médias.\n`);

// VARIÁVEL PARA GUARDAR AS MATÉRIAS QUE USUÁRIO VAI INSERIR
let materias = [];

console.log('Para começar vamos inserir as matérias que serão calculadas. No mínimo 3, tá?')

do {
  let nomeMateria = prompt("Digite o nome da matéria que quer inserir: ");
  materias.push(nomeMateria);

  console.log("\nDeseja inserir mais uma matéria? Digite 1 para SIM ou Qualquer outra tecla para PROSSEGUIR.\n");
  continuarMaterias = +prompt();

  while (materias.length < 3 && continuarMaterias !== 1) {
    console.log(`\nO mínimo de matérias são 3. Insira mais ${3 - materias.length} matérias, por favor.\n`);
    nomeMateria = prompt("Digite o nome da matéria que quer inserir: ");
    materias.push(nomeMateria);
  }
} while (continuarMaterias == 1);

console.log(materias);