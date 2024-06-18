const bar = document.querySelector(".progress-bar");
window.addEventListener("scroll", function () {
  // 전체 스크롤 할 수 있는 번위 = 바디 전체 높이 - 위도우 높이(현재 칭)
  let maxScrollValue = document.body.offsetHeight - window.innerHeight;

  bar.style.width = parseInt((window.scrollY / maxScrollValue) * 100) + "%";

  console.log(parseInt((window.scrollY / maxScrollValue) * 100));
});
