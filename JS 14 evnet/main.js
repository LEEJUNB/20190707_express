var idx = 0; // 전역변수선언

function changeText(){
    // 여러개값을 하나로 묶고 인덱스로 접근하는 배열자료형 선언
    var textArr = ["html","js","css","React"];
    
    // DOM객체로 P태그 id인 test를 입력. innerHTML통해 컨텐츠변경
    // 컨텐츠는 동적으로 접근하도록 []사용 수정. 
    // 버튼을 누를때마다 하나씩 증가. 
    document.getElementById("test").innerHTML = textArr[idx++]; 
    
    // 인덱스범위 벗어나면 undefined출력되므로 조건문 사용하자 
    if(idx == textArr.length) {
        idx = 0;
    }
}

// HTML DOM 객체 활용한 이벤트  핸들러 등록 
// innerHTML이 아닌 onclick프로퍼티를 이용.
// 익명함수를 사용하여 changeText함수 호출
// 바로 DOM객체(document.getELementById("btn"))를 선택하고 on이벤트적용 + 익명함수사용
document.getElementById("btn").onclick = function(){
    changeText();
}

