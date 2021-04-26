import React from 'react'
import './Tradition.css';
import SearchResult from "./SchAll";


function Tradition() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <h1>Feria Patronal Amatitlán</h1>
                <h3>Ofrendas florales, alfombras de aserrín y el cortejo procesional del Niño Dios en el lago de Amatitlán, hacen una fiesta única en esa localidad, que celebra su feria titular el 3 de mayo, Día de la Santa Cruz. La feria es bicentenaria, dao que tuvo sus inicios en el año de 1789. La festividad comienza desde horas de la mañana con la salida del Niño Dios desde la Parroquia San Juan Bautista hacia el trono del  niño Dios en  uno de los costados del lago y finaliza al anochecer con el retorno del niño al templo.</h3>
            </div>            
            <SearchResult
                img="https://mundochapin.com/wp-content/uploads/2018/06/05-salida-del-nino-sarquito.jpg"
                title="Salida del niño Dios de la parroquia San Juan Bautista"          
                description="La actividad inicia con la salida de la imagen del niño Dios desde la parroquia San Juan bautista."
                location="Parroquia San Juan Bautista Amatitlan"
            />      
            <SearchResult
                img="https://www.prensalibre.com/wp-content/uploads/2019/05/ff712484-85b5-4728-960a-6f09b33d7665.jpg"
                title="Alfombras"
                description="A lo largo del recorrido es posible visualizar las diferentes alfombras que elaboran los devotos católicos."
            />
            <SearchResult
                img="https://mundochapin.com/wp-content/uploads/2018/06/11-muestra-de-devocion.jpg"
                title="Procesión acuática"
                description="La procesión acuática es parte del recorrido del niño y el objetivo final es llevar la imagen hacia su trono el cual se encuentra en el interior del lago en una zona que únicamente es accesible por medio del lago."
            />
            <SearchResult
                img="https://aprende.guatemala.com/wp-content/uploads/2016/10/feria-de-amatitlan.jpg"
                title="Juegos Mecanicos"
                description="Al igual que en otros sitios se lleva a cabo una feria en las instalaciones del campo de la Cruz, existe una gran variedad de juegos, comida y entretenimiento para el disfrute del visitante"
            />
            <SearchResult
                img="https://mundochapin.com/wp-content/uploads/2018/06/21-cruz-a-la-orilla-del-lago.jpg"
                title="Procesión acuática nocturna"
                description="Sin lugar a duda una de las mejores partes es la procesión  nocturna que se lleva a cabo una vez entrada la noche, dado que llegado este punto se puede sentir el fervor del amatitlaneco y lo apegados que son a  sus costumbres."
            />
        </div>
    )
}

export default Tradition
