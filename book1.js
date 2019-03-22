//console의 time, timeEnd메서드의 파라미터는 동일하게

var result = 0;
console.time('duration_time');

for(var i=0;i<=1000;i++){
    result += i;
}

console.timeEnd('duration_time');
console.log('starting~ ending');
console.log('result = %d', result)
console.log("실행파일이름 : %s", __filename);
console.log("실행파일위치 : %s", __dirname);

// 중괄호를 통해 객체만듦 키값은 JSON형태(데이터형)임
// dir 메서드는 객체의모든 속성을 보고자할 때 씀
var Person = {name:'IU', age:26};
console.dir(Person);

var age = 20;
console.log('age : %d', age);

var Person1 = {}
Person1['age'] = 29;
Person1['name'] = 'sosi';
Person1.mobile = '01010010101010';

console.log('age is %d', Person1.age);
console.log('name is %s', Person1.name);
console.log('phone number is %s', Person1.mobile);

var Person2 = {};
Person2.add = function(a,b){
    return a+b;
}