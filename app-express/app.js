const express = require("express")
const os = require('os');

const app = express()
app.use(express.json())

app.get('/hello', async(req, res) => {
  console.log("Hello from Express")
  res.status(200).json({host: os.hostname()})
})

app.get('/', async(req, res) => {
  console.log("Hello from Express")
  res.status(200).json({host: os.hostname()})
})

app.listen(8080, () => {
  console.log(os.hostname())
  console.log('Express App Running on Port 8080')
})