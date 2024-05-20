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
        console.log("a, b 매개변수 모두 객체 입니다.")
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






