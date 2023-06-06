const { isEmptyString, isValidEmail, isValidTelefone, isValidDate } = require('../utils/validateUtils');
const { regExists } = require('../utils/modelUtils');

class fabricantesValidator {
   constructor(fabricanteData) {
      this.fabricanteData = fabricanteData;
      this.errors = [];
   };

   isDataValid() {
      return this.errors.length === 0;
   };

   getErrors() {
      return this.errors;
   };

   async validateData() {
      await Promise.all([
         this.validateNome(),
         this.validateDescricao(),
         this.validateEmail(),
         this.validateTelefone(),
         this.validateDataAbertura()
      ]);
   };

   async validateNome() {
      let nome = this.fabricanteData.nome;

      if (await isEmptyString(nome)) this.errors.push('O Nome do fabricante é um campo obrigatório');
      if (await regExists('fabricantes', 'nome', nome)) this.errors.push('O Nome informado já é utilizado por outro fabricante');
   };

   async validateDescricao() {
      let descricao = this.fabricanteData.descricao;

      if (await isEmptyString(descricao)) this.errors.push('A descrição do fabricante é um campo obrigatório');
   };

   async validateEmail() {
      let email = this.fabricanteData.email;

      if (await isEmptyString(email)) this.errors.push('Email é um campo obrigatório para cadastro de fabricantes');
      if (await !isValidEmail(email)) this.errors.push('Email do fabricante inválido');
   };

   async validateTelefone() {
      let telefone = this.fabricanteData.telefone;

      if (await isEmptyString(telefone)) this.errors.push('Telefone é obrigatório para o cadastro do fabricante');
      if (await !isValidTelefone(telefone)) this.errors.push('Telefone com formato inválido');
   };

   async validateDataAbertura() {
      let dataAbertura = this.fabricanteData.ano_abertura;

      if (await !isValidDate()) this.errors.push('Data de abertura inválida');
   }
};

exports.fabricantesValidator = fabricantesValidator;
