const express = require('express');
const PomodoroSession = require('../models/PomodoroSession');
const router = express.Router();

// Page des statistiques
router.get('/', async (req, res) => {
  const sessions = await PomodoroSession.find();
  const totalMinutes = sessions.reduce((sum, session) => sum + session.duration, 0);
  res.render('stats', { totalMinutes });
});

// Ajouter une session Pomodoro
router.post('/add-session', async (req, res) => {
  const { duration } = req.body;
  await PomodoroSession.create({ duration });
  res.redirect('/stats');
});

module.exports = router;
