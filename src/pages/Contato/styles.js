import styled, { css } from 'styled-components';

export const FaleConosco = styled.div`
${({ theme }) => css`


.footer{
background-color: white;
width: 100%;
display: block;
.endereco,.email{
img{
	display: none;
}
color: ${theme.colors.secundaryColor};

height: 120px;

}
.email{

width: 90%;
height: 38px;
padding: 10px;


}

.social{
margin-top: 45px;
h2{
	color: ${theme.colors.black};

}

}




.contato,.meuContato{
	display: none;
}

 .linha{
	position: relative;
top: -195px;
	border-bottom: 1px solid transparent;
     width: 250px;
	height: 20px;
padding: 25px;
z-index: 2;
position: relative;
left: 50px;
transition: 1.5s;


&:hover{

	border-bottom: 1px solid red;


}

	}



}




.wrapper{
	display: flex;
	flex-direction: column;
	margin-top: 95px;
width: 100%;





}

.form{
	display: flex;
	flex-direction: column;
	padding: 25px;
	color: red;
align-items: center;

	input{
		margin: 15px;
		width: 100%;
		height: 44px;
		text-align: start;
		padding: 15px;
		border: 1px solid white;


		:hover{

			border: 1px solid gray;

		}
	}


	textarea{
		width: 100%;
		height: 222px;
		padding: 12px;
		border: 1px solid white;

		:hover{

border: 1px solid gray;

}

	}




	#submit_form{
background-color: ${theme.colors.primaryColor};
width: 70%;
border-radius: 5px;
text-align: center;
font-size: 18px;
color: white;
margin-left: -45px;
	}


}



${theme.breakpoints.xl}{



.wrapper{
margin-top: 45px;
	display: flex;
	flex-direction: row;
}

form{
width: 2500px;
}


.footer{
	height: 500px;

	font-size: 22px;
	footer{
		margin: 45px;

	}



	.linha{
top: -25rem;
margin-left: 45px;
width: 300px;
	}

}


.endereco,.email{

padding: 45px;


}

.social{
	padding: 85px;
	h2{
		width: 300px;
		font-size: 24px;
	}

}



	img{
		display: none;
	}
}





`}
`;
