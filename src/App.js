import React from "react";
import "./styles.css";

import FilterInput from './components/FilterInput'
import PokemonTable from './components/PokemonTable'

export default function App() {
  return (
    <div className="App">
      <FilterInput />
      <PokemonTable/>
    </div>
  );
}