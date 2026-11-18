let express = require('express')
let route = express.Router()

const RolesControllers = require('../controllers/RolesController')
const roles = new RolesControllers()

route.get('/verlo', roles.ver)
route.post('/inserta', roles.insertar)
route.put('/actualizar/:id', roles.actualizar)
route.delete('/eliminar/:id', roles.eliminar)

module.exports = route