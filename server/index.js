const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');
const {addUser,removeUser,getUser,getAllUsers} = require('./users');
corsOptions={
    cors: true,
    origins:["localhost:3000"],
}

const PORT = process.env.PORT || 5000;

const router = require('./router');
const moment = require('moment-timezone');


const app = express();
const server = http.createServer(app);
const io = socketio(server, corsOptions);

io.on('connection',(socket)=>{
    socket.on('join',({name})=>{
        const {user} = addUser({id:socket.id,name});
        socket.emit('message',{user:'admin',text:`${name} welcome to the chat.`,users:getAllUsers()});
        socket.broadcast.emit('message',{user:'admin',text:`${name} has joined the chat`,users:getAllUsers()})

        socket.join(user);
        socket.broadcast.emit('allUsers',{users:getAllUsers()});
    });
    socket.on('askUsers',()=>{
        socket.emit('allUsers',{users:getAllUsers()});
    });
    socket.on('sendMessage',(message, callback)=>{
        const user = getUser(socket.id);
        io.emit('message',{user:user.name,text:message,time:moment.tz('Asia/Colombo').format('h:mm a')});
        callback();
    });
    socket.on('typing',()=>{
        const user = getUser(socket.id);
        if(user){
            socket.broadcast.emit('message',{user:'typing',text:`${user.name} is typing ...`});
        }
    });

    socket.on('disconnect',()=>{
        const user = getUser(socket.id);
        removeUser(socket.id);
        if(user){
            socket.broadcast.emit('message',{user:'admin',text:`${user.name} has left the chat`,users:getAllUsers()})
        }
        socket.broadcast.emit('allUsers',{users:getAllUsers()});
    });
});


app.use(router);
app.use(cors());

server.listen(PORT,()=>console.log(`The server is running on ${PORT}`));
