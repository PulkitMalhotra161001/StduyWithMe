import { useContext, useState } from "react";
import {CountContext} from "./context"

function App() {

  //ContextAPI - directly pass props to buttons,CountRender component withour passing prop to Count
  const [count,setCount] = useState(0);

  //wrap anyone that wants to use the teleported value inside a provider
  return (
    <div>
      {/* save count state varible */}
      <CountContext.Provider value={{count,setCount}}>
      <Count ></Count>
      </CountContext.Provider>
    </div>
  );
}

function Count({setCount}){
  return <div>
    <CountRerender/>
    <Buttons />
  </div>
}

function CountRerender(){
  //use
  const count = useContext(CountContext)
  return <div>
    {count}
  </div>
}

function Buttons(){
  const {count,setCount} = useContext(CountContext)
  return <div>
    <button onClick={()=>setCount(count+1)}>Increase</button>
    <button onClick={()=>setCount(count-1)}>Decrease</button>
  </div>
}

export default App;
