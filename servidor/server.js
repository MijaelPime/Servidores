const http = require('http');
const fs = require('fs');
const port = 8000;
const server = http.createServer(responseHandler);

function responseHandler(req, res) {
  fs.access('statics/index.html', fs.constants.F_ok, function(err) {
    if(err) {
      res.write('el archivo no existe');
      res.end();
    }else {
      res.write('el archivo si existe');
      res.end();
    }
  });
}

server.listen(port, function() {
    console.log("Se inicio el servidor " +port);
    console.log("http://localhost:"+port);
});
