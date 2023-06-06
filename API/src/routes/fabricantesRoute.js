const { Router } = require('express');
const router = Router();
const fabricanteController = require('../api/controllers/fabricantesController');

router.route('/fabricantes')
   .post(fabricanteController.createFabricante)

module.exports = router;