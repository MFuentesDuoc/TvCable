import React from 'react';
import { useNavigate } from 'react-router-dom';

function Empresa({ info }) {
  const navigate = useNavigate();

  return (
    <div style={styles.pageWrapper}>
      {/* 1. Header / Navbar Superior */}
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <div style={styles.logoGroup}>
            <span style={styles.logoIcon}>📺</span>
            <span style={styles.logoText}>CableNet</span>
          </div>
          <button onClick={() => navigate('/login')} style={styles.btnLoginNav}>
            🔒 Iniciar Sesión
          </button>
        </div>
      </header>

      {/* 2. Hero Section (Banner Principal) */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <span style={styles.heroBadge}>✨ LÍDER EN TELECOMUNICACIONES</span>
          <h1 style={styles.heroTitle}>{info.nombre}</h1>
          <p style={styles.heroSlogan}>{info.slogan}</p>
          
          <div style={styles.heroCTA}>
            <button onClick={() => navigate('/login')} style={styles.btnPrimary}>
              🚀 Acceder al Portal Clientes
            </button>
            <a href="#servicios" style={styles.btnSecondaryLink}>
              Conoce nuestros servicios ↓
            </a>
          </div>
        </div>
      </section>

      {/* 3. Barra de Estadísticas */}
      <section style={styles.statsSection}>
        <div style={styles.statsContainer}>
          <div style={styles.statBox}>
            <h2 style={styles.statNumber}>+18</h2>
            <p style={styles.statLabel}>Años de Experiencia</p>
          </div>
          <div style={styles.statDivider}></div>
          <div style={styles.statBox}>
            <h2 style={styles.statNumber}>500k+</h2>
            <p style={styles.statLabel}>Hogares Conectados</p>
          </div>
          <div style={styles.statDivider}></div>
          <div style={styles.statBox}>
            <h2 style={styles.statNumber}>99.9%</h2>
            <p style={styles.statLabel}>Uptime Fibra Óptica</p>
          </div>
          <div style={styles.statDivider}></div>
          <div style={styles.statBox}>
            <h2 style={styles.statNumber}>24/7</h2>
            <p style={styles.statLabel}>Soporte Dedicado</p>
          </div>
        </div>
      </section>

      <main style={styles.mainContainer}>
        {/* 4. Sección Quiénes Somos */}
        <section style={styles.aboutCard}>
          <div style={styles.sectionHeader}>
            <span style={styles.sectionTag}>NOSOTROS</span>
            <h2 style={styles.sectionTitle}>¿Quiénes Somos?</h2>
          </div>
          <p style={styles.aboutText}>{info.descripcion}</p>
        </section>

        {/* 5. Tarjetas de Servicios */}
        <section id="servicios" style={styles.sectionMargin}>
          <div style={styles.sectionHeader}>
            <span style={styles.sectionTag}>OFRECIMIENTO</span>
            <h2 style={styles.sectionTitle}>Nuestros Servicios Destacados</h2>
          </div>

          <div style={styles.servicesGrid}>
            <div style={styles.serviceCard}>
              <div style={styles.cardIconBg}>📺</div>
              <h3 style={styles.cardTitle}>Televisión HD Digital</h3>
              <p style={styles.cardDesc}>Más de 140 canales con resolución Ultra HD, paquetes deportivos y canales premium en vivo.</p>
            </div>

            <div style={styles.serviceCard}>
              <div style={styles.cardIconBg}>⚡</div>
              <h3 style={styles.cardTitle}>Fibra Óptica Simétrica</h3>
              <p style={styles.cardDesc}>Internet de alta velocidad de hasta 1 Giga con igual velocidad de subida y bajada para Gaming y Streaming.</p>
            </div>

            <div style={styles.serviceCard}>
              <div style={styles.cardIconBg}>🛠️</div>
              <h3 style={styles.cardTitle}>Asistencia Técnica 24/7</h3>
              <p style={styles.cardDesc}>Monitoreo continuo de red y atención telefónica prioritaria para resolver cualquier inconveniente rápidamente.</p>
            </div>
          </div>
        </section>

        {/* 6. Bloque de Llamado a la Acción (Banner Central) */}
        <section style={styles.ctaBanner}>
          <div style={styles.ctaBannerContent}>
            <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>¿Ya eres cliente de CableNet?</h2>
            <p style={{ opacity: 0.9, marginBottom: '20px' }}>Consulta el estado de tu cuenta, revisa tus boletas y solicita mejoras en tu plan desde nuestro Portal de Clientes.</p>
            <button onClick={() => navigate('/login')} style={styles.btnWhite}>
              Ingresar con mi RUT
            </button>
          </div>
        </section>

        {/* 7. Información de Contacto */}
        <section style={styles.contactCard}>
          <div style={styles.sectionHeader}>
            <span style={styles.sectionTag}>CONTACTO</span>
            <h2 style={styles.sectionTitle}>Sucursales y Atención</h2>
          </div>

          <div style={styles.contactGrid}>
            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>📍</span>
              <div>
                <strong>Dirección Central</strong>
                <p style={styles.contactSub}>{info.contacto.direccion}</p>
              </div>
            </div>

            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>📞</span>
              <div>
                <strong>Call Center Consultas</strong>
                <p style={styles.contactSub}>{info.contacto.telefono}</p>
              </div>
            </div>

            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>✉️</span>
              <div>
                <strong>Correo Electrónico</strong>
                <p style={styles.contactSub}>{info.contacto.email}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2026 CableNet Telecomunicaciones S.A. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

const styles = {
  pageWrapper: {
    backgroundColor: '#f8fafc',
    minHeight: '100vh'
  },
  header: {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e2e8f0',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    padding: '15px 0'
  },
  headerContainer: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logoGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  logoIcon: {
    fontSize: '24px'
  },
  logoText: {
    fontSize: '22px',
    fontWeight: '800',
    color: '#0f172a',
    letterSpacing: '-0.5px'
  },
  btnLoginNav: {
    backgroundColor: '#0f172a',
    color: '#ffffff',
    border: 'none',
    padding: '8px 18px',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '14px',
    cursor: 'pointer'
  },
  heroSection: {
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #1e3a8a 100%)',
    color: '#ffffff',
    padding: '80px 20px',
    textAlign: 'center'
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto'
  },
  heroBadge: {
    display: 'inline-block',
    backgroundColor: 'rgba(59, 130, 246, 0.2)',
    color: '#60a5fa',
    border: '1px solid rgba(96, 165, 250, 0.3)',
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '700',
    marginBottom: '20px',
    letterSpacing: '0.5px'
  },
  heroTitle: {
    fontSize: '42px',
    fontWeight: '800',
    letterSpacing: '-1px',
    lineHeight: '1.2',
    marginBottom: '15px'
  },
  heroSlogan: {
    fontSize: '18px',
    color: '#94a3b8',
    marginBottom: '35px',
    fontWeight: '400'
  },
  heroCTA: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'wrap'
  },
  btnPrimary: {
    backgroundColor: '#2563eb',
    color: '#ffffff',
    border: 'none',
    padding: '14px 28px',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    boxShadow: '0 10px 25px -5px rgba(37, 99, 235, 0.4)'
  },
  btnSecondaryLink: {
    color: '#cbd5e1',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '15px'
  },
  statsSection: {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e2e8f0',
    padding: '25px 20px'
  },
  statsContainer: {
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px'
  },
  statBox: {
    textAlign: 'center'
  },
  statNumber: {
    fontSize: '28px',
    fontWeight: '800',
    color: '#2563eb'
  },
  statLabel: {
    fontSize: '13px',
    color: '#64748b',
    fontWeight: '600'
  },
  statDivider: {
    width: '1px',
    height: '40px',
    backgroundColor: '#e2e8f0'
  },
  mainContainer: {
    maxWidth: '1100px',
    margin: '50px auto',
    padding: '0 20px'
  },
  sectionMargin: {
    marginBottom: '60px'
  },
  sectionHeader: {
    marginBottom: '25px'
  },
  sectionTag: {
    fontSize: '12px',
    fontWeight: '800',
    color: '#2563eb',
    letterSpacing: '1px'
  },
  sectionTitle: {
    fontSize: '26px',
    fontWeight: '800',
    color: '#0f172a',
    marginTop: '4px'
  },
  aboutCard: {
    backgroundColor: '#ffffff',
    padding: '35px',
    borderRadius: '16px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 15px -3px rgba(0, 0, 0, 0.03)',
    marginBottom: '60px'
  },
  aboutText: {
    fontSize: '16px',
    color: '#334155',
    lineHeight: '1.8'
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '25px'
  },
  serviceCard: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '16px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 15px -3px rgba(0, 0, 0, 0.03)'
  },
  cardIconBg: {
    width: '50px',
    height: '50px',
    backgroundColor: '#eff6ff',
    borderRadius: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    marginBottom: '20px'
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: '10px'
  },
  cardDesc: {
    fontSize: '14px',
    color: '#64748b',
    lineHeight: '1.6'
  },
  ctaBanner: {
    background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
    color: '#ffffff',
    padding: '40px',
    borderRadius: '20px',
    textAlign: 'center',
    marginBottom: '60px',
    boxShadow: '0 15px 30px -10px rgba(37, 99, 235, 0.3)'
  },
  ctaBannerContent: {
    maxWidth: '600px',
    margin: '0 auto'
  },
  btnWhite: {
    backgroundColor: '#ffffff',
    color: '#1d4ed8',
    border: 'none',
    padding: '12px 26px',
    borderRadius: '10px',
    fontWeight: '700',
    fontSize: '15px',
    cursor: 'pointer'
  },
  contactCard: {
    backgroundColor: '#ffffff',
    padding: '35px',
    borderRadius: '16px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 15px -3px rgba(0, 0, 0, 0.03)'
  },
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px'
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  },
  contactIcon: {
    fontSize: '28px',
    backgroundColor: '#f1f5f9',
    padding: '12px',
    borderRadius: '12px'
  },
  contactSub: {
    fontSize: '14px',
    color: '#64748b',
    marginTop: '2px'
  },
  footer: {
    textAlign: 'center',
    padding: '30px 20px',
    color: '#94a3b8',
    fontSize: '13px',
    borderTop: '1px solid #e2e8f0',
    backgroundColor: '#ffffff'
  }
};

export default Empresa;