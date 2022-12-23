import styled, { css } from 'styled-components';

export const Politica = styled.div`
${({ theme }) => css`
h2,a,h1{
	color:${theme.colors.font} ;

}





.politica{
	margin-left: 25px;
display: flex;
flex-direction: column;
img{
width: 250px;
height: 350px;
margin: 10px;
border-radius: 10px;

}

.itensPolitica{

display: flex;
flex-direction: column;

}




	button{
	background-color:${theme.colors.primaryColor};
	color:#ffffff;
	margin: 5px 25px  40px;
	font-size: 13px;
	width: 164px;
	height: 43px;
	a{
		color: #ffffff;
	}
}


}

${theme.breakpoints.lg}{

.politica{
margin-left: 40px;
	img{
		width: 350px;
		height: 450px;
	}
}

}

${theme.breakpoints.xl}{

.politica{
display: grid;
grid-template-columns: 1fr  1fr 1fr;

img{
	width: 250px;
height: 350px;

}

}

}




`}
`;
