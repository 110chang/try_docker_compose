const redis = require('redis');
const http = require('http');
const socketio = require('socket.io');

const redisClient = redis.createClient(6379, 'redis');
const PORT = 8080;

const server = http.createServer((request, response) => {
  redisClient.incr('counter', (error, reply) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end(`You accessed here ${reply} times.\n`);
  });
});

server.listen(PORT, '0.0.0.0');
console.log(`Server is running on port ${PORT}.`);

const io = socketio(server);

io.on('connection', function(socket){
  console.log('a user connected');
});
