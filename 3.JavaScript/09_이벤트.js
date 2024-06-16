//DOMContentLoaded // DOM 구조가 로드되고 실행!
//window.addEventListener("DOMContentLoaded", function () {
const h1 = document.querySelector("h1"); //html 에서 테그 가져오기

h1.onmouseenter = function () {
  // 가져온 테그 함수 선언
  h1.style.backgroundColor = "purple";
};
h1.onmouseleave = function () {
  h1.style.backgroundColor = "pink";
};
// addEventListener만 기억하셔도 괜찮아요!
h1.addEventListener("click", function () {
  h1.style.backgroundColor = "skyblue";
}); // ( 이벤트명, 이벤트가 발생했을 때 일어날 함수(객체))

//이미지 지우기 반복문
const img = document.querySelectorAll(".container img");
for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function (e) {
    console.log(e.currentTarget);
    img[i].style.display = "none";
  });
}


// 이미지 다시 부르기
const h2 = document.querySelector("h2");

h2.addEventListener("click", function () {
  for (let i = 0; i < 5; i++) {
    img[i].style.display = "block";
  }
});


// 이미지 지우기 Ver2
const container = document.querySelector(".container");

function removeHandler(e) {
  if (e.target !== e.currentTarget) {
    e.target.style.display = "none";
  }
}

container.addEventListener("click", removeHandler);
