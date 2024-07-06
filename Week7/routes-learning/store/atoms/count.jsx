import { atom, selector } from "recoil";

//define an atom
export const countAtom = atom({
  //it must be unique
  key: "countAtom",
  default: 0,
});


// evenSelector dependes on countAtom so we get countAtom value and returning
export const evenSelector = selector({
  key: "evenSelector",
  // functionName inside this we have access to get function
  get: ( {get} ) => {
    const count = get(countAtom);
    return count % 2;
  },
  // get: ( props ) => {
  //   const count = props.get(countAtom);
  //   return count % 2;
  // },
});


// useMemo(()=>{
//   return countAtom % 2;
// },[countAtom])
