import React from 'react'
import logo from "../assets/images/logo_vecinos_creta.png";

const HeaderGeneric = (props) => (
    <header id="header">
      <a href="/"><span className="logo"><img className="logoImage" src={logo} alt="" /></span></a>
      <h1>Encuesta vecinal</h1>
    </header>
)

export default HeaderGeneric
