const { error } = require("node:console")
const fs = require("node:fs")
fs.readFile("./arq1.txt",  function(Error,Response) {
  if (Error) {
    console.error("Erro ao ler o arquivo arq1.txt:", Error)
    return
  }
  fs.readFile("./arq2.txt", function(Error2,Response2) {
    if (Error2) {
      console.error("Erro ao ler o arquivo arq2.txt:", Error2)
      return
    }
    fs.readFile("./arq3.txt", function(Error3,Response3) {
      if (Error3) {
        console.error("Erro ao ler o arquivo arq3.txt:", Error3)
        return
      }
      console.log(' $(Response1)$(Response2)$(Response3)')
      })
    })
  })
console.log("Fim do programa")