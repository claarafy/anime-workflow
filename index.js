const express = require('express')
const app = express()
const PORT = 1234

app.get('/', function(req, res) {
  res.send('<h1>Welcome to Animaniacs!</h1>')
})

app.listen(PORT, function(){
  console.log("Server started on port:", PORT)
})
