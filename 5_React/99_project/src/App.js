import { getAxios } from "./api/movie";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setdate] = useState([]);

  const loadAxios = async () => {
    const result = await getAxios();
    setdate(result);
  };
  useEffect(() => {
    loadAxios();
  }, []);
  return (
    <>
      <h1>gd</h1>
      <div>
        타이틀 : <input type="text" />
      </div>
      <div>
        장르 : <input type="text" />
      </div>
      <div>
        출연진 : <input type="text" />
      </div>
      <button>추가</button>
      <p></p>
      {data?.map((movie) => (
        <div key={movie.id}>
          <div>타이블 :{movie.title}</div>
          <div>장르 :{movie.genre}</div>
          <div>출연진 :{movie.actor}</div>
          <p></p>
        </div>
      ))}
    </>
  );
};
export default App;
