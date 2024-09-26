// 1. 이벤트 연결
// one
$("#area1").one("click", () => {
  alert("처음이자 마지막으로 이벤트 핸들러 실행");
});

// 1
// // on
// $("#area2").on("mouseenter", (event) => {
//   $(event.target).css("background-color", "hotpink").text("마우스가 올라감");
// });

// // 마우스가 내려갈 때(mouseleave)
// // -> 배경 색상 : beige, 텍스트 : 마우스가 내려감
// $("#area2").on("mouseleave", (event) => {
//   $(event.target).css("background-color", "beige").text("마우스가 올라감");
// });

// 2
// $("#area2").on("mouseenter mouseleave", (event) => {
//   if (event.type === "mouseenter") {
//     $(event.target).css("background-color", "hotpink").text("마우스가 올라감");
//   } else if (event.type === "mouseleave") {
//     $(event.target).css("background-color", "beige").text("마우스가 내려감");
//   }
// });
// $("#area2").on("click", (event) => {
//   $(event.target)
//     .css("background-color", "white")
//     .text("")
//     .off("mouseenter mouseleave"); //mouseenter mouseleave 이벤트 제거
// });

$("#area2").on({
  mouseenter: (event) => {
    $(event.target).css("background-color", "hotpink").text("마우스가 올라감");
  },
  mouseleave: (event) => {
    $(event.target).css("background-color", "beige").text("마우스가 내려감");
  },
  click: (event) => {
    $(event.target)
      .css("background-color", "white")
      .text("")
      .off("mouseenter mouseleave");
  },
});

// 2. 키보드 이벤트
// ketdown, keypress, keyup
$("#textarea1").on({
  keydown: (e) => {
    // 키보드가 눌려질 떄
    console.log(`keydown - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  },
  keypress: (e) => {
    // 글자가 입력 될때
    console.log(`keypress - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  },
  keyup: (e) => {
    // 키보드가 때어질 떄
    console.log(`keydown - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  },
});

// 힌트
// 글자수세기
// val().length <-- 글자수!
// substr(시작인덱스,끝인덱스) <-- 문자열자르기
$("#textarea2").keyup((e) => {
  let target = $(e.target);
  console.log(target);
  let length = target.val().length;
  console.log(length);
  let maxLength = parseInt($("#maxLength").text());
  if (length > maxLength) {
    target.val(target.val().substr(0, maxLength));
  } else {
    $("#counter").text(length);
  }
});

// 아이디 조건 확인
$("#userId").keyup((e) => {
  let id = $(e.target).val();
  const regExp = /^[a-z][a-z0-9]{3,11}$/;
  if (regExp.test(id)) {
    $("#idCheck").text("조건에 맞습니다").css("color", "green");
  } else if (id === "") {
    $("#idCheck").text("");
  } else {
    $("#idCheck").text("ㄴㄴ").css("color", "red");
  }
});

// 3. trigger() 메서드
$("#area3").click(() => {
  let counter = $("#counter2");
  let current = parseInt(counter.text());
  counter.text(++current);
});

$("#btn").click(() => {
  $("#area3").trigger("click");
});

