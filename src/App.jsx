import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Empresa from './pages/Empresa';

function App() {
  const [usuario, setUsuario] = useState(null);

  const datosEmpresa = {
    nombre: "CableNet Telecomunicaciones S.A.",
    slogan: "Conectando a miles de hogares con la mejor tecnología",
    descripcion: "Somos una empresa líder en telecomunicaciones con más de 18 años entregando servicios de televisión HD e Internet por fibra óptica con la más alta estabilidad del mercado.",
    servicios: [
      "Televisión por Cable Digital con más de 140 canales HD.",
      "Internet de Fibra Óptica de alta velocidad.",
      "Soporte técnico especializado 24/7."
    ],
    contacto: {
      direccion: "Av. Telecomunicaciones 1234, Santiago",
      telefono: "600 123 4567",
      email: "contacto@cablenet.cl"
    }
  };

  const handleLogin = (datosUsuario) => {
    setUsuario(datosUsuario);
  };

  const handleLogout = () => {
    setUsuario(null);
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* 1. Página inicial (Empresa abre primero en la raíz "/") */}
        <Route path="/" element={<Empresa info={datosEmpresa} />} />

        {/* 2. Ruta del Login */}
        <Route 
          path="/login" 
          element={
            usuario ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />
          } 
        />

        {/* 3. Ruta del Dashboard (Protegida) */}
        <Route 
          path="/dashboard" 
          element={
            usuario ? (
              <Dashboard usuario={usuario} onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" />
            )
          } 
        />

        {/* Redirección por defecto a la página principal */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;