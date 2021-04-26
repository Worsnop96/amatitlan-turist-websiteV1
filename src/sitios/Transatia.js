import React from 'react'
import './StyleSites.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../img/MapaAtia.jpg'
import image2 from '../img/MapaAtia.jpg'


function Transatia() {
    return (
        <div ClassName="Transatia">
            <AliceCarousel autoPlay autoPlayInterval="18000">
                <img src={image1} className="sliderimg" alt="" />
                <img src={image2} className="sliderimg" alt="" />
            </AliceCarousel>
        </div>
    )
}

export default Transatia
