const mongoose = require('mongoose'); // Assurez-vous d'importer mongoose avant son utilisation

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
  priority: { type: String, enum: ['High', 'Medium', 'Low'], default: 'Medium' },
  category: { type: String, default: 'General' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Task', taskSchema);
