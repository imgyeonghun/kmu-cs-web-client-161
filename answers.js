var buttons = document.getElementsByTagName("button");

buttons[1].onclick=answer_2;
buttons[2].onclick=answer_3;
buttons[3].onclick=answer_4;

function answer_1() {
  document.getElementById("q1-answer").innerHTML = "<ul><li>D - Document</li><li>O - Object</li><li>M - Model</li></ul>";
}

function answer_2() {
  document.getElementById("q2-answer").innerHTML = "<p>1. 자바스크립트는 DOM을 통해 도큐먼트에 존재하는 elements에 attributes를 추가하고 제거할 수 있다.</p><p>2. 자바스크립트로 페이지에서 일어나는 이벤트들에 반응하게 할 수있다.(예를들어 마우스 더블클릭 등) </p>";
}

function answer_3() {
  document.getElementsByClassName("q34-answer")[0].innerHTML = "<p>HTML DOM은 마치 <b>나무뿌리의 구조</b>처럼 HTML document에 접근한다.(그러한 뿌리를 DOM 트리라함)<br> DOM 트리에는 수 많은 Node 객체가 담긴다. Node 객체들은 서로 각각 <b>계층적인 관계(뿌리처럼)</b>를 가지고 있다.<br>이러한 트리구조에서 <b>노드객체간의 관계</b>를  parent, child, sibling, descendant, and ancestor nodes 로 나타낸다.<br><br></p><ul><li>parent - 바로 위의 직속 부모노드(A node directly above a node)</li><li>child - 바로 아래의 직속 자식노드(Nodes one level directly below)</li><li>sibling - 같은 부모를 가진 같은 레벨의 노드(Nodes at the same level)</li><li>descendant -(직속뿐아니라) 아래 레벨의 모든 노드들 (A set of nodes any number of levels below another node)</li><li>ancestor - 윗쪽 레벨의 모든 노드들(A set of nodes above a node in a tree)</li></ul>";
}

function answer_4() {
  document.getElementsByClassName("q34-answer")[1].innerHTML = "<ul><li>document.getElementById() - 함수에 넣은 인풋값에 해당하는 id를 가진 element를 리턴</li><li>document.getElementsByClassName() - 함수에 넣은 인풋값에 해당하는 클래스 이름을 가진 element를 리턴</li><li>document.getElementsByName() - 함수에 넣은 인풋값에 해당하는 이름을 가진 element를 리턴</li><li>document.getElementsByTagName() - 함수에 넣은 인풋값에 해당하는 태그를 가진 element를 리턴</li></ul><br><p><b>html문서에서 같은 id는 하나만 존재해야하기 떄문에document.getElementById()은 하나의 엘리먼트만 리턴한다. 나머지는 다수의 엘리먼트를 리턴할 수 있다.</b></p>";
}


$('div').children('a').click(function(){
    
    this.innerText = "Answer5";
});

$('.item').click(function(){
    
  $(this).css('font-size','3em');
});





$('div'+'.demo').dblclick(function(){
    
  $(this).css('color','blue');
});
