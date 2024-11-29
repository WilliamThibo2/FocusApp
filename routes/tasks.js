const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Page d'accueil avec les tâches
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.render('index', { tasks });
});

// Ajouter une tâche
router.post('/add', async (req, res) => {
  const { title } = req.body;
  await Task.create({ title });
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

// Ajouter une tâche avec priorité
router.post('/add', async (req, res) => {
  const { title, priority } = req.body;
  await Task.create({ title, priority });
  res.redirect('/');
});

module.exports = router;
