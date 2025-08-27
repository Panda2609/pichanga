import React, { useState, useEffect } from 'react';
import './Filter.css';
import { getRegiones } from '../../api/regionesService';
import { getTiposCancha } from '../../api/tiposCanchaService';
import { IoSearch } from "react-icons/io5";

function Filter({ onFiltrar }) {
    const [region, setRegion] = useState('');
    const [tipoCancha, setTipoCancha] = useState('');
    const [fecha, setFecha] = useState('');
    const [regiones, setRegiones] = useState([]);
    const [tiposCanchas, setTiposCanchas] = useState([]);

    useEffect(() => {
        getRegiones().then(data => setRegiones(data)).catch(() => setRegiones([]));
        getTiposCancha().then(data => setTiposCanchas(data)).catch(() => setTiposCanchas([]));
    }, []);

    const handleFilter = () => {
        if (typeof onFiltrar === 'function') {
            onFiltrar({
                region,
                tipoCancha,
                // horario,
                fecha
            });
        }
    };

    return (
        <div className="filter-container">
            <form className="filter-form">
                <div className='filter-group'>
                    <label className='filter-label' htmlFor='region-select'>Región</label>
                    <select id='region-select' className='filter-select' value={region} onChange={(e) => setRegion(e.target.value)}>
                        <option value="">Seleccione una región</option>
                        {regiones.map((region) => (
                            <option key={region.id || region.value} value={region.id || region.value}>
                                {region.nombre || region.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='filter-group'>
                    <label className='filter-label' htmlFor='tipo-select'>Tipo de Cancha</label>
                    <select id='tipo-select' className='filter-select' value={tipoCancha} onChange={(e) => setTipoCancha(e.target.value)}>
                        <option value="">Seleccione una cancha</option>
                        {tiposCanchas.map((tipo) => (
                            <option key={tipo.id || tipo.value} value={tipo.id || tipo.value}>
                                {tipo.nombre || tipo.label}
                            </option>
                        ))}
                    </select>
                </div>
                {/* Se eliminó el campo de horario */}
                <div className='filter-group'>
                    <label className='filter-label' htmlFor='fecha-input'>Fecha</label>
                    <input id='fecha-input' className='filter-input' type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                </div>
                <button className='filter-button' type="button" onClick={handleFilter}>
                    <IoSearch style={{ fontSize: '1.5em' }} />
                </button>
            </form>
        </div>
    );
}

export default Filter;