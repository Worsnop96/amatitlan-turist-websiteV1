import React from 'react'
import './Sos.css';
import SearchResult from "./SchSos";
import { Link } from "react-router-dom";
import Hospital from '../img/Hospital.png'

function sos() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <h1>Explora Amatitlan</h1>

            </div>
            <Link to='/sos/hospital/hospital-map' style={{ textDecoration: 'none' }}>
                <SearchResult
                    img="http://4.bp.blogspot.com/-nkBOiaRgj1M/WWTFXZWIPrI/AAAAAAAAGNo/2UKVXWA75IcRvwpawHilvuNELiTvG2NjgCK4BGAYYCw/s250/MeroLOGO_29C%25C3%25ADa_BomberosVol.jpg"
                    title="Bomberos Voluntarios de Amatitlan"
                    description="La 29 compañia de los  bomberos voluntarios es la asignada para cubrir emergencias dentro del  municipio de Amatitlan."
                    location=""
                />
            </Link>
            <Link to='/sos/bomberos/bomberos-map' style={{ textDecoration: 'none' }}>
                <SearchResult
                    img="https://image.freepik.com/vector-gratis/dibujos-animados-medicos-pacientes-frente-al-hospital_43633-7246.jpg"
                    location="3 Avenida, Amatitlán"
                    title="Hospital de Amatitlan"
                    description="Amatitlan cuenta con un hospital dentro de los confines del municipio"
                />
            </Link>
        </div>
    )
}

export default sos
