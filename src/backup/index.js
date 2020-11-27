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

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav}/>

        <div id="main">
          <section>
            <Container>
              <Row>
                <Col>
                  <img className='creta-image' src={entrada} alt='entrada al coto creta residencial'/>
                  <div className='introduccion'>
                    <p>
                    Como Asamblea de vecinos creemos en la total transparencia y quedamos a entera disposición de quien
                     la requiera para preguntas adicionales en una decisión tan importante como la adquisición de un patrimonio/inversión.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
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
                  <Rating title='Seguridad' ratingValue='3'
                          description='¿Cuál es su percepción sobrelos niveles de seguridad de la zona?'/>
                  <Rating title='Accesos' ratingValue='3'
                          description='¿Cómo considera la cantidad de accesos disponibles al Coto?'/>
                  <Rating title='Tráfico' ratingValue='3'
                          description='Califique el nivel de tráfico en la zona y como afecta su movilidad en el día a día.'/>
                  <Rating title='Servicios' ratingValue='3' description='Cómo califica el acceso a tiendas, hospitales, veterinarias, carnicerías,
                  supermercados, ferreterías, etc..)'/>
                  <Rating title='Calles' ratingValue='3' description='¿Cómo califica la calidad y estado actual de las calles de la zona? (Ejemplo:
                  limpieza, baches/hoyos)'/>
                  <Rating title='Inundaciones' ratingValue='3' description=' ¿Cuál es su percepción de desagüe de la zona para evitar inundaciones en
                  época e lluvias?'/>
                  <Rating title='Contaminación visual' ratingValue='4'
                          description='Posters, espectaculares, anuncios luminosos, etc..'/>
                  <Rating title='Contaminación auditiva' ratingValue='4'
                          description='Califique el nivel de ruido en el ambiente'/>
                  <Rating title='Contaminación ambiental' ratingValue='3' description='Percepción de nivel de contaminación por emisión de dióxido de carbono, olores,
basura...'/>
                </Col>
                <Col md={6}>
                  <img className='creta-image' src={mapaCreta} alt='mapa capital norte creta.'/>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col>
                  <h1>Comentarios de Zona</h1>
                  <div className="centered">
                    <BeautyStars value={3} size={20}/><span className='rating'>3.0</span>
                  </div>
                  <ul className='align-left'>
                    <li>Huele muy feo y siempre están reparando alguna calle, hay topes que siguen sin repararse y daña
                      los coches.
                    </li>
                    <li>Falta de alumbrado público así como en el condominio falta de luminosidad en nombre del
                      condominio asi como señalización para llegar al mismo.... solo
                      hay para sendas y otros mas.
                    </li>
                    <li>Es fresco, quizá algo de animales por ser nuevo y tener cerca campo.</li>
                    <li>El ganado que en ocasiones tienen suelto en las vialidades públicas pueden ocasionar un
                      accidente. Así mismo el mal olor que en ocaciones se alcanza a
                      percibir de la planta de tratamiento.
                    </li>
                    <li>Falta mas seguridad y vigilancia</li>
                    <li>El mal olor del ambiente a caño</li>
                    <li>Hacen falta muchos servicios</li>
                    <li>Luminarias apagadas en algunas áreas, falta de limpieza mucha malesa invadiendo zonas para
                      caminar, malos olores.
                    </li>
                    <li>Olores muy fétidos todos los días si no es por la planta de tratamiento es por establos.</li>
                    <li>Hay muchos perros de la calle que bajan hacia capital norte y juntos dan la inseguridad de que
                      te puedan morder cuando sales a caminar/correr, y baja
                      también mucha gente ajena a capital norte al parque central y dejan basura
                    </li>
                    <li>Falta más tiendas de autoservicio cerca</li>
                    <li>Es muy desagradable el olor de la planta potibilizadora</li>
                    <li>Consultar cómo disminuir el olor del canal de aguas de capital norte</li>
                    <li>Problemas con un canal del Rio Blanco. Varios accesos a zonas de montaña o rurales.</li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </section>

          <section id="third" className="main special">
            <Container>
              <Row>
                <Col>
                  <h1>Análisis del COTO</h1>
                  <h2>Creta Residencial</h2>
                  <div className='centered'>
                    <BeautyStars value={2} size={20}/>
                  </div>
                  <h3>2.0</h3>
                </Col>
              </Row>
            </Container>
            <Container className='align-left'>
              <Row>
                <Col md={6}>
                  <Rating title='Seguridad' ratingValue='2'
                          description='¿Cuál es su percepción sobrelos niveles de seguridad en el coto'/>
                  <Rating title='Administración' ratingValue='2'
                          description='¿Cómo considera la cantidad de accesos disponibles al Coto?'/>
                  <Rating title='Cuotas' ratingValue='2'
                          description='Califique el costo de la cuota actual $800 MXN) contra los servicios recibidos por ella.'/>
                  <Rating title='Areas comunes' ratingValue='2' description='Califique la calidad y disponibilidad de las áreas comunes como Alberca, gimnasio,
