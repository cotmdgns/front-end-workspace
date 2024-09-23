const App = () => {
  const div1 = {
    backgroundColor: "lightgreen",
    padding: "10px",
    margin: "5px",
  };
  const div2 = {
    backgroundColor: "lightgreen",
    padding: "10px",
  };
  const div3 = {
    backgroundColor: "lightgreen",
    padding: "10px",
  };
  const div4 = {
    backgroundColor: "lightgreen",
    padding: "10px",
    margin: "5px",
  };
  return (
    <>
      <h1>안녕하세요</h1>
      <div style={div1}>gd</div>
      <div style={div2}>gd</div>
      <div style={div3}>
        <div style={div4}>gd</div>
      </div>
    </>
  );
};

export default App;
