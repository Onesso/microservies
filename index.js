
import express from "express";
import bodyParser from "body-parser"; // Import body-parser using ES6 syntax
import { randomBytes } from "crypto";

const posts = {};

const app = express();

// Use bodyParser.json() instead of json
app.use(bodyParser.json());

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    title,
    id
  };

  // Use status() instead of send() to set the status code
  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("Listening to port 4000");
});
