import React from 'react'
import Helmet from 'react-helmet'
import {Waypoint} from 'react-waypoint'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import BeautyStars from "beauty-stars/dist";
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap-grid.css'
import Rating from "../components/Rating";
import mapaCreta from '../assets/images/mapa-capital-norte.jpg';
import vistaSatelital from '../assets/images/vista-satelital-coto-creta-residencial.jpg';
import fotoCasa from '../assets/images/foto-casa-creta.jpg';
import grafica from '../assets/images/grafica-vicios-ocultos-creta-residencial.jpg';
import pared from '../assets/images/pared-agrietada.jpg';
import entrada from '../assets/images/creta-main-image.jpg';

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({stickyNav: false}))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({stickyNav: true}))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Vecinos Creta Residencial"/>
        <Header/>
        <div id="main">
          <section>
            <Container>
              <Row>
                <Col>
                  <img className='creta-image' src={entrada} alt='entrada al coto creta residencial'/>
                  <div className='introduccion'>
                    <p>
                      Visite el sitio official: <a href="https://cretaresidencial.com/">cretaresidencial.com</a>
                    </p>
                  </div>
                  <div className='creta-form'>
                    <form action="#">
                      <label htmlFor="usuario">Usuario:</label>
                      <input type="text" name="usuario"/>
                      <label htmlFor="password">Contraseña:</label>
                      <input type="password" name="password"/>
                      <button>Enviar</button>
                    </form>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
