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

position: absolute;
top: -25px;
margin: 25px auto;
background-color:#000000 ;
opacity: 0.7;
width: 100%;
height: 100%;



}

.itenTitle{
	display: flex;
flex-direction: column;
position: absolute;
width: 100vw;
top: 10vh;
height: 20vh;
color: #ffffff;
	align-items: center;
	justify-content: space-around;

h2{
/* 	margin: 25px;
 */font-size: 22px;
width: 250px;
font-weight: bold;
}

p{
	display: none;
	width: 300px;

}

button{
a{
	color:${theme.colors.black} ;
	font-size: 12px;
}

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
width: 100%;
height: 70vh;
margin: auto;
}


p{
	font-size: 18px;
	color:${theme.colors.ligth};
max-width:350px;
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
transition: 3s ease-in-out;

margin-top: 25px;
	background-color: transparent;
	border:2px solid #ffffff;
	width: 194px;
	height: 47px;
overflow: hidden;

&:hover{
border: none;
a{
	left: -20px;
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

.itenTitle{
	top: 7px;
}

p{
	display: flex;
}


.titleLogo{
	width: 550px;
}


.apresentacao{

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

.itenTitle{
height: 400px;
top:7px ;
h2{
	font-size: 54px;
	width: 500px;
margin-top: 45px;
}

p{
	display: flex;
	font-size: 24px;
	width: 600px;

}
}



.carousel{
	height: 70vh;
width: 99vw;
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
height: 560px;
	align-items: center;


	img{
		width: 30vw;
		height: 62vh;
		margin-top: 30px;
		margin-left: 85px;
		border-radius: 10px;
	}

p{
	margin-left: 10rem;
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
