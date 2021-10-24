const express = require('express');
const app = express();

const port = 5000;

app.get('/', (req, res) => {
    res.send('Genius Car Mechanics Server');
})

app.listen(port, () => {
    console.log('Running Server', port);
})