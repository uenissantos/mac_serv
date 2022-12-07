import styled, { css } from 'styled-components';





export const ButtomContainer = styled.button`
${({ theme }) => css`

border-radius: 7px;

width: 150px;
height: 43px;
border: none;



&:hover{
background-color: ${theme.colors.primaryColor};

}


`}
`;
