const { Server } = require("socket.io");

const io = new Server({
    cors: {
      origin: "http://localhost:3001"
    }
})

io.on("connection", (socket) => {
    socket.on('message', msg => {
        console.log(`New message: ${msg}`)
        io.emit('message', msg)
        console.log(`Message sent`);
    });
});

io.listen(3000)