import { useContext } from "react";
import { PokemonsContext } from "../components/contexts/PokeContext";

export function usePokemons() {
  const {state, setState} = useContext(PokemonsContext);

  return {
    PokemonsList: state,
    setPokemonsList: setState,
  };
};
