import React from 'react'
import *  as Styled from './styles'
import { Servico } from '../../components/Serviços/Servicos';

export const Climatizacao = () => {


const menu=[
	{
		children: 'Home',
		href: '/',
		newTab: false,},

		{children: 'Sobre',
		href: '/sobre',
		newTab: false,},

	{	children: 'Climatização',
		href: '',
		newTab: false,},


]


const servicos=[

{img:' https://www.primefacility.com.br/site/img/services/controle-patrimonial.jpg',
infor:'informacoes',
servico1:'ser1',
servico2:'serv2',
servico3:'serv3',
servico4:'serv4',
   servico5:'serv5'



}


]

return (

<Styled.Climatizacao>

	<Servico  servicos={servicos}  menu={menu}/>
</Styled.Climatizacao>
)
};
