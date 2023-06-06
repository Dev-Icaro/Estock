// Express 
const express = require('express');

// Dotenv
const path = require('path');
const dotenv = require('dotenv');
const envPath = path.resolve(__dirname, 'config', '.env');
dotenv.config({ path: envPath });

// Routes
const routes = require('./routes');

// app
const app = express();
routes(app);
const PORT = process.env.PORT;

app.listen(PORT, () => {
   console.log(`Bem-vindo a API Estoks! Powered by Icaro © \nOnline na porta: ${PORT}`);
});

module.exports = app;