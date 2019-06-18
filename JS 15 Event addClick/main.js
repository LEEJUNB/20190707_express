var colorArr = ["red","orange","yelllow","green","blue","indigo","violet"];
var p = document.getElementById("test");

// 마우스커서가 대상위에 올라갔을 때
p.onmouseover = function() {
    //색상을 랜덤하게 가져옴
    var rand = Math.floor(Math.random() * colorArr.length);
    //style속성을 통해 js코드로 스타일관련속성을 핸들링가능
    p.style.backgroundColor = colorArr[rand];
};

// 마우스커서가 대상에서 나갔을 때
p.onmouseout = function(){
    p.style.backgroundColor = "black";
};

// 2개의 onclick이벤트 만들기
// addEventListener("onclick에서 on을 뺀 click만을 입력", 익명함수)
document.getElementById("btn_dbEvent").addEventListener("click", function(){
    alert("실행문1");
}, false);

document.getElementById("btn_dbEvent").addEventListener("click", function(){
    alert("실행문2222");
}, false);