//실행
const imges = document.querySelectorAll(".imges img");
const span = document.querySelector("#click span");
//리셋

click.addEventListener("click", clickHandler); //click 아이디를 가져옴
restart.addEventListener("click", restartHandler); // restart 아이디를 가져옴

let count = 0;

function clickHandler() {
  const random = [
    Math.floor(Math.random() * 3) + 1,
    Math.floor(Math.random() * 3) + 1,
    Math.floor(Math.random() * 3) + 1,
  ];
  // 이미지들이 랜덤으로 계속 바뀌고 있음
  for (let i = 0; i < imges.length; i++) {
    imges[i].setAttribute("src", `../resources/family${random[i]}.jpg`);
  }
  // 내가 클릭한 만큼 숫자가 증가
  span.innerHTML = ++count;
  // 조건 : 이미지 3개가 모두 일치할 때
  // ==> 아래 결과 텍스트가 나오면서 버튼 클릭 안되게 구현
  if (random[0] === random[1] && random[1] === random[2]) {
    result.innerHTML = "축하합니다.";
    click.setAttribute("disabled", "disabled");
    restart.removeAttribute("disabled");
  }
}
function restartHandler() {
  //이미지 처음에 셋팅했던 이미지로 변경
  for (let i = 0; i < imges.length; i++) {
    imges[i].setAttribute("src", `../resources/family${i + 1}.jpg`);
  }

  //숫자는 다시 0으로 셋팅하고 태그 값 비우기
  count = 0;
  span.innerHTML = "";
  //아래 텍스트도 값 비우기
  result.innerHTML = "";
  //버튼의 disabled 삭제 -> 속성 삭제는 removeAttribute
  click.removeAttribute("disabled", "disabled");
  click.setAttribute("disabled");

  restart.setAttribute("disabled", "disabled");
  click.removeAttribute("disabled");
}
