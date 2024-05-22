//() => {} 화살표함수

// console.time("작업");
// console.time('첫번째 setTimeout');
// setTimeout(() => {
//   console.timeLog("첫번째 setTimeout")//시간으로 확인
//   console.log("1. 팟타이 마시따");
//   console.timeEnd('첫번째 setTimeout')

// },1000);
// console.time('2');
// setTimeout(() => {
//   console.log("2. 중국집옆 돈까스 나쁘지않음");
//   console.timeEnd('2');
// },1000);
// setTimeout(() => {
//   console.log("3. 커피는 메머드");
// },1000);
// console.timeEnd("작업")

//디버깅 방법 중하나
//결과 -> 작업 : 0.409ms
// console.time("작업");
// console.timeEnd("작업") 같은이름이여야한다.


let counter = 0;
const timer = function () {
  setTimeout(() => {
    console.log(counter + "vw");
    counter++;
    if(counter <= 100){
      timer();
    }else {
      console.log("끝");
    }
  }, 16);//16 = 60프레임
}

timer();


