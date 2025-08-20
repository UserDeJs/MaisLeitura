const readFile = require("node:readline");
const terminal = readlife.createInterface({
  input: process.stdin,
  output: process.stdout
});


// terminal.question("qual seu nome: \n",ction (valor){
//   console.log("seja bem vindo" + valor);function (valor){
//   console.log("seja bem vindo" + valor);
// });

function question(pergunta) {
  return new Promise(function (resolve, reject){
    terminal.question(pergunta + "\n", function(valor){
      resolve(valor)
    });
  });
}
question("qual seu nome")
.then(function(valor){
  console.log(`seja bem vindo ${valor}`); 
}).catch(function(erro){
  console.log(`Ocorreu um erro: ${erro}`);
}).finally(function (){
  terminal.close();
});