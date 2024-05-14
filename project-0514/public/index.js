
// 노란색 : #F7E600
// 갈색 : #3A1D1D

const root = document.getElementById("root");

for(let i = 0; i <= 1; i++){ //div 아래 a 넣기
  let div = document.createElement("div");
  root.appendChild(div);
}

for(let i = 1; i <= 5; i++){ //div 아래 a 넣기
  let a = document.createElement("a");
  let A1 = root.children[0].appendChild(a);
  A1.setAttribute('href' ,"index"+i+".html")
  A1.textContent = "menu"+i;// 이부분을 따로 콜백함수로 만들면 좋을거같아보인다 내용이 들어가야 하는 부분이라
}
root.children[1].textContent =  "dd";

console.log(document.body);
console.dir(root);


document.body.style.margin = 0;
document.body.style.padding = 0;

//이건 돌아가는데 흠
root.children[0].style.backgroundColor =  '#F7E600';
root.children[0].style.width = "100%";
root.children[0].style.height =  "12vw";
root.children[0].style.display =  "flex";
root.children[0].style.justifyContent = 'space-around';
root.children[0].style.borderRadius = "10px";

for (let i = 0; i <root.children[0].children.length; i++) {
  root.children[0].children[i].style.margin = "2.5%";
  root.children[0].children[i].style.display = "flex";
  root.children[0].children[i].style.backgroundColor = '#e7a1ad';
  root.children[0].children[i].style.width = "110%";
  root.children[0].children[i].style.height = "70%";
  root.children[0].children[i].style.textAlign = 'center';
  root.children[0].children[i].style.borderRadius = '10px';
  root.children[0].children[i].style.textDecoration = 'none';
}

root.children[1].style.backgroundColor =  '#3A1D1D';
root.children[1].style.width =  '100%';
root.children[1].style.height =  '50VW';
root.children[1].style.borderRadius = "10px";
root.children[1].style.marginTop= "10px";


// 이 for 문도 함수로 가능하지 않을까?
// function d0sty(S,V) {
//     let S2 = "."+ S;
//     let a = root.children[0].style
//     a = a[S2];
//     console.log(a);
//     console.log(V);
//     console.log(root.children[0].style["backgroundColor"]); //todo
//     a = V;
// }
// d0sty("backgroundColor", '#F7E600');
// d0sty("display", "flex");
// d0sty("width", "100%");
// d0sty("height", "12vw");
// d0sty("justifyContent", "space-around");
// d0sty("borderRadius", "10px");

// //AB 바꾸기
// function asty(S,V) {
//   for (let i = 0; i <root.children[0].children.length; i++) {
//     root.children[0].children[i].style.S = V;
//   }
// }
// asty("margin", "2.5%");
// asty("display", "flex");
// asty("backgroundColor", '#e7a1ad');
// asty("width", "110%");
// asty("height", "70%");
// asty("textAlign", "center");
// asty("borderRadius", "10px");
// asty("textDecoration", " none");


