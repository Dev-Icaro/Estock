function isEmptyString(s) {
   s = String(s);
   return (s.trim().length == 0 || s === null || s === undefined);
}

function  isValidDate(dateString) {
   let date = new Date(dateString);

   return !isNaN(date.getTime());
}

function isValidEmail(email) {
   var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return emailPattern.test(email);
}

function isValidTelefone(phoneNumber) {
   var phonePattern = /^d{11}$/;
   return phonePattern.test(phoneNumber);
}

module.exports = { isEmptyString, isValidEmail, isValidTelefone, isValidDate };

