// Import intension
const {createNewFile, readFile} = require('./fileSystem')
const logRequestTime = require('./middlewares/logRequestTime')
// Import Extension
const express = require('express');
const app = express.Router();

const port = 3001;

app.use(logRequestTime)

app.get('/', (req, res) => {
    res.send("Hello, this is homepage")
  })


  app.listen(3001, () => {
    console.log("App listening on: ", `${port}`)
  })