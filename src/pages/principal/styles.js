import styled, { css } from 'styled-components';

export const Principal = styled.div`
${({ theme }) => css`
text-align: center;
width: 100vw;
overflow-x: hidden;
display: flex;
flex-direction: column;
align-items: center;


.tituloCarousel{
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
top: 80px;
width: 80vw;
margin: 25px auto;
color: white;
left: 0;
right: 0;


h2{
	margin: 25px;
font-size: 22px;
width: 250px;
font-weight: bold;
}

p{
	display: none;
	width: 300px;

}

button{
margin-top: 30px;

}

}





.carousel{
overflow-y: hidden;
	width: 100vw;

height:350px;

img{
	height:350px;
	width: 100%;
	object-fit: cover;
}

}

.logo{

height: 60px;
margin: 50px   auto;

}

.titleLogo{
	font-size: 20px;
	color:${theme.colors.font};
	width: 350px;

}



.apresentacao{
text-align: start;
width: 100vw;
background-color: ${theme.colors.black};
margin-top: 85px;
overflow-y: hidden;
img{

margin: 0  0 45px 0;
	width: 100%;
	height: 401px;
}


p{
	font-size: 18px;
	color:${theme.colors.ligth};
width:350px;
margin: 2px auto;
}


& :nth-child(3){

	padding-bottom : 45px;
	width: 340px;
}
}

.check{

	display: flex;
flex-direction: column;
	height: 637px;
justify-content: space-between;
align-items:center


}

.itemsIcon{
display: flex;
flex-direction: row;
align-items: center;
text-align: start;
justify-content:space-evenly;

h2{
	height: 50px;
	width: 50px;
	background-color:${theme.colors.primaryColor} ;
	border-radius: 50px;
	margin:0 5px 0 25px ;
	text-align: center;
svg{
	color:white;
width: 25px;
height: 25px;
margin: 12px auto   ;

}
}



p{
	font-size: 18px;
	padding: 10px;
	width:320px;
}


}

.enviarEmail{
	margin: 45px auto 0px auto;
	background-color:${theme.colors.primaryColor};
	display: flex;
	flex-direction: column;
align-items: center;
justify-content: center;
height: 355px;
width: 100vw;
h2{
font-size: 36px;
color:#ffffff;
font-weight: bold;
margin: 10px;
width: 320px;
}



button{
margin-top: 25px;
	background-color: transparent;
	border:2px solid #ffffff;
	width: 194px;
	height: 47px;

overflow: hidden;

&:hover{
border: none;
a{
	left: 0px;
}


svg{
	right:0px;
}

}


a{
	color: #ffffff;
	width: 100%;
	height: 100%;
	font-size: 15px;
	position: relative;


}










svg{
	position: relative;
	right: -40px;
	font-size: 20px;
	padding-top: 5px;

}
}

}


${theme.breakpoints.lg}{

	.tituloCarousel{
h2{
	font-size: 28px;
	width: 450px;

}
p{
		 display: flex;
	}
}

p{
	display: flex;
}


.titleLogo{
	width: 550px;
}


.apresentacao{

img{
	height: 500px;
}



p{
width: 440px;
padding: 5px;
}
& :nth-child(3){

width: 440px;
}
}


.check{
margin-top: 25px;

}



.enviarEmail{

h2{
	width: 500px;
}
}

}
${theme.breakpoints.xl}{


.tituloCarousel{
h2{
	font-size:50px;
	width: 90%;

}


p{

	font-size: 24px;
	width: 800px;

}


}


.carousel{
	height: 70vh;

img{
	height: 100%;
}

}

.logo{
	height: 90px;
}

.titleLogo{

	width: 1000px;
	font-size: 24px;
}

.apresentacao{
	display: flex;
height: 460px;
	align-items: center;

p{
	margin-left: 45px;
}
}



.check{
display: grid;
grid-template-columns: 1fr 1fr 1fr;
height: 265px;
}



.enviarEmail{

	h2{
width: 1000px;
	}
}


}







`}
`;
