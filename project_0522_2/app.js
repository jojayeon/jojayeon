let fromData = {
  a : "1. 꽁꽁 얼어붙은",
  b : "2. 대전천 위로 ",
  c : "3. 고양이가 날라다닙니다.",
}

function a() {
  console.log(fromData.a);
}
function b() {
  console.log(fromData.b);
}
function c() {
  console.log(fromData.c);
}
//setTimeout
//복잡해지면 예상이 안된다.
//순서가 아래 있는 것들이 먼저 나오고 4번째로 나오니까 순서를 지키지 않은 것이다. 
//비동기 함수는 딱 하나다 stTimeout하나이다.

a();
c();
b();
setTimeout(function(){
console.log("4. 고양이가 날라다닙니다.");
}, 5000);
//위에서 아래로 순서대로 나온다.

