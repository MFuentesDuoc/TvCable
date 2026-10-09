import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [rut, setRut] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!rut || !password) {
      setError('Por favor completa todos los campos.');
      return;
    }

    if (password === '123456') {
      const usuarioDatos = {
        rut: rut,
        nombre: 'Juan Pérez',
        plan: {
          nombre: 'Pack Cable HD Premium + Fibra',
          canales: 140,
          velocidad: '500 Megas',
          estado: 'Activo',
          precio: 29990
        },
        pagos: [
          { id: 1, periodo: 'Octubre 2026', monto: 29990, fecha: '05/10/2026', estado: 'Pagado' },
          { id: 2, periodo: 'Septiembre 2026', monto: 29990, fecha: '03/09/2026', estado: 'Pagado' },
          { id: 3, periodo: 'Agosto 2026', monto: 29990, fecha: '04/08/2026', estado: 'Pagado' }
        ]
      };

      onLogin(usuarioDatos);
      navigate('/dashboard');
    } else {
      setError('Contraseña incorrecta. Utiliza "123456" para ingresar.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.headerGroup}>
          <span style={{ fontSize: '36px' }}>📺</span>
          <h2 style={styles.title}>Portal de Clientes</h2>
          <p style={styles.subtitle}>Ingresa tu RUT y clave para administrar tu cuenta</p>
        </div>

        {error && <div style={styles.error}>{error}</div>}

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>RUT del Titular</label>
            <input
              type="text"
              placeholder="12.345.678-9"
              value={rut}
              onChange={(e) => setRut(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Contraseña</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.button}>Ingresar a mi Cuenta</button>
        </form>

        <button 
          type="button" 
          onClick={() => navigate('/')} 
          style={styles.btnBack}
        >
          ← Volver a la página principal
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    padding: '20px'
  },
  card: {
    width: '100%',
    maxWidth: '400px',
    padding: '40px 30px',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.3)'
  },
  headerGroup: {
    textAlign: 'center',
    marginBottom: '25px'
  },
  title: {
    fontSize: '22px',
    fontWeight: '800',
    color: '#0f172a',
    marginTop: '10px'
  },
  subtitle: {
    fontSize: '13px',
    color: '#64748b',
    marginTop: '5px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  },
  label: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#334155'
  },
  input: {
    padding: '12px 14px',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    fontSize: '14px',
    outline: 'none',
    backgroundColor: '#f8fafc'
  },
  button: {
    padding: '14px',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: '700',
    marginTop: '10px',
    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
  },
  btnBack: {
    width: '100%',
    padding: '10px',
    backgroundColor: 'transparent',
    color: '#64748b',
    border: 'none',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '20px'
  },
  error: {
    backgroundColor: '#fef2f2',
    color: '#991b1b',
    border: '1px solid #fecaca',
    padding: '10px',
    borderRadius: '8px',
    marginBottom: '15px',
    fontSize: '13px',
    textAlign: 'center'
  }
};

export default Login;