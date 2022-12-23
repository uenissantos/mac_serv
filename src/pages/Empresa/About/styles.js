import styled, { css } from 'styled-components';

export const About = styled.div`
${({ theme }) => css`
		width: 100vw;
overflow: hidden;
h1,h2,p,a{

		color:${theme.colors.font} ;

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


${theme.breakpoints.lg}{




.solucao{
	height: 900px;

	p{
margin: 8px auto;
width: 700px;

	}


button{
position: relative;
top: 25px;
right: 50%;

a{
	color: #ffffff;
}

}

}

.missaoValores{
	height: 450px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
width: 100vw;
img{
	width:220px;
}
p{
width: 200px;
}

}

}



${theme.breakpoints.xl}{

.solucao{
	display: flex;
	justify-content: space-around;
height: 400px;
p{
width: 900px;
letter-spacing: 1px;
margin: 25px;
font-size: 22px;
}



img{
	height: 250px;
	width: 200px;
}

}


.missaoValores{

height: 550px;
text-align: center;
width: 80%;
margin: 2px auto;
img{
	width:320px;
}

p{
	margin: 10px auto;
	width: 300px;
}

}

}




`}
`;
