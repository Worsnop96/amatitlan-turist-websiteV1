import React from 'react'
import './SchSos.css';


function SchSos({
    img,
    title,
    description,
    location,
    price,
}) {
    return (
        <div className='searchResult'>
        <img src={img} alt="" />  
        <div className='searchResult__info'>
            <div className="searchResult__infoTop">
                <h3>{title}</h3>
                <p>____</p>
                <p>{description}</p>
                <p>{location}</p>
                <p>{price}</p>
            </div>
            <div className="searchResult__infoBottom">
                <div className="searchResult__stars">
                </div>
            </div>
        </div>
    </div>
    )
}

export default SchSos
