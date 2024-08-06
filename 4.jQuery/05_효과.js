// 1. shwo, hide, toggle
$("#show").click(() => {
  $("#img").show(3000);
});
$("#hide").click(() => {
  $("#img").hide(3000);
});
$("#toggle").click(() => {
  $("#img").toggle(1000);
});

// 2. fadeIn, fadeOut, fadeToggle, fadeTo
$("#fadeIn").click(() => {
  $("#img").fadeIn(2000);
});

$("#fadeOut").click(() => {
  $("#img").fadeOut(2000);
});

$("#fadeToggle").click(() => {
  $("#img").fadeToggle(1000);
});
$("#img").hover(
  function () {
    $(this).fadeTo(100, 0.5);
  }, //mouseenter
  function () {
    $(this).fadeTo(100, 1);
  } //mouseleave
);

// 3. slideDown, slideUp, sliedToggle
$(".meun").click((e) => {
  let content = $(e.target).next();
  /*
  if (content.css("display") === "none") {
    content.slideDown(500);
  } else {
    content.slideUp(500);
  }
  */
  //content.slideToggle(500); // 개꿀이노 한방에 끝
  $(".contents").slideUp(200);
  if (content.css("display") === "none") {
    content.slideDown(200);
  }
});
