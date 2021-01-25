import styled from 'styled-components';
import { grayColor } from '../../../helpers/colors';

interface ITypeWrapperProps {
  background?: string;
}

export const TypeWrapper = styled.div<ITypeWrapperProps>`
    padding: 5px 20px;
    border-radius: 50px;
    margin: 5px;
    color: ${({ color }) => color || grayColor};
    background: ${({ background }) => background || 'rgb(38, 42, 40, 0.8)'};

    p{
      font-weight: bold;
    }
`;
