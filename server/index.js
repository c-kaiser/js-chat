const express = require('express')
const app = express()
const port = 3000
const Message = require('/message.js') 
app.use(express.static('frontend'));

let chat = new Chat();

app.get('/api/messages', (req, res) => {
  res.json(chat.messages)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


