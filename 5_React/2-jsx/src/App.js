import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const plus = () => {
    setCount(count + 10);
  };
  const miuns = () => {
    setCount(count - 10);
  };
  const division = () => {
    setCount(count / 2);
  };
  const multip = () => {
    setCount(count * 2);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>Total Clicks : {count}</h1>
      <button onClick={plus}>+10</button>
      <button onClick={miuns}>-10</button>
      <button onClick={division}>/2</button>
      <button onClick={multip}>*2</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default App;
