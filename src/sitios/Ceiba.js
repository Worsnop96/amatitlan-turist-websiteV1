import React from 'react'
import './StyleSites.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import image1 from '../img/ce1.jpg'
import image2 from '../img/ce2.jpg'
import image3 from '../img/ce3.jpg'
import image4 from '../img/mapa.jpg'

function Ceiba() {
    return (
        <div className="Ceiba">
            <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src={image1} className="sliderimg" alt="" />
                <img src={image2} className="sliderimg" alt="" />
                <img src={image3} className="sliderimg" alt="" />
                <Link to='/location/ceiba/ceiba-map' style={{ textDecoration: 'none' }}>
                    <img src={image4} className="sliderimg" alt="" />
                </Link>
            </AliceCarousel>
            <Typography variant="h4" align="center">
                <br /><strong>Parque Acuático La Ceiba</strong><br />
            </Typography>
            <Typography variant="h6" align="left" color="textSecondary" paragraph>
                <br />Es un balneraio ubicado en Amatitlán a media hora del lago. La Ceiba cuenta con distintas piscinas de aguas termales en donde puedes nadar y disfrutar de un día familiar. Lo mejor de todo es que tienen distintas piscinas, para adultos y para niños. Este balneario es ideal para un día de recreación y familiar.
                <br />Cuenta con dos canchas de futbol y una cafeteria desde la cual es posible disfrutar de los encuentros que allí se realizan.
                <br /><p><strong>Horarios: </strong> Martes a domingo de 8:00 a.m. a 5:00 p.m.</p>
                <br /><p><strong>Precio: </strong>Q.35.00 por persona.</p>
                <p><strong>Ubicacion: </strong> </p>Carretera CA-9, Amatitlán, Guatemala
            </Typography>
        </div>
    )
}

export default Ceiba
