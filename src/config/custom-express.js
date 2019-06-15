const express = require("express")
const app = express()

//app.use('/estatico', express.static('src/api'))
app.use(express.static('src/api'))

const rotas = require("../api/routes/rotas")
rotas(app)

module.exports = app