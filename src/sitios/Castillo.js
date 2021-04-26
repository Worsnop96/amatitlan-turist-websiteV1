import React from 'react'
import './StyleSites.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import image1 from '../img/c1.jpg'
import image2 from '../img/c2.jpg'
import image3 from '../img/c3.jpg'
import image4 from '../img/c4.jpg'
import image5 from '../img/mapa.jpg'



function Castillo() {
  return (
    <div className="Castillo">
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <img src={image1} className="sliderimg" alt="" />
        <img src={image2} className="sliderimg" alt="" />
        <img src={image3} className="sliderimg" alt="" />
        <img src={image4} className="sliderimg" alt="" />
        <Link to='/location/castillo/castillo-map' style={{ textDecoration: 'none' }}>
          <img src={image5} className="sliderimg" alt="" />
        </Link>
      </AliceCarousel>
      <Typography variant="h4" align="center">
        <br /><strong> Castillo de Dorion</strong><br />
      </Typography>
      <Typography variant="h6" align="left" color="textSecondary" paragraph>
        <br />Se trata de un castillo increíble a orillas del Lago de Amatitlán. Fue construido entre 1935 y 1938 sobre un terreno cedido por el general Jorge Ubico. Dentro del castillo existen pequeños pasadizos, túneles y cuartos rodeados de naturaleza. Existen distintos árboles de incienso y puedes observarlo desde un paseo en lancha.
        <br />La historia dice que Carlos Dorión construyó la fortaleza para su amante, aunque esto nunca pudo ser comprobado. Por su parentesco con la esposa de Jorge Ubico, los residentes expresan que el expresidente celebraba en el lugar la fiesta de Pesca y la Mojarra —fiesta titular de la ciudad de Amatitlán.
        <br/> El volcán Pacaya se encuentra a 26 km. La Aurora, el aeropuerto más cercano, está a 28 km de la Villa El Rosario. Se ofrece un servicio de enlace con el aeropuerto por un suplemento.
        <p><strong>Ubicacion: </strong>Camino viejo que conduce de Amatitlán a Villa Nueva </p>
      </Typography>
    </div>
  )
}

export default Castillo
