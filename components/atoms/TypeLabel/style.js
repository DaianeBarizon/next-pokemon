import styled from 'styled-components';

export const TypeWrapper = styled.div`
    padding: 5px;
    border-radius: 12px;
    color: ${({ color }) => color || "#9f9f9f"};
    background: ${({ background }) => background || "#242424"};
`;
