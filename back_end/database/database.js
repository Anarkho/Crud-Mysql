const Sequelize = require('sequelize')

const connection = new Sequelize('cursos', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
}) // no bd, usuario e senha

module.exports = connection