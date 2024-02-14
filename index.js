const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

const port = process.env.PORT || 3000; // Use environment variable or default port 3000

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
