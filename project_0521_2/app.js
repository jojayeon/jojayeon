const fs = require('fs');
const today = require('./today.js')
// const date = new Date();
// const date = new Date(year, month, day);
// console.log(date);
// const year = date.getFullYear();
// const month = date.getMonth()+1;// 0부터 시작이라 +1
// const day = date.getDate();
// console.log(year);
// console.log(month);
// console.log(day);
// console.log(year + "-" + month+ "-" +day);


// function today() {
//   const date = new Date();
//   const year = date.getFullYear();
//   const month = date.getMonth()+1;
//   const day = date.getDate();
//   return year + "-" + month+ "-" +day
// }

//* 위에 만들어서 모듈로 넘기 
// console.log(today());

const htmlMarup = {
  head : {
    title: "제이슨 부분",
  },
  body : {
    header : "메뉴부분",
    main : "메인부분",
    footer: "하단부분",
  }
}

// const test = {
//   name : "자연",
//   age : 22,
//   city : "계룡"
// }

// let convertJSON = JSON.stringify(test);//한줄
// let convertJSON = JSON.stringify(test, null, 2);//줄변경있게
console.log(htmlMarup);
let convertJSON = JSON.stringify(htmlMarup, null, 2);
console.log(htmlMarup);

const text = fs.writeFileSync(`${today()}_htmlMarup.json`, convertJSON,"utf-8", function(error) {
  if(error) {
    console.log(" 파일만드는 것 에러");
    console.log(" 에러 내용", error);
  }
  console.log(" 잘 됨");
});

// const text = fs.writeFileSync(`${today()}_test.json`, test,"utf-8", function(error) {
//   if(error) {
//     console.log(" 파일만드는 것 에러");
//     console.log(" 에러 내용", error);
//   }
//   console.log(" 잘 됨");
// });




