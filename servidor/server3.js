const http = require('http');
const fs = require('fs');
const port = 8000;
const historia ="Esta es una historia con configuración";
const server = http.createServer(responseHandler);

function responseHandler(req, res) {
    fs.readFile('statics/index.html','utf8',function(err, contenido) {
    if(err) {
      throw err;
    }
    res.writeHeader(200, {"Content-Type": "text/html"});
    res.write(contenido);
    res.end();
    });
}

server.listen(port, function() {
    console.log("Se inicio el servidor " +port);
    console.log("http://localhost:"+port);
});
