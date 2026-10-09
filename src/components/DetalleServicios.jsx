import React from 'react';

function DetalleServicios() {
  return (
    <div style={styles.container}>
      <h2>Detalles de Equipos y Red</h2>

      <div style={styles.grid}>
        {/* Tarjeta de estado de Red Wi-Fi */}
        <div style={styles.card}>
          <h3>📶 Red Wi-Fi Hogar</h3>
          <p><strong>Nombre Red (SSID):</strong> CableNet_5G_Home</p>
          <p><strong>Estado Router:</strong> <span style={{ color: 'green', fontWeight: 'bold' }}>🟢 En Línea</span></p>
          <p><strong>Dispositivos Conectados:</strong> 6 equipos</p>
          <button 
            style={styles.btnSecundario} 
            onClick={() => alert("Tu clave Wi-Fi actual es: CableNet2026*")}
          >
            Ver Clave Wi-Fi
          </button>
        </div>

        {/* Tarjeta de Decodificadores */}
        <div style={styles.card}>
          <h3>📺 Decodificadores Activos</h3>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Deco Smart 4K - Living (Activo)</li>
            <li>Deco HD Básico - Dormitorio Principal (Activo)</li>
          </ul>
          <button 
            style={styles.btnSecundario}
            onClick={() => alert("Enviando señal de reinicio a tus decodificadores...")}
          >
            Reiniciar Señal de TV
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { marginTop: '20px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '15px' },
  card: { backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' },
  btnSecundario: { marginTop: '10px', padding: '8px 12px', backgroundColor: '#ecf0f1', color: '#2c3e50', border: '1px solid #bdc3c7', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }
};

export default DetalleServicios;