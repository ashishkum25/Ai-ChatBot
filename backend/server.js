//io -> means server
//socket -> means single user
//socket.on -> Here "on" means listener (or event listen karna)
//socket.emit -> Here "emit" means data ai se leke server ko send karna

require('dotenv').config();
const app = require('./src/app.js');

const generateResponse = require('./src/service/aiService.js');

//Socket.IO Setup
const { createServer } = require("http");
const { Server } = require("socket.io");
const httpServer = createServer(app);
const io = new Server(httpServer, { 
  cors: {
    origin: "http://localhost:5173", // Adjust 
  }
 });
const chatHistory = []; //Short Term Memory is stored in the array
io.on("connection", (socket) => {
  console.log("A user connected")

  socket.on("disconnect", () => {
      console.log("A user disconnected")
  });

  /* ai-message */
  socket.on('ai-message', async (data) => {
      console.log("Ai message received:", data);

      chatHistory.push({
          role: "user",
          parts: [ { text: data } ]
      });

      const response = await generateResponse(chatHistory);

      chatHistory.push({
          role: "model",
          parts: [ { text: response } ]
      });

      socket.emit("ai-message-response", response);

  })
});


httpServer.listen(3000, () => {
  console.log('Server is running on port 3000');
});

