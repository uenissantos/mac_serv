import styled, { css } from 'styled-components';

export const Footer = styled.footer`
${({ theme }) => css`

background-color: ${theme.colors.black};
p,
a,
img,
h3,
h2{
	margin-left: 25px;
		color: ${theme.colors.ligth};
padding: 7px;
}

a{ font-size: 15px;}

.endereco{
	display: flex;
	flex-direction:column;
	height:314px;


img{
	width: 150px;
	margin: 50px  25px 25px 25px;
}


svg{

	height: 15px;
	margin-right: 7px;
	color: ${theme.colors.font};
}

& :nth-child(4){
	margin-top: 25px;

}


.email{
	color: #ffffff;
svg{

	height: 25px;
	width: 20px;
	margin-bottom: -7px;
}}}




.contato{
display: flex;
flex-direction: column;
	height: 324px;
	justify-content: center;

h3{
	color:#ffffff;
	font-size: 20px;
	border-bottom: 1px solid ${theme.colors.font};
	width: 90%;
margin-bottom: 10px;

}

& :nth-child(2){
border-top: 1px solid red;
width: 50px;
margin-top: -12px;
}


a{
border-top: 1px solid ${theme.colors.font};
font-size: 15px;
color: white;
width: 90%;
margin-top: 20px;
}

}


.social{
height: 106px;

h2{
font-size: 20px;
color: #ffffff;
border-bottom: 1px solid ${theme.colors.font};
margin-bottom: 12px;

}

a{
	border-top:2px solid red;
	width: 70px;
	display: flex;
	align-items: flex-end;
	height: 55px;
	margin-top: -12px;

}
svg{

	height: 32px;
	width: 32px;
border-radius: 20px;
 padding: 7px;
 	background-color: ${theme.colors.font};
}
}

.meuContato{
	border: 2px solid blue;
	height: 70px;
	display: flex;
	width: 100vw;
	flex-direction: row;
align-items: center;
justify-content: center;


a{

	height: 40px;
	width: 40px;
	overflow: hidden;
	border-radius: 30px;
	display: flex;
align-items: center;
justify-content: center;

}

img{
	height: 200%;
	width: 200%;
background-color: ${theme.colors.ligth};
margin-left: 0px;

}




}

`}
`;
