import React from 'react'
import './StyleSites.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import image1 from '../img/st1.jpg'
import image2 from '../img/st2.jpg'
import image3 from '../img/st3.jpg'
import image4 from '../img/mapa.jpg'

function SantaTeresita() {
    return (
        <div ClassName="SantaTeresita">
            <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src={image1} className="sliderimg" alt="" />
                <img src={image2} className="sliderimg" alt="" />
                <img src={image3} className="sliderimg" alt="" />
                <Link to='/location/teresita/teresita-map' style={{ textDecoration: 'none' }}>
                    <img src={image4} className="sliderimg" alt="" />
                </Link>
            </AliceCarousel>
            <Typography variant="h4" align="center">
                <br /><strong>Santa Teresita</strong><br />
            </Typography>
            <Typography variant="h6" align="left" color="textSecondary" paragraph>
                <br />Si quieres relajarte entre aguas termales, seguro tienes que conocer Santa Teresita Spa. Este es el espacio del relax en donde cuentan con distintas áreas con un ambiente místico y natural. Encontrarás desde playas termales hasta piscinas al aire libre. Este destino tiene distintos paquetes para pasar un día lejos de la rutina.
                <br /><p><strong>Horarios: </strong> Lunes a viernes 9:00 a.m. a 5:30 p.m.|Sábados de 8:30 a.m. a 8:30 p.m.|Domingos y feriados de 8:00 a.m. a 6:00 p.m.</p>
                <br /><p><strong>Precio: </strong>Paquetes desde Q. 365.00 con circuito termal, piscinas, masaje, bebida, entrada.</p>
                <p><strong>Ubicacion: </strong> Avenida Puente La Gloria, Riveras del Río Michatoya, Amatitlán, Guatemala</p>
            </Typography>
        </div>
    )
}

export default SantaTeresita
