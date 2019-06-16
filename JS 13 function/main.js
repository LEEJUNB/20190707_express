var test = document.getElementById("test"); // 결과값 가진 test변수

// 일반적인 함수선언
// function multiply(x,y) {
//     return x,y;
// }

// 익명함수 선언. 변수에 함수를 할당
var multiply = function(x,y) {
    return x,y;
}

test.innerHTML = multiply(2,4);