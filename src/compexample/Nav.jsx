import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Login from './Login'

export default function Nav() {
  return (
    <>
      <Link to="/Home">HOME</Link><br />
      <Link to="/About">ABOUT</Link><br />
      <Link to="/Contact">CONTACT</Link><br />
      <Link to="/Login">LOGIN</Link>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
    </>
  )
}
