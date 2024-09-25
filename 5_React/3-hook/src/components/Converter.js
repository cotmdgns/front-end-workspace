import { useState, useRef, useEffect } from "react";
import Btn from "./Btn";
const Converter = () => {
  const [text, setText] = useState("Minutes => Hours");
  const [bool, setBool] = useState(false);
  const [number, setNumber] = useState("");
  const invert = () => {
    setBool(!bool);
    Reset();
  };
  const change = (e) => {
    setNumber(e.target.value);
  };
  const Reset = () => {
    setNumber("");
  };
  useEffect(() => {
    if (bool) {
      setText("Hours => Minutes");
    } else {
      setText("Minutes => Hours");
    }
  }, [bool]);
  return (
    <>
      <h1> Time Converter </h1>
      <div>
        Minutes :
        <input
          type="number"
          placeholder="Minutes"
          disabled={bool}
          onChange={change}
          value={bool ? number * 60 : number}
        />
      </div>
      <div>
        Hours :{" "}
        <input
          type="number"
          placeholder="Hours"
          disabled={!bool}
          value={bool ? number : Math.floor(number / 60)}
          onChange={change}
        />
      </div>
      <Btn click={Reset} text="Reset" />
      <Btn click={invert} text={text} />
    </>
  );
};
export default Converter;
