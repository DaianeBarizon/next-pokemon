import styled from 'styled-components';

export const TypeWrapper = styled.div`
    padding: 5px 20px;
    border-radius: 50px;
    margin: 5px;
    color: ${({ color }) => color || "#9f9f9f"};
    background: ${({ background }) => background || rgb(38, 42, 40, 0.8)};

    p{
      font-weight: bold;
    }
`;
