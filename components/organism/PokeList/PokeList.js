import React from 'react';
import { PokeCard } from '../../molecules/PokeCard';
import { PokeListWrapper } from './style';

//independente da quantidade de vezes que esse componente for chamando, desta forma será declarado uma única vez.
const handlePokemonsArray = (PokemonsArray) => {
  if (PokemonsArray?.length > 0) {
    return PokemonsArray.map((pokemon, index) => {
      return <PokeCard pokemon={pokemon} key={index} />;
    });
  } else {
    return <h2>Carregando ...</h2>;
  }
}

export const PokeList = ({PokemonsArray}) => {
  return (
    <PokeListWrapper>{handlePokemonsArray(PokemonsArray)}</PokeListWrapper>
  );
}
