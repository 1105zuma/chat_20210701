const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = 3000;

app.use(express.static('public'));

let messages = [];

io.on('connection',function(socket){
    socket.on('signin',function(){
        const id = socket.id;
        io.to(id).emit('signin', messages);
    });

    socket.on('message',function(msg){
        messages.push(msg);
        messages=messages.slice(-100);
        io.emit('messages', msg);
    });
});

http.listen(PORT, function(){
    console.log('server listening. Port:' + PORT);
});
