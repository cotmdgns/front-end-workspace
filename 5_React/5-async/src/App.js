import { getFetchThen, getAwait } from "./api/movie";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setdata] = useState([]); //초기값 빈배열

  const loadFetchThen = () => {
    // 다시 가공
    getFetchThen().then((result) => {
      console.log("가공완료 : " + result);
      setdata(result);
    });
  };

  const loadAwait = async () => {
    const result = await getAwait();
    console.log("가공완료 : " + result);
    setdata(result);
  };

  useEffect(() => {
    //Promise {<pending>} 준비단계
    console.log("준비단계 : " + getFetchThen());
    //loadFetchThen();
    loadAwait();
  }, []);
  return (
    <>
      {data.map((movie) => (
        // map : for문같은 느낌
        <div key={movie.id}>
          <h1>{movie.title}</h1>
          <h2>{movie.genre}</h2>
          <p>{movie.actor}</p>
        </div>
      ))}
    </>
  );
};
export default App;
