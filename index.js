const express = require('express')
const app = express()
const PORT = 1234


app.listen(PORT, function(){
  console.log("Server started on port:", PORT)
})
