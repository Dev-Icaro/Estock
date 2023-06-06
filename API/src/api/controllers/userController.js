const UserService = require('../../api/services/userService');

class UserController {
   static async register(req, res) { 
      try {
         const serviceResponse = await UserService.create(req.body);
         return res.status(serviceResponse.status).json(serviceResponse.message);
      }
      catch(e) {
         console.log(e.message);
         return res.status(500).json(e.message);
      };
   };
};

module.exports = UserController;