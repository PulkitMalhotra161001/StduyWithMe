import { createContext } from "react";
//we create this varible to teleport a state varible
//it has .Provider function
// export const CountContext = createContext(0);
export const CountContext = createContext({
    count,setCount
});
