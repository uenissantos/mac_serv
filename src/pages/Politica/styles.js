import styled, { css } from 'styled-components';

export const Politica = styled.div`
${({ theme }) => css`
h2,a,h1{
	color:${theme.colors.font} ;

}

h2{
	font-size: 18px ;
	margin: 45px  25px 48px;
	height: 50px;
}

.menuSecundario{
	width: 100vw;

height: 155px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
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

.politica{
	border: 1px solid red;

	button{
	background-color:${theme.colors.primaryColor};
	color:#ffffff;
	margin: 5px 25px  40px;
	font-size: 13px;
	width: 164px;
	height: 43px;
}


}


`}
`;
