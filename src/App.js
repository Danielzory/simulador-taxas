import React from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import {BrowserRouter, Routes, Route}  from 'react-router-dom'
import Simular from './Components/Simular/Simular'
import Procurcao from './Components/Procuração/Procurcao'
import Controle from './Components/Controle/Controle'


const App = () => {
  return (
   
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home  />} />
            <Route path='/simulador' element={<Simular />} />
            <Route path='/procuracao' element={<Procurcao />} />
            <Route path='/controle' element={<Controle />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App
