require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

// Cara mengambil informasi sensitif dari .env
console.log(process.env.SERVER_SECRET)

// Server dengan GET method pada "/" endpoint
app.get('/', (req, res) => {
  res.send('Hello World! from get w/ "/" endpoint')
})

// Server dengan POST method pada "/" endpoint
app.post('/', express.json(), (req, res) => {
  res.send('Hello World! from get w/ "/" endpoint')
})

// Server dengan DELETE method pada "/" endpoint
app.delete('/', express.json(), (req, res) => {
  res.send('Hello World! from get w/ "/" endpoint')
})

// Server dengan PATCH method pada "/" endpoint
app.patch('/', express.json(), (req, res) => {
  res.send('Hello World! from get w/ "/" endpoint')
})

// Menjalankan server
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
