import { useState, useEffect, useRef } from "react";
import Btn from "./Btn";

const Counter = () => {
  const [count, setCount] = useState(0);
  const updateCheckRef = useRef(false);

  const plus = () => {
    setCount(count + 10);
  };
  const miuns = () => {
    setCount(count - 10);
  };
  const reset = () => {
    setCount(0);
  };

  // 마운트 (탄생)
  useEffect(() => {
    console.log("Mount!");
  }, []);

  // 업데이트 (업뎃)
  useEffect(() => {
    if (!updateCheckRef.current) {
      updateCheckRef.current = true;
      return;
    } else {
      console.log("count Update!");
    }
  }, [count]); // 카운트값이 변경될때 명시

  // 언마운트 (없뎃)
  useEffect(() => {
    return () => {
      console.log("unmount!");
    };
  }, []);

  return (
    <div>
      <h1>Total Clicks : {count}</h1>
      <Btn click={plus} text="+10" />
      <Btn click={miuns} text="-10" />
      <Btn click={reset} text="reset" />
    </div>
  );
};

export default Counter;
