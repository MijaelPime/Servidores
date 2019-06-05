const http = require('http');
const fs = require('fs');
const port = 8000;
const historia ="Esta es una historia con configuración";
const server = http.createServer(responseHandler);

function responseHandler(req, res) {
  fs.writeFile('historia.txt',historia, function(err) {
    if(err) {
      throw err;
    }
  });
  fs.readFile('historia.txt','utf8',function(err, contenido) {
    if(err) {
      throw err;
    }
    res.write(contenido);
    res.end();
    });
}

server.listen(port, function() {
    console.log("Se inicio el servidor " +port);
    console.log("http://localhost:"+port);
});
