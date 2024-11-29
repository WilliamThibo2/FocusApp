const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

// Importation des routes
const taskRoutes = require('./routes/tasks');
const statsRoutes = require('./routes/stats');
const schedule = require('node-schedule');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuration de MongoDB
mongoose.connect('mongodb+srv://database:admin1234@messagerie.ckrck.mongodb.net/?retryWrites=true&w=majority&appName=FocusApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connexion à MongoDB réussie'))
  .catch(err => console.error('Erreur de connexion à MongoDB:', err.message));

// Configuration de l'application
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', taskRoutes);
app.use('/stats', statsRoutes);

// Notification toutes les 30 minutes
schedule.scheduleJob('*/30 * * * *', () => {
  console.log('Petit rappel : restez concentré !');
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
