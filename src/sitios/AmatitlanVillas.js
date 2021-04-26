import React from 'react'
import './StyleSites.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import image1 from '../img/av1.jpg'
import image2 from '../img/av2.jpg'
import image3 from '../img/av3.jpg'
import image4 from '../img/av4.jpg'
import image5 from '../img/av5.jpg'
import image6 from '../img/av6.jpg'
import image7 from '../img/av7.jpg'
import image8 from '../img/av8.jpg'
import image9 from '../img/av9.jpg'
import image10 from '../img/av10.jpg'
import image11 from '../img/mapa.jpg'


function AmatitlanVillas() {
  return (
    <div className="Castillo">
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <img src={image1} className="sliderimg" alt="" />
        <img src={image2} className="sliderimg" alt="" />
        <img src={image3} className="sliderimg" alt="" />
        <img src={image4} className="sliderimg" alt="" />
        <img src={image5} className="sliderimg" alt="" />
        <img src={image6} className="sliderimg" alt="" />
        <img src={image7} className="sliderimg" alt="" />
        <img src={image8} className="sliderimg" alt="" />
        <img src={image9} className="sliderimg" alt="" />
        <img src={image10} className="sliderimg" alt="" />
        <Link to='/hotel/amatitlan-villas/amatitlan-villas-map' style={{ textDecoration: 'none' }}>
          <img src={image11} className="sliderimg" alt="" />
        </Link>
      </AliceCarousel>
      <Typography variant="h4" align="center">
        <br /><strong> Amatitlan Villas</strong><br />
      </Typography>
      <Typography variant="h6" align="left" color="textSecondary" paragraph>
        <br />
        El Amatitlán Villas se encuentra en Amatitlán y ofrece alojamiento con piscina al aire libre, bar y jardín. El chalet cuenta con un baño termal y una bañera de hidromasaje.
            <br />La laguna de calderas cuenta con un tamaño de 0.35 kilometros cuadrados, el agua es completamente cristalina, teniendo una visibilidad de hasta en 10 metros de  profundidad.
            <br /> Se cuenta con servicio de alquiler de coches y zona de playa privada, la pesca en los alrededores de  la misma es permitida.
            <br /><p><strong>Servicio las 24 horas</strong> </p>
        <p><strong>Ubicacion a 13,9 km de Aeropuerto Internacional La Aurora</strong></p>
      </Typography>
    </div>
  )
}

export default AmatitlanVillas
