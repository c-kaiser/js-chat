const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('frontend'));
app.use(express.json());

const messages = [];
const getMessages = (req, res) => { res.status(200).json(messages);};
const addMessage = (req, res) => { messages.push(req.body);    
res.status(201).end();};
app.get("/api/messages", getMessages);
app.post("/api/messages", addMessage);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


