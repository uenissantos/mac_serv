import styled, { css } from 'styled-components';
import { AiFillFolderOpen } from 'react-icons/ai'


export const TrabalheConosco = styled.div`
${({ theme }) => css`

width: 100%;
overflow: hidden;


.Administrador{
position:relative;
left: 50%;
}
.formulario{
	display: flex;
flex-direction: column;
}

input{

	margin: 15px;
	height: 44px;
	border: none;
text-align: start;
padding-left: 15px;
align-items: center;
overflow: hidden;



:hover {
		border:1px solid ${theme.colors.secundaryColor};
	}



	:nth-child(3){
		position: absolute;
		color: transparent;
		background-color: transparent;
height: 1px;
margin-bottom: -5px;


	}

}


form{
display: flex;

flex-direction: column;

	input{

font-size:15px;
		:hover {
		border:none;
	}
	}

	button{

width: 250px;
height: 45px;
border-radius: 5px;
background-color: ${theme.colors.primaryColor};
color:#ffffff;
font-size: 18px;
margin-left: 25px;

	}


}
p{
color: #ffffff;
font-size: 18px;
margin: 10px 25px;
background-color: green;
opacity: 0.5;
width: 90%;
padding: 10px;
border-radius:5px;
	}



.image{
	width:60%;
	border-radius: 15px;
	height: auto;
	margin: 10px 35px;
}


.admin{
	display: grid;
	grid-template-columns: 1fr 1fr;
margin-bottom:50px;


button{
background-color:${theme.colors.primaryColor};
width: 40%;
height: 25px;
border-radius: 5px;
color: #ffffff;

}

}
ul{

text-align: center;
	li{
		font-size: 14px;
		margin: 5px auto ;
		letter-spacing: 1px;
		width: 100%;
	}

.name{
color:black;
word-break: break-all;}


.email{
	word-break: break-all;
	 a{
		word-break: break-all;	color:${theme.colors.primaryColor};
	:hover{
		color:${theme.colors.secundaryColor};

	}
}
}

.curriculo{
		width: 5rem;


.baixar{
	position: absolute;
	font-size: 10px;
	width: 70px;
	background-color: ${theme.colors.secundaryColor};
	opacity: 1;
	display: none;
}

	img{
width: 100%;
cursor: pointer;

}

:hover{
	.baixar{
		display: flex;
	}
}

}
}


${theme.breakpoints.lg}{
.Administrador{
	left: 70%;
}
.formulario{

	input{
		width: 50%;
	}
}


.admin{
	button{
		height: 40px;
		font-size: 20px;
	}

}
.image{
	display: none;
}

.name{
	font-size:22px;
}

.email{
	a{
		font-size:22px;

	}
}

ul{

	.curriculo{
width: 8rem;

.baixar{
width: 100px;
font-size: 14px;

}

}
}



}


${theme.breakpoints.xl}{

grid-template-columns: 1fr 1fr 1fr;
.Administrador{
	left: 80%;
}
}



`}
`;
