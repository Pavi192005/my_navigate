import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div style={{display:"flex",gap:"20px",padding:"10px"}}>
     <Link to={"/"}>Home</Link> 
     <Link to={"/aboutus"}>About Us</Link> 
     <Link to={"/contact"}>Contact Us</Link> 
     </div>
    </>
  )
}

export default Navbar
