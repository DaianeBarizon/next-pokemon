import React from 'react';
import { PokeList } from '../components/organism/PokeList';
import { usePokemons }  from '../hooks/usePokemons';

const index = () => {
  const { PokemonsList } = usePokemons();

  return (
    <>
      <PokeList PokemonsArray={PokemonsList}/>
    </>
  );
}

export default index;
