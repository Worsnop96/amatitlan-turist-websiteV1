import React from 'react'
import './StyleSites.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import image1 from '../img/pa1.jpg'
import image2 from '../img/pa2.jpg'
import image3 from '../img/pa3.jpg'
import image4 from '../img/mapa.jpg'

function Paseo() {
    return (
        <div ClassName="Paseo">
            <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src={image1} className="sliderimg" alt="" />
                <img src={image2} className="sliderimg" alt="" />
                <img src={image3} className="sliderimg" alt="" />
                <Link to='/location/paseo/paseo-map' style={{ textDecoration: 'none' }}>
                    <img src={image4} className="sliderimg" alt="" />
                </Link>
            </AliceCarousel>
            <Typography variant="h4" align="center">
                <br /><strong>Paseo del Lago</strong><br />
            </Typography>
            <Typography variant="h6" align="left" color="textSecondary" paragraph>
                <br />Paseo del Lago es un lindo lugar para hacer ejercicio al aire libre y observar el Lago de Amatitlán. Ubicado en los limites de  Amatitlan, este paseo tiene un mirador, gimnasio al aire libre y distintos lugares para sentarse a disfrutar la vista, el lugar es un lugar ideal para dar un recorrido  en  bicicleta y es bastante transitado por corredores en especial en horas de la  mañana.
            </Typography>
        </div>
    )
}

export default Paseo
