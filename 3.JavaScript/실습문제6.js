function count() {
  const last = new Date("2025-01-01 00:00:00");
  //지금 현재 날짜와 비교해야 할 날짜
  const now = new Date();

  // 1초 = 밀리세컨드/1000
  const secod = Math.floor((last - now) / 1000);
  const Minutes = Math.floor(secod / 60);
  const Hours = Math.floor(Minutes / 60);
  const date = Math.floor(Hours / 24);
  clock.innerHTML = `${date}일 ${Hours % 24}시간 ${Minutes % 60}분${String(
    secod % 60
  ).padStart(2, "0")}초`;
}

count();

setInterval(count, 1000);

/*
const now = new Date();
const last = new Date("2025-01-01 00:00:00");
console.log("1번 last - now");
console.log(last - now);
// 1초 = 밀리세컨드/1000
console.log("2번 (last - now) / 1000");
console.log((last - now) / 1000);
const secod = ((last - now) / 1000) % 60;
console.log("3번 (last - now) / 1000) % 60");
console.log(secod);
const Minutes = Math.floor(((last - now) / 1000 / 60) % 60);
console.log(Minutes);
const Hours = Math.floor(((last - now) / 1000 / 60 / 60) % 24);
console.log(Hours);
const date = Math.floor((last - now) / 1000 / 60 / 60 / 24);
console.log(date);
*/
