import React from 'react';

// Recibimos props destructurados: usuario y onLogout
function Navbar({ usuario, onLogout }) {
  return (
    <nav style={styles.nav}>
      <h2>📺 CableNet - Portal Clientes</h2>
      <div style={styles.userInfo}>
        <span>Bienvenido(a), <strong>{usuario.nombre}</strong> (RUT: {usuario.rut})</span>
        <button onClick={onLogout} style={styles.logoutBtn}>Cerrar Sesión</button>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#2c3e50',
    color: '#fff'
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  },
  logoutBtn: {
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    padding: '8px 14px',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default Navbar;