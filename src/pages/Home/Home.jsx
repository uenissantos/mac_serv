import React from 'react'
import { Outlet } from 'react-router-dom';
import { Menu } from '../menu/Menu';
import *  as Styled from './styles'
import {Footer}  from '../Footer/Footer'

export const Home = () => {
return (

<Styled.Home>

<Menu/>

<Outlet/>


<Footer/>
</Styled.Home>
)
};
