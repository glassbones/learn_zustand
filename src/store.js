import create from "zustand";
// global state for the app
export const useStore = create((set) => ({
  // state for the string of pokemon printed to the dom
  filter: "",
  // state for the array that stores all the pokemon
  pokemon: [],
  // function to set filter state, without mutating
  setFilter: filter => set(state => ({ ...state, filter })),
  // function to set pokemon state, without mutating
  setPokemon: pokemon => set(state => ({ ...state, pokemon }))
}));
