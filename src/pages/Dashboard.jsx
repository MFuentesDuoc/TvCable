import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import PlanCard from '../components/PlanCard';
import TablaPagos from '../components/TablaPagos';
import CatalogoPlanes from '../components/CatalogoPlanes';
import DetalleServicios from '../components/DetalleServicios';
import SoporteTecnico from '../components/SoporteTecnico';

function Dashboard({ usuario, onLogout }) {
  // Hook de estado para controlar la pestaña/vista activa
  const [vistaActual, setVistaActual] = useState('plan');

  return (
    <div>
      {/* Navbar con datos del usuario */}
      <Navbar usuario={usuario} onLogout={onLogout} />

      <div style={styles.main}>
        {/* Barra Superior de Opciones (Tabs) */}
        <div style={styles.tabContainer}>
          <button 
            style={vistaActual === 'plan' ? styles.tabActivo : styles.tab}
            onClick={() => setVistaActual('plan')}
          >
            📺 Mi Plan
          </button>
          
          <button 
            style={vistaActual === 'catalogo' ? styles.tabActivo : styles.tab}
            onClick={() => setVistaActual('catalogo')}
          >
            🚀 Cambiar de Plan
          </button>

          <button 
            style={vistaActual === 'servicios' ? styles.tabActivo : styles.tab}
            onClick={() => setVistaActual('servicios')}
          >
            📶 Equipos y Wi-Fi
          </button>

          <button 
            style={vistaActual === 'pagos' ? styles.tabActivo : styles.tab}
            onClick={() => setVistaActual('pagos')}
          >
            💳 Historial de Pagos
          </button>

          <button 
            style={vistaActual === 'soporte' ? styles.tabActivo : styles.tab}
            onClick={() => setVistaActual('soporte')}
          >
            🎧 Soporte Técnico
          </button>
        </div>

        {/* Renderizado condicional según el botón seleccionado */}
        {vistaActual === 'plan' && (
          <div>
            <h2>Resumen de tu Servicio</h2>
            <PlanCard plan={usuario.plan} />
          </div>
        )}

        {vistaActual === 'catalogo' && <CatalogoPlanes />}

        {vistaActual === 'servicios' && <DetalleServicios />}

        {vistaActual === 'pagos' && <TablaPagos pagos={usuario.pagos} />}

        {vistaActual === 'soporte' && <SoporteTecnico />}
      </div>
    </div>
  );
}

const styles = {
  main: {
    maxWidth: '950px',
    margin: '20px auto',
    padding: '0 20px'
  },
  tabContainer: {
    display: 'flex',
    gap: '10px',
    borderBottom: '2px solid #ccc',
    paddingBottom: '10px',
    marginBottom: '20px',
    overflowX: 'auto'
  },
  tab: {
    padding: '10px 16px',
    backgroundColor: '#ffffff',
    border: '1px solid #ccc',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '#555'
  },
  tabActivo: {
    padding: '10px 16px',
    backgroundColor: '#2c3e50',
    color: '#ffffff',
    border: '1px solid #2c3e50',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold'
  }
};

export default Dashboard;