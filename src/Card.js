import React from 'react';
import './Card.css'


function Card({ src, title, description, urls }) {
    return (
        <div className='card'>
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{urls}</h3>
            </div>
        </div>
    )
}

export default Card
