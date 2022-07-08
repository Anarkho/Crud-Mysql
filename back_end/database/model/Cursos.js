const Sequelize = require('sequelize')
const connection = require('../database')

const Curso = connection.define('curso', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
})

Curso.sync({force: false}) // se existir não force a criação
.then(()=> console.log('tabela criada'))

module.exports = Curso