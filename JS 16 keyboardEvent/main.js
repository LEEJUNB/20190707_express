// 입력값을 받아 처리할 수 있도록 만들어보자
// function(e)에서 e는 js가 이벤트를 등록위해 이벤트 객체를 만들어 낼 때
// function이란 이벤트를 관리하는 코드 작성시 e라는 기본 매개변수 씀
document.getElementsByName("testText")[0].onkeydown = function(e){
    var eventCode = e.code;
    console.log(eventCode, typeof eventCode);
};