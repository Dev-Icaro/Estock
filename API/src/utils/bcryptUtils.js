const bcrypt = require('bcrypt');

async function hashString(s) {
   // Determina o nivel de complexidiade do hash
   let saltRounds = 10;

   return await new Promise((resolve, reject) => {
      bcrypt.hash(s, saltRounds, (err, hashedString) => {
         if (err) {
            reject(err);
         } 
         else {
            resolve(hashedString);
         };
      });
   });
};

async function compareHashes(value1, value2) {
   return await new Promise((resolve, reject) => {
      bcrypt.compare(value1, value2, (err, result) => {
         if (err) {
            reject(err);
         } 
         else {
            resolve(result);
         }
      });
   });
};

module.exports = { hashString, compareHashes };


