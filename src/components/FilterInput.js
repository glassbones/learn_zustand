import React from "react";
import { useStore } from "../store"

export default function FilterInput(){
  // pull state from store
  const filter = useStore((state) => state.filter)
  const setFilter = useStore((state) => state.setFilter)
  // return input element
  // value = filter state... onchange setFilter state to input text 
  return ( <input value={filter} onChange={(e) => setFilter( e.target.value )} /> )
}

