// Import intension
const {createNewFile, readFile} = require('./fileSystem')

// Import Extension
const express = require('express');
const app = express.Router();

const port = 3001;

app.get('/', (req, res) => {
    res.send("Hello, this is homepage")
  })
  
  app.listen(3001, () => {
    console.log("App listening on: ", `${port}`)
  })