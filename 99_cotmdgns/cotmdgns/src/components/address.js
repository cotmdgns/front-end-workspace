import { useEffect } from "react";

const address = () => {
  const sample4_execDaumPostcode = () => {
    console.log("잘온다~ ");
  };
  return (
    <>
      <div>
        <input type="text" id="sample4_postcode" placeholder="우편번호" />
        <input
          type="button"
          onClick={sample4_execDaumPostcode()}
          value="우편번호 찾기"
        />
        <br />
        <input type="text" id="sample4_roadAddress" placeholder="도로명주소" />
        <input type="text" id="sample4_jibunAddress" placeholder="지번주소" />
        <span id="guide" style={{ color: "#999", display: "none" }}></span>
        <input type="text" id="sample4_detailAddress" placeholder="상세주소" />
        <input type="text" id="sample4_extraAddress" placeholder="참고항목" />
      </div>
    </>
  );
};
export default address;
