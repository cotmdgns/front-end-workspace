// 1. Content 설정
console.log($("#content1").html());
console.log($("#content3").text());

// Content1의 내용(태그 + 텍스트)을 content2의 추가
$("#content2").html($("#content1").html());
// Content3의 내용(텍스트)을 content4의 추가
$("#content4").text($("#content3").text());

// 2. 요소 추가
// 자바스크립트
const p = document.createElement("p");
p.innerHTML = "자바스크립트로 추가";
document.querySelector("#area1").appendChild(p);

// 제이쿼리
const p2 = $("<p>").html("제이쿼리로 추가");

// $(A).append(B) : A 요소의 자식 요소로 B요소를 뒷부분에 추가
$("#area1").append(p2);

// $(A).prepend(B) : A 요소의 자식 요소로 B요소를 앞부분에 추가
$("#area1").prepend("<span> prepend </span>");

// $(A).after(B) : A 요소의 형제 요소로 B 요소를 뒷부분에 추가
$("#area1").after("<span>after</span>");

// $(A).before(B) : A 요소의 형제 요소로 B 요소를 앞부분에 추가
$("#area1").before("<span>before</span>");

// $(B).appendTo(A) : B 요소를 A 요소의 자식 요소로 뒷부분에 추가
$("<span>appendTo</span>").appendTo("#area2");

//$ (B).prependTo(A) : B 요소를 A 요소의 자식 요소로 앞부분에 추가
$("<span>prependTo</span>").prependTo("#area2");

//$(B).insertAfter(A) : B 요소를 A 요소의 형제 요소로 뒷부분에 추가
$("<span>insertAfter</span>").insertAfter("#area2");

//$(B).insertBefore(A) : B 요소를 A 요소의 형제 요소로 앞부분에 추가
$("<span>insertBefore</span>").insertBefore("#area2");

// 3. 복제
$(".item").hover((event) => {
  console.log("event3 : " + event.type);
  $(event.target).toggleClass("bg-hotpink");
});
/*
    (event) => {
    console.log("event1 : " + event.type); // mouseenter
    console.log(event.target);
    $(event.target).addClass("bg-hotpink");
  },
  (event) => {
    console.log("event2 : " + event.type); // mouseleave
    $(event.target).removeClass("bg-hotpink");
  } 
 */

$("#btn1").click(() => {
  // 이벤트까지 복제하려면 매개값 true를 전달 (기본값 : false)
  let item = $("#item1").clone(true);
  $("#clone_result").html(item);
});

// 4. 요소 제거
// remove -> 이벤트까지 삭제
$("#remove").click(() => {
  let item = $("#item2").remove();
  $("#remove-result").append(item);
});

// detach -> 이벤트는 삭제안함
$("#detach").click(() => {
  let item = $("#item2").detach();
  $("#remove-result").append(item);
});

// empty // ㅡ냥 삭제해버림
$("#empty").click(() => {
  $("#remove-test").empty();
});

// 5. 배열 관리
let array = [
  { name: "구글", link: "http://google.com" },
  { name: "네이버", link: "http://naver.com" },
  { name: "다음", link: "http://daum.com" },
];

// 자바스크립트
array.forEach((element, index, origin) => {
  console.log(element);
  console.log(index);
  console.log(origin);
  console.log("javascript ----------");
});

// 제이쿼리
$(array).each((index, element) => {
  console.log(element);
  console.log(element.name);
  console.log(element.link);
  console.log(index);
  console.log("jQuery ----------");
});

// 1. Content 설정
console.log($("#content1").html());
console.log($("#content3").text());

// Content1의 내용(태그 + 텍스트)을 content2의 추가
$("#content2").html($("#content1").html());
// Content3의 내용(텍스트)을 content4의 추가
$("#content4").text($("#content3").text());

let output = "";
$(array).each((index, element) => {
  const a = `<a href ="${element.link}"><h2>${element.name}</h2></a>`;

  // append 방식
  $("#each-test").append(a);

  // html 방식
  output += a;
});
$("#each-test").html(output);
