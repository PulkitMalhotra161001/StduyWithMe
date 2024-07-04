import { useState, memo, useEffect, useMemo, Children, useCallback, useRef } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const taxContainer = useRef()

  useEffect(()=>{
    setTimeout(()=>{
      // document.getElementById("taxContainer").innerHTML = 10;
      taxContainer.current.innerHTML = 10;
    },5000)
  },[])

  const tax = 20000

  return (
    <div>
      {/* hi there <div id="taxContainer">{tax}</div> */}
      hi there <div ref={taxContainer}>{tax}</div>
    </div>
  );
}

export default App;
