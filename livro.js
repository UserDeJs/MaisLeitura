const {query} = require("../database");

async function consultar(){
   const sql = 'SELECT * FROM livro;'
   const resultado = await query(sql);
    return resultados;    
} 

async function consultartops(){
   const sql = 'SELECT * FROM livro WHERE top_livros = true;'
   const resultado = await query(sql);
    return resultados;    
}
async function consultarmaisbuscados(){
   const sql = 'SELECT * FROM livro WHERE livros_mais_buscados = true;'
   const resultado = await query(sql);
    return resultados;    
}

module.exports = { consultar, consultartops, consultarmaisbuscados };