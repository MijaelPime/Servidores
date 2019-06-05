const http = require('http');
const port = 8000;
const server = http.createServer(responseHandler);

function responseHandler(req, res) {
    res.write("Hola desde el servidor Hola");
    res.end();
}

server.listen(port, function() {
    console.log("Se inicio el servidor " +port);
    console.log("http://localhost:"+port);
});
