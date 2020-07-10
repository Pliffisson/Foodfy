const express = require("express");
const nunjkucks = require("nunjucks");

// Chamar o servidor express
server = express();

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
  return res.render("sobre", { titulo: "Foodfy" });
});

// server.get("/receita", function (req, res) {
//   return res.render("receita");
// });

//Configurar a saida do servidor
server.listen(3005, function () {
  console.log("Servidor esta em execução");
});
