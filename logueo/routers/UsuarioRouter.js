let express = require('express');
let routes = express.Router();

const UsuarioControllers = require('../controllers/UsuarioController');
const usuario = new UsuarioControllers();

routes.get('/ver', usuario.ver);
routes.put('/actu', usuario.actualizar);
routes.delete('/eliminar', usuario.eliminar);

module.exports = routes; 
