const http = require('http');
const port = 3000;

const server = http.createServer((request, response) => {
  response.end("Hello Nodejs"
});

server.listen(port, () => {
  console.log(`Nodejs running on PORT ${port}`)
});
