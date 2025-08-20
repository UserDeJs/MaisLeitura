const fs = require("node:fs/promises");
const fs = require('fs');
const { readFile } = require("node:fs");
const { promises } = require("node:dns");

function lerArquivo(caminhoDoArquivo) {
  return new Promise((resolve, reject) => {
    fs.readFile(caminhoDoArquivo, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      return
        resolve(data)
      }
    });
  });
}

readFile("./arq1.txt")
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error("Erro ao ler o arquivo:", err);
  });