const {query} = require("../database");

async function consultarTodos(){
const sql = `SELECT * FROM livro`;
const resultados = await query(sql)

return resultados;

}

async function consultarTopLivros(){
const sql = `SELECT * FROM livro WHERE top_livro = true`; 

const resultados = await query(sql)

return resultados;

}