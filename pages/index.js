import React from 'react';
import { PokeList } from '../components/organism/PokeList';
import usePokemons from '../hooks/usePokemons';

export default function index() {
  const { PokemonsList } = usePokemons();

  return (
    <>
      <PokeList PokemonsArray={PokemonsList}/>
    </>
  );
}
