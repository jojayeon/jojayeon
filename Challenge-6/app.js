const http = require("http");
const fs = require("fs");
const qs = require("querystring")




const names = [
  "구하림",
  "김보미",
  "김수현",
  "김정수",
  "문혜림",
  "배성빈",
  "백지원",
  "송이현",
  "신지윤",
  "유으뜸",
  "유호영",
  "이연승",
  "이재영",
  "이종수",
  "임유진",
  "정호연",
  "조우식",
  "조자연",
  "최유진",
  "황재민"
];

const server = http.createServer(function(req,resp){
  if(req.method === "GET") {
    // console.log("요청 URL 검사 :", req.url);
    function serverli(A){
      if(req.url === `/${A}`){
        if(A ==="") {
          A = 'index.html'
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
    serverli("index.html")
    serverli("index.css")
  }
  //*중간 우선 post로 받아오는 것을 먼저 해보고 -- 약간은 감은 잡았다. 저번에 작은 상자로 나누워서 옮기는 거와 비슷하다.
  //*return 블리언이 어떻게 들어가는지 확인하고 리턴도 잘 모르고 쓰고있던것같다. 다시보기
  //*그림으로는 어디에 들어가는지 알겠는데 실제로 연결하려니 잘 모르겠다 해봐야 알겠다.
  //* -- 우선 서버로 불러왔을 때 바로 처리해보자
  

  //*수현씨가 노션에 올린 것 가져온 것  
  let body = "";
  if (req.method === "POST") {
    //*빈 문자열을 만들어 그 안에 data를 삽입하는 형태이다.
    req.on("data", (data) => {
      body += data;
      // body에 data를 추가한다.
    });
    req.on("end", () => {
      let parse = qs.parse(body);
      // console.log(parse);
      // console.log(parse.name);
      // console.log(parse.pw);
      // console.log(parse.email);
      // console.log(parse.pnumber);
      
      // console.log(names[17]);
      // console.log(parse);
      // console.log(parse.name);


      const validationCheck = [false,false,false,false,false];

      //이름
      function checkMyName(name){  
        // for(let i =0; i<names.length; i++){}//! for이라 계속 돌면서 마지막 값 빼고는 false이 들어갔네 
          if(names.includes(name)){//*includes
            return true;
          } else {
            return false; // 이 블리언은 어디로 가는거지
          }
        }
      const cname = checkMyName(parse.name);
      // console.log(cname);//false이네 ? 왜지
      if(cname === true){
        validationCheck[0] = true;
      }
      console.log(validationCheck);
      console.log(parse.pnumber);
      //폰 번호
      if(parse.pnumber.length === 13){
        validationCheck[4] = true;
      }
      console.log(validationCheck);

      //비밀번호
      const parpn = parse.pnumber 
      const backpn = parpn.split("-")[2]// 나오긴 하는데 안들어가네? 나 머라는 거지;;;;
      console.log(backpn);

      function pwch(pw){
        const namepn = parse.name+backpn
        if(namepn === pw){
        return true
        }else
        return false
      }
      validationCheck[1] = pwch(parse.pw);
      console.log(validationCheck)

      //비밀번호 확인
      function pwch2(pw2){
        if(parse.pw === pw2){
        return true
        }else
        return false
      }
      validationCheck[2] = pwch2(parse.tpw);
      console.log(validationCheck)
      //이메일
      
      //validationCheck e다 true면 활성활? 어떻게 할까 함....html을 수정하는게 가능할까? 해보자
    }); 
  }
});    
     















// GET
//! 우선 정리 post 먼저하자
//     if(req.url.startsWith("/test")) {
//       const inputdata = req.url.split("?")[1]; 
//       const data = qs.decode(inputdata); 
//       console.log(data.name);
//       // console.log(data.pw);
//       // console.log(data.tpw);
//       // console.log(data.email);
//       // console.log(data.pnumber);
//       const validationCheck = [false,false,false,false,false];

//       function checkMyName(name){  
//         for(let i =0; i<names.length; i++){  
//           if(names[i] === name){
//             return true;
//           } else {
//             return false; // 이 블리언은 어디로 가는거지
//           }
//         }
//       }
//       const cname = checkMyName(data.name);
//       console.log(cname);

//       if(cname === true){
//         validationCheck[0] = true;
//         console.log(validationCheck[0])
//       }

//     } 
//   }
// });


const PORT = 8080;
server.listen(8080, function(err){
  if(err){
    console.log(err);
  }
  console.log("서버 돌아감");
  console.log(`http://localhost:${PORT}`);
});
