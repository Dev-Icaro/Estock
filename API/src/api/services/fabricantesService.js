const fabricantesModel = require('../models/fabricantes');
const { fabricantesValidator } = require('../../validators/fabricantesValidator');
const fabricanteConstants = require('../../constants/fabricantesConstants');
const messageUtils = require('../../utils/messageUtils');

async function create(fabricante) {
   let validator = new fabricantesValidator(fabricante);
   await validator.validateData();

   if (validator.isDataValid()) {
      await fabricantesModel.create(fabricante);

      return res.status(200).json(fabricanteConstants.success);
   } 
   else {
      let errors = validator.getErrors();
      let invalidDataResponse = messageUtils.formatInvalidDataResponse(fabricanteConstants.invalidData, errors);
      
      return res.status(400).json(invalidDataResponse);
   };
};

exports.create = create;