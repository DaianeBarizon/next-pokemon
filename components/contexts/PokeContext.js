
import React, { useEffect, useState } from "react";
import { getAllPokemons } from '../../utils/api/PokemonApi';

const PokemonsContext = React.createContext([[], () => {}]);

const PokemonsProvider = props => {
  const [state, setState] = useState([]);

  useEffect(() => {
    getAllPokemons().then((data) => setState(data.data.results));
  }, [])

  return (
    <PokemonsContext.Provider value={[state, setState]}>
      {props.children}
    </PokemonsContext.Provider>
  );
};

export { PokemonsContext, PokemonsProvider };
