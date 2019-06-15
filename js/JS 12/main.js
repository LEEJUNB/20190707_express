var test = window.document.getElementById("test");

// 타이머를 사용하기 위한 메서드 setInterval()
var x = 0;
window.setInterval("interval()", 1000);
function interval() {
    test.innerHTML = ++x;
}

window.alert("good");

// var trueOfFalse = window.confirm("true of false"); // 사용자에게 응답을 요구하는 alert창이 떠서 취소 / 확인을 누룰 수 있도록 함
// test.innerHTML = trueOrFalse; // 취소를 누르면 False가 확인을 누르면 True가 나온다.

// test.innerHTML = "width : " + window.innerWidth + " height : " + window.innerHeight;
