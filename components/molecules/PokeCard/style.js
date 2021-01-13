import styled from 'styled-components';

export const PokecardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 300px;
    margin: 20px 0;
    background: ${({ background }) => background || '#26D97D'};
`;

export const CardHolder = styled.div`
    width: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;

    div{
      padding: 30px;
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

    img{
      max-width: 40%;
    }
`;

export const ButtonWrapper = styled.div`
  padding: 30px;
  display: flex;
`;
