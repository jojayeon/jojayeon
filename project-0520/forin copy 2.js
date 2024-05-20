//매개변수 - 변수니까 데이터 타입

// function forObject(a,b) {
//   if(typeof(a) === "object") {
//     if(typeod(b) === "object") {
//       console.log("a, b 매개변수 모두 객체 입니다.")
//     }else{
//       console.error("객체아님")
//     }
//   } else{
//     console.error("객체아님")
//   }
// }
//* 같은 것
// function forObject(a,b) {
//   try {
//     if(typeof(a) === "object") {
//       if(typeod(b) === "object") {
//         console.log("a, b 매개변수 모두 객체 입니다.")
//       }
//     }
//   } catch{
//     console.log("안됨")
//   }
// }
//* 같은 거
function forObject(a,b) {
  try {
    if(typeof(a) === "object") {
      if(typeof(b) === "object") {
        // console.log("a, b 매개변수 모두 객체 입니다.")
        // let result = a.first + b.first ; // 객체가 first인지 어떻게 알까 내가 지금쓴거니까 아는 거지 아님 모르는 것이다.
        // console.log(result);
        let values = [];
        for(let key in a) {
          // console.log(key);
          // values[0] = a[key];
          values.push(a[key]);
        }
        for(let key in b) {
          // values[1] = b[key];
          
          //자스스럽게
          values.push(b[key]);//push - 배열에 넣어줘~
        }
        console.log(values);
        // let add = values[0] + values[1];
        //아래 이걸 자스처럼 
        //자스 스럽게
        let add = values.reduce((a,b) => {
          return a + b;
        });
        console.log("다 더한값 :", add);
      }
    }
  } catch(error){
    console.log(error);
    console.log("안됨")
  }
}

const a = {first : 1};
const b = {first : 2}; //아래와 같음
// const b = new Object();

forObject(a,b);






