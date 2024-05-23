const rl = require('readline');
const fs = require("fs");

const pokemonData = JSON.parse(fs.readFileSync("./pokemon.json", "utf-8"));
// console.log(pokemonData);
// console.log(typeof(pokemonData));//배열인지 확인 근데 상위인 객체로 나옴
// console.log(Array.isArray(pokemonData));//배열인지 확인


const readLine = rl.createInterface({
  input : process.stdin,
  output : process.stdout
});

//질문을 받으면 
// readLine.question("포켓몬스터 이름 작성해주세요 : ", function(answer){
//   for(let i = 0; i < pokemonData.length; i++)
//   console.log(i+1+"번째")
//   if(answer === pokemonData[i]){
//     console.log("포켓몬스터 이름이 존재합니다.");
//     readLine.close();
//     break;
//   } else {
//     console.log("존재하지 않습니다.");
//     readLine.close();
//   }
// });


readLine.question("포켓몬스터 이름 작성해주세요 :", function(answer){
  for(let i = 0; i< pokemonData.length; i++) {
    console.log((i + 1) + "포켓몬스터 번호");
    if(answer === pokemonData[i]) {
      console.log("포켓몬스터 이름이 존재합니다.");
      readLine.close();
      break;
    } else {
      console.log("포켓몬스터 이름이 존재하지 않습니다.");
      readLine.close();
    }
    
  }
});