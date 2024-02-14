const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`
     <h1 style="text-align: center;color:blue;">welcome to our server</h1>
    <h2 style="text-align: center; color: red;">this server si created using Express JS</h2>
    
    <p style="width: 80vw; margin: auto; text-align: center;">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Earum rerum facilis
            assumenda esse
            ducimus sit, dolor
            quae harum ex laborum quos laboriosam necessitatibus totam voluptates? Quos molestias expedita, officia
            architecto earum repellat tempore consectetur delectus doloremque! Aliquid sit ducimus explicabo itaque suscipit
            dicta, nihil amet consequatur, eveniet saepe, vitae aliquam!</p>
    `);
});

const port = process.env.PORT || 3000; // Use environment variable or default port 3000

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
