import React from 'react';
import { PokeCard } from '../../molecules/PokeCard';
import { Loading } from './style';
import { Row, Col } from 'antd';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#C25FE7', '#F54EBE', '#F54E65', '#CD1212'];

//independente da quantidade de vezes que esse componente for chamando, desta forma será declarado uma única vez.
const handlePokemonsArray = (PokemonsArray) => {
  if (PokemonsArray?.length > 0) {
    return PokemonsArray.map((pokemon, index) => {
      return (
        <Col className="gutter-row" span={6}>
          <PokeCard pokemon={pokemon} background={colors[index]} key={index} />
        </Col>
      );
    });
  } else {
    return <Loading>Carregando ...</Loading>;
  }
}

export const PokeList = ({PokemonsArray}) => {
  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {handlePokemonsArray(PokemonsArray)}
      </Row>
    </>
  );
}
