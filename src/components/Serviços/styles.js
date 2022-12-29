import styled, { css } from 'styled-components';

export const Servico = styled.div`
${({ theme }) => css`



.image{
display: flex;
flex-direction: column;

img{
margin: 25px auto;
height: auto;
width: 340px;
border-radius: 5px;
	filter:sepia(40%);
	:hover {
		position: relative;
		width: 500px;
		filter:sepia(10%);


	}
}




}


.infor{

	margin: 25px auto;

p{

	font-size: 18px;
	color: ${theme.colors.ligth};
	width: 310px;
	padding: 5px;
	letter-spacing: 1px;
}

}




.wrapper{

	margin-bottom: 45px;
}

.icons{

display: flex;
flex-direction: row;
margin-left: 25px;
margin-top:35px;


}

.itemIcon{

display: flex;
justify-items:start;
p{
letter-spacing: 2px;
margin-top:12px;
padding: 5px;
}

a{

	height: 40px;
width:45px ;
background-color: ${theme.colors.primaryColor};
border-radius: 50%;
display: flex;
text-align: center;
justify-content: center;
margin-right: 25px;
}
svg{
height: auto;
width: 25px;
color: #ffffff;
}




}



${theme.breakpoints.lg}{

	.image{
img{
	width: 450px;
	height: auto;
}

}



.infor{
	p{

	width: 500px;
	font-size: 20px;
	letter-spacing: 2px;

}
}



.wrapper{


display: grid;
grid-template-columns: 1fr 1fr;

}

.icons{
	margin: auto;
	display: grid;
	margin-top: 35px;

	grid-template-columns: 1fr ;
.itemIcon{

	p{
font-size: 20px;
width: 250px;
margin-top:5px;

	}
}
}
}



${theme.breakpoints.xl}{

.image{
	flex-direction: row;
height: 400px;
}




.infor{

		p{
		width: 800px;
		margin-left: 1px;
		font-size: 22px;
	}
}

.wrapper{

	margin: 155px auto ;
	width: 80vw;
	grid-template-columns: 1fr 1fr 1fr;
}


.itemIcon{

	p{
			font-size: 22px;
			width: 450px;

	}
}

}





`}
`;
