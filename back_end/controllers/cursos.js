const ModelCurso = require("../database/model/Cursos");

const controlerCursos = () => {};

controlerCursos.findAll = (req, res) => {
  ModelCurso.findAll({ raw: true }) // traz só os dados
    .then((cursos) => res.json(cursos));
};

controlerCursos.findCurso = (req, res) => {
  const { id } = req.params;
  ModelCurso.findByPk(id).then((result) => res.json(result));
};

controlerCursos.createCurso = (req, res) => {
  const { name } = req.body;
  ModelCurso.create({
    nome: name,
  })
    .then(() => res.json({ message: "curso criado" }))
    .catch(() => res.json({ message: "curso já existe" }));
};

controlerCursos.updateCurso = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  ModelCurso.update(
    {
      nome: name,
    },
    {
      where: {
        id: id,
      },
    }
  );

  ModelCurso.findByPk(id).then((result) => res.json(result));
};

controlerCursos.deleteCurso = async (req, res) => {
  const { id } = req.params;

  let removido;
  removido = await ModelCurso.findByPk(id).then(
    (result) => (removido = result._previousDataValues.nome)
  );
  ModelCurso.destroy({
    where: {
      id: id,
    },
  });
  return res.json({ message: `o curso ${removido} foi deletado` });
};

module.exports = controlerCursos;
