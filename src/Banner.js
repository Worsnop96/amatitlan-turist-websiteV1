import React from 'react'
import './Banner.css'
import { Button } from "@material-ui/core";

import { useHistory } from "react-router-dom";

function Banner() {
    const history = useHistory();

    return (
        <div className='banner'>
            <div className='banner__info'>
                <h1>Atretevete a explorar Amatitlan</h1>
                <h5>
                    Dejate atrapar por la aventura y descubre un lugar sorprendente donde viajar, descansar y sorprenderse por la aventura es posible.
                </h5>
                <Button onClick={() => history.push('/location')} variant='outlined'>Explora lugares cercanos</Button>
            </div>
        </div>
    )
}

export default Banner
