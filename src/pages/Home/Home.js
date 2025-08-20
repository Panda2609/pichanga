import React from 'react';
import './Home.css';

import Filter from '../../components/Filter/Filter';
import CanchaCard from '../../components/CanchaCard/CanchaCard';
import DataCancha from '../../data/canchas-data';

function Home() {
    const [results, setResults] = React.useState([]);
    const handleFiltrar = (filtros) => {
        const filteredData = DataCancha.filter((cancha) => {
            return (
                (!filtros.region || cancha.region === filtros.region) &&
                (!filtros.tipoCancha || cancha.tipo === filtros.tipoCancha) &&
                (!filtros.horario || cancha.horario === filtros.horario) &&
                (!filtros.fecha || cancha.fecha === filtros.fecha)
            );
        });
        setResults(filteredData);
    };
    // const Canchas = DataCancha;
    // React.useEffect(() => {
    //     // Simulación de carga de datos
    //     setResults(Canchas);
    // }, [Canchas]);

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
