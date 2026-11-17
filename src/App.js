import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route as path='/' element={<Home/>}/>
        <Route as path='/aboutus' element={<About/>}/>
        <Route as path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
