'use strict'

const express = require('express')

const app = express()

const PORT = 8000

app.use(express.static('src/server/static'))

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})