terraza, asadores, etc. de lo que ofrece el coto.'/>
                  <Rating title='Convivencia' ratingValue='4'
                          description='Califique los niveles de respeto, convivencia y relación entre vecinos'/>
                  <Rating title='Plusvalía' ratingValue='3'
                          description='Califique si su expectativa/proyección de plusvalía se esta cumpliendo'/>
                  <Rating title='Areas verdes' ratingValue='3'
                          description='Califique el mantenimiento de las áreas verdes'/>
                  <Rating title='Señalamientos' ratingValue='2'
                          description='Califique la calidad de señamientos internos del coto'/>
                  <Rating title='Contructora' ratingValue='2' description='Califique su percepción/experiencia de interacción con la constructora en cuestión de
Respeto, atención, tiempos de respuesta, compromiso, transparencia, etc...'/>
                </Col>
                <Col md={6}>
                  <img className='creta-image' src={vistaSatelital} alt='vista satelital creta resicencial.'/>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col>
                  <h1>Comentarios del COTO</h1>
                  <div className="centered">
                    <BeautyStars value={2} size={20}/><span className='rating'>2.0</span>
                  </div>
                  <ul className='align-left'>
                    <li>Casa Club muy pequeña para 167 casas, con muchos faltantes, falta de privacidad y NO HAY NADA
                      PARA LOS NIÑOS , parecería que fuese un coto de solo mayores
                    </li>
                    <li>Necesidad de ampliar la casa club y alberca</li>
                    <li>Simplemente lamentable la actitud de Ruba de Cancelar la remodelacion de la casa Club para
                      agrandar la alberca y poner gym cuando al vendernos nos hicieron esa promesa, simplemente
                      lamentable y decepcionante. No va ni 1/3 de
                      ocupacion y ya estamos batallando con ella, no puedes ni siquiera nadar por lo pequeña que está.
                    </li>
                    <li>La constructora faltó a su palabra sobre remodelar la casa club (alberca y gym) se excusan mucho
                      de que así compraron el terreno pero prometieron remodelar pero cancelaron. La alberca es muy
                      pequeña para todos, el sistema de reservas es
                      muy malo y no hay un buen control de uso. Los paneles solares son insuficientes. No hay
                      señalamientos y es peligroso para los niños ya que los coches pasan a alta velocidad.
                    </li>
                    <li>Alberca demasiado pequeña ofrecieron ampliación hacen comprar con engaños son demasiadas casa en
                      el proyecto para una casa club tan pequeña.
                    </li>
                    <li>Quieren meter casa de menor costo lo que hará que la plusvalía baje demasiado, seguridad escasa
                      1 solo vigilante no sirve la cerca eléctrica, gimnasio de chocolate , alberca fría, 2 mesas en
                      casa club... falta de luminosidad en anuncio exterior
                      de la entrada principal... no señalamientos para llegar al condominio, mucha humedad en las
                      casa... respuesta lenta para dar seguimiento a las garantías... le falta más organización y
                      compromiso por parte de una constructora tan seria!
                    </li>
                    <li>Alberca chica y casa club que requiere ampliarse</li>
                    <li>Me gustaría más áreas verdes dentro del coto. la atención de la administradora es deficiente es
                      muy poco el horario de atención y tarda en dar respuesta. Han existido detalles de reparación en
                      la casa y a veces se tardan en reparar.
                    </li>
                    <li>Falta de areas verdes, mucho que desear por parte de la administracion, no dan cuentas claras,
                      mala distribucion de los desagues de las calles
                    </li>
                    <li>Las aéreas comunes son muy peligrosas, a pesar que hay muchos niños hay bajantes sin proteger,
                      vigas salidas, etc
                    </li>
                    <li>Hay muchos detalles muy malos en los terminados de las calles</li>
                    <li>Considero que no hay administración, pagamos por un servicio que no recibimos, no escuchas
                      nuestras necesidades adaptadas a nuestro fraccionamiento.
                    </li>
                    <li>Cuando compramos nos prometieron ampliar el ares de la alberca, la terraza y el gimnasio lo
                      pondrían en la parte superior de la terraza y no veo que cumplan la promesa. Además es un coto muy
                      inseguro los vigilantes se duermen y puede
                      entrar cualquier persona además nunca sirven las plumas por eso solicitamos un portón que nos
                      proteja un poco más pero no hay respuesta aún.
                    </li>
                    <li>Falta seguridad en infraestructura y mayor personal o personal armado</li>
                    <li>No se ve para nada reflejado en ningún lado lo que se paga de mantenimiento</li>
                    <li>Falta que cumplan lo ofertado</li>
                    <li>Tardan demasiado en reparar las cosas es una vergüenza tener una casa que vale más de 2,500,000
                      y no sirve una pluma de acceso No tener una alberca adecuada para un desarrollo de más de 150
                      viviendas y un gimnasio decente bien
                      simentado cuando es lo de hoy
                    </li>
                    <li>Hay muchos detalles muy malos en los terminados de las calles</li>
                    <li>Compraron barato a Hito de Capital Norte, y tienen vicios de diseño.</li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </section>

          <section id="fourth" className="main special">
            <Container>
              <Row>
                <Col>
                  <h1>Análisis de CASAS</h1>
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
                  <Rating title='Diseño' ratingValue='4'
                          description='Califique su percepción sobre el diseño de las casas y sus modelos'/>
                  <Rating title='Distribución' ratingValue='4'
                          description='Califique su percepción sobre el la distribución de las casas y sus modelos'/>
                  <Rating title='Construcción' ratingValue='3'
                          description='Califique la calidad de la ejecución del trabajo de construcción de las casas'/>
                  <Rating title='Materiales' ratingValue='3' description='Califique su percepción sobre la calidad de los materiales usados para la construcción de las
