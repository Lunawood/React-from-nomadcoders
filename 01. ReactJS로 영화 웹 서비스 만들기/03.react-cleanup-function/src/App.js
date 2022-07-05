import { useState, useEffect } from "react";

function Hello() {
  /*
  function byFn() {
    console.log("bye :(")
  }
  function hiFn() {
    console.log("created :)");
    return byFn;
  }
  useEffect(hiFn, []);
  return (<h1>Hello</h1>);
  */
  /*
  useEffect(function () {
    console.log("hi :)");
    return function () {
      console.log("bye :(")
    };
  });
  */
  // 이런 함수를 더 많이 씀(더 짧다)
  useEffect(() => {
    console.log("hi :)");
    // 파괴함수는 잘 쓰이지 않는다.
    // 생성함수에서 "return 파괴함수"를 만들면 된다.
    return function () {
      console.log("bye :(")
    };
  }, []);

}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
