// Trust block — between Hero and HowItWorks per PRD v4.2
function TrustBlock({ tweaks }) {
  const items = [
    { t: 'GSMA member', s: 'Approved global eSIM provider' },
    { t: '500+ tier-1 carriers', s: 'Direct IPX peering' },
    { t: 'GDPR compliant', s: 'EU data protection · servers in Frankfurt' },
    { t: 'eKYC compliant', s: 'EU & UK regulatory ready' },
  ];

  return (
    <section style={{ padding: '64px 0 32px', position: 'relative' }}>
      <div className="container">
        <div className="glass trust-row" style={{
          padding: '32px 40px', display: 'grid',
          gridTemplateColumns: 'auto 1fr auto', gap: 40, alignItems: 'center'
        }}>
          {/* Travelers connected today (placeholder, real number from analytics later) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{
              width: 44, height: 44, borderRadius: 12,
              background: 'rgba(62,224,162,0.12)', border: '1px solid rgba(62,224,162,0.3)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <I.Plane size={20} />
            </span>
            <div>
              <div className="mono" style={{ fontSize: 11 }}>Travelers connected today</div>
              <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.5px', color: '#fff' }}>
                across 150+ countries
              </div>
            </div>
          </div>

          <div style={{ height: 40, width: 1, background: 'var(--border)' }} />

          {/* trust items */}
          <div className="trust-items" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {items.map((it, i) => (
              <div key={i}>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{it.t}</div>
                <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 2 }}>{it.s}</div>
              </div>
            ))}
          </div>

          <div style={{
            display: 'flex', alignItems: 'center', gap: 10, padding: '8px 14px',
            borderRadius: 999, background: 'rgba(0,127,255,0.08)', border: '1px solid rgba(0,127,255,0.25)'
          }}>
            <span className="mono" style={{ fontSize: 11, color: '#9bc9ff' }}>Powered by</span>
            <span style={{ fontWeight: 700, fontSize: 13, color: '#fff' }}>2SkyMobile</span>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 1100px) {
          .trust-row { grid-template-columns: 1fr !important; gap: 24px !important; }
          .trust-items { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
window.TrustBlock = TrustBlock;
