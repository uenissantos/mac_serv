import React from 'react'
import P from 'prop-types'


export const Image = ({ src, alt ,className }) => {
return (

<img src={src} alt={alt}  className={className}/>
)
};


Image.propTypes = {

src: P.string.isRequired,
alt:P.string,
className:P.string
}
