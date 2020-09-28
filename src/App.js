import React from "react";
import create from "zustand";
import "./styles.css";

const POKEMON_URL = "https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json"

const useStore = create((set) => ({
  filter: "",
  pokemon: [],
  setFilter: (filter) => set((state) => ({ ...state, filter })),
  setPokemon: (pokemon) => set((state) => ({ ...state, pokemon })),
}));

const FilterInput =()=> {
  const filter = useStore((state) => state.filter)
  const setFilter = useStore((state) => state.setFilter)
  return ( <input value={filter} onChange={(e) => setFilter( e.target.value )} /> )
}

export default function App() {
  const filter = useStore((state) => state.filter)
  const pokemon = useStore((state) => state.pokemon)
  const setPokemon = useStore((state) => state.setPokemon)
  

  React.useEffect(() => {
    fetch(POKEMON_URL)
      .then(resp => resp.json())
      .then(pokemon => setPokemon(pokemon))
  })

  return (
    <div className="App">
      <div>
        <FilterInput />
      </div>
      {JSON.stringify(pokemon)}
    </div>
  );
}