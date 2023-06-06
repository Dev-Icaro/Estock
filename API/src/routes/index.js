const bodyParser = require('body-parser')
const fabricantesRoute = require('./fabricantesRoute');
const registerRoute = require('./registerRoute');

module.exports = app => {
   app.use(
      bodyParser.json(),
      registerRoute,
      fabricantesRoute,
   );
};