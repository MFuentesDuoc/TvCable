import React, { useState } from 'react';

function SoporteTecnico() {
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleEnviar = (e) => {
    e.preventDefault();
    if (mensaje.trim()) {
      setEnviado(true);
      setMensaje('');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Centro de Ayuda y Soporte</h2>

      {enviado && (
        <div style={styles.alerta}>
          ✅ Tu solicitud de soporte ha sido ingresada. Un ejecutivo se contactará contigo a la brevedad.
        </div>
      )}

      <div style={styles.grid}>
        {/* Formulario de reporte */}
        <div style={styles.card}>
          <h3>Reportar un Problema Técnico</h3>
          <form onSubmit={handleEnviar}>
            <textarea
              placeholder="Describe aquí el problema con tu señal de TV o Internet..."
              rows="4"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              style={styles.textarea}
              required
            />
            <button type="submit" style={styles.btnEnviar}>Enviar Ticket de Soporte</button>
          </form>
        </div>

        {/* Teléfonos de contacto */}
        <div style={styles.card}>
          <h3>Atención Telefónica 24/7</h3>
          <p>📞 <strong>Soporte Técnico:</strong> 600 123 4567</p>
          <p>💬 <strong>WhatsApp Atención:</strong> +56 9 8765 4321</p>
          <p>✉️ <strong>Correo:</strong> soporte@cablenet.cl</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { marginTop: '20px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '15px' },
  card: { backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' },
  textarea: { width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box', marginBottom: '10px' },
  btnEnviar: { backgroundColor: '#e74c3c', color: '#fff', border: 'none', padding: '10px 15px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' },
  alerta: { backgroundColor: '#d4edda', color: '#155724', padding: '12px', borderRadius: '4px', marginBottom: '15px' }
};

export default SoporteTecnico;