casas'/>
                  <Rating title='Acabados' ratingValue='3'
                          description='Califique su percepción sobre la calidad de los acabados de las casas'/>
                  <Rating title='Modificaciones' ratingValue='3'
                          description='Califique su percepción sobre el nivel de flexibilidad de hacer modificaciones a las casas post-
venta'/>
                </Col>
                <Col md={6}>
                  <img className='creta-image' src={fotoCasa} alt='foto casa creta resicencial.'/>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col>
                  <h1>Comentarios de las CASAS</h1>
                  <div className="centered">
                    <BeautyStars value={2} size={20}/><span className='rating'>2.0</span>
                  </div>
                  <ul className='align-left'>
                    <li>12 reclamos, ya termino la garantia y aun no los completan; faltantes y deficiencias en el
                      diseño e instalaciones.
                    </li>
                    <li>Las casas son bonitas pero tienen muchísimos detalles, y detalles muy basicos que si hubieran
                      pasado por un proceso de pruebas correctas no hubieran sucedido.
                    </li>
                    <li>Muchos detalles de diseños en tuberias faltantes, vicios ocultos, calidad de algunos materiales
                      y en general en la supervision de la ejecucion.
                    </li>
                    <li>Entragan demasiado rápido post firma, sin antes revisar a detalle la casa, con muchos defectos a
                      mi entrega, poner el pasto postventa es feo por la suciedad que se genera,
                      así como tener que esperar a que instalen estufa hornos, tuve fuga de gas ya que no estaba
                      corroborado ese servicio hasta que llene tanque 2 veces sin percatarme que la
                      fuga estaba en el área de lavado! Su resanados con yeso terribles por que se vuele agrietar la
                      casa en cuestión de días, solo para economizar como constructora, y el
                      pretexto es... ah lo que pasa que con el calor y frío así se hace! Pues cambie de material o
                      método! Las casa no valen 2 pesos como para tener que estar llamando cada 2
                      días y agrandar citas matutinas cuando uno tiene que trabajar para poder pagar gastos básicos de
                      vivienda y vida! Falta de compromiso insisto por un grupo constructor
                      tan grande, comparado con otros proyectos este parece que es el abandonado o al que menos interés
                      le ponen
                    </li>
                    <li>Se daña con facilidad los muros y los pisos.</li>
                    <li>Demasiadas reparaciones posteriores a la entrega.</li>
                    <li>Me gusta mi casa solo que cuando venimos a verlas no vimos la calidad de construcción solo el
                      diseño y por eso compramos.
                    </li>
                    <li>Pobre tiempo para dar solución</li>
                    <li>Con muchos vicios ocultos</li>
                    <li>Faltan muchos detalles de diseño en instalaciones y servicios.</li>
                    <li>Tuvieron que remplazarnos por lo menos 23 lozas de porcelanato post entrega.</li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </section>

          <section id="fifth" className="main special">
            <Container>
              <Row>
                <Col>
                  <h1>Análisis de VICIOS Ocultos</h1>
                  <h2>Tiempo de respuesta:</h2>
                  <div className='centered'>
                    <BeautyStars value={3} size={20}/>
                  </div>
                  <h3>3.0</h3>
                  <h2>Calidad de ejecución</h2>
                  <div className='centered'>
                    <BeautyStars value={3} size={20}/>
                  </div>
                  <h3>3.0</h3>
                  <img className='creta-image' src={grafica} alt="Grafica vicios ocultos creta"/>
                  <h2 class="dark">Aspectos evaluados</h2>
                  <ul className='align-left'>
                    <li><strong>HUMEDAD</strong> ( baños, roof garden, cuartos, closets, ventanas, patio, cocina, cuarto
                      de
                      servicio, fachada, etc..)
                    </li>
                    <li><strong>FUGAS</strong> (Gas, Agua, Eléctricas, otros...)
                    </li>
                    <li><strong>ACABADOS</strong> ( baños, roof garden, cuartos, closets, ventanas, patio, cocina, cuarto de
servicio, fachada, etc..)
                    </li>
                    <li><strong>INSTALACIONES</strong> (eléctricas, gas, agua, aire acondicionado, apagadores, líneas internas
(internet) baños, roof garden, cuartos, closets, ventanas, patio, cocina, cuarto de servicio,
fachada, etc..)
                    </li>
                  </ul>
                  <img className='creta-image' src={pared} alt='foto casa creta resicencial.'/>
                </Col>
              </Row>
            </Container>
            <Container className='align-left'>
              <Row>
                <Col>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col>
                  <h1>Comentarios de VICIOS Ocultos</h1>
                  <div className="centered">
                    <BeautyStars value={3} size={20}/><span className='rating'>3.0</span>
                  </div>
                  <ul className='align-left'>
                    <li>Mis problemas principales fueron fugas de gas, fugas de agua en baños , ninguna puerta cerraba y
                      se tuvieron que ajustar los 3 cuartos, y
                      muchos temas de humedad. Confirme vives en la casa te das cuenta de muchísimos detalles más
                      pequeños como cuarteaduras y resanes
                      hechos a la carrera. Muy mala experiencia hay muchos detalles.
                    </li>
                    <li>Aun continuan despues de 1 año (y los 5 meses del COVID, que no atendieron) no quisieron correr
                      la garantía
                    </li>
                    <li>No lo terminan a la primera hay que seguir reagendando citas ensucian cada visita y dificl poder
                      recibirlos ya que uno trabaja! No hay
                      necesidad de estar momestandolos a cada rato si se entregará algo profesional y de calidad
                    </li>
                    <li>Muchos detalles</li>
                    <li>Reparaciones superficiales entonces hay que estar reportando frecuentemente, a veces el tiempo
                      de atención es tardado.
                    </li>
                    <li>Muy complicado y tardado la respuesta</li>
                    <li>Dicho antes muchas reparaciones posteriores a la entrega</li>
                    <li>Ya hemos reportado varías veces el mismo problema, lo vienen a arreglar y no queda bien.
                      Deberían tener más cuidado al hacer los
                      arreglos para que no haya tantos reportes.
                    </li>
                    <li>Procuran dar soluciones no adecuadas. En lugar de cambiar lo que esta dañado, solamente lo
                      reparan y se excusan diciendo q así es la
                      garantía. Me tuve q quedar con una puerta rota porque nunca aceptaron q esta mal instalada
                    </li>
                    <li>El piso estaba totalmente mal puesto de planta baja, azulejos levantados, nos cambiaron 23
                      azulejos
                    </li>
                    <li>Desastre x el precio pagado</li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </section>

          <section id="sixth" className="main special">
            <Container>
              <Row>
                <Col>
                  <h1>Contacto</h1>
                  <h2>Si tiene alguna inquietud o pregunta adicional no dude en
                    contactarnos.</h2>
                  <a className='creta-contact-link' href="mailto:creta.vecinos@gmail.com">creta.vecinos@gmail.com</a>
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
