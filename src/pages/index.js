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
            <Container className='align-left'>
              <Row>
                <Col xs={6} md={3}>
                  <h2>Zona</h2>
                  <p>Seguridad, accesos, trafico,
                    servicios, calles
                    inundaciones,
                    contaminación visual,
                    ambiental y auditiva</p>
                </Col>
                <Col xs={6} md={3}>
                  <h2>Coto</h2>
                  <p>Seguridad, administración,
                    cuotas, áreas comunes,
                    convivencia, plusvalía, áreas
                    verdes, señalamientos,
                    constructora.</p>
                </Col>
                <Col xs={6} md={3}>
                  <h2>Casas</h2>
                  <p>Diseño, distribución,
                    construcción, materiales,
                    acabados, modificaciones.</p>
                </Col>
                <Col xs={6} md={3}>
                  <h2>Vicios</h2>
                  <p>Humedad, Fugas, Acabados,
                    Instalaciones (electricidad,
                    gas, agua, aire acondicionado,
                    apagadores, líneas internas
                    (internet) baños, roof
                    garden, cuartos, closets,
                    ventanas, patio, cocina,
                    cuarto de servicio, fachada,
                    etc..)</p>
                </Col>
              </Row>
            </Container>
          </section>


          <section id="second" className="main special">
            <Container>
              <Row>
                <Col>
                  <h1>Análisis de ZONA</h1>
                  <h2>(Capital Norte, Valle imperial y zonas aledañas)</h2>
                  <div className='centered'>
                    <BeautyStars value={3} size={20}/>
                  </div>
                  <h3>3.0</h3>
                </Col>
              </Row>
            </Container>
            <Container className='align-left'>
              <Row>
                <Col md={6}>
                  <Rating title='Seguridad' ratingValue='3' description='¿Cuál es su percepción sobrelos niveles de seguridad de la zona?'/>
                  <Rating title='Accesos' ratingValue='3' description='¿Cómo considera la cantidad de accesos disponibles al Coto?'/>
                  <Rating title='Tráfico' ratingValue='3' description='Califique el nivel de tráfico en la zona y como afecta su movilidad en el día a día.'/>
                  <Rating title='Servicios' ratingValue='3' description='Cómo califica el acceso a tiendas, hospitales, veterinarias, carnicerías,
                  supermercados, ferreterías, etc..)'/>
                  <Rating title='Calles' ratingValue='3' description='¿Cómo califica la calidad y estado actual de las calles de la zona? (Ejemplo:
                  limpieza, baches/hoyos)'/>
                  <Rating title='Inundaciones' ratingValue='3' description=' ¿Cuál es su percepción de desagüe de la zona para evitar inundaciones en
                  época e lluvias?'/>
                  <Rating title='Contaminación visual' ratingValue='4' description='Posters, espectaculares, anuncios luminosos, etc..'/>
                  <Rating title='Contaminación auditiva' ratingValue='4' description='Califique el nivel de ruido en el ambiente'/>
                  <Rating title='Contaminación ambiental' ratingValue='3' description='Percepción de nivel de contaminación por emisión de dióxido de carbono, olores,
basura...'/>
                </Col>
                <Col md={6}>
                  <img className='creta-image' src={mapaCreta} alt='mapa capital norte'/>
                </Col>
              </Row>
            </Container>
          </section>

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
