document.getElementById("wrap").onmouseover = function(){
    // this가 의미하는 것은 <div id="wrap">
    // 객체는 속성 값을 가져오는 get방식과 속성값을 할당하는 set방식. 메서드도 마찬가지
    // 현재는 setAttribute메서드를 사용하여 동적 설적
    this.setAttribute("class","over"); //"class"속성을 "over"라는 value로 변경.
};

document.getElementById("wrap").onmouseout = function(){
    this.setAttribute("class","");
};


