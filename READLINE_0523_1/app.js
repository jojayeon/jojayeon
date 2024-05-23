//터미널에서 파일 만들기 new-item app.js
//ctal + p - 현재 파일 선택

const rl = require("readline");
// console.dir(rl);

let inOut = {
  input: global.process.stdin, //process.stdin 
  output: global.process.stdout,
}
const readline =  rl.createInterface(inOut);
// console.dir(readline);

// readline.question("너의 이름은 무엇입니까? : ", function(answer){//질문을 써달라
//   console.log("니가 쓴 대답은 : ", answer);//답변 ->파일 만든다면 만들수 있다.
//   readline.close();
// });

// CLI 만들때 사용


//연습
//질문 좋아하는 동물?
//"정해진 답 : 강아지"
//cLI에서 답이 잘못쓰면 "땡 틀렸습니다." 콘솔찍기

const dog = "강아지";
readline.question("좋아하는 동물은 무엇인가요. : ", (answer) => {
  if(answer === dog) {
    console.log(answer," 맞습니다.");
    readline.close();
  } else {
    console.log(" 땡 틀렷습니다.");
    readline.close();
  }
});

