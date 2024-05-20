const objectLoop = require('./module.objectLoop.js');
const data = require('./data.obj.js');
//module.objectLoop, data.obj 모듈화해서 나누어 주는 형식
//여기서는 require로 불러와주는 형태

function forObject(a, b) {
  try {
    if (typeof a === "object") {
      if (typeof b === "object") {
        let values = [];

        objectLoop(values, a);
        objectLoop(values, b);

        console.log(values);
        let add = values.reduce((a, b) => {
          return a + b;
        });
        console.log("다 더한값 : ", add);

      }
    }
  } catch(error) {
    console.log(error);
    console.log("안됨요");
  }
}

forObject(data.a, data.b);


//of 객체의 값을 달라
//in 객체의 키를 달라

// - 모듈화와 for...in, .fot ...of로 객체의 키와 값을 불러오고 처리할 수 있는 것을 보았다.
// - push와 reduce를 추가적으로 알아 보았고 post 방식을 보면서 .on과 화살표 표기법을 다시 정리했으며 try...catch까지 살펴보앗다.