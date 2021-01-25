import React, { useEffect, useState } from "react";
import { getAllPokemons } from '../../utils/api/PokemonApi';
import { IPokemon } from '../../types';

const PokemonsContext = React.createContext<{
  state: IPokemon | null;
  setState: React.Dispatch<React.SetStateAction<IPokemon>>;
}>({
  state: null,
  setState: () => {},
});

type AuthProviderProps = unknown;

const PokemonsProvider:React.FC<AuthProviderProps> = props => {
  const [state, setState] = useState<IPokemon | null>(null);

  useEffect(() => {
    getAllPokemons().then((data) => setState(data.data.results));
  }, [])

  return (
    <PokemonsContext.Provider value={{state, setState}}>
      {props.children}
    </PokemonsContext.Provider>
  );
};

export { PokemonsContext, PokemonsProvider };
