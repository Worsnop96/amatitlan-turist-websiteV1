import React from 'react'
import './StyleSites.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import image1 from '../img/ir1.jpg'
import image2 from '../img/ir2.jpg'
import image3 from '../img/ir3.jpg'
import image4 from '../img/mapa.jpg'

function irtra() {
    return (
        <div ClassName="irtra">
            <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src={image1} className="sliderimg" alt="" />
                <img src={image2} className="sliderimg" alt="" />
                <img src={image3} className="sliderimg" alt="" />
                <Link to='/location/irtra/irtra-map' style={{ textDecoration: 'none' }}>
                    <img src={image4} className="sliderimg" alt="" />
                </Link>
            </AliceCarousel>
            <Typography variant="h4" align="center">
                <br /><strong>El Irtra de Amatitlán</strong><br />
            </Typography>
            <Typography variant="h6" align="left" color="textSecondary" paragraph>
                <br />El Irtra de Amatitlán es uno de los principales atractivos de esta área, en donde vas a disfrutar de lindas piscinas termales a orillas del Lago de Amatitlán. Sus senderos se encuentran llenos de naturaleza y las instalaciones son muy lindas. Este es un destino que fue inaugurado en 1963 y es ideal para disfrutar de un día familiar.
                <br />Churrasqueras: Para que disfrutes de la naturaleza y al mismo tiempo puedas cocinar, contamos con áreas para hacer un delicioso churrasco a la orilla del lago.
                <br/><br /> <strong>Algunos Servicios:</strong>
                <br/>Salones Sociales: Si quieres pasar un agradable momento bailando, no dejes de venir los días domingos, feriados y días festivos ya que habrá música  disco.
                <br/>Restaurantes: En el Parque Amatitlán contamos con 1 cafetería y 3 kioscos de comida rápida como: pollo frito, churrascos, hamburguesas, hot dogs, tacos, papas fritas, gaseosas y helados.  Además, de una tienda de dulces típicos propios de la región.
                <br/>Juegos Infantiles: Para que los más pequeños se diviertan al máximo, contamos con juegos interactivos como: sube y baja, resbaladeros, entre otros.
                <br/>Salón de juegos: Después de tu chapuzón puedes pasar una agradable tarde en nuestro salón de juegos donde podrás elegir entre jugar futillo o ping pong.
                <br/>Piscinas: Amatitlán posee un clima cálido. Diviértete en nuestras refrescantes piscinas. Contamos con dos  piscinas para adultos y dos para niños.
                <br/>Paseo en lancha: Una de las atracciones  más bonitas del parque, disfrutarás de un agradable paseo en lancha por los hermosos paisajes que posee el  Lago de Amatitlán.
                <p><strong>Horarios: </strong> Jueves a domingo de 8:30 a.m. a 4:30 p.m.</p>
                <p><strong>Precios: </strong>Niños Q. 10.00 |Adultos Q. 20.00|Adulto mayor Q. 10.00.</p>
                <p><strong>Ubicacion: </strong> Jueves a domingo de 8:30 a.m. a 4:30 p.m.</p>
            </Typography>
        </div>
    )
}

export default irtra
