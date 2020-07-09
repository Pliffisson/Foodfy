const express = require("express");
const nunjucks = require("nunjucks");

// Chamando o servidor express
const server = express();

server.get("/", function (req, res) {
  return res.send("Ola seja bem vindo ao servidor express");
});

// Criar o servidor express
server.listen(3002, function () {
  console.log("Server is running!");
});
