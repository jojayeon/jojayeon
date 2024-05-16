const fs = require('fs');

function loadPokemonNames(path) {
  try {
    if (typeof(path) === "string") {
      const pokemonValue = fs.readFileSync(path, 'utf8');
      return JSON.parse(pokemonValue);
    } 
    // else 를 사용하는 대신 try catch 문법을 사용해서 에러를 잡아내는 것이
    // '에러 처리'라는 것을 명시적으로 이야기 하는 좋은 어휘
  } catch (error) {
    // 매개변수 error는 catch구문이 실행될 때 자동으로 전달되는 변수
    console.error("에러 내용:", error);
  }
}
const data = loadPokemonNames("./pokemonNames.json");
// console.log(data.length);
// console.log(data);

// 미션 1 - 각각의 배열원소 하나하나를 html만들기 - h1에 넣기
//EX) - html로 파일 하나씩 만들어보는 것인가.

//EX
// 된다면 번호 쓰던가
// 글자 수로 구분하기도 하고 -3글자 4글자 등
// 첫 글자로 카운팅도 가능

// - 나만의 방식으로 더 만들기

// 1. - 배열원소 하나하나를 html로 만들기
// - 하나하나에 번호도 추가
// 2. - 검색으로 나오게 가능할까? - 찾기
// - 처음에는 검색으로 완전히 맞아야 나오게 만들기
// - 2글자 이상 맞을 때 파일을 만들어지게? ←  3번하고 후에
// 3. - 랜덤으로 속성(아이템이나 지닌문건처럼)줄 수 있지 않을까?


//* 포켓몬 데이터 - data 확인
// console.log(data[0]);
// console.log(data.length);

//* 1. html 만들기
// const fs = require('fs');
for (let i = 0; i < data.length; i++) {
  try {
    let name = data[i];// 이름(배열 하나하나)이 들어가야할까?
    // let texradom = '123';//지금은 없지만 나중에 랜덤으로 무엇가 주어지게 할때 사용할 용도
    const content = `
    <!DOCTYPE html>
    <html lang="ko">  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <div>
        <h1>${name}</h1>
        <p> No .${i+1}</p>
      </div>
    </body>
    </html>`;
    fs.writeFileSync('./html/NO.'+(i+1)+name+'.html', content);
    //a에는 번호가 차례로들어가게 그뒤는 이름이 들ㅇ어가야하니까 data 배열이 하나씩맞게 들어가야할 것 같다.
  } catch (err) {
    console.error(err);
  }
}
//* 3글자
// if(Array.isArray(data) ===true) {
//   console.log("a");
// }
let c1 = 0;
let name3 = []
for (let i = 0; i < data.length; i++) {
  let tf = data[i].length === 3
  if(tf === true) {
    name3 = name3 + data[i]
    let a = i+1
    name3 = name3+"("+ a +")"+" , "
    c1 += 1;

  }
}
try {
  const content = `
  <!DOCTYPE html>
  <html lang="ko">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id = "root">
      <h1> ${name3}</h1>
      <p>${c1}</p>
    </div>
  </body>
  </html>`;
  fs.writeFileSync('./html/3글자 포켓몬.html', content);
} catch (err) {
  console.error(err);
}

//* 3글자 아닌 포켓몬

let namen3 = []
let c = 0;
for (let i = 0; i < data.length; i++) {
  let tf = data[i].length === 3
  if(tf !== true) {
    namen3 = namen3 + data[i]
    let a = i+1
    namen3 = namen3+"("+ a +")"+" , "
    c += 1;
    try {
      const content = `
      <!DOCTYPE html>
      <html lang="ko">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      </head>
      <body>
      <div id = "root">
      <h1> $${namen3}</h1>
      <p>${c}</p>
      </div>
      </body>
      </html>`;
      fs.writeFileSync('./html/3글자 아닌 포켓몬.html', content);
    } catch (err) {
      console.error(err);
    }
  }
}


// 검색으로 나오게 가능할까? - 찾기

function nc(ina) {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      for(let k = 0; k < ina.length; k++){
        let isa = Array.from(ina);//배열로 만들어가 
        if(isa.length > 1){
          let ifc = ina[k] === data[i][j]
          let k2 = k+1
          let j2 = j+1
          let ifc2 = ina[k2] === data[i][j2]// 숫자이상을 나가면 false 과 false를 비교하면 같으니가 true가 나와서 실해되네
          if((ifc === true) && (ifc2 === true)){ // * 이놈이 안돌아간다 왜지 해결했는데 해결방안이 이해가 안됨 위쪽에 전 방법으로 실햄됨 이것만 안됨
            console.log(data[i]);
          }
        }else if(isa.length === 1) { //todo 이걸 해결해보기 주말 
          if(ifc === true){
            console.log(data[i]);
          }
        }
      } 
    }
  }
  console.log("놉");
}

nc("이상해")

// let h = "이상"
// console.log(h[0] === data[0][0]);
// if(Array.isArray(Array.from(h))) {
//   let isa = Array.from(h);
//   console.log("a");
//   console.log(isa.length);
// }


// console.log(h.length);
// console.log(h[0]===data[0][0]);
// console.log(h[0+1+1]===data[0][1]);

// console.log(data[1][0]);

