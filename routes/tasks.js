const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Page d'accueil avec la liste des tâches
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.render('index', { tasks });
});

// Ajouter une nouvelle tâche
router.post('/add', async (req, res) => {
  const { title } = req.body;
  if (title) {
    await Task.create({ title });
  }
  res.redirect('/');
});

// Marquer une tâche comme terminée
router.post('/complete/:id', async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, { completed: true });
  res.redirect('/');
});

// Supprimer une tâche
router.post('/delete/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

module.exports = router;
