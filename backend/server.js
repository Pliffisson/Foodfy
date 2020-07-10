const express = require("express");
const nunjucks = require("nunjucks");

// Chamando o servidor express
const server = express();

// Carregando a estilização da pagina
server.use(express.static("public"));
server.set("view engine", "njk");

//Configurando a engine nunjucks
nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
});

// Configurando as rotas do site
server.get("/", function (req, res) {
  return res.render("revenue");
});

server.get("/about", function (req, res) {
  return res.render("about");
});

server.use(function (req, res) {
  res.status(404).render("not-found");
});

// Criar o servidor express
server.listen(3002, function () {
  console.log("Server is running!");
});
