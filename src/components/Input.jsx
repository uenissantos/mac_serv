import React from 'react'
import P from 'prop-types'
import *  as Styled from './input/styles'


export const Input = ({ type, name, placeholder, id, value ,click,onkeypress ,disabled='',onchange}) => {

	let visible = disabled==='disabled'?'disabled'  :  ""


	return (

		<input
			type={type} name={name}
			placeholder={placeholder}
			Type={type}
			id={id}
			value={value}
			onClick={click}
			disabled={visible}
			onkeypress={onkeypress}
			onChange={onchange}
		>

		</input>
	)
};


input.propTypes = {

	type: P.string,
	name: P.string,
	placeholder: P.string,
	id: P.string,
	value: P.string,
	click:P.func
}
