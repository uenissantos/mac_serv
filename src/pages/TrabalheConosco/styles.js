import styled, { css } from 'styled-components';

export const TrabalheConosco = styled.div`
${({ theme }) => css`

width: 100%;
input{

	margin: 15px;
	height: 44px;
	border: none;
text-align: start;
padding-left: 15px;
align-items: center;



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



img{
	width:100%;
	height: auto;
}

`}
`;
