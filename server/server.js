const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {   cors: {
        origin: "http://localhost:3333",
        methods: ["GET", "POST"],
    } });
const cors = require('cors')
const port = 3011
app.use(cors())

io.on("connection", (socket) => {
    console.log('one client connected: ' + socket);

    socket.on("add-message", (data) => {
        console.log('add-message: ' + data);
        io.emit('new-message', data);
    });

    socket.on("add-user", (data) => {
        console.log('add-user: ' + JSON.stringify(data));
        io.emit('add-user', `server: ${data}`);
    });

    socket.on("remove-user", (data) => {
        console.log('remove-user: ' + JSON.stringify(data));
        io.emit('remove-user', `server: ${data}`);
    });


});


httpServer.listen(port);



