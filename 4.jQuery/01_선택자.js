// window.addEventListener("DOMContentLoaded", function () {});
// $(document).ready(function () {
$(function () {
  // 1. 태그 선택자
  // 자바스크립트 방식
  const pList = document.querySelectorAll("p");
  for (p of pList) {
    p.style.color = "white";
    p.style.backgroundColor = "tomato";
  }

  // 제이쿼리 방식
  $("h5").css("color", "skyblue").css("background-color", "yellow");

  // 2. 아이디 선택자
  // 자바스크립트 방식 -> id가 id1인 글씨 색깔(color) 변경 (색상은 자유롭게)
  document.querySelector("#id1").style.color = "crimson";
  // 제이쿼리 방식 -> id가 id2인 글씨 색깔 변경
  $("#id2").css("color", "orange");

  // 3. 클래스 선태가
  // 제이쿼리 방식 -> class가 item인 글씨 색깔 및 배경 색깔 변경
  $(".item").css({ color: "white", "background-color": "indigo" });

  // 4. 자식 선택자와 자손 선택자
  $("ul > li").css("color", "green");
  $("ul > .ch").css("background-color", "lime");
  $("ul h3").css("color", "indianred");
  $("div > .ch").css("color", "violet");
  $("div h3").css("background-color", "khaki");

  // 5. 속성선택자
  // 태그[속성] : 해당 태그의 속성을 가지는 요소
  $("#div1 input[class]").css("background-color", "turquoise");
  // 태그[속성=값] : 특정 속성과 값이 일치하는 요소
  $("#div1 input[type=text]").val("change value"); //val = value
  // 태그[속성*=값] : 속성의 값을 포함하는 요소
  $("#div1 input[class*=st3]").css({ width: "100px", height: "100px" });
  // 태그[속성~=값] : 공백을 포함한 속성값이 일치하는 요소
  $("#div1 input[class~=test1]").val("123456789");
  // 태그[속성^=값] : 지정한 속성값으로 시작하는 요소
  $("#div1 input[type^=ra]").prop("checked", true); // 속성값 prop
  // 태그[속성$=값] : 지정한 속성값으로 끝나는 요소
  $("#div1 input[type$=box]").prop("checked", true);
  // 태그[속성!=값] : 해당 속성값을 갖지 않는 요소
  $("#div1 input[type!=text]").css("background-color", "yellow");

  // 6. 입력 양식 선택자
  $("#div2 :text").css("background-color", "pink");
  // button -> value 값 "버튼" 추가
  $("#div2 :button").val("버튼");
  // checkbox -> 속성 checked를 true
  $("#div2 :checkbox").prop("checked", true);
  // file -> 배경색 skyblue
  $("#div2 :file").css("background-color", "skyblue");

  // 7. 입력 양식 상태에 대한 선택자
  // input 태그 중 활성화된 요소 선택
  $("#div3 input:enabled").css("background-color", "lavender");
  // input 태그 중 비활성화된 요소 선택
  $("#div3 input:disabled").css("background-color", "lightcyan");
  // input 태그 중 체크된 요소 선택
  $("#div3 input:checked").css({ width: "30px", height: "30px" });
  // checkbox에 change 이벤트 핸들러 등록
  $("#div3 :checkbox").change(function () {
    console.log(this);
    console.log($(this));
    let checkbox = $(this);
    console.log(checkbox.prop("checked")); // true or false
    console.log(checkbox.attr("checked"));
  });
  // select에 change 이벤트 핸들러 등록
  $("#national").change(function () {
    // select 태그의 option 태그 중 선택된(selected) 요소 선택
    let value = $("select > option:selected").val();
    // id가 result인 input 값으로 추가
    $("#result").val(value);
  });
});
