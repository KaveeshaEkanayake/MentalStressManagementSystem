const JournalEntry = require('../models/JournalEntry');

exports.createEntry = async (req, res) => {
  try {
    const entry = new JournalEntry({ content: req.body.content });
    await entry.save();
    res.status(201).json(entry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getEntries = async (req, res) => {
  try {
    const entries = await JournalEntry.find().sort({ timestamp: -1 });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateEntry = async (req, res) => {
  try {
    const entry = await JournalEntry.findByIdAndUpdate(
      req.params.id,
      { content: req.body.content },
      { new: true }
    );
    res.json(entry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteEntry = async (req, res) => {
  try {
    await JournalEntry.findByIdAndDelete(req.params.id);
    res.json({ message: 'Entry deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
