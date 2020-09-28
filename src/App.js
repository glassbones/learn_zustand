import FilterInput from './components/FilterInput'
import PokemonTable from './components/PokemonTable'
import React from "react";
import "./styles.css";
// not a lot going on in here lol
export default function App() {
  return (
    <div className="App">
      <FilterInput /> { /*   text input box   */ }
      <PokemonTable/> { /*  table of pokemon  */ }
    </div>
  );
}