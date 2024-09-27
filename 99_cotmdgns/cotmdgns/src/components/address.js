import React, { useEffect } from "react";

const Address = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const sample4_execDaumPostcode = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        const roadAddr = data.roadAddress; // 도로명 주소
        let extraRoadAddr = ""; // 참고 항목

        // 법정동명이 있을 경우 추가
        if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
          extraRoadAddr += data.bname;
        }
        // 건물명이 있고, 공동주택일 경우 추가
        if (data.buildingName !== "" && data.apartment === "Y") {
          extraRoadAddr +=
            extraRoadAddr !== "" ? ", " + data.buildingName : data.buildingName;
        }
        // 참고 항목 문자열
        if (extraRoadAddr !== "") {
          extraRoadAddr = " (" + extraRoadAddr + ")";
        }

        // 우편번호와 주소 정보를 입력
        document.getElementById("sample4_postcode").value = data.zonecode;
        document.getElementById("sample4_roadAddress").value = roadAddr;
        document.getElementById("sample4_jibunAddress").value =
          data.jibunAddress;

        // 참고 항목
        document.getElementById("sample4_extraAddress").value =
          roadAddr !== "" ? extraRoadAddr : "";

        const guideTextBox = document.getElementById("guide");
        // 예상 주소 표시
        if (data.autoRoadAddress) {
          const expRoadAddr = data.autoRoadAddress + extraRoadAddr;
          guideTextBox.innerHTML = "(예상 도로명 주소 : " + expRoadAddr + ")";
          guideTextBox.style.display = "block";
        } else if (data.autoJibunAddress) {
          const expJibunAddr = data.autoJibunAddress;
          guideTextBox.innerHTML = "(예상 지번 주소 : " + expJibunAddr + ")";
          guideTextBox.style.display = "block";
        } else {
          guideTextBox.innerHTML = "";
          guideTextBox.style.display = "none";
        }
      },
    }).open();
  };

  return (
    <div>
      <input
        type="text"
        id="sample4_postcode"
        placeholder="우편번호"
        readOnly
      />
      <button onClick={sample4_execDaumPostcode}>우편번호 찾기</button>
      <br />
      <input
        type="text"
        id="sample4_roadAddress"
        placeholder="도로명주소"
        readOnly
      />
      <input
        type="text"
        id="sample4_jibunAddress"
        placeholder="지번주소"
        readOnly
      />
      <span id="guide" style={{ color: "#999", display: "none" }}></span>
      <input
        type="text"
        id="sample4_detailAddress"
        placeholder="상세주소"
      ></input>
      <input
        type="text"
        id="sample4_extraAddress"
        placeholder="참고항목"
        readOnly
      />
    </div>
  );
};

export default Address;
