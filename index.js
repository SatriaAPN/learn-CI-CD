// initialize web server
const express = require('express');
const app = express();
const port = 3000;

// create an endpoint
app.get('/', (req, res) => {
    // send a response
    res.send('Hello World!');
})

// start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
