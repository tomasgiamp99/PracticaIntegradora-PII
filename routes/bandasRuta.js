let express = require('express');
let router = express.Router();
let bandasController = require('../controllers/bandasController')

router.get('/', bandasController.listadoBanda)
router.get('/detalle/:id=?', bandasController.porId)
router.get('/genero/:genero', bandasController.porGenero)

module.exports = router;