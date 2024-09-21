const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3000;

// Gestion des erreurs
app.use((err, req, res, next) => {
    logger.error(err);
    res.status(500).send('Une erreur s’est produite');
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});

module.exports = app;