import { useState, useEffect,useMemo } from "react";
import axios from "axios";
import "./App.css";

function App() {
  

  const [data,setData] = useState(0)
  // const [value,setValue] = useState(0);
  const [buttonCounter,setButtonCounter] = useState(0);


  // the problem here is when we click on input value it setData which will re-render App
  // data change will effect useEffect which trigger setValue which will again re-render App
  /*
  useEffect(()=>{

    let ans=0;
    for(let i=1;i<=data;i++){
      ans+=i;
    }
    setValue(ans)

  },[data])
  */

  //we know value variable dependent on data variable so there is no point of creating a State varible for that
  let value = useMemo(()=>{
    let ans=0;
    for(let i=1;i<=data;i++){
      ans+=i;
    }
    return ans
  },[data])

  

  return (
    <div>
      {/* when useState change it trigger re-render child which lead to re-render parent that's how we are getting ans */}
      <input type="text" onChange={(e)=>setData(e.target.value)}></input>
      <h1>Sum of 1 to {data} is {value}</h1>
      {/* when i click on a button re-render happen and compute value using for loop */}
      {/* but when we define useEffect dependent on data the for loop will not happen */}
      <button onClick={()=>setButtonCounter(buttonCounter+1)}>Click {buttonCounter}</button>
    </div>
  );
}


export default App;
