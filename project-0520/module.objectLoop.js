
//모듈화
function objectLoop(array, object) {
  for(let key in object) {
    array.push(object[key]);
  }
}

module.exports = objectLoop;
