import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
${({ theme }) => css`

*{
	margin:0 ;
	padding:0 ;
	box-sizing:border-box ;

}


li{
	list-style-type:none;

}
a{
	text-decoration: none;


}


`}
`
