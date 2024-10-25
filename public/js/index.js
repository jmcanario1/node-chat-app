var socket = io()

socket.on('connect', function () {
    console.log('Connected to server')

    socket.emit('createMessage', {
        from: 'Joao',
        text: 'This is a test.'
    })
})

socket.on('disconnect', function () {
    console.log('Disconnected from server')
})

socket.on('newMessage', function (message) {
    console.log('New Message', message)
})

socket.on('newEmail', function (email) {
    console.log('New Email', email)
})