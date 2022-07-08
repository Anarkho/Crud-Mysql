const express = require("express");

const server = express();
const connection = require("./database/database");
const controllerCursos = require("./controllers/cursos");

//conectando banco
connection
  .authenticate()
  .then(() => {
    console.log("conexão realizada com sucesso");
  })
  .catch((err) => {
    console.log("erro na conexão", err);
  });
///

server.use(express.json());

//retorne todos os cursos
server.get("/cursos", controllerCursos.findAll);
//retorne um curso
server.get("/cursos/:id", controllerCursos.findCurso);

//criar curso
server.post("/cursos", controllerCursos.createCurso);

//atualizar curso
server.put("/cursos/:id", controllerCursos.updateCurso);

// deletar curso
server.delete("/cursos/:id", controllerCursos.deleteCurso);

server.listen(3000, console.log("execultando..."));
