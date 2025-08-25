import './CanchaCard.css'
import React from 'react';

function CanchaCard({name, region, tipo, horarioAtencion, calificacion, direccion, servicios, precio, image}){
    return(
        <div className="cancha-info-container">
            <img className="cancha-img" src={image} alt={name}/>
            <h3 className="cancha-title">{name}</h3>
            <p className="cancha-direccion">Dirección: {direccion}</p>
            <p className="cancha-region">Región: {region}</p>
            <p className="cancha-type">Tipo: {tipo}</p>
            <p className="cancha-time">Horario Atención: {horarioAtencion}</p>
            <p className="cancha-calificacion">Calificación: {calificacion}</p>
            <p className="cancha-servicios">Servicios: {servicios.join(", ")}</p>
            <p className="cancha-precio">Precio: ${precio}</p>
        </div>
    )
}

export default CanchaCard;