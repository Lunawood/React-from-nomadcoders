import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("")
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  // states가 바뀔때마다 rendering을 모든줄이 다시 하게 되는데,
  console.log("i run all the time");
  // useEffect는 re-rendering에서부터 제외할 수 있다.
  useEffect(() => {
    console.log("CALL THE API....");
  }, []);
  // 검색 API를 사용할 경우, onClick또한 re-rendering을 하게된다. 즉 검색 API를 클릭할때마다 호출하게 된다.
  // 검색할 때만 검색 API를 호출하고 싶은 경우,
  useEffect(() => {
    // keyword가 5자 이상 써져 있는 경우만 호출...
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>

  );
}

export default App;
