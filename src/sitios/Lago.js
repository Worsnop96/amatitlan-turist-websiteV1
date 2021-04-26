import React from 'react'
import './StyleSites.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import image1 from '../img/lago1.jpg'
import image2 from '../img/lago2.jpg'
import image3 from '../img/lago3.jpg'
import image5 from '../img/lago5.jpg'
import image4 from '../img/mapa.jpg'

function Lago() {
    return (
        <div ClassName="Lago">
            <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src={image1} className="sliderimg" alt="" />
                <img src={image2} className="sliderimg" alt="" />
                <img src={image3} className="sliderimg" alt="" />
                <img src={image5} className="sliderimg" alt="" />
                <Link to='/location/lago/lago-map' style={{ textDecoration: 'none' }}>
                    <img src={image4} className="sliderimg" alt="" />
                </Link>
            </AliceCarousel>
            <Typography variant="h4" align="center">
                <br /><strong>Lago de Amatitlán</strong><br />
            </Typography>
            <Typography variant="h6" align="left" color="textSecondary" paragraph>
                <br />El lago de Amatitlán es una cuenca rodeada de 14 municipios en total. De hecho, algunos pertenecen al departamento de Guatemala, La cuenca posee un área de 15.2 kilómetros cuadrados. Por su naturaleza, está ubicado en parte de la Sierra Madre. Fue formado por estar cercano a una cadena volcánica en las cercanías de la Ciudad de Guatemala.
                <br />El lago de Amatitlán es uno de los recursos naturales más importantes del sistema hidrológico del país. De hecho, es el 4o. cuerpo de agua más grande en Guatemala, su profundidad máxima es de 33 metros, mientras que posee 11 kilómetros de largo y 3 de ancho. La población en los alrededores de la cuenca tiene aproximadamente 2 millones de habitantes.
            </Typography>
        </div>
    )
}

export default Lago
