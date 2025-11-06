import React from 'react'
import myLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Notfound from './pages/Notfound'
import About from './pages/About'
import Signuserup from './pages/Signuserup'
import Props from './pages/Props'


const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signuserup' element={<Signuserup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='*' element={<Notfound/>}/>
      <Route path='/my-about' element={<About/>}/>
      <Route path='/about' element={<Navigate to='/my-about'/>}/>
      <Route path='/props' element={<Props/>}/>
    </Routes>
   {/* <nav className='myNav'>
      <img src={myLogo} alt="" />
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
        <li><a href="">News</a></li>
      </ul>
      <button onClick={()=>{alert("Here i am")}}>Get started</button>
    </nav> */}

    {/* <main>
      <Home/>
    </main> */}
    </>
  )
}

export default App
