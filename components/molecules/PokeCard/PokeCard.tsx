import React, { useEffect, useState } from 'react';

import { PokecardWrapper, CardHolder, ButtonWrapper } from './style';
import { TypeLabel } from '../../atoms/TypeLabel';
import { getPokemonsByUrl } from '../../../utils/api/PokemonApi';
import { IPokemon, IPokeData } from '../../../types';

interface IPokeCardProps {
  pokemon: IPokemon;
  background: string;
}

export const PokeCard: React.FC<IPokeCardProps> = ({ pokemon, background }) => {
  const [pokeData, setPokeData] = useState<IPokeData | null>();

  useEffect(() => {
    getPokemonsByUrl(pokemon.url).then(data => setPokeData(data.data)).catch((error) => error);
  }, []);

  return (
    <>
      <PokecardWrapper key={pokeData?.id} background={background}>
        <CardHolder>
          <div>
            <p>{pokeData?.name}</p>
            <span>Nº {pokeData?.id}</span>
          </div>
          {pokeData?.id ?
          <img src={pokeData.sprites?.other['official-artwork'].front_default} alt={pokeData?.name}/>
          : null }
        </CardHolder>
        <ButtonWrapper>
          {pokeData?.types ? pokeData.types.map((value, index: number) => {
            const {name} = value.type;
            return <TypeLabel type={name} key={index} />;
          }) : null}
        </ButtonWrapper>
      </PokecardWrapper>
    </>
  );
}
