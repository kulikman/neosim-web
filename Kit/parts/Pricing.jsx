function Pricing({ tweaks }) {
  return (
    <section id="pricing" className="section-pad">
      <div className="container">
        <div className="price-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <div className="caption" style={{ color: '#66b7ff', marginBottom: 16 }}>Pricing</div>
            <h2 className="h-1" style={{ margin: 0, marginBottom: 24 }}>
              Pay for the gigabytes you use <span className="gradient-text">
Nothing else</span>
            </h2>
            <p className="body" style={{ marginBottom: 32, maxWidth: 540 }}>
              Traditional travel SIMs sell you 5 GB packages, charge again when they expire, and pocket the rest. NeoSIM bills as you go — so a 14-day trip and a 2-hour layover cost you exactly what they should.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, maxWidth: 480 }}>
              {[{ i: <I.Zap size={20} />, t: 'Pay as you go', s: 'Billed in real time' },
              { i: <I.Shield size={20} />, t: 'No expiry', s: 'Balance never lapses' },
              { i: <I.TrendingUp size={20} />, t: 'Up to 60% cheaper', s: 'vs roaming' },
              { i: <I.Gift size={20} />, t: '3% Miles back', s: 'Spend on future data' }].
              map((f, i) =>
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '10px 0' }}>
                  <span className="icon-chip" style={{ width: 40, height: 40, borderRadius: 12 }}>{f.i}</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{f.t}</div>
                    <div style={{ fontSize: 13, color: 'var(--text-3)' }}>{f.s}</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* receipt comparison card */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: -40, background: 'radial-gradient(circle at 50% 50%, rgba(0,127,255,0.18), transparent 60%)',
              filter: 'blur(40px)', pointerEvents: 'none'
            }} />
            <div className="glass-strong" style={{ padding: 32, position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <div className="mono">14-day trip · Spain · 4 GB</div>
                <span className="pill" style={{ padding: '6px 12px', fontSize: 11, background: 'rgba(62,224,162,0.12)', borderColor: 'rgba(62,224,162,0.3)', color: 'var(--mint)' }}>
                  You save $76.80
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                { name: 'Carrier roaming', sub: 'Pay-per-use', price: '84.00', dim: true },
                { name: 'Travel eSIM (5 GB pkg)', sub: '1 GB unused', price: '29.00', dim: true },
                { name: 'NeoSIM', sub: '4 GB · pay as you go', price: '7.20', hl: true }].
                map((r, i) =>
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '18px 20px', borderRadius: 16,
                  background: r.hl ? 'linear-gradient(90deg, rgba(0,127,255,0.18), rgba(0,127,255,0.05))' : 'rgba(255,255,255,0.02)',
                  border: r.hl ? '1px solid rgba(0,127,255,0.4)' : '1px solid var(--border)'
                }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 15, color: r.dim ? 'var(--text-2)' : '#fff', textDecoration: r.dim ? 'line-through' : 'none', textDecorationColor: 'rgba(255,255,255,0.3)' }}>{r.name}</div>
                      <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 2 }}>{r.sub}</div>
                    </div>
                    <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.5px', color: r.hl ? '#fff' : 'var(--text-2)', textDecoration: r.dim ? 'line-through' : 'none', textDecorationColor: 'rgba(255,255,255,0.3)' }}>
                      ${r.price}
                    </div>
                  </div>
                )}
              </div>

              <div className="divider" style={{ margin: '24px 0' }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--text-3)' }}>
                <span>Effective rate</span>
                <span className="mono" style={{ color: '#fff' }}>$1.80 / GB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 980px) { .price-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>);

}
window.Pricing = Pricing;