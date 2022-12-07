import styled, { css } from 'styled-components';

export const About = styled.div`
${({ theme }) => css`
		width: 100vw;
overflow: hidden;
h1,h2,p,a{

		color:${theme.colors.font} ;

}


.menuSecundario{
	width: 100vw;

	height: 154px;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 26px;

	a{
		font-size: 16px;
		padding:3px;
	}


	span{

		font-size: 16px;
		color:${theme.colors.ligth} ;
	}
}

.solucao{
height: 1100px;
width: 100vw;


p{
margin: 25px;

}


img{
	width: 95%;
	border-radius: 15px;
	max-width: 374px;
	margin: 25px;

}

button{
	background-color:${theme.colors.primaryColor};
	color:#ffffff;
	margin: 0px 25px;
	font-size: 13px;
	width: 164px;
	height: 43px;
}





}


.missaoValores{
	width: 90vw;

	height: 1400px;
display: grid;
grid-template-columns: 1fr;
text-align: start;
margin: 25px;

img{
	width: 100%;
}


h2{
	font-size: 24px;
	margin: 25px;
}
}

p{
font-size: 17px;
width: 320px;
}


`}
`;
