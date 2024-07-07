import { atomFamily } from "recoil";
import { TODOS } from "./todos";

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  //dafult value is not value anymore 
  //this is a family and we are finding ith element
  //it store's a function that return a new atom
  default: id => {
    return TODOS.find(x => x.id === id)
  },
});