const express = require("express");
const nunjkucks = require("nunjucks");

// Chamar o servidor express
server = express();

// Exportados os modulos
const dados = require("./data");

// Entregando os arquivos estaticos no express
server.use(express.static("public"));
server.set("view engine", "njk");

// Configurar o template engine
nunjkucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
});

//Criando as rotas do servidor express
server.get("/", function (req, res) {
  return res.render("index", { titulo: "Foodfy" });
});

server.get("/sobre", function (req, res) {
  const about = {
    title: "Foodfy - Sobre",
    name1: "Sobre o Foodfy",
    name2: "Como tudo Começou",
    name3: "Nossas receitas",
  };

  return res.render("sobre", { about });
});

server.get("/receita", function (req, res) {
  return res.render("receita", { items: dados });
});

server.get("/receita/:index", function (req, res) {
  const recipes = [...dados]; // Array de recitas carregadas do data.js
  const recipeIndex = req.params.index;

  return res.send(recipes[recipeIndex]);
});
0;
// Criando a rota de erro
server.use(function (req, res) {
  res.status(404).render("not-found", { titulo: "Error 404" });
});

//Configurar a saida do servidor
server.listen(3005, function () {
  console.log("Servidor esta em execução");
});
