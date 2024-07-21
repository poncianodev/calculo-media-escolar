const prompt = require("prompt-sync")();

// LIMPAR CONSOLE
console.clear();

// FUNÇÃO PARA VALIDAR AS ENTRADAS DE TEXTO, IMPEDINDO DO USUÁRIO DIGITAR UMA ENTRADA VAZIA OU EM NÚMEROS
function validarEntradaTexto(mensagem) {
  let entrada = prompt(mensagem);

  while (!entrada || !isNaN(entrada)) {
    console.log("\nEntrada Inválida!");
    entrada = prompt(mensagem);
  }

  return entrada;
}

// FUNÇÃO PARA VALIDAR AS ENTRADAS DE NÚMEROS, IMPEDINDO DO USUÁRIO DIGITAR UMA ENTRADA VAZIA OU EM TEXTO
function validarEntradaNum(numero) {
  let entrada = +prompt(numero);

  while (isNaN(entrada) || entrada == "") {
    console.log("\nEntrada Inválida!");
    entrada = +prompt(numero);
  }

  return entrada;
}

// INTRODUÇÃO
console.log("Seja bem-vindo à calculadora de médias.");

let nomeAluno = validarEntradaTexto("Por favor digite seu nome: ");

console.log(`\nOlá ${nomeAluno}, vamos calcular suas médias.\n`);

// VARIÁVEL PARA GUARDAR AS MATÉRIAS QUE USUÁRIO VAI INSERIR
let materias = [];

console.log(
  "Para começar vamos inserir as matérias que serão calculadas. No mínimo 3, tá?"
);

// LOOP PARA INSERÇÃO DAS MATÉRIAS, QUE CONTINUARÁ SENDO EXECUTADO ATÉ QUE O USUÁRIO DECIDA PARAR
do {
  let nomeMateria = validarEntradaTexto(
    "Digite o nome da matéria que quer inserir: "
  );
  materias.push(nomeMateria);

  console.log(
    "\nDeseja inserir mais uma matéria? Digite 1 para SIM ou Qualquer outra tecla para PROSSEGUIR."
  );
  continuarMaterias = +prompt();
  console.log("");

  // LOOP PARA VALIDAR SE O USUÁRIO INSERIU O NÚMERO MÍNIMO DE MATÉRIAS, QUE SÃO 3
  while (materias.length < 3 && continuarMaterias !== 1) {
    console.log(
      `\nO mínimo de matérias são 3. Insira mais ${
        3 - materias.length
      } matéria(s), por favor.\n`
    );
    nomeMateria = validarEntradaTexto(
      "Digite o nome da matéria que quer inserir: "
    );
    materias.push(nomeMateria);
  }
} while (continuarMaterias == 1);

// MOSTRA QUAIS MATÉRIAS FORAM INSERIDAS
console.log("\nMatérias selecionadas:", materias.join(", "), "\n");

// VARIÁVEL PARA GUARDAR AS NOTAS DAS MATÉRIAS
let notas = {};

// LOOP QUE PERCORRE O ARRAY MATERIAS E SOLICITA 3 NOTAS PARA CADA MATÉRIA INSERIDA PELO USUÁRIO
for (let materia of materias) {
  let notasMateria = [];

  console.log(`\nInsira as notas para a matéria ${materia}:`);
  for (let i = 1; i <= 3; i++) {
    let nota = validarEntradaNum(`Nota ${i}: `);
    notasMateria.push(nota);
  }

  notas[materia] = notasMateria;
}

// VARIÁVEL PARA GUARDAR AS FALTAS POR MATÉRIA
let totalDeFaltas = {};

for (let falta of materias) {
  console.log("");
  console.log(`Insira a quantidade faltas para a matéria ${falta}: `);
  let faltas = validarEntradaNum("Faltas: ");
  totalDeFaltas[falta] = faltas;
}

// OBJETO PARA GUARDAR AS MÉDIAS PARCIAIS
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

// VERIFICAÇÃO DE APROVAÇÃO OU REPROVAÇÃO
console.log(`\n${nomeAluno}, aqui estão seus resultados finais:\n`);
for (let materia in medias) {
  let media = parseFloat(medias[materia]);
  let faltas = totalDeFaltas[materia];

  if (media >= 5.0 && faltas <= 5) {
    console.log(
      `Você foi APROVADO em ${materia} com média ${media} e ${faltas} faltas.`
    );
  } else {
    console.log(
      `Você foi REPROVADO em ${materia} com média ${media} e ${faltas} faltas.`
    );
  }
}
