const http = require('node:http');

const hostName = '127.0.0.1';
const port = 3200;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World! \n'); //We are sending the following data as the body of the response.

});

server.listen(port, hostName, () => {
    console.log(`server running at http://${hostName}:${port}/`);
});