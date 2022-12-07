import React from 'react'
import P from 'prop-types'
import *  as Styled from './styles'


export const Button = ({ children, click, pattern , className }) => {
	return (

		<Styled.ButtomContainer pattern={pattern} className={className} onClick={click}  >

				{children}



		</Styled.ButtomContainer>
	)
};


Button.propTypes = {

	children: P.node.isRequired,
	click: P.func,
	pattern:P.string,
	className: P.string
}
