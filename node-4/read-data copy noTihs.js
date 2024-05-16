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
//EX
// 된다면 번호 쓰던가
// 글자 수로 구분하기도 하고 -3글자 4글자 등
// 첫 글자로 카운팅도 가능

// 1. - 배열원소 하나하나를 html로 만들기
// - 하나하나에 번호도 추가
// 2. - 검색으로 나오게 가능할까? - 찾기
// - 처음에는 검색으로 완전히 맞아야 나오게 만들기
// - 2글자 이상 맞을 때 파일을 만들어지게? ←  3번하고 후에
// 3. - 랜덤으로 속성(아이템이나 지닌문건처럼)줄 수 있지 않을까?

//* 포켓몬 데이터 - data 확인
// console.log(data[0]);
// console.log(data.length);

// 검색으로 나오게 가능할까? - 찾기

let pn = [];
let pn2 = [];
function nc(ina) {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      for(let k = 0; k < ina.length; k++){
        let isa = Array.from(ina);//배열로 만들어가 
        let ifc = ina[k] === data[i][j]
        //우선 무식하게 만들어보자 
          let k2 = k+1
          let j2 = j+1
          let ifc2 = ina[k2] === data[i][j2]
          let k3 = k+2
          let j3 = j+2
          let ifc3 = ina[k3] === data[i][j3]
          let k4 = k+3
          let j4 = j+3
          let ifc4 = ina[k4] === data[i][j4]
        if(isa.length === 1) { //todo 이걸 해결해보기 주말 
          // 검색 글자 수가 하나 일때
          let ifc = ina[k] === data[i][j]
          if(ifc === true){
            pn += data[i]+" ";
          }
        }else if(isa.length === 2){// 숫자이상을 나가면 false 과 false를 비교하면 같으니가 true가 나와서 실해되네
          //2개일 때
          if (data[i][j2],ina[k2] !== undefined) { //마지막 글자가 한글자만 들어오는걸 막음
            if((ifc === true) && (ifc2 === true)){ // * 이놈이 안돌아간다 왜지 해결했는데 해결방안이 이해가 안됨 위쪽에 전 방법으로 실햄됨 이것만 안됨
              pn += data[i]+" ";
            }
          }
        }else if(isa.length === 3){
          if (data[i][j2],ina[k2],ina[k3] !== undefined) { 
            if((ifc === true) && (ifc2 === true) && (ifc3 === true)){ 
              pn += data[i]+" ";
            }
          }
        }else if(isa.length >= 4){
          if (data[i][j2],ina[k2],ina[k3],ina[k4] !== undefined) { 
            if((ifc === true) && (ifc2 === true && (ifc3 === true) && (ifc4 === true))){
              pn += data[i]+" ";//todo 이거 배열에넣는거 해결하자
              for(let l = 0; l < pn.length; l++){
                pn[l] +=data[i];
                let l2 = l+1;
                if(pn[l] === pn[l2]) {
                  if(pn[l2] !== undefined){
                    pn2 = pn.splice(l2,1);
                  }
                }
              }
            }
          }
        }//if문
      } //fir3 k
    }//fro2 j
  }//for1 i
  console.log(pn2);
}

nc("굽이치는물결");// 또 문제네 다 써주니까 안되네????
// 물굽이치  굽이치는 이치는물
// 물굽이치는물결
 

//todo 한글자안되는 것은 해결함 근데 뒤 2글자 이상일때 마지막글자하나만 있어도 인식하는 것을 고쳐야한다.
//!중간 문제점 한글자일떄 실행이 안된다. 그리고 '이상해'라고 넣었을때 '해'만 마지막에 있는 포켓몬도 대려온다

//검사=용 if문 안에 넣어 사용
// console.log(ina[k]);
// console.log(ina[k2]);
// console.log("-");
// console.log(data[i]);
// console.log(data[i][j]);
// console.log(data[i][j2]);
// console.log(i);
// console.log(j);
// console.log(k);
// console.log("-----");

              
// for(let i=0; i < data.length; i++ ){ // 최대 글자수 확인
//   if(data[i].length === 6){
//     console.log(data[i]);
//   }
// }


// let h = "이상" //확인용
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

