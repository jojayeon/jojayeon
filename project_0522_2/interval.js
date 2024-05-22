//? setInterval("반복실행", "실행간격");
let intervalHandler = 0;
let timer = setInterval(() => {
  console.log("1초"+ intervalHandler);
  intervalHandler++
  if(intervalHandler > 10){//점점 커지는 것이라 10보다 커지면 실행해서 멈추게
    clearInterval(timer);//멈추기
  }
}, 1000);
//끄는 방법이 없다
