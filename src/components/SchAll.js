import React from 'react'
import './SchAll.css';

function SchAll({
    img,
    title,
    description,
    location,
}) {
    return (<div className='searchResult'>
    <img src={img} alt="" />  
    <div className='searchResult__info'>
        <div className="searchResult__infoTop">
            <h3>{title}</h3>
            <p>____</p>
            <p>{description}</p>
            <p>{location}</p>
        </div>
        <div className="searchResult__infoBottom">
            <div className="searchResult__stars">
            </div>
        </div>
    </div>
</div>
)
}

export default SchAll
