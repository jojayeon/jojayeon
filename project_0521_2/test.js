const htmlMarup = {
  head :"헤드",
  body :"바디"
}

function test(object) {
  let result = [];
  for(let key in object){
    result.push(`<${key}> ${object[key]} </${key}>`);
  }
  console.log(result);
  return result.join(" ");
}

test(htmlMarup);
console.log(test(htmlMarup));

//키 -태그 값 - 내용
