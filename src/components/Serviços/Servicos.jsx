import React from 'react'
import {Text} from '../../components/Text/Text'
import { MyLink } from '../../components/Link';
import {Image} from '../../components/Image'
import *  as Styled from './styles'


export const Servico = ({  servicos=[], menu=[] }) => {
return (

<Styled.Servico>


 {menu.map((link,i)=>(

<article className='menuSecundario' key={i}>

		<MyLink classe={link.classe} newTab={link.newTab} href={link.href}>{link.children}</MyLink>



	</article>

))}


{servicos.map((value)=>(

<article
key={value.key}
 className=''>
<Image src={value.img} alt=''/>
<Text>
{value.infor}
</Text>


{ value.servico1 && <div><Text>{value.servico1}</Text></div>}

{ value.servico2 && <div><Text>{value.servico2}</Text></div>}

{ value.servico3 && <div><Text>{value.servico3}</Text></div>}

{ value.servico4 && <div><Text>{value.servico4}</Text></div>}{ value.servico1 && <div><Text>{value.servico4}</Text></div>}

{ value.servico5 && <div><Text>{value.servico5}</Text></div>}

{ value.servico6 && <div><Text>{value.servico6}</Text></div>}

</article>






))}







</Styled.Servico>
)


};


