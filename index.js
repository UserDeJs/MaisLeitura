require("dotenv").config();
const livroRepository = require("./infra/repository/livro");
const express = require("express");
const app = express();

app.get("/", async function (req, res) {
  const livrostop = await livroRepository.consultarTops();
  const livrosmaisbuscados = await livroRepository.consultarMaisBuscados();
  const curtidas = await livroRepository.consultarCurtidas();

  let itensTop = ""
  for (livro of livrosTops) {
    itensTop += `<li>${livro.titulo} </li>`;
  }

  let itensMaisBuscados = ""
  for (livro of livrosMaisBuscados) {
    itensMaisBuscados += `<li>${livro.titulo} </li>`;
  }

  let ncurtidas = ""
  for (livro of livrosCurtidas) {
    curtidas += `<li>${livro.titulo} - ${livro.curtidas} curtidas </li>`;
  }

let html = `<DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <ul>
    <p>Itens Tops</p>
    <ul>
    ${itensTops}
    </ul>

    <p>Itens mais adquiridos</p>
    <ul>
    ${itensMaisBuscados}
    </ul>
  </body>
</html>`;

  res.send(html);
});

const port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log("Inicializando server");
});