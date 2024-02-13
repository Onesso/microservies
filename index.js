
const express = require ('express');

const bodyParser = require('body-parser');

const {randomBytes} = require ('crypto'); //generates random numbers to create id

const posts = {};


const app = express();
app.use(bodyParser.json);
app.get("post", (req, res)=>{
    res.send(posts);
});

app.post("/post", (req, res)=>{
    
    const id = randomBytes(4).toString('hex');

    const {title} = req.body;

    posts[id] = {
        id, title
    };

    res.send(201).send(posts[id]);

});

app.listen(4000, (req, res)=>{

    console.log("Listing to port 4000");

})