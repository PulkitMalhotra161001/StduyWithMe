import { atom, selector } from "recoil";

//define an atom
export const todos = atom({
  //it must be unique
  key: "todos",
  default: [{title:"Default",description:"Default description"}],
});

//define an atom
export const filter = atom({
  //it must be unique
  key: "filter",
  default: "",
});



// evenSelector dependes on countAtom so we get countAtom value and returning
export const evenSelector = selector({
  key: "filteredTodos",
  // functionName inside this we have access to get function
  get: ({ get }) => {
    const todos = get(todos);
    const filter = get(filter);
    return todos.filter(
      (todo) => todo.title.includes(filter) || todo.description.includes(filter)
    );
  },
});
