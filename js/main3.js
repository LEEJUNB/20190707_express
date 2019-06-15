document.getElementById("heading").innerHTML = "h1 태그입니다";

// s가 붙은 메서드는 한번에 여러값을 바꾸거나 인덱스를 통해 하나만 바꾼다.
document.getElementsByClassName("paragraph")[0].innerHTML = "p태그 입니다"; 

// p tag만 바꿔보자. 이를 위해 getElementsByTagName를 위처럼 인덱스를 입력해서 바꿀수도 있지만
// 이번에는 반복문을 활용해서 바꿔보자.
var tagName = document.getElementsByTagName("p");
var len = tagName.length;

for(var i = 0; i<len; i++){
    tagName[i].innerHTML = "반복문 이용 p태그를 바꾼 것 입니다."
}
//이렇게하면 모든 P태그가 바뀜. 그런데 getElementsByClassName으로 인덱스만 바꾼것도 수정되버림
//getElementsByClassName 보다 getElementsByTagName이 우선되는건가?
//그렇지 않다. getElementsByClassName을 getElementsByTagName 뒤에 작성하면 된다. 인터프리터의 특성



// 선택자 문법인 querySelectorAll을 써보자
// div태그의 id인 container의 자식선택자를 이용해서 h1태그의 id인 heading의 컨텐츠를 변경해보자
// 만약 [0]이 아닌 [1]인덱스로 입력하면 수정안됨. [0]에 수정하고자하는 태그와 아이디가 있기 때문.
document.querySelectorAll("div#container > h1#heading")[0].innerHTML = "h1 태그!!!";