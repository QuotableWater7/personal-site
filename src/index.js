'use strict'

const express = require('express')

const app = express()

const PORT = 8000

app.use('/', (req, res, next) => {
  res.send(`This is JT Bowler's website!`)
})

app.listen(PORT, () => {
  console.log(`Server listening on port PORT...`)
})
