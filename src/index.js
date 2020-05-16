'use strict'

const express = require('express')

const app = express()

app.use('/', (req, res, next) => {
  res.send(`This is JT Bowler's website!`)
})

app.listen(8000, () => {
  console.log('Server listening on port 8000...')
})
