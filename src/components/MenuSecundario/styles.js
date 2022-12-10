import styled, { css } from 'styled-components';

export const MenuSecundario = styled.div`
${({ theme }) => css`
text-align: center;
width: 90vw;
	background-color: #fafcfc;

height: 154.5px;





.title{
	h1{
		margin: 35px auto 10px auto;
		font-size: 24px;
		color:${theme.colors.font};
	}

}

.menuSecundario{
text-align: center;
display:inline;
height: 55px;

a{
	color:${theme.colors.ligth};
	font-size: 13px;
	margin: 25px 5px;

	:hover{

		color:${theme.colors.font};
	}

}

.thisPage{

	color:${theme.colors.font};

}
}




${theme.breakpoints.xl}{
.menu{
	display: flex;
	flex-direction: row;
align-items: flex-end;
margin: 80px;


}

.title{
	position: relative;
h1{
	font-size: 28px;
	width: 650px;


}

}
.menuSecundario{

position:relative;
left: 20vw;

}

}

`}
`;
