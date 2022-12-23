import styled, { css } from 'styled-components';

export const TrabalheConosco = styled.div`
${() => css`
width: 1005;
height: 60vh;

.animated{
	width: 100px;
  height: 100px;
  background: red;
  position: absolute;
  animation: mymove 5s infinite;
}

@keyframes mymove {
  from {bottom: 0px;}
  to {bottom: 200px;}
}

`}
`;
