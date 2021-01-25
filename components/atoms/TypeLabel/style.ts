import styled from 'styled-components';

interface ITypeWrapperProps {
  background?: string;
}

export const TypeWrapper = styled.div<ITypeWrapperProps>`
    padding: 5px 20px;
    border-radius: 50px;
    margin: 5px;
    color: ${({ color }) => color || "#9f9f9f"};
    background: ${({ background }) => background || 'rgb(38, 42, 40, 0.8)'};

    p{
      font-weight: bold;
    }
`;
