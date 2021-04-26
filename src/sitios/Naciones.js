import React from 'react'
import './StyleSites.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import image1 from '../img/na1.jpg'
import image2 from '../img/na2.jpg'
import image3 from '../img/na3.jpg'
import image4 from '../img/mapa.jpg'

function Naciones() {
    return (
        <div>
            <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src={image1} className="sliderimg" alt="" />
                <img src={image2} className="sliderimg" alt="" />
                <img src={image3} className="sliderimg" alt="" />
                <Link to='/location/naciones/naciones-map' style={{ textDecoration: 'none' }}>
                    <img src={image4} className="sliderimg" alt="" />
                </Link>
            </AliceCarousel>
            <Typography variant="h4" align="center">
                <br /><strong>Parque Nacional Naciones Unidas</strong><br />
            </Typography>
            <Typography variant="h6" align="left" color="textSecondary" paragraph>
                <br />El parque nacional Naciones Unidas se encuentra situado en las afueras de la ciudad de Guatemala, con vistas al espectacular Volcán de Pacaya y el Lago de Amatitlán, este parque fue uno de los primeros en el país en ser declarado parque nacional. Es una de las pocas áreas verdes que quedan en la metrópoli ofreciendo un espacio único para recreación y educación ambiental. Además, el parque protege el bosque en una zona estratégica.
                <br />Naciones Unidas cuenta con diferentes áreas temáticas que representan una fotografía de todo el país, permitiendo de esta  manera que  se pueda tener un viaje imaginario por la historia de Guatemala. Todo el sitio cuenta con una  gran cantidad de senderos los cuales se encuentran señalizados dado que conducen a representaciones en miniatura de sitios emblematicos de Guatemala.
                <br /><p><strong>Horarios: </strong> Martes a domingo de 8:00 a.m. a 5:00 p.m.</p>
                <br /><p><strong>Precio: </strong>Canopy Q. 30.00|Granja educativa Q. 25.00|Alquiler de bicicleta Q. 10.00 una hora.</p>
                <p><strong>Ubicacion: </strong> A 21.5 kilómetros de la ciudad, sobre la antigua carretera a Amatitlán, Guatemala</p>
            </Typography>
        </div>
    )
}

export default Naciones
