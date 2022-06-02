// array, object

//statement이면서 변수 처럼사용가능
function f1 () {
console.log(1+1);
console.log(1+2);

}
var f = function() {
  console.log(1+1);
  console.log(1+2);

}
//처리할수있는구문이지만 자체가 값이 될수있는 js

console.log(f);
f();
var a = [f]
a[0]();
var o = {
  func:f //객체원소
}
o.func();
//처리를 그룹잉하는 함수를 객체원소로 넣을수있음


// var i = if(true) {console.log(1)};
//var w = while(true) {console.log(1)};
