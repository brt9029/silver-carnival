const router = require('express').Router();
const { notes } = require('../../db/db');
const { createNewNote, findById, removeNote } = require('../../lib/notes');
const uniqid = require('uniqid');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.delete('/notes/:id', (req, res) => {
    deleteNote(findById(req.params.id, notes));
    res.send('Note deleted!');
});

router.post('/notes', (req, res) => {
    req.body.id = uniqid();
    const note = createNewNote(req.body, notes);
    res.json(note);
});

module.exports = router;