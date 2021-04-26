import React from 'react'
import './StyleSites.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../img/MapaTransuama.jpg'
import image2 from '../img/MapaTransuama.jpg'

function Transuama() {
    return (
        <div>
            <AliceCarousel autoPlay autoPlayInterval="18000">
                <img src={image1} className="sliderimg" alt="" />
                <img src={image2} className="sliderimg" alt="" />
            </AliceCarousel>
        </div>
    )
}

export default Transuama
