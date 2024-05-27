const http = require("http");
const fs = require("fs");
const path = require("path");


const server = http.createServer((req, res)=>{
  if(req.method === "GET") {
    if(req.url === "/"){
      fs.readFile(path.join(__dirname,"public/index.html"), (err,data)=>{
        if(err){
          console.log("errr~!");
        }
        res.writeHead(200,{"Content-type": "text/html; charset = utf-8"});
        res.end(data);
      });
    }
  }else if(req.method === "POST"){
    if(req.url === "/submit"){
      let body = "";
      req.on("data", (chunk)=>{
        body += chunk.toString();
      })

      req.on("end", ()=>{
        const parseData = new URLSearchParams(body);
        const title = parseData.get("title");
        const content = parseData.get("content")
        const date = parseData.get("date")

        const jsonData = {
          title: title,
          date: date,
          content: content,
        };

        const jsonDataString = JSON.stringify(jsonData, null,2);
        fs.writeFile(path.join(__dirname, "public/data2.json"),jsonDataString, (err) => {
          if(err){
            console.log("errr~!");
          }
          res.writeHead(200, {"Content-type": "application/json; charset = utf-8"});
          res.end();
          });
        });
      }
    }
  });

const PORT = 3000;
server.listen(3000, function(err){
  if(err){
    console.log(err);
  }
  console.log("서버 돌아감");
  console.log(`http://localhost:${PORT}`);
});
