import React from 'react'
import P from 'prop-types'
import *  as Styled from './styles'


export const Text = ({ children, as }) => {
return (

<Styled.Text  as={as}>
{children}
</Styled.Text>
)
};


Text.propTypes = {

children: P.node.isRequired,
as:P.string
}
