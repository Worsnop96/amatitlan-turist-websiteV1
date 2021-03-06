import React from 'react'
import './StyleSites.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import image1 from '../img/kh1.jpg'
import image2 from '../img/kh2.jpg'
import image3 from '../img/kh3.jpg'
import image4 from '../img/kh4.jpg'
import image5 from '../img/kh5.jpg'
import image6 from '../img/kh6.jpg'
import image7 from '../img/kh7.jpg'
import image8 from '../img/kh8.jpg'
import image9 from '../img/kh9.jpg'
import image10 from '../img/kh10.jpg'
import image11 from '../img/kh11.jpg'
import image12 from '../img/kh12.jpg'
import image13 from '../img/kh13.jpg'
import image14 from '../img/kh14.jpg'
import image15 from '../img/mapa.jpg'

function KawilalHotel() {
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
        <img src={image11} className="sliderimg" alt="" />
        <img src={image12} className="sliderimg" alt="" />
        <img src={image13} className="sliderimg" alt="" />
        <img src={image14} className="sliderimg" alt="" />
        <Link to='/hotel/kawilal-hotel/kawilal-map' style={{ textDecoration: 'none' }}>
          <img src={image15} className="sliderimg" alt="" />
        </Link>
      </AliceCarousel>
      <Typography variant="h4" align="center">
        <br /><strong> Kawilal Hotel</strong><br />
      </Typography>
      <Typography variant="h6" align="left" color="textSecondary" paragraph>
        <br />El Kawilal Hotel, situado a 1 km del centro de la ciudad de Amatitl??n, dispone de ba??era de hidromasaje, ba??o de vapor, sauna y servicio de masajes. Cuenta con un amplio jard??n y conexi??n Wi-Fi gratuita.
        <br />Las habitaciones de este hotel presentan una decoraci??n con madera y est??n equipadas con ventilador de techo, caja fuerte, TV de pantalla plana v??a sat??lite y minibar. El balc??n ofrece vistas al jard??n y el ba??o cuenta con ba??era, art??culos de aseo gratuitos, secador de pelo y albornoces. El desayuno est?? incluido.
        <br/> Se cuenta con un restaurante de comida internacional y platillos  locales todo dentro del hotel. 
        <br/> Se organizan actividades como paseos as habitaciones de este hotel presentan una decoraci??n con madera y est??n equipadas con ventilador de techo, caja fuerte, TV de pantalla plana v??a sat??lite y minibar. El balc??n ofrece vistas al jard??n y el ba??o cuenta con ba??era, art??culos de aseo gratuitos, secador de pelo y albornoces. El desayuno est?? incluido.
        <p> El establecimiento se encuentra a 30 minutos de la ciudad de Guatemala</p>
      </Typography>
    </div>
  )
}

export default KawilalHotel
