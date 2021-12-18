const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./routes/apiRoutes/noteRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// needed to parse incoming strings (new notes)
app.use(express.urlencoded({ extended: true }));
// parse the incoming JSON data so it does not just display as an empty object
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
});