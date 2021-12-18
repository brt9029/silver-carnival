const router = require('express').Router();
const { notes } = require('../../db/db');
const { createNewNote } = require('../../lib/notes');
const uniqid = require('uniqid');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = uniqid();
    const note = createNewNote(req.body, notes);
    res.json(note);
});

module.exports = router;