const express = require('express');

const app = express();
const port = 3000;

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to the Node.js project!');
});

// Simple message route
app.get('/api', (req, res) => {
    res.send('This api is Live!.');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
