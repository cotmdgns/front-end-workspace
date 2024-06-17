const uId = document.querySelector("#uId");
const uIdspan = document.querySelector("#uId+span");
const passId = document.querySelector("#passId");
const passIdspan = document.querySelector("#passId+span");
const passIdcheck = document.querySelector("#passIdcheck");
const passIdcheckspan = document.querySelector("#passIdcheck+span");
const nameId = document.querySelector("#nameId");
const nameIdspan = document.querySelector("#nameId+span");
const emailId = document.querySelector("#emailId");
const emailIdspan = document.querySelector("#emailId+span");

uId.addEventListener("input", function () {
  //첫글자는 반드시 영문자로, 그리고 영문자,숫자 포함하여 4~12자로 입력하시오
  const regExp = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/;
  const check = regExp.test(uId.value);

  if (check) {
    uIdspan.style.color = "green";
    uIdspan.innerHTML = "맞아 그렇게 하는거야";
  } else {
    uIdspan.style.color = "red";
    uIdspan.innerHTML = "그게 아니야 다시써라";
  }
});

passId.addEventListener("input", function () {
  //영문자, 숫자, 특수문자 포함하여 총 8~15자로 입력하시오
  const regExp = /^[!-~]{8,15}$/;
  const check = regExp.test(passId.value);

  if (check) {
    passIdspan.style.color = "green";
    passIdspan.innerHTML = "할 수 있다";
  } else {
    passIdspan.style.color = "red";
    passIdspan.innerHTML = "종료까지 다 풀어봐";
  }
  console.log(check);
});

passIdcheck.addEventListener("input", function () {
  if (passIdcheck.value === passId.value) {
    passIdcheckspan.style.color = "green";
    passIdcheckspan.innerHTML = "그래 그거야";
  } else {
    passIdcheckspan.style.color = "red";
    passIdcheckspan.innerHTML = "조금만 더";
  }
});

nameId.addEventListener("input", function () {
  //한글로만 이루어져야되며 2글자 이상으로 입력하시오
  const regExp = /^[가-힣]{2,}$/;
  const check = regExp.test(nameId.value);

  if (check) {
    nameIdspan.style.color = "green";
    nameIdspan.innerHTML = "이거 끝나면 하나 남았어";
  } else {
    nameIdspan.style.color = "red";
    nameIdspan.innerHTML = "별거아니야";
  }
  console.log(check);
});

emailId.addEventListener("input", function () {
  const regExp = /^[!-~]+@[!-~]+$/;
  const check = regExp.test(emailId.value);
  if (check) {
    emailIdspan.style.color = "green";
    emailIdspan.innerHTML = "다 끝나간다";
  } else {
    emailIdspan.style.color = "red";
    emailIdspan.innerHTML = "다 끝났다~";
  }
  console.log(check);
});

/*
회원가입 버튼을 누를라면 카운터 5가 만들어져야하고
만약에 눌러진다해도 카운터가 5가 안됬을경우 alret함수로 아직 부족하다는
식으로 출력.
카운터 5가 만들어졌을땐 alert 함수로 회원가입이 되었습니다!
라고 하기엔 귀찮노
*/
