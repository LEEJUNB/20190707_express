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
console.log(pi);
