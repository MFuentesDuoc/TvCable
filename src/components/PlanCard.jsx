import React from 'react';

function PlanCard({ plan }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Plan Contratado: {plan.nombre}</h3>
      <p><strong>Canales TV:</strong> {plan.canales} canales en HD</p>
      <p><strong>Velocidad Internet:</strong> {plan.velocidad}</p>
      <p><strong>Estado del Servicio:</strong> <span style={{ color: 'green', fontWeight: 'bold' }}>{plan.estado}</span></p>
      <h3 style={styles.price}>${plan.precio.toLocaleString('es-CL')} / mes</h3>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    marginBottom: '20px'
  },
  title: {
    margin: '0 0 10px 0',
    color: '#2c3e50'
  },
  price: {
    color: '#2980b9',
    marginTop: '15px'
  }
};

export default PlanCard;