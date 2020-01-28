import React from 'react'

import logo from '../assets/images/logo_vecinos_creta.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img className="logoImage" src={logo} alt="" /></span>
        <h1>Asamblea de Vecinos</h1>
        <h2>Creta Residencial</h2>
        <p>Sitio de la organización de vecinos del condominio Creta Residencial en Capital Norte</p>
        <p>Zapopan Jalisco, México</p>
    </header>
)

export default Header
