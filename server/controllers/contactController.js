// server/controllers/contactController.js
const Contact = require('../models/Contact');

exports.saveContact = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Guardar cliente potencial
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(200).json({ message: 'Gracias por tu mensaje. Nos pondremos en contacto pronto.' });
  } catch (error) {
    res.status(500).json({ error: 'Hubo un problema al procesar tu solicitud.' });
  }
};