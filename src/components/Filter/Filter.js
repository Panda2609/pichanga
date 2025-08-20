import React, {useState} from 'react';
import './Filter.css';


function Filter() {

    const [region, setRegion] = useState('');
    const [tipoCancha, setTipoCancha] = useState('');
    const [horario, setHorario] = useState('');
    const [fecha, setFecha] = useState('');
    const Regiones = [
        { value: 'metropolitana', label: 'Metropolitana' },
        { value: 'valparaiso', label: 'Valparaíso' },
        { value: 'biobio', label: 'Biobío' },
    ];
    const TiposCanchas = [
        { value: 'futbol', label: 'Fútbol' },
        { value: 'voley', label: 'Voley' },
        { value: 'basquet', label: 'Basquet' },
    ];

    return (
        <div className="filter-container">
            <form className="filter-form">
                <label className='filter-label'>
                    Región:
                    <select className='filter-select' value={region} onChange={(e) => setRegion(e.target.value)}>
                        {Regiones.map((region) => (
                            <option key={region.value} value={region.value}>
                                {region.label}
                            </option>
                        ))}
                    </select>
                </label>
                <label className='filter-label'>
                    Tipo de Cancha:
                    <select className='filter-select' value={tipoCancha} onChange={(e) => setTipoCancha(e.target.value)}>
                        {TiposCanchas.map((tipo) => (
                            <option key={tipo.value} value={tipo.value}>
                                {tipo.label}
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
                <button className='filter-button' type="button" onClick={() => {}}>Filtrar</button>
            </form>
        </div>
    );
}

export default Filter;