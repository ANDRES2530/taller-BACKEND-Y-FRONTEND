import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Efecto from './Efecto'
import Hook from './Hook'
import TablaRoles from './TablaRoles'
import TablaUsuarios from './TablaUsuarios'
import ActualizarRoles from './ActualizarRoles'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/efecto' element={<Efecto></Efecto>}></Route>
        <Route path='/hook' element={<Hook></Hook>}></Route>
        <Route path='/tabla' element={<TablaRoles></TablaRoles>}></Route>
        <Route path='/usuario' element={<TablaUsuarios></TablaUsuarios>}></Route>
        <Route path='/actualizar/:id' element={<ActualizarRoles></ActualizarRoles>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
