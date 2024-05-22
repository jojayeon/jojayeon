// setTimeout(callback, delaytime);
//* 스타부어치 (하고싶은 것, 기다려야하는 시간);
// 1/1000 -> 1000이 1초다.
setTimeout(function(){
  console.log("고양이가 날라다닙니다.");
}, 1000);
setTimeout(function(){
  console.log("강아지가 날라다닙니다.");
}, 1000);
setTimeout(function(){
  console.log("너구리가 날라다닙니다.");
}, 1000);
// 결과
// 고양이가 날라다닙니다.
// 강아지가 날라다닙니다.
// 너구리가 날라다닙니다.
//setTimeout끼리는 도 순서를 지킨다.
//비동기 함수끼리 순서가 있다.
