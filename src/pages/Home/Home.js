import React from 'react';
import './Home.css';

import Filter from '../../components/Filter/Filter';

function Home() {
    return (
        <div className="home-container">
            <div className='logo-container'>
                <h1 className="logo-title">Pichanga.cl</h1>
            </div>
            <h2 className='subtitle'>Busca y filtra tu cancha ideal</h2>
            {/* Aquí irán los filtros y resultados */}
            <div className="filters-section">
                <Filter />
            </div>
        </div>
    );
}

export default Home;
