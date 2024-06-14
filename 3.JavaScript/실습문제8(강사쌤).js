/*
    사용자가 입력을 했을 떄 
    해당 조건이 틀릴 경우 빨간색으로 표시
               맞는 경우 초록색 표시와 함께 "OK!"
*/
const userid = document.querySelector("#userid");
const useridSpan = document.querySelector("#userid+span");
const password = document.querySelector("#password");
const passwordSpan = document.querySelector("#password+span");
const passwordCheck = document.querySelector("#passwordCheck");
const passwordCheckSpan = document.querySelector("#passwordCheck+span");
const name1 = document.querySelector("#name1");
const name1Span = document.querySelector("#name1+span");
const email = document.querySelector("#email");
const emailSpan = document.querySelector("#email+span");
userid.addEventListener("input", function () {
  //첫글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4~12자로 입력하시오;
  const regExp = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/;
  const check = regExp.test(userid.value);

  if (check) {
    useridSpan.style.color = "green";
    useridSpan.innerHTML = "OK";
    //e.target.nextElementSibling.style.color ="green";//(1번)위랑 같음
  } else {
    useridSpan.style.color = "red";
    useridSpan.innerHTML =
      "첫글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4~12자로입력하시오";
  }
  console.log(check);
});

//영문자, 숫자, 특수문자 포함하여 총 8~15자로 입력하시오
// [!-~]{}
password.addEventListener("input", function () {
  const regExp = /^[!-~]{8,15}$/;
  const check = regExp.test(password.value);

  if (check) {
    passwordSpan.style.color = "green";
    passwordSpan.innerHTML = "OK";
  } else {
    passwordSpan.style.color = "red";
    passwordSpan.innerHTML =
      "영문자, 숫자, 특수문자 포함하여 총 8~15자로 입력하시오";
  }
});

//위의 비밀번호와 일치하게 입력하시오.
//정규표현식 필요 X, 위에 입력한 비밀번호 값이랑 비교!
passwordCheck.addEventListener("input", function () {
  if (password.value === passwordCheck.value) {
    passwordCheckSpan.style.color = "green";
    passwordCheckSpan.innerHTML = "OK";
  } else {
    passwordCheckSpan.style.color = "red";
  }
});
//[가-힣]{}
name1.addEventListener("input", function () {
  const regExp = /^[가-힣]{2,}$/;
  const check = regExp.test(name1.value);

  if (check) {
    name1Span.style.color = "green";
    name1Span.innerHTML = "OK";
  } else {
    name1Span.style.color = "red";
    name1Span.innerHTML = "한글로만 이루어져야되며 2글자 이상으로 입력하시오";
  }
  console.log(check);
});

//이메일 형식에 맞춰서 입력하시오
//abc123!@gamil.com
//-> (영어나숫자여러분상관없이 길이도 상관없이 : +)@(앞이랑 마찬가지)
email.addEventListener("input", function () {
  const regExp = /^[!-~]+@[!-~]+$/;
  const check = regExp.test(email.value);

  if (check) {
    emailSpan.style.color = "green";
    emailSpan.innerHTML = "OK";
  } else {
    emailSpan.style.color = "red";
    emailSpan.innerHTML = "이메일 형식에 맞춰서 입력하시오";
  }
  console.log(check);
});
