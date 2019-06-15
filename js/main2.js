// document.write("hello first time");

// var x;
// console.log(x);

// var j= 20, s="string"

// console.log(j);
// console.log(s);

// var f = 10;
// var g;
// g = f++;
// console.log(g);
// console.log(f);

// var t_x = 10;
// var t_y = "10";
// console.log(t_x == t_y);
// console.log(t_x === t_y);

// var z;
// console.log(z = t_x == t_y ? 10 : 11 );

var x = 10, y = '10', z = true;

if(x==10){
    console.log("x is 10");
} else if(y==10) {
    console.log("y")
}

if(!z==false){
    console.log("z는 true");
}

switch(y) {
    case 10 : console.log("10");
        break;
    case 5 : console.log("5");
        break;
    default : console.log("nothing");
        break;
}

var arr = [1,2,3,4,5];
var len = arr.length;
var idx = 0;

while(idx < len) {
    console.log(arr[idx]);
    idx++;
}

var cat = {gender : 'female', age : 5};

console.log(cat.gender, cat.age);

var pi = Math.PI;
console.log(pi); // 3.1415926535
console.log(Math.pow(2,4)); // 2^4 = 16
console.log(Math.random()); // 0 <= x < 1 값을 랜덤하게 제공

var date = new Date("1970-01-01"); // 날짜를 문자열로 작성하는 것을 DateString이라함
console.log(date.getTime()); // method인 getTime사용

var name = "JunB";
var cop = "Ocean Holdings";

console.log(name.length);
console.log(cop.length); // 띄워쓰기도 길이에 포함된다.

//charAt(index)
console.log(name.charAt(0)); // name객체의 0번째 인덱스인 "J"가 출력된다.

//split(구분자)
console.log(cop.split(" ")); // 공백을 기준으로 나눠 하나의 배열값이 된다. 출력하면 ["Ocean", "Holdings"] 가 반환

//indexOf(index)
console.log(cop.indexOf("H")); // 입력한 값의 index 위치를 알려줌. 값이 없을 경우 -1이 반환됨

// lec.11 DOM Obejct

