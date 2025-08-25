import React, { useState, useEffect } from 'react';
import './Filter.css';
import { getRegiones } from '../../api/regionesService';
import { getTiposCancha } from '../../api/tiposCanchaService';

function Filter({ onFiltrar }) {
    const [region, setRegion] = useState('');
    const [tipoCancha, setTipoCancha] = useState('');
    const [horario, setHorario] = useState('');
    const [fecha, setFecha] = useState('');
    const [regiones, setRegiones] = useState([]);
    const [tiposCanchas, setTiposCanchas] = useState([]);

    useEffect(() => {
        getRegiones().then(data => setRegiones(data)).catch(() => setRegiones([]));
        getTiposCancha().then(data => setTiposCanchas(data)).catch(() => setTiposCanchas([]));
    }, []);

    // console.log('Regiones:', regiones);
    // console.log('Tipos de Canchas:', tiposCanchas);
    const handleFilter = () => {
        if (typeof onFiltrar === 'function') {
            onFiltrar({
                region,
                tipoCancha,
                horario,
                fecha
            });
        }
    };

    return (
        <div className="filter-container">
            <form className="filter-form">
                <label className='filter-label'>
                    Región:
                    <select className='filter-select' value={region} onChange={(e) => setRegion(e.target.value)}>
                        <option value="">Seleccione una región</option>
                        {regiones.map((region) => (
                            <option key={region.id || region.value} value={region.id || region.value}>
                                {region.nombre || region.label}
                            </option>
                        ))}
                    </select>
                </label>
                <label className='filter-label'>
                    Tipo de Cancha:
                    <select className='filter-select' value={tipoCancha} onChange={(e) => setTipoCancha(e.target.value)}>
                        <option value="">Seleccione una cancha</option>
                        {tiposCanchas.map((tipo) => (
                            <option key={tipo.id || tipo.value} value={tipo.id || tipo.value}>
                                {tipo.nombre || tipo.label}
                            </option>
                        ))}
                    </select>
                </label>
                <label className='filter-label'>
                    Horario:
                    <input className='filter-input' type="time" value={horario} onChange={(e) => setHorario(e.target.value)} />
                </label>
                <label className='filter-label'>
                    Fecha:
                    <input className='filter-input' type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                </label>
                <button className='filter-button' type="button" onClick={handleFilter}>Filtrar</button>
            </form>
        </div>
    );
}

export default Filter;