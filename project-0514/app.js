const http = require("http");
const fs = require("fs");

const server = http.createServer(function(req, resp){
  if(req.method === "GET"){
    function serverli(A){
      if(req.url === `/${A}`){
        if(A ==="") {
          A = 'index1.html'
        }
        const ht = fs.readFileSync(`./public/${A}`);
        let A2 = "";
        for(let i = 0; i< A.length; i++){
          if(A[i] === '.'){
            A2 = A.slice(i+1);
          }
        }
        resp.statusCode = 200;
        resp.setHeader('Content-type', `text/${A2};`);
        resp.write(ht);
        resp.end();
      }
    }
    serverli("")
    serverli("index1.html")
    serverli("index2.html")
    serverli("index3.html")
    serverli("index4.html")
    serverli("index5.html")
    serverli("index.css")
    serverli("index.js")
  }
});

server.listen(8080);


