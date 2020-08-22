import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'first', 'second', 'cta'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">Análisis de Coto</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="first">
                    <a href="#">Ambitos a analizar</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="second">
                    <a href="#">Zona</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="third">
                    <a href="#">Coto</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="fourth">
                    <a href="#">Casas</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="fifth">
                    <a href="#">Vicios Ocultos</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="sixth">
                    <a href="#">Contacto</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
