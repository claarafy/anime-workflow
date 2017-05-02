const express = require('express')
const app = express()
const PORT = 1234

app.get('/', function(req, res) {
  res.send('<h1>Welcome to Animaniacs!</h1>')
})



app.get('/animes', function (req, res) {
  res.send('<h1>School Days</h1>')
})

app.get('/animes/:id', function(req, res) {
  res.send("The id of this anime is: " + req.params.id)
})


app.listen(PORT, function(){
  console.log("Server started on port:", PORT)
})
