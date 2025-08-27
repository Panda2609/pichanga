import './CanchaCard.css';
import React from 'react';
import { FaFutbol, FaBasketballBall, FaVolleyballBall } from 'react-icons/fa';
import { FaRestroom, FaCoffee, FaShower, FaWifi, FaAccessibleIcon, FaQuestion, } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { TbBulb } from "react-icons/tb";
import { FaDollarSign } from "react-icons/fa6";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";
import { FaSquareParking } from "react-icons/fa6";
function CanchaCard({name, region, tipo, horarioAtencion, calificacion, direccion, servicios, precio, image}){
    // Mapeo de tipo de cancha a iconos y nombres
    const tipoCanchaIconos = {
        futbol: { icon: <FaFutbol />, label: "Fútbol" },
        voley: { icon: <FaVolleyballBall />, label: "Vóley" },
        basquet: { icon: <FaBasketballBall />, label: "Básquet" },
        
    };
    // Mapeo de servicios a iconos y descripciones detalladas
    const servicioIconos = {
        "baños": { icon: <FaRestroom/>, label: "Baños disponibles" },
        "iluminación": { icon: <TbBulb />, label: "Servicio de iluminación" },
        "estacionamiento": { icon: <FaSquareParking />, label: "Estacionamiento para vehículos" },
        "cafetería": { icon: <FaCoffee />, label: "Cafetería en el recinto" },
        "duchas": { icon: <FaShower />, label: "Duchas disponibles" },
        "wifi": { icon: <FaWifi />, label: "Conexión WiFi disponible" },
        "accesibilidad": { icon: <FaAccessibleIcon />, label: "Accesibilidad para personas con discapacidad" },
    };
    // Formato de moneda chilena
    const formatoCLP = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0
    });

    return(
        <div className="cancha-info-container">
            <img className="cancha-img" src={image} alt={name}/>
            <h3 className="cancha-title">{name}</h3>
            <div className="cancha-info-item cancha-tipo" style={{ display: 'flex', alignItems: 'center', gap: '0.5em', marginBottom: '0.2em' }}>
                {tipoCanchaIconos[tipo]?.icon}
                {tipoCanchaIconos[tipo]?.label || tipo}
            </div>
            <div className='cancha-info-details'>
                <div className='cancha-info-top'>
                    <p className="cancha-info-item cancha-calificacion">
                        <FaStar style={{ marginRight: '0.4em' }} />
                        {calificacion}
                    </p>
                    <p className="cancha-info-item cancha-precio">
                        {/* <FaDollarSign style={{ marginRight: '0.1em'}} /> */}
                        {formatoCLP.format(precio)} / hora
                    </p>
                </div>
                <p className="cancha-info-item cancha-direccion">
                    <FaLocationDot style={{ marginRight: '0.4em'}}/>
                {direccion}
                </p>
                {/* <p className="cancha-info-item cancha-type">Tipo: {tipo}</p> */}
                <p className="cancha-info-item cancha-time">
                    <AiOutlineClockCircle style={{ marginRight: '0.4em'}} />
                    {horarioAtencion}
                    
                </p>
                <div className="cancha-info-item cancha-servicios">
                    Servicios:&nbsp;
                    {servicios && servicios.length > 0 ? (
                        servicios.map((servicio, idx) => {
                            const data = servicioIconos[servicio.toLowerCase()];
                            return (
                                <span
                                    key={idx}
                                    title={data ? data.label : servicio}
                                    style={{marginRight: '0.5em', fontSize: '1.3em', verticalAlign: 'middle'}}
                                >
                                    {data ? data.icon : <FaQuestion style={{color: '#222'}} />}
                                </span>
                            );
                        })
                    ) : (
                        <span style={{color: '#888'}}>No hay servicios</span>
                    )}
                </div>
                {/* El precio ahora está junto a la calificación arriba */}
            </div>
        </div>
    )
}

export default CanchaCard;