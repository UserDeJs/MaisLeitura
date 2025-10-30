require("dotenv").config();
const liveroRepository = require("./infra/repository/livro");

liveroRepository
.consultarTodos()
.then((function (resultado) {
 console.log(resultado);
})
.catch((function (error) {
 console.error("Erro ao consultar livros:", error);
});