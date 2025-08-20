import React, {useState} from 'react';
import './Filter.css';
import FilterData from '../../data/filter-data'

function Filter({onFiltrar}) {

    const [region, setRegion] = useState('');
    const [tipoCancha, setTipoCancha] = useState('');
    const [horario, setHorario] = useState('');
    const [fecha, setFecha] = useState('');
    // Extraer las regiones y tipos de canchas del archivo de datos
    const Regiones = FilterData.Regiones;
    const TiposCanchas = FilterData.TiposCanchas;

    const handleFilter = () => {
        if(typeof onFiltrar === 'function'){
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
                        {console.log(FilterData.Regiones)}
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
                        <option value="">Seleccione una cancha</option>
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
                <button className='filter-button' type="button" onClick={handleFilter}>Filtrar</button>
            </form>
        </div>
    );
}

export default Filter;