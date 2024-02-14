const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`
    <h1 style='text-align:center;color:blue;'>welcom to our server!</h1> 
    `);
});

const port = process.env.PORT || 3000; // Use environment variable or default port 3000

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
