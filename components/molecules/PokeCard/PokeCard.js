import React, { useEffect, useState } from 'react';

import { PokecardWrapper, CardHolder, ButtonWrapper } from './style';
import { TypeLabel } from '../../atoms/TypeLabel';
import { getPokemonsByUrl } from '../../../utils/api/PokemonApi';

export const PokeCard = ({ pokemon, background }) => {
  const [pokeData, setPokeData] = useState({ name: pokemon.name });

  useEffect(() => {
    getPokemonsByUrl(pokemon.url).then(data => setPokeData(data.data)).catch((error) => error);
  }, []);

  const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

  return (
    <>
      <PokecardWrapper key={pokeData?.id} background={background}>
        <CardHolder>
          <div>
            <p>{pokeData?.name}</p>
            <span>Nº {pokeData?.id}</span>
          </div>
          {/* <img src={pokeData?.sprites?.front_default} alt={pokeData?.name}/> */}
          {pokeData.id ?
          <img src={`${url}${pokeData.id}.png`} alt={pokeData.name}/>
          : null }
        </CardHolder>
        <ButtonWrapper>
          {pokeData.types ? pokeData.types.map((value, index) => {
            const {name} = value.type;
            return <TypeLabel type={name} key={index} />;
          }) : null}
        </ButtonWrapper>
      </PokecardWrapper>
    </>
  );
}
