import React from 'react'
import './StyleSites.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import image1 from '../img/vr1.jpg'
import image2 from '../img/vr2.jpg'
import image3 from '../img/vr3.jpg'
import image4 from '../img/vr4.jpg'
import image5 from '../img/vr5.jpg'
import image6 from '../img/vr6.jpg'
import image7 from '../img/vr7.jpg'
import image8 from '../img/vr8.jpg'
import image9 from '../img/vr9.jpg'
import image10 from '../img/vr10.jpg'
import image11 from '../img/vr11.jpg'
import image12 from '../img/vr12.jpg'
import image13 from '../img/mapa.jpg'

function VillaRosario() {
  return (
    <div className="VillaRosario">
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
        <img src={image11} className="sliderimg" alt="" />
        <img src={image12} className="sliderimg" alt="" />
        <Link to='/hotel/villa-rosario/villa-rosario-map' style={{ textDecoration: 'none' }}>
          <img src={image13} className="sliderimg" alt="" />
        </Link>
      </AliceCarousel>
      <Typography variant="h4" align="center">
        <br /><strong> La Villa El Rosario</strong><br />
      </Typography>
      <Typography variant="h6" align="left" color="textSecondary" paragraph>
        <br />La Villa El Rosario se encuentra en Amatitlán y ofrece vistas al jardín, restaurante, servicio de habitaciones, bar, jardín, barbacoa y solárium. Este bed and breakfast cuenta con WiFi y aparcamiento privado gratuitos.
        <br />Los alojamientos disponen de patio, TV de pantalla plana y baño privado con ducha y artículos de aseo gratuitos.
        <br/> El volcán Pacaya se encuentra a 26 km. La Aurora, el aeropuerto más cercano, está a 28 km de la Villa El Rosario. Se ofrece un servicio de enlace con el aeropuerto por un suplemento.
      </Typography>
    </div>
  )
}

export default VillaRosario
