const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())

app.get('/', (req, res) => {
  console.log(req.query)
  res.send('hello from home')
})

app.listen(3000)