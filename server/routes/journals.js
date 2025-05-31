const express = require('express');
const router = express.Router();
const Journal = require('../models/Journal');

// GET all journal entries
router.get('/', async (req, res) => {
  try {
    const journals = await Journal.find().sort({ createdAt: -1 });
    res.json(journals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new journal entry
router.post('/', async (req, res) => {
  const journal = new Journal({
    content: req.body.content,
    createdAt: new Date()
  });

  try {
    const newJournal = await journal.save();
    res.status(201).json(newJournal);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT to update a journal entry
router.put('/:id', async (req, res) => {
  try {
    const journal = await Journal.findById(req.params.id);
    if (!journal) return res.status(404).json({ message: 'Entry not found' });

    journal.content = req.body.content || journal.content;
    const updated = await journal.save();
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE a journal entry
router.delete('/:id', async (req, res) => {
  try {
    const journal = await Journal.findByIdAndDelete(req.params.id);
    if (!journal) return res.status(404).json({ message: 'Entry not found' });
    res.json({ message: 'Entry deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
