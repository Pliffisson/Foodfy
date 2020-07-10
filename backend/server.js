const express = require("express");
const nunjucks = require("nunjucks");

// Chamando o servidor express
const server = express();

// Configurando as rotas do site
server.get("/", function (req, res) {
  return res.render("layout");
});

server.get("/about", function (req, res) {
  return res.render("about");
});

server.get("/revenue", function (req, res) {
  return res.render("revenue");
});

server.use(function (req, res) {
  res.status(404).render("not-found");
});

// Criar o servidor express
server.listen(3002, function () {
  console.log("Server is running!");
});
