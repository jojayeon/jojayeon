const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req,res)=>{
  if(req.method === "GET"){
    //전부 메인 페이지 보이게 만드는 요소
    if(req.url === "/"){
      fs.readFile(path.join(__dirname, "main.html"), (err, data)=>{
        if(err){
          console.log("err~!~!~!~");
        }
        res.writeHead(200,{"content-type": "text/html; charset = utf-8"});
        res.end(data);
      });
    }
    if(req.url === "/main.html"){
      fs.readFile(path.join(__dirname, "main.html"), (err, data)=>{
        if(err){
          console.log("err~!~!~!~");
        }
        res.writeHead(200,{"content-type": "text/html; charset = utf-8"});
        res.end(data);
      });
    }
    //파일 위치 확인 해서 넣어주기
  //지금 부터는 서브 페이지 만들어지는 것 계속 들어가게
  // for(let i = 1; i < 366; i++) {
  //   if(req.url === `/index${i}.html`){
  //     fs.readFile(path.join(__dirname, `index${i}.html`), (err, data)=>{
  //       if(err){
  //         console.log("err~!~!~!~");
  //       }
  //       res.writeHead(200,{"content-type": "text/html; charset = utf-8"});
  //       res.end(data);
  //     });
  //   }
  // }


  //css파일도 출력되게 만들기 - css는 2개 이니까 무식하게 만들자

  if(req.url === "/main.css"){
    fs.readFile(path.join(__dirname, "main.css"), (err, data)=>{
      if(err){
        console.log("err~!~!~!~");
      }
      res.writeHead(200,{"content-type": "text/css; charset = utf-8"});
      res.end(data);
    });
  }

  //서브 css 미리만들어둠 - 파일 위치만 확인
  // if(req.url === "/sub.css"){
  //   fs.readFile(path.join(__dirname, "sub.css"), (err, data)=>{
  //     if(err){
  //       console.log("err~!~!~!~");
  //     }
  //     res.writeHead(200,{"content-type": "text/css; charset = utf-8"});
  //     res.end(data);
  //   });
  // }  


  }else if(req.method === "POST"){
    if(req.url === "/submit"){
      //입력한 일기를 저장하는 파일을 보내도 메인 화면이 남아있게 추가
      fs.readFile(path.join(__dirname, "main.html"), (err, data)=>{
        if(err){
          console.log("err~!~!~!~");
        }
        res.writeHead(200,{"content-type": "text/html; charset = utf-8"});
        res.end(data);
      });
//! 문제 1 저장하고서 css가 적용이 안됨

      let body = "";
      req.on("data", (check)=>{
        body += check.toString();
      });
      req.on("end",()=>{
        const parseData = new URLSearchParams(body);
        const title = parseData.get("title");
        const content = parseData.get("content")
        const date = parseData.get("date")
        
        const jsonData = {
          title: title,
          date: date,
          content: content,
        };
        
        const jsonDataString = JSON.stringify(jsonData, null, 2);
        fs.writeFile(path.join(__dirname, "public/data.json"),jsonDataString, (err)=>{
          if(err){
            console.log(err);
          }
          res.writeHead(200,{ "Context-Type": "application/json; charset=utf-8" });
          res.end();
        }); 
      })
    }
  }
});
//로컬 서버 오픈
const PORT = 3000;
server.listen(3000, (err) =>{
  if(err){
    console(err);
  }
  console.log(`http://localhost:${PORT}`);
});