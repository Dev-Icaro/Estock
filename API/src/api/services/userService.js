const UserValidator = require('../../validators/userValidator');
const { formatInvalidDataResponse } = require('../../utils/messageUtils');
const dataBase = require('../models');
const constants = require('../../constants/usersConstants');
const { hashString } = require('../../utils/bcryptUtils');

class UserService {
   static async create(jsonUserData) {
      const validator = new UserValidator(jsonUserData);
      await validator.validateData();

      if(validator.isValidData()) {
         jsonUserData.senha = await hashString(jsonUserData.senha);
         await dataBase.usuarios.create(jsonUserData);

         return { status: 200, message: constants.userSuccess };  
      } 
      else {
         return { status: 400, message: formatInvalidDataResponse(constants.userInvalidData, validator.getErrors()) };
      };
   };
};

module.exports = UserService;