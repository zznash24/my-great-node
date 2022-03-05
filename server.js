const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end('Hello World');
});

server.listen(3000, '127.0.0.1', () => {
    console.log(`server running on port 3000, 127.0.0.1`)
})

const cowsay = require('cowsay');

console.log(cowsay.say({text: "I'm a module"}));

