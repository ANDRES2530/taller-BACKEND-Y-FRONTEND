const express = require('express');
const router = express.Router();

const AccesoControllers = require('../controllers/AccesoController');

const acceso = new AccesoControllers();

router.post('/registrarse', acceso.registrarse.bind(acceso));
router.post('/login', acceso.login.bind(acceso));

module.exports = router;