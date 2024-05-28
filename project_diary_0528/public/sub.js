//nose.js 이다.




//이건 nodejs는 이렇게해서 불러오면 됨
//함수인거
//module.exports = today;

//불러올 곳에서
//const today = require('./today.js')



const obj = JSON.parse('./data.json');
console.log(obj);