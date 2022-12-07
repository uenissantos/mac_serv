import React from 'react'
import *  as Styled from './styles'
import {Text} from '../../components/Text/Text'
import { MyLink } from '../../components/Link';
import {Image} from '../../components/Image'
import {Button} from '../../components/Buttom/Button'
export const Politica = () => {
return (

<Styled.Politica>


<article className='menuSecundario'>
	<Text as='h1'> Políticas</Text>
	<div>
		<MyLink href='/'>Home</MyLink>
	    <span>/</span>
		<MyLink href='/'>Políticas</MyLink>


	</div>

</article  >

	<Text as='h2'> Faça o download das nossas Políticas abaixo:</Text>

<article className='politica' >

<Image src='https://www.primefacility.com.br/site/img/codigo-de-conduta.jpg' alt='' />
<Button>DOWNLOAD</Button>

<Image src='https://www.primefacility.com.br/site/img/politica-de-direitos-humanos.jpg' alt='' />
<Button>DOWNLOAD</Button>

<Image src='https://www.primefacility.com.br/site/img/politica-anti-corrupcao.jpg' alt='' />
<Button>DOWNLOAD</Button>
</article>
</Styled.Politica>
)
};
