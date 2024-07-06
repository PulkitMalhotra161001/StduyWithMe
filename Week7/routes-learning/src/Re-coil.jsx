import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom, evenSelector } from "../store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count></Count>
      </RecoilRoot>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRerender />
      <Buttons />
    </div>
  );
}

function CountRerender() {
  console.log("re-render");
  const count = useRecoilValue(countAtom);
  // return <div>{count}</div>

  const isEven = useRecoilValue(evenSelector);
  return (
    <div>
      value: {count} and it is {!isEven?"Even":"Odd"}
    </div>
  );
}

function Buttons() {
  // const [count,setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      {/* here in the setCount we can write without getting count variable by writing fun'c and updating*/}
      <button onClick={() => setCount((count) => count + 1)}>Increase</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
