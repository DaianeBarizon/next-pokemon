import React, { useEffect, useState } from "react";
import { getAllPokemons } from '../../utils/api/PokemonApi';
import { IPokemon } from '../../types';

const PokemonsContext = React.createContext<{
  state: IPokemon[];
  setState: React.Dispatch<React.SetStateAction<IPokemon[]>>;
}>({
  state: [],
  setState: () => {},
});

type PokemonsProviderProps = unknown;

const PokemonsProvider:React.FC<PokemonsProviderProps> = props => {
  const [state, setState] = useState<IPokemon[] | []>([]);

  useEffect(() => {
    getAllPokemons().then((response: any) => setState(response.data.results));
  }, [])

  return (
    <PokemonsContext.Provider value={{state, setState}}>
      {props.children}
    </PokemonsContext.Provider>
  );
};

export { PokemonsContext, PokemonsProvider };
