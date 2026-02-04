export default function Page() {
  return (
    <main style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '50px', fontFamily: 'monospace' }}>
      <h1 style={{ color: '#ff4d4d' }}>KATYUSHA v1.0</h1>
      <p style={{ color: '#666' }}>&gt; ESTATUS: SISTEMA INICIALIZADO</p>
      <div style={{ border: '1px solid #333', padding: '20px', marginTop: '20px' }}>
        <h3>TREASURY: 0.00 SOL</h3>
        <p>Esperando conexión de billetera...</p>
      </div>
    </main>
  );
}