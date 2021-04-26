import React from 'react'
import './Header.css'
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from  './img/AmatitlanBrown.png';
import center from './img/CenterBrown.jpg';


function Header() {
    return (
        <div className="header">
            <Link to='/'>
                <img
                    className="header__icon"
                    src={logo}
                    alt="icono"
                />
            </Link>

            <div className='header__center'>
                <img 
                src={center}
                alt="central"
                />
            </div>

            <div className='header__right'>
                <Link to='/location' style={{ textDecoration: 'none' }}>
                    <p>Sitios Turisticos</p>
                </Link>
                <Link to="/location/lago">
                    <Avatar src="https://aprende.guatemala.com/wp-content/uploads/2016/12/leyenda-del-xocomil-en-guatemala.jpg" />
                </Link>

            </div>
        </div>
    )
}

export default Header
