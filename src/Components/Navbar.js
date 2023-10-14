import React from 'react'
import info from './images/info.png';
import code from './images/code.png';
import logo from './images/logo.png';
import './Navbar.css';
function Navbar() {
  return (
    <div className='nav-main'>
      <a href="/" className="name"> <div className="logo"><img className="logo-image" src={logo} alt="" /></div> <div className="fiv">Forest Fingers</div></a>
      <div className="navbar-items"><a className="navi" href="/info">Info<img className="info" src={info} alt="" height={20} width={20}/></a>
      <a className="navi" href="https://github.com/AdityaSingh021/ForestFingers">Contribute<img className="contri" src={code} alt="" height={20} width={20}/></a>
      </div>
      </div>
  )
}

export default Navbar;
