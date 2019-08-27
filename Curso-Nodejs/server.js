const express = require('express');
const mongoose = require('mongoose');

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodepai', { userNewUrlParser: true});

// Primeira rota
app.get('/', (req, res) => {
  res.send("Hello Rocketseat - Danilo Righetto");
});

app.listen(3001);