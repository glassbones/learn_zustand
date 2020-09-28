import React from "react";
import { useStore } from "../store"
const POKEMON_URL = "https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json"
// updating state outsider of the function :D
// make request at url
fetch(POKEMON_URL)
// convert response to json
.then(resp => resp.json())
// take json =>  setPokemon state to json
.then(pokemon => useStore.setState((state) => ({ ...state, pokemon })))

export default function PokemonTable(){
  // import state from store
  const pokemon = useStore((state) => state.pokemon)
  const filter = useStore((state) => state.filter)
  // return table element of pokemon
  return (
    <>
      <h1>List of Pokemon</h1>
      <table width="100%">
        <tbody>
          {/* filter over pokemon names  */}
          {pokemon.filter(({ name: { english } }) =>
          // compare pokemon names to filter state
           english.toLowerCase().includes(filter.toLowerCase()))
           // map results and print rows with names and types 
            .map(({ id, name: { english }, type }) => (
              <tr key={id}>
                <td>{english}</td>
                <td>{type.join(", ")}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}
