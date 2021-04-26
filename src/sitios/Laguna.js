import React from 'react'
import './StyleSites.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import image1 from '../img/la1.jpg'
import image2 from '../img/la2.jpg'
import image3 from '../img/la3.png'
import image4 from '../img/mapa.jpg'

function Laguna() {
    return (
        <div ClassName="Laguna">
            <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src={image1} className="sliderimg" alt="" />
                <img src={image2} className="sliderimg" alt="" />
                <img src={image3} className="sliderimg" alt="" />
                <Link to='/location/laguna/laguna-map' style={{ textDecoration: 'none' }}>
                    <img src={image4} className="sliderimg" alt="" />
                </Link>
            </AliceCarousel>
            <Typography variant="h4" align="center">
                <br /><strong> Laguna de calderas</strong><br />
            </Typography>
            <Typography variant="h6" align="left" color="textSecondary" paragraph>
                <br />
            El Parque Natural Laguna Calderas es un espacio ideal para relajarse y disfrutar de un día al aire libre. Este destino se encuentra muy cerca del Volcán de Pacaya dentro de los límites del departamento de Guatemala.
            Este es un sitio lleno de actividades para disfrutar desde recorridos de canopy, camping, kayak, miradores, plaza flotante, parqueo, espacios para relajarse en familia y un restaurante para disfrutar de una mojarra frita recién pescada. Se recomienda llevar ropa cómoda, fresca y zapatos para caminar. La extension  territorial y la diversidad de actividades que se pueden realizar garantiza una experiencia agradable en un ambiente  mas  que familiar.
            <br />La laguna de calderas cuenta con un tamaño de 0.35 kilometros cuadrados, el agua es completamente cristalina, teniendo una visibilidad de hasta en 10 metros de  profundidad.
            <br /><p><strong>Horarios para parque natural Calderas:</strong> Lunes a domingo: 8:00 a.m. a 6:00 p.m</p>
            <p><strong>Ubicacion: </strong> Km. 52.5 Carretera rumbo a Volcán de Pacaya, Departamento de Guatemala</p>
            </Typography>
        </div>
    )
}

export default Laguna
