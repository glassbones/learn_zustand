import create from "zustand";

export const useStore = create((set) => ({
  filter: "",
  pokemon: [],
  setFilter: (filter) => set((state) => ({ ...state, filter })),
  setPokemon: (pokemon) => set((state) => ({ ...state, pokemon }))
}));
