import styled from 'styled-components';

export const PokecardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${({ background }) => background || '#26D97D'};
`;

export const CardHolder = styled.div`
    width: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;

    img{
      max-width: 30%;
    }

    p{
      color: ${({ color }) => color || '#FFFFFF'};
      font-size: 24px;
      font-weight: bold;
    }

    span{
      color: ${({ color }) => color || '#FFFFFF'};
      font-size: 15px;
    }
`;

export const ButtonWrapper = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
`;
