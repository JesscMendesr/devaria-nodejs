const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let nomeDoAluno;
readLine.question("Digite o seu nome:", (input) => {
  nomeDoAluno = input;
  console.log(`o aluno digitou: ${nomeDoAluno}`);
});
