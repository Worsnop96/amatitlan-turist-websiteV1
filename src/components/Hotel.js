import React from 'react'
import './Sos.css';
import SearchResult from "./SchSos";
import { Link } from "react-router-dom";

function Hotel() {
    return (<div className='searchPage'>
        <div className='searchPage__info'>
            <h1>Hoteles en Amatitlán</h1>
        </div>
        <Link to='/hotel/villa-rosario' style={{ textDecoration: 'none' }}>
            <SearchResult
                img="https://cf.bstatic.com/images/hotel/max1024x768/829/82952414.jpg"
                location="Carretera al Morlon Shalet 1, 01063 Amatitlán, Guatemala"
                title="Villa el Rosario"
                description="Villa El Rosario se encuentra en Amatitlán y ofrece vistas al jardín, restaurante, servicio de habitaciones, bar, jardín, barbacoa y solárium. Este bed and breakfast cuenta con WiFi y aparcamiento privado gratuitos."
                price="$.80 - $125"
            />
        </Link> 
        <Link to='/hotel/kawilal-hotel' style={{ textDecoration: 'none' }}>
            <SearchResult
                img="https://cf.bstatic.com/images/hotel/max1280x900/859/85920619.jpg"
                location="Rivera del Río Michatoya, Amatitlán, Guatemala, 00000 Amatitlán, Guatemala"
                title="Kawilal Hotel"
                description="El Kawilal Hotel, situado a 1 km del centro de la ciudad de Amatitlán, dispone de bañera de hidromasaje, baño de vapor, sauna y servicio de masajes. Cuenta con un amplio jardín y conexión Wi-Fi gratuita.
                Las habitaciones de este hotel presentan una decoración con madera y están equipadas con ventilador de techo, caja fuerte, TV de pantalla plana vía satélite y minibar. El balcón ofrece vistas al jardín y el baño cuenta con bañera, artículos de aseo gratuitos, secador de pelo y albornoces. El desayuno está incluido.
                El restaurante Las Mengalas sirve cocina internacional y platos locales. También se ofrece servicio de habitaciones."
            />
        </Link>
        <Link to='/hotel/amatitlan-villas' style={{ textDecoration: 'none' }}>
            <SearchResult
                img="https://cf.bstatic.com/images/hotel/max1280x900/196/196866060.jpg"
                location="Amatitlan,Guatemala, 01063 Amatitlán, Guatemala"
                title="Amatitlan Villas"
                description="El Amatitlán Villas se encuentra en Amatitlán y ofrece alojamiento con piscina al aire libre, bar y jardín. Se cuenta con baño termal y bañera de hidromasaje, ademas de contar con alquiler de vehiculos y la posibilidad de pescar en los alrededores del lago."
            />
        </Link>
    </div>
    )
}


export default Hotel
