const { join } = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const publicPath = join(__dirname, '../public')
const port = process.env.PORT || 3000
var app = express()
var server = http.createServer(app)
var io = socketIO(server)

app.use(express.static(publicPath))

io.on('connection', (socket) => {
    console.log('New User Connected')

    socket.emit('newEmail', {
        from: 'jm@example.com',
        text: 'Hey, what is going on?',
        createdAt: 123
    })

    socket.emit('newMessage', {
        from: 'John',
        text: 'See you then.',
        createdAt: 123
    })

    socket.on('createMessage', (message) => {
        console.log('createMessage', message)
    })

    socket.on('disconnect', () => {
        console.log('User disconnected')
    })
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}.`)
})