import React from 'react';

import { PokecardWrapper, CardHolder, ButtonWrapper } from './style';
import { TypeLabel } from '../../atoms/TypeLabel';

export const PokeCard = () => {
  return (
    <>
      <PokecardWrapper>
        <CardHolder>
          <div>
            <strong><p>Bulbasaur</p></strong>
            <span>Nº 003</span>
          </div>
          <img src='https://pngimg.com/uploads/pokemon/pokemon_PNG149.png' alt='Bulbasaur'/>
        </CardHolder>
        <ButtonWrapper>
            <TypeLabel />
            <TypeLabel />
        </ButtonWrapper>
      </PokecardWrapper>
    </>
  );
}
