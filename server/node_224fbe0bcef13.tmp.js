const { join } = require('path')
const express = require('express')

const publicPath = join(__dirname, '../public')
var app = express()

app.use(express.static(publicPath))

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})