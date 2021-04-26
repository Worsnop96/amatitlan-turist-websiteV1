import React from 'react'
import './StyleSites.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import image1 from '../img/vo1.jpg'
import image2 from '../img/vo2.jpg'
import image3 from '../img/vo3.jpg'
import image5 from '../img/vo4.jpg'
import image4 from '../img/vo5.jpg'
import image6 from '../img/mapa.jpg'

function Volcan() {
    return (
        <div ClassName="Volcan">
            <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src={image1} className="sliderimg" alt="" />
                <img src={image2} className="sliderimg" alt="" />
                <img src={image3} className="sliderimg" alt="" />
                <img src={image4} className="sliderimg" alt="" />
                <img src={image5} className="sliderimg" alt="" />
                <Link to='/location/volcan/volcan-map' style={{ textDecoration: 'none' }}>
                    <img src={image6} className="sliderimg" alt="" />
                </Link>
            </AliceCarousel>
            <Typography variant="h4" align="center">
                <br /><strong>Volcan de Pacaya</strong><br />
            </Typography>
            <Typography variant="h6" align="left" color="textSecondary" paragraph>
                <br />El Volcán de Pacaya es un volcán activo ubicado en el municipio de Amatitlán en el departamento de Guatemala y el municipio de San Vicente Pacaya en el departamento de Escuintla, Guatemala.
                <br />La fase activa actual del volcán Pacaya comenzó en 1965. Para el deleite de los viajeros, el volcán continúa arrojando ceniza y lava desde su cima. La actividad puede variar desde emisiones silenciosas de gas y vapor hasta explosiones más grandes de rocas y lava. La noche es el mejor momento para ver las erupciones, ya que puedes ver fuentes de lava anaranjada ardiente que brotan de la cima del volcán.
                <br />Pacaya es uno de los volcanes más accesibles de Centroamérica. Aunque se puede caminar de forma independiente, se recomiendan guías. La mayoría de los operadores turísticos tienen su sede en Antigua, pero también es posible hacer una excursión de un día a Pacaya desde la ciudad de Guatemala.
                <p><strong>Ubicacion: </strong> Localizado a 47.5 Km al sur de la Ciudad de Guatemala</p>
            </Typography>
        </div>
    )
}

export default Volcan
