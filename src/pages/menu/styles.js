import styled, { css } from 'styled-components';


export const Contato = styled.div`
${({ theme }) => css`
height: ${theme.sizes.small};
width: 100%;
overflow-x: hidden;
background-color: ${theme.colors.black};
display: flex;
justify-content:space-between;
align-items: center;
display: none;
a{
	color:gray
}

.contato{
	margin-left: 4rem;
	svg{
		margin:5px 0 0 25px;
		color: gray;

	}

a{
		margin-left: 5px;
&:hover{
	color: ${theme.colors.ligth};

}
}

}


.social{
	margin-right: 10rem;
	width: 25px;

	svg{
background-color: gray;
color: #464246;
padding: 3px;
height: 80%;
width: 80%;


&:hover{
	background-color: ${theme.colors.primaryColor};

}
	}

}


${theme.breakpoints.xl}{

display: flex;

}



`}
`;


export const Menu = styled.nav`
${({ theme, menu }) => css`
background-color: ${theme.colors.background};
width: 100vw;

.bottonMenu{
	position: relative;
	left: 85%;
	top: 3rem;

	height: 35px;
	width: 35px;


	svg{
		height: 100%;
		width: 100%;
	}
}


ul{

display: ${menu ? 'flex' : 'none'};
flex-direction: column;
width: 100%;
margin-top: 45px;

}
img{
height: 90px;
width: 90px;
margin-left: 1rem;
}


.titulo{
	list-style-type: none;
	display: flex;
flex-direction: row;
	border-top: 2px solid ${theme.colors.border};
	width: 100vw;
justify-content: space-between;
text-align: center;
a,p{
	margin-left: 15px;
color:${theme.colors.font};
font-weight: bold;

&:hover{
	color:${theme.colors.secundaryColor}
}

}
svg{
	margin-right: 10px;
}
}


summary{
height: 55px;

}
.infor{
	margin-top: -25px;
	display: flex;
	flex-direction: column;
	a{
		color: gray;
		height: 40px;
		border-top: 1px solid ${theme.colors.border};
		padding:10px 25px 0;

		&:hover{
	color:${theme.colors.secundaryColor}
}
	}



}




${theme.breakpoints.xl}{

ul{
flex-direction: row;
height: ${theme.sizes.big};
}

details{
	height: ${theme.sizes.big};
width: 150px;
}
.titulo{
width: 10vw;
justify-content: space-evenly;

svg{
display: none;

}
a,p{
	margin-left: 0px ;
	margin-top: 3rem;
height: 35px;
width: 120px;
}
}


.image{
width: 40vw;

img{
	height: 100px;
width: 100px;
}

}

.infor{
margin-top: 50px;
width: 280px;

}

}




`}
`;
