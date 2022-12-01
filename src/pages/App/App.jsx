import {React } from 'react'
import { Menu } from '../menu/Menu'
import{BrowserRouter, Routes, Route} from 'react-router-dom'

import *  as Styled from './styles'

function App() {

  return (

<Styled.App>


<BrowserRouter>
<Routes>

<Route  path='/' element={<Menu/>}/>

</Routes>


</BrowserRouter>
</Styled.App>



  )
}

export default App
