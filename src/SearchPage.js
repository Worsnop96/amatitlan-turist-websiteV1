import React from 'react';
import './SearchPage.css';
import SearchResult from "./SearchResult";
import { Link } from "react-router-dom";

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <h1>Explora Amatitlan</h1>

            </div>
            <Link to='/location/laguna' style={{ textDecoration: 'none' }}>
                <SearchResult
                    img="https://www.guatemala.com/fotos/2018/12/Lagunas-cerca-de-la-Ciudad-de-Guatemala2-885x500.jpg"
                    location="Km. 52.5 Carretera rumbo a Volcán de Pacaya, Departamento de Guatemala"
                    title="Laguna Parque Natural Calderas"
                    description="El Parque Natural Laguna Calderas es un espacio ideal para relajarse y disfrutar de un dia al aire libre. este destino se encuentra en las cercanias del volcan de Pacaya dentro de los limites del departemento de Guatemala. En este sitio es posible disfrutar de recorridos de canopy, camping, kayak, disfrutar del mirador o de la plaza flotante."
                />
            </Link>
            <Link to='/location/castillo' style={{ textDecoration: 'none' }}>
                <SearchResult
                    img="https://www.guatemala.com/fotos/201702/Antonia-Ramirez-Castillo-Dorion-885x500.jpg"
                    location="Camino viejo que conduce de Amatitlán a Villa Nueva"
                    title="Castillo de Dorión"
                    description="Castillo ubicado en las orillas del lago de Amatitlán el cual fue construido entre 1935 y 1938 sobre un terreno cedido por el general Jorge Ubico. Excelente destino para observar desde un paseo en lancha."
                />
            </Link>
            <Link to='/location/volcan' style={{ textDecoration: 'none' }}>
                <SearchResult
                    img="https://www.dw.com/image/46363654_303.jpg"
                    location="Localizado a 47,5 km al sur de la Ciudad de Guatemala"
                    title="Volcan de Pacaya"
                    description="El volcan de Pacaya es  un volcán activo ubicado en el municipio  de Amatitlán en el departamento de Guatemala y San Vicente Pacaya en  el departamento de Escuintla.
                    El volcán Pacaya es parte del Arco Volcánico Centroamericano, una cadena de volcanes situada a lo largo de la costa del Pacífico de Centroamérica, que se formó por la subducción de la placa de Cocos debajo de la placa del Caribe. Yace en la orilla de una considerable caldera formada en la era del Pleistoceno que contiene el lago de Amatitlán.
                    "
                />
            </Link>
            <Link to='/location/paseo' style={{ textDecoration: 'none' }}>
                <SearchResult
                    img="https://www.guatemala.com/fotos/201707/Paseo-del-Lago-885x500.jpg"
                    location="Carretera CA-9, Amatitlán, Guatemala"
                    title="Paseo del Lago"
                    description="Lugar agradable para realizar actividades al aire libre con  una gran vista hacia el lago, el lugar cuenta con un mirador, gimnasio al aire libre y sitios varios para poder disfrutar de la vista. "
                />
            </Link>
            <Link to='/location/irtra' style={{ textDecoration: 'none' }}>
                <SearchResult
                    img="https://www.guatemala.com/fotos/201707/irtra-amatitlan1-885x500.jpg"
                    location="Km 29.5 Carretera al Atlántico"
                    title="Irtra de Amatitlán"
                    description="El IRTRA de Amatitlán es uno de los principales atractivos de Amatitlán, el sitio cuenta con área de piscinas a las orillas del Lago de Amatitlán, senderos llenos de naturaleza en donde es posible disfrutar de un día en familia."
                />
            </Link>
            <Link to='/location/naciones' style={{ textDecoration: 'none' }}>
                <SearchResult
                    img="https://www.guatemala.com/fotos/201707/Naciones-Unidas-885x500.jpg"
                    location="A 21.5 kilómetros de la ciudad, sobre la antigua carretera a Amatitlán, Guatemala"
                    title="Parque Nacional Naciones Unidas"
                    description="Destino ideal para caminar rodeado de naturaleza, cuenta con réplicas de sitios turísticos importantes de Guatemala, senderos dentro del bosque y lo mas importante una imponente vista panorámica del Lago de Amatitlán."
                />
            </Link>
            <Link to='/location/teresita' style={{ textDecoration: 'none' }}>
                <SearchResult
                    img="https://www.guatemala.com/fotos/201707/Santa-Teresita1-885x500.jpg"
                    location="Avenida Puente La Gloria, Riveras del Río Michatoya, Amatitlán, Guatemala"
                    title="Santa Teresita"
                    description="Si se busca relajarse entre aguas termales, Santa Teresita Spa es un espacio en para relajarse y dejarse llevar por el ambiente místico y natural que se puede encontrar entre las playas termales piscinas al aire libre."
                />
            </Link>
            <Link to='/location/ceiba' style={{ textDecoration: 'none' }}>
                <SearchResult
                    img="https://www.guatemala.com/fotos/201707/La-Ceiba2-885x500.jpg"
                    location="Carretera CA-9, Amatitlán, Guatemala"
                    title="Parque Acuático La Ceiba"
                    description="Es un balneario ubicado en Amatitlán aproximadamente a media hora del lago. La Ceiba cuenta con varias piscinas de aguas termales en las cuales es posible nada y disfrutar de un día familiar."
                />
            </Link>
            <Link to='/location/lago' style={{ textDecoration: 'none' }}>
                <SearchResult
                    img="https://www.guatemala.com/fotos/201704/Lago-de-Amatitlan1-885x500.jpg"
                    location="Departamento de Guatemala, en municipio de Amatitlán"
                    title="Lago de Amatitlán"
                    description="El lago de Amatitlán es un lago de cráter situado en el departamento de Guatemala ubicado a 26 km de la ciudad de Guatemala, es un lugar idóneo para un paseo en lancha o bien disfrutar del paisaje natural desde la playa pública."
                />
            </Link>
        </div>
    )
}

export default SearchPage
