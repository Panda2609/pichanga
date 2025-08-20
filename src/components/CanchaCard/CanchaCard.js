import './CanchaCard.css'
import React from 'react';

function CanchaCard({name, region, tipo, horario, fecha, image}){
    return(
        <div className="cancha-info-container">
            <img className="cancha-img" src={image} alt={name}/>
            <h3 className="cancha-title">{name}</h3>
            <p className="cancha-region">Región: {region}</p>
            <p className="cancha-type">Tipo: {tipo}</p>
            <p className="cancha-time">Horario: {horario}</p>
            <p className="cancha-date">Fecha: {fecha}</p>
        </div>
    )
}

export default CanchaCard;