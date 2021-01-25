import styled from 'styled-components';
import { whiteColor, successColor } from '../../../helpers/colors';

interface IPokecardWrapperProps {
  background?: string;
}

export const PokecardWrapper = styled.div<IPokecardWrapperProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 300px;
    margin: 20px;
    border-radius: 20px;
    background: ${({ background }) => background || successColor};
`;

export const CardHolder = styled.div`
    width: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;

    div{
      padding: 30px;
    }

    p{
      color: ${({ color }) => color || whiteColor};
      font-size: 24px;
      font-weight: bold;
    }

    span{
      color: ${({ color }) => color || whiteColor};
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
