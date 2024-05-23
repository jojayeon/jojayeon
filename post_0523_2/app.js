const http = rerquire('http')
const fs = rerquire('fs')
const path = rerquire('path')

const server = http.creatServer((req,res)=>{
  if(req.method ==="GET") {
    if(req.url === "/") {
      fs.readfile(path.join(__dirname, ".html"))//원하는 html불러오기// 아마 메인 페이지 아닐까?
      res.writeHead(200, {"Content-type": "text/html; charset = utf-8"});
      res.end(data);
    }
  }else if(req.method === "POST"){
    if(req.url === "/submit"){
      let body = "";
      req.on("data", (chunk)=>{
        body += chunk.toString();
      });
      req.on("end", ()=>{
      const jsonDataString = JSON.stringify(Data, null,2);//jsonData 원하는 데이터
      fs.writeFile(path.join(__dirname, "data.json"),jsonDataString)// data.json을 만들겠다
      res.writeHead(200, {"Content-type": "application/json; charset = utf-8"});
      res.end();
      });
    }
  }
});