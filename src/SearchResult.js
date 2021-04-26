
import React from 'react'
import './SearchResult.css';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";


function SearchResult({
    img,
    location,
    title,
    description,
}) {

    return (
        <div className='searchResult'>
            <img src={img} alt="" />
            <FavoriteBorderIcon className="searchResult__heart" />  

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

export default SearchResult
