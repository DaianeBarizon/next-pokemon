import { useContext } from "react";
import { PokemonsContext } from "../components/contexts/PokeContext";

const usePokemons = () => {
  const [state, setState] = useContext(PokemonsContext);

  return {
    PokemonsList: state,
    setPokemonsList: setState,
  };
};

export default usePokemons;
