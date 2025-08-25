import React, { useState, useEffect } from 'react';
import './Home.css';

import Filter from '../../components/Filter/Filter';
import CanchaCard from '../../components/CanchaCard/CanchaCard';
import { getCanchas } from '../../api/canchasService';

function Home() {
    const [results, setResults] = useState([]);
    const [canchas, setCanchas] = useState([]);

    const handleFiltrar = (filtros) => {
        const filteredData = canchas.filter((cancha) => {
            return (
                (!filtros.region || cancha.region === filtros.region) &&
                (!filtros.tipoCancha || cancha.tipo === filtros.tipoCancha)
            );
        });
        setResults(filteredData);
    };

    useEffect(() => {
        getCanchas()
            .then(data => {
                setCanchas(data);
                setResults(data); // Mostrar todas al inicio
            })
            .catch(() => {
                setCanchas([]);
                setResults([]);
            });
    }, []);

    return (
        <div className="home-container">
            <div className='logo-container'>
                <h1 className="logo-title">Pichanga.cl</h1>
            </div>
            <h2 className='subtitle'>Busca y filtra tu cancha ideal</h2>
            <div className="filters-section">
                <Filter  onFiltrar={handleFiltrar} />
            </div>
            {/* Verify if results are available to show them */}
            
            {results.length > 0 ? (
                <div className='result-container'>
                    <div className="results-section">
                        {results.map((cancha, index) => (
                            <CanchaCard key={index} {...cancha} />
                        ))}
                    </div>
                </div>
                
            ) : (
                <p style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>No se encontraron canchas.</p>
            )}
        </div>
    );
}

export default Home;
