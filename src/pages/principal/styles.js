import styled, { css } from 'styled-components';

export const Principal = styled.div`
${({ theme }) => css`
text-align: center;
width: 100vw;
overflow: hidden;

.tituloCarousel{
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
top: 80px;
width: 80%;
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

}

button{
margin-top: 30px;

}

}





.carousel{

	width: 100vw;

height:350px;

img{
	height:350px;
	width: 100%;
	object-fit: cover;
}

}

img{

height: 60px;
margin-top: 50px;

}

p{
	font-size: 22px;
	color:${theme.colors.font};
	margin:0px  auto 25px auto;
	letter-spacing: 1px;
	padding: 35px;

}



.apresentacao{
text-align: start;
width: 100vw;
background-color: ${theme.colors.black};
margin-top: 85px;
overflow: hidden;
img{

margin: 0  0 45px 0;
	width: 100%;
	height: 301px;
}


p{
	font-size: 18px;
	color:${theme.colors.ligth};
width:350px;
padding: 5px;

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


}

.itemsIcon{
display: flex;
flex-direction: row;
align-items: center;
text-align: start;
h2{
	height: 50px;
	width: 50px;
	background-color:${theme.colors.primaryColor} ;
	border-radius: 50px;
	margin:0 10px;
}

svg{
	color:white;
width: 25px;
height: 25px;
margin: 12px 0  12px 12px;

}

p{
	font-size: 18px;
	padding: 0px;
	width:345px;
margin: 25px auto  ;
}


}

.enviarEmail{
	margin: 45px auto 0px auto;
	background-color:${theme.colors.primaryColor};
	height: 392px;
	display: flex;
	flex-direction: column;
align-items: center;
justify-content: center;

h2{
font-size: 36px;
color:#ffffff;
font-weight: bold;
margin: 10px;
}



button{
margin-top: 25px;
	background-color: transparent;
	border:2px solid #ffffff;
	width: 194px;
	height: 47px;
a{
	color: #ffffff;
	width: 100%;
	height: 100%;
	font-size: 15px;

}

}

}



`}
`;
