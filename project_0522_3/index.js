
const root = document.getElementById('root');
console.dir(root.children);
let box = root.children[0];
let bt = root.children[1];
root.children[0].style.backgroundColor


bt.addEventListener("click",()=>{
  let counter = 0;
  const timer = function () {
    setTimeout(() => {
      if(box.style.marginLeft< 1){
        box.style.marginLeft = `${counter}vw`
        counter -= 1;
        console.log(box.style.marginLeft);
        timer();
      }else {
        box.style.marginLeft = `${counter}vw`
        counter++;
        console.log(box.style.marginLeft);
        timer();
      }
    }, 16);//16 = 60프레임
  }
  
  timer();
})
// box.style.marginLeft = "-40px"


