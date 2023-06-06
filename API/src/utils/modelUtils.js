const dataBase = require('../api/models');

async function regExists(modelName, fieldName, fieldValue) {
   return (await dataBase[modelName].count({ where: { [fieldName]: fieldValue }}) > 0)
}

module.exports = { regExists }