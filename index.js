const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`
     <h1 style="text-align: center;color:blue;">welcome to our server</h1>
    <h2 style="text-align: center; color: red;">this server is created using Express JS</h2>
    
    <p style="width: 80vw; margin: auto; text-align: center;">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Earum rerum facilis
            assumenda esse
            ducimus sit, dolor
            quae harum ex laborum quos laboriosam necessitatibus totam voluptates? Quos molestias expedita, officia
            architecto earum repellat tempore consectetur delectus doloremque! Aliquid sit ducimus explicabo itaque suscipit
            dicta, nihil amet consequatur, eveniet saepe, vitae aliquam!</p>
    `);
});

app.get('/contact',(req,res)=>{

    res.send(`

     <h1 style="text-align: center; color: blue;">this is our contact page</h1>
    <div style="text-align: center;">
        <div>
            <span><b>conatc me:-</b></span>
            <span>someoneexample123@gmail.com</span>
        </div>
        <div>
            <span><b>contact me:-</b></span>
            <span>+921274639874</span>
        </div>
    </div>
    
    `)
    
})

// Define a route for /download
app.get('/download', (req, res) => {
  // Path to the file you want to download
  const filePath = 'Document.txt';
  
  // Set the Content-Disposition header to force download
  res.setHeader('Content-Disposition', 'attachment; filename=Document.txt');
  
  // Send the file for download
  res.download(filePath);
});


app.get('/info', (req,res)=>{

    res.send('this is a server side application hoisted on the infinityfree.com for free.this application was a test for empowering the chat app.')
    
})


const port = process.env.PORT || 3000; // Use environment variable or default port 3000

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
