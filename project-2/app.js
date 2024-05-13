const http = require("http");
const fs = require('fs');
//* 기본형
// const server = http.createServer(function(req, resp){
//   resp.statusCode = 200;
//   resp.setHeader('Content-Type', 'text/html; charset=utf-8');
//   resp.write("<h1>1231231313123</h1>")
//   resp.end();
//   console.log(req.method);
//   console.log(req.url);
// });
// server.listen(3000);


const server = http.createServer(function(req, resp){
  if(req.method === "GET"){
    console.log(req.url);
    // if(req.url === '/') {
    // '/' 메인 - 메인이 없는데 하니까 안됨
    //   const ht = fs.readFileSync("./public/main.html");
    //   resp.statusCode = 200;
    //   resp.setHeader('Content-Type', 'text/html; charset=utf-8');
    //   resp.write(ht);// 내용은 불러오기
    //   resp.end();
    // }
    // if(req.url === '/main.html') {
    //   const ht = fs.readFileSync("./public/main.html");
    //   resp.statusCode = 200;
    //   resp.setHeader('Content-Type', 'text/html; charset=utf-8');
    //   resp.write(ht);// 내용은 불러오기
    //   resp.end();
    // }
    // if(req.url === '/index.html') {
    //   const ht = fs.readFileSync("./public/index.html");
    //   resp.statusCode = 200;
    //   resp.setHeader('Content-Type', 'text/html; charset=utf-8');
    //   resp.write(ht);
    //   resp.end();
    // }
    // if(req.url === '/index.css') {
    //   const ht = fs.readFileSync("./public/index.css");
    //   resp.statusCode = 200;
    //   resp.setHeader('Content-Type', 'text/css; charset=utf-8');
    //   resp.write(ht);
    //   resp.end();
    // }
    // if(req.url === '/index.js') {
    //   const ht = fs.readFileSync("./public/index.js");
    //   resp.statusCode = 200;
    //   resp.setHeader('Content-Type', 'text/javascript; charset=utf-8');
    //   resp.write(ht);
    //   resp.end();
    // }
    * 3개 버전
    function serverli(A,B,C){
      if(req.url === `/${A}`) {
        const ht = fs.readFileSync( `./public/${B}`);
        resp.statusCode = 200;
        resp.setHeader("Content-Type", `text/${C}`);
        resp.write(ht);
        resp.end();
      }
    }
    * 2개 버전
    function serverli(A,B){
      if(req.url === `/${A}`) {
        console.log(A);
        if(A === " ") {
          A ='main.html'
        }
        const ht = fs.readFileSync( `./public/${A}`);
        resp.statusCode = 200;
        resp.setHeader("Content-Type", `text/${B}`);
        resp.write(ht);
        resp.end();
      }
    }
    //* 하나 버전
    function serverli(A){
      if(req.url === `/${A}`) {
        console.log(A);
        if(A === " ") {
          A ='main.html'
        }
        const ht = fs.readFileSync( `./public/${A}`);
        resp.statusCode = 200;
        let A2 = ""
        for(let i = 0; i < A.length; i++){
          if (A[i] === "."){
            A2 = A.slice(i+1);
          }
        }
        resp.setHeader("Content-Type", `text/${A2}`);
        resp.write(ht);
        resp.end();
      }
    }
      //메인
      serverli(" ")
      serverli('main.html')
      serverli('index.js')
      serverli('index.css')
      serverli('index.html')
    // serverli("",'html') //문제
    //안되는 이우 제일 아래 "" 빈공간에 있는 것이 뒤에 main.html을 불러와야하는데 l빈공간을 주니까 당연히 못오니까
  }
});

server.listen(3000);