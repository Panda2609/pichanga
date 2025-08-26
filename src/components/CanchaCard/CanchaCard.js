import './CanchaCard.css'
import React from 'react';

function CanchaCard({name, region, tipo, horarioAtencion, calificacion, direccion, servicios, precio, image}){
    return(
        <div className="cancha-info-container">
            <img className="cancha-img" src={image} alt={name}/>
            <h3 className="cancha-title">{name}</h3>
            <div className='cancha-info-details'>
                <p className="cancha-info-item cancha-direccion">Dirección: {direccion}</p>
                <p className="cancha-info-item cancha-region">Región: {region}</p>
                <p className="cancha-info-item cancha-type">Tipo: {tipo}</p>
                <p className="cancha-info-item cancha-time">Horario Atención: {horarioAtencion}</p>
                <p className="cancha-info-item cancha-calificacion">Calificación: {calificacion}</p>
                <p className="cancha-info-item cancha-servicios">Servicios: {servicios.join(", ")}</p>
                <p className="cancha-info-item cancha-precio">Precio: ${precio}</p>
            </div>
        </div>
    )
}

export default CanchaCard;