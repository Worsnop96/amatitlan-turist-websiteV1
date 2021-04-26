
import React from 'react'
import './Home.css';
import Banner from './Banner'
import Card from './Card'
import { Link } from "react-router-dom";
import Feed1 from  "../src/components/Feed1"

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
                <Link to='/location' style={{ textDecoration: 'none' }}>
                    <Card
                        src="https://www.guatemala.com/fotos/201707/Parque-Natural-Calderas2-885x500.jpg"
                        title="Sitios Turisticos"
                        description="Dejate atrapar por la magia de un sitio perfecto para relajarte o llevar actividades familiares"
                    />
                </Link>
                <Link to='tradition' style={{ textDecoration: 'none' }}>
                    <Card
                        src="https://aprende.guatemala.com/wp-content/uploads/2016/10/feria-de-amatitlan.jpg"
                        title="Feria Patronal"
                        description="Dejate asombrar por la tradicional feria de Amatitlán."
                    />
                </Link>

                <Link to='/hotel' style={{ textDecoration: 'none' }}>
                    <Card
                        src="https://www.santateresita.com.gt/uploads/4/9/5/7/49571891/8904524_orig.jpg"
                        title="Hospedaje"
                        description="Sitios comodos para tomarse un descanso y excelentes lugares para hospedarse."
                    />
                </Link>

            </div>
            <div className='home__section'>
                <Link to='/food' style={{ textDecoration: 'none' }}>
                    <Card
                        src="https://paseoguatemala.com/wp-content/uploads/2020/06/1.jpg"
                        title="Gastronomia"
                        description="Dejate asombrar por la diversidad gastronomica del Municipio Amatitlan"

                    />
                </Link>

                <Link to='/transport' style={{ textDecoration: 'none' }}>
                    <Card
                        src="https://blogs.iadb.org/bidinvest/wp-content/uploads/sites/35/2019/10/ilustraci%C3%B3n-2.jpg"
                        title="Tranporte"
                        description="Medios de transporte y vias del municipio"

                    />
                </Link>

                <Link to='/sos' style={{ textDecoration: 'none' }}>
                    <Card
                        src="https://image.freepik.com/vector-gratis/conjunto-iconos-bombero_1284-33944.jpg"
                        title="Servicios de emergencia"
                        description="Servicios de emergencia disponibles en el municipio"

                    />
                </Link>
            </div>
            <div ClassName="CommentSection">
                <Feed1 />
            </div>
        </div>
    )
}

export default Home
