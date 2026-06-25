import { Link,Route,Router, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import React from 'react'
import Login from "./Login"

export default function Navbar() {
  return (
    <>
      <Link to="/Home">HOME</Link>
      <br></br>
      <Link to="/About">ABOUT</Link>
      <br></br>
      <Link to="/Contact">CONTACT</Link>
      <br />
      <Link to="/Login">LOGIN</Link>


      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </>

  )
}