import styled, { css } from 'styled-components';

export const Orcamento = styled.div`
${({ theme }) => css`



.wrapper{

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


		&:hover{

			border: 1px solid ${theme.colors.primaryColor};

		}
	}


	textarea{
		width: 100%;
		height: 222px;
		padding: 12px;
		border: 1px solid white;

		&:hover{

			border: 1px solid ${theme.colors.primaryColor};

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


form{

#submit_form{
		width: 10%;
	}


}



}





`}
`;
