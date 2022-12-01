import React from 'react'
import P from 'prop-types'
import { NavLink } from 'react-router-dom';

export const MyLink = ({
	children ,
	href='',
newTab,
classe,
}) => {

const target = newTab ? '_blank' : '_self'

return (

<NavLink
className={classe} target={target} to={href}

>
	{children}

</NavLink>

)
};


MyLink.propTypes = {


	children: P.node.isRequired,
	href: P.string,
	newTab: P.bool,
	classe: P.string,
}
