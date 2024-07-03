import { useState, memo, useEffect, useMemo, Children, useCallback } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  //for function it will re-render so we have to use useCallback
  // function data(){
  //   console.log("hi there")
  // };

  const data = useCallback(()=>{
    console.log("hi there")
    //after depedency change then re-run this piece of code
  },[])

  return (
    <div>
      <ChildrenComponent input={data}></ChildrenComponent>
      <button onClick={() => setCount(count + 1)}>Click {count}</button>
    </div>
  );
}

const ChildrenComponent = memo(({ input }) => {
  console.log("child re-render");
});

// function ChildrenComponent({input}){
//   console.log("child re-render")
// }

export default App;
