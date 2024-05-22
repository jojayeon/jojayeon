setTimeout(function(){
  console.log("1. 너구리가 공중부양");
  setTimeout(function(){
    console.log("2. 너구리가 공중부양");
  }, 1000);
}, 1000);
//결과
//1번나오고 1초후 2번 나옴
//-> 총 2초가 걸림
//비동기함수를 동기화한것 
//순서를 어기는 놈을 순서지키게 하는방법 - callback

//*위와 같음
// setTimeout(function() {
//   console.log("1. 너구리가 공중부양");
//   a();
// }, 1000)
// function a() {
//   setTimeout(function() {
//     console.log("2. 공욱재가 늦잠");
//   }, 1000)
// }


setTimeout(function() {
  console.log("1.배성빈");
}, 3000);

setTimeout(function() {
  console.log("2.김정수");
}, 2000);

setTimeout(function() {
  console.log("3.조우식");
}, 1000);

//결과 3->2->1 순으로 나온다 

//이걸 1->2->3 표기하기

setTimeout(function() {
  console.log("1.배성빈");
  setTimeout(function() {
    console.log("2.김정수");
    setTimeout(function() {
      console.log("3.조우식");
    }, 1000);
  }, 2000);
}, 3000);




