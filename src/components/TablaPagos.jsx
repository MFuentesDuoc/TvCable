import React from 'react';

function TablaPagos({ pagos }) {
  return (
    <div style={styles.container}>
      <h3>Historial de Pagos</h3>
      <table style={styles.table}>
        <thead>
          <tr style={styles.thRow}>
            <th style={styles.cell}>Periodo</th>
            <th style={styles.cell}>Monto</th>
            <th style={styles.cell}>Fecha Pago</th>
            <th style={styles.cell}>Estado</th>
          </tr>
        </thead>
        <tbody>
          {pagos.map((pago) => (
            <tr key={pago.id} style={styles.tr}>
              <td style={styles.cell}>{pago.periodo}</td>
              <td style={styles.cell}>${pago.monto.toLocaleString('es-CL')}</td>
              <td style={styles.cell}>{pago.fecha}</td>
              <td style={styles.cell}>
                <span style={{ color: pago.estado === 'Pagado' ? 'green' : 'red', fontWeight: 'bold' }}>
                  {pago.estado}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '10px'
  },
  thRow: {
    backgroundColor: '#ecf0f1',
    textAlign: 'left'
  },
  cell: {
    padding: '10px',
    borderBottom: '1px solid #eee'
  }
};

export default TablaPagos;