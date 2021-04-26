import React from 'react'
import './Sos.css';
import SearchResult from "./SchSos";


function Food() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <h1>Deliciosas comida tradicional que se  puede encontrar en Amatitlán</h1>

            </div>
            <SearchResult
                img="https://aprende.guatemala.com/wp-content/uploads/2017/09/Historia-del-Chir%C3%ADn-de-Amatitl%C3%A1n-1.jpg"
                title="Chirín"
                description="El Chirín es un delicioso platillo relacionado con la cultura culinaria del municipio de Amatitlán. El Chirín según se comenta es una cosa de hombres, dado que esto surgió como un platillo preparado únicamente por hombres el cual era ideal para grupo de amigos o trabajadores que solían reunirse en las orillas del lago. "
                location=""
            />
            <SearchResult
                img="https://www.prensalibre.com/wp-content/uploads/2018/12/9a1606c9-23ee-4e21-b36c-7f6856ce3726.jpg"
                title="Enchiladas"
                description="Las enchiladas son básicamente tostadas con carne picada, queso, un toque de huevo, salsa y remolacha la cual otorga el color característico, el singular sabor y la facilidad de preparación hace que se estás puedan ser encontradas en diversos lugares a lo largo del municipio. "
            />
            <SearchResult
                img="https://www.prensalibre.com/wp-content/uploads/2018/12/94690c52-77f0-4646-b4cf-2305c1d31956.jpg"
                title="Chuchitos"
                description="Los chuchitos son pequeñas bolas de masa, recado y carne los cuales son servidos con salsa de tomate y queso, estos son refacciones tradicionales dentro del municipio de Amatitlán, la textura es un tanto dura sin embargo es delicioso."
            />
            <SearchResult
                img="https://munimasagua.com.gt/wp-content/uploads/2018/02/Dulces-t%C3%ADpicos-de-Guatemala-1.jpg"
                title="Dulces Típicos"
                description="Los dulces típicos son parte importante de la gastronomía de Amatitlán dado que estos suelen estar presentes tanto en los mercados municipales como en las orillas del lago, los dulces típicos de la región es la pepitoria, chancaca y el mazapán."
            />
            <SearchResult
                img="https://www.prensalibre.com/wp-content/uploads/2018/12/c2aa5372-634a-4747-addc-ae098b1bdb81.jpg?resize=760,586"
                title="Pepián"
                description="El pepián es una comida típica de Guatemala, bastante usual en el municipio de Amatitlán, el pepián de pollo y la consistencia es un majar exquisito, el platillo suele ir acompañado de verduras, arroz y unas tortillas."
            />
        </div>
    )
}

export default Food
