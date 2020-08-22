import React from 'react'

import logo from '../assets/images/logo_vecinos_creta.png';

const Header = (props) => (
    <header id="header" className="custom">
        <span className="logo"><img className="logoImage" src={logo} alt=""/></span>
        <span className='site-title'>
          <h1>Asamblea de Vecinos</h1>
          <h2>Creta Residencial</h2>
        </span>
    </header>
)

export default Header
