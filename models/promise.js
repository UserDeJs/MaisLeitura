const readFile = require("node:readline");
const terminal = readlife.createInterface({
  input: process.stdin,
  output: process.stdout
});

terminal.question("Digite o nome do arquivo: \n", function(valor) {
  console.log("Seja Bem Vindo "+ valor);
});