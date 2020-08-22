import React from 'react'
import Helmet from 'react-helmet'
import {Waypoint} from 'react-waypoint'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import BeautyStars from "beauty-stars/dist";
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap-grid.css'

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

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav}/>

        <div id="main">
          <section id="intro" className="main">
            <Container>
              <Row>
                <Col xs={12} md={6}>
                  <h1>Análisis de Coto</h1>
                  <h2>Creta Residencial</h2>
                  <BeautyStars value={3} size={20}/>
                </Col>
                <Col xs={12} md={6}>
                  <p>
                    El presente sitio muestra un análisis con información 100% verídica y recabada
                    a través encuestas y basada en la experiencia y percepción de los a los actuales
                    habitantes del Coto Creta Residencial con el objetivo de apoyar y facilitar la
                    información a nuevos interesados.
                  </p>
                </Col>
              </Row>
            </Container>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Ambitos a analizar:</h2>
            </header>
            <div>
              <strong>TOTAL DE Casas Habitadas : 45</strong>
              <br/>
              <strong>TOTAL DE Respuestas: 43</strong>
              <p>Encuesta al 21 de Ago de 2020</p>
            </div>

          </section>

          {/*<section id="second" className="main special">*/}
          {/*  <header className="major">*/}
          {/*    <h2>Reglamento interno</h2>*/}
          {/*    <p>*/}
          {/*      Donec imperdiet consequat consequat. Suspendisse feugiat congue*/}
          {/*      <br/>*/}
          {/*      posuere. Nulla massa urna, fermentum eget quam aliquet.*/}
          {/*    </p>*/}
          {/*  </header>*/}
          {/*  <p className="content">*/}
          {/*    Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl*/}
          {/*    eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum*/}
          {/*    ac arcu sit amet, fermentum pellentesque et purus. Integer maximus*/}
          {/*    varius lorem, sed convallis diam accumsan sed. Etiam porttitor*/}
          {/*    placerat sapien, sed eleifend a enim pulvinar faucibus semper quis*/}
          {/*    ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer*/}
          {/*    eget purus nec nulla mattis et accumsan ut magna libero. Morbi*/}
          {/*    auctor iaculis porttitor. Sed ut magna ac risus et hendrerit*/}
          {/*    scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras*/}
          {/*    eu ornare dui curabitur lacinia.*/}
          {/*  </p>*/}
          {/*</section>*/}

          {/*<section id="cta" className="main special">*/}
          {/*  <header className="major">*/}
          {/*    <h2>Más información</h2>*/}
          {/*    <p>*/}
          {/*      Donec imperdiet consequat consequat. Suspendisse feugiat congue*/}
          {/*      <br/>*/}
          {/*      posuere. Nulla massa urna, fermentum eget quam aliquet.*/}
          {/*    </p>*/}
          {/*  </header>*/}
          {/*</section>*/}
        </div>
      </Layout>
    )
  }
}

export default Index
