const { regExists } = require('../utils/modelUtils');
const { isValidEmail } = require('../utils/validateUtils');
const constants = require('../constants/usersConstants');

class UserValidator {
   constructor(userData) {
      this.userData = userData;
      this.errors = [];
   };

   isValidData() {
      return this.errors.length === 0;
   };

   getErrors() {
      return this.errors;
   };

   async validateData() {
      await Promise.all([
         this.validateUsuario(),
         this.validateSenha(),
         this.validateEmail(),
         this.validateFirstName(),
         this.validateLastName(),
         this.validateEndereco()
      ]);
   };

   async validateUsuario() {
      let usuario = this.userData.usuario;

      if (!usuario) {
         this.errors.push('Usuário não informada');
         return
      } 

      if (await regExists('usuarios', 'usuario', usuario)) this.errors.push(constants.userAlredyExists);
   };

   async validateSenha() {
      let senha = this.userData.senha;
      
      if (!senha) this.errors.push('Senha não informada');
   };

   async validateEmail() {
      let email = this.userData.email;

      if (!email) {
         this.errors.push('Email não informado');
         return
      }

      if (!isValidEmail(email)){
         this.errors.push('Email com formato inválido');
         return
      } 
      if (await regExists('usuarios', 'email', email)) this.errors.push('Email já cadastrado em nossa base de dados');
   };

   async validateFirstName() {
      let firstName = this.userData.primeiro_nome;

      if (!firstName) this.errors.push('Nome não informado');
   };

   async validateLastName() {
      let lastName = this.userData.ultimo_nome;

      if (!lastName) this.errors.push('Sobre-nome não informado');
   };

   async validateEndereco() {
      let endereco = this.userData.endereco;

      if (!endereco) this.errors.push('Nenhum endereco foi informado');
   };
};

module.exports = UserValidator;