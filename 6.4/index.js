const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const UsersService = require('./UsersService');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const userService = new UsersService();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    //socket reprezentuje osobe ktora wlasnie weszla na czat
    socket.on('join', function(name) {
        // dodanie uzytkownika do listy osob na czacie
        userService.addUser({   
            id: socket.id,
            name
        });
        //aktualizacja info nt uzytkownikow
        io.emit('update', {
            users: userService.getAllUsers()
        });
    });
    socket.on('disconnect', () => {
        userService.removeUser(socket.id);
        socket.broadcast.emit('update', {
            users: userService.getAllUsers()
        });
    });
    socket.on('message', function(message) {
        const {name} = userService.getUserById(socket.id);
        socket.broadcast.emit('message', {
            text: message.text,
            from: name
        });
    });
});

server.listen(3000, function() {
    console.log('listening on *:3000');
});