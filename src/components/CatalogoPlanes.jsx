import React from 'react';

function CatalogoPlanes() {
  const planesDisponibles = [
    {
      id: 1,
      nombre: "Plan Básico Digital",
      canales: "80 canales HD",
      velocidad: "200 Megas Fibra",
      precio: 19990,
      recomendado: false
    },
    {
      id: 2,
      nombre: "Plan Premium Fibra + Cable",
      canales: "140 canales HD",
      velocidad: "500 Megas Fibra",
      precio: 29990,
      recomendado: true
    },
    {
      id: 3,
      nombre: "Plan Ultra Gamer 1 Giga",
      canales: "180 canales HD + Packs Fútbol",
      velocidad: "1000 Megas Fibra",
      precio: 39990,
      recomendado: false
    }
  ];

  return (
    <div style={styles.container}>
      <h2>Planes y Mejoras Disponibles</h2>
      <p style={{ color: '#666' }}>Compara nuestros planes e inicia una solicitud de cambio sin costo de instalación.</p>
      
      <div style={styles.grid}>
        {planesDisponibles.map((p) => (
          <div key={p.id} style={{
            ...styles.card,
            borderColor: p.recomendado ? '#27ae60' : '#ddd',
            borderWidth: p.recomendado ? '2px' : '1px'
          }}>
            {p.recomendado && <span style={styles.badge}>MÁS POPULAR</span>}
            <h3>{p.nombre}</h3>
            <p><strong>Televisión:</strong> {p.canales}</p>
            <p><strong>Internet:</strong> {p.velocidad}</p>
            <h2 style={styles.precio}>${p.precio.toLocaleString('es-CL')} <small>/mes</small></h2>
            <button 
              style={styles.btnSolicitar}
              onClick={() => alert(`Solicitud enviada para el ${p.nombre}. Nos contactaremos contigo.`)}
            >
              Solicitar Cambio de Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { marginTop: '20px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '15px' },
  card: { backgroundColor: '#fff', borderStyle: 'solid', borderRadius: '8px', padding: '20px', position: 'relative', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' },
  badge: { position: 'absolute', top: '-12px', right: '15px', backgroundColor: '#27ae60', color: '#fff', fontSize: '11px', padding: '3px 8px', borderRadius: '10px', fontWeight: 'bold' },
  precio: { color: '#2c3e50', margin: '15px 0' },
  btnSolicitar: { width: '100%', backgroundColor: '#2c3e50', color: '#fff', border: 'none', padding: '10px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }
};

export default CatalogoPlanes;