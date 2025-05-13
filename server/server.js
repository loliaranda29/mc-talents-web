// server/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
const contactRoute = require('./routes/contact');
app.use('/api', contactRoute);

// Conectar a MongoDB (usaremos MongoDB Atlas o Local)
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mctalents', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error conectando a MongoDB:', err));

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});