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

readLine.question("포켓몬스터 이름 작성해주세요 :", function(answer){
  let data = [];
  pokemonData.forEach(element => {
    if(answer === element) {
      data.push(element);
      readLine.close();
    }
  });
  //위에는 넣기만
  //아래는 판단만
  
  console.log(data);
  if(data.length ===0){
    console.log("존재하지 않는다.");
  } else {
    console.log("포켓몬스터가 존재합니다.");
    fs.writeFileSync('./searData.json', JSON.stringify(data), 'utf8', (err) => {
      if(err) {
        console.log(err);
      }
    });
  }
  readLine.close();  
});