const fabricanteService = require('../services/fabricantesService');
const fabricanteConstants = require('../../constants/fabricantesConstants');
const { formatErrorMessage } = require('../../utils/messageUtils');

class fabricanteController {
   static async createFabricante(req, res) {
      try {
         let serviceResponse = fabricanteService.create(req.body);
         return serviceResponse;
      } 
      catch(e) {
         let errorMessage = formatErrorMessage(fabricanteConstants.erro, e.message);
         console.log(errorMessage)
         return res.status(500).json(errorMessage);
      };
   };
};

module.exports = fabricanteController;