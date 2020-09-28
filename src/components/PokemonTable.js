import React from "react";
import { useStore } from "../store"

const POKEMON_URL = "https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json"
// updating state outsider of the function :D
fetch(POKEMON_URL)
.then(resp => resp.json())
.then(pokemon => useStore.setState((state) => ({ ...state, pokemon })))

export default function PokemonTable(){
  const pokemon = useStore((state) => state.pokemon)
  const filter = useStore((state) => state.filter)

  return (
    <>
      <h1>List of Pokemon</h1>
      <table width="100%">
        <tbody>
          {pokemon.filter(({ name: { english } }) =>
            english.toLowerCase().includes(filter.toLowerCase()))
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
