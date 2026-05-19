function Destinations({ tweaks }) {
  const [filter, setFilter] = React.useState('All');
  const filters = ['All', 'Europe', 'Asia', 'Americas', 'Middle East'];

  return (
    <section id="coverage" className="section-pad" style={{ background: '#00060f', position: 'relative' }}>
      <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 48 }}>
          <div>
            <div className="caption" style={{ color: '#66b7ff', marginBottom: 16 }}>Coverage</div>
            <h2 className="h-1" style={{ margin: 0, maxWidth: 720 }}>
              150+ countries<br />One transparent rate per GB
            </h2>
          </div>
          <button className="btn btn-ghost" style={{ height: 52 }}>
            All destinations <I.ArrowRight size={16} />
          </button>
        </div>

        {/* filter row */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
          {filters.map((f) =>
          <button key={f} onClick={() => setFilter(f)} className="pill" style={{
            padding: '10px 20px',
            background: filter === f ? '#fff' : 'rgba(255,255,255,0.04)',
            color: filter === f ? '#000a17' : 'rgba(255,255,255,0.85)',
            borderColor: filter === f ? '#fff' : 'rgba(255,255,255,0.08)',
            cursor: 'pointer'
          }}>
              {f}
            </button>
          )}
          <div style={{ flex: 1 }} />
          <button className="pill" style={{ paddingLeft: 14 }}>
            <I.Search size={14} /> Find country
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }} className="dest-grid">
          {DESTINATIONS.map((d) =>
          <div key={d.code} className="dest-card">
              <div className="dest-img" style={{ backgroundImage: `url(${d.img})` }} />
              <div className="dest-content">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)' }}>{d.country}</div>
                    <div className="h-4" style={{ marginTop: 2 }}>{d.city}</div>
                  </div>
                  {d.popular &&
                <span style={{
                  background: 'rgba(0,127,255,0.18)', color: '#9bc9ff',
                  padding: '5px 11px', borderRadius: 999, fontSize: 11, fontWeight: 600,
                  border: '1px solid rgba(0,127,255,0.3)', backdropFilter: 'blur(8px)',
                  whiteSpace: 'nowrap'
                }}>{d.popular}</span>
                }
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                  <div style={{
                  background: 'rgba(255,255,255,0.92)', color: '#000a17',
                  padding: '8px 14px', borderRadius: 999, fontSize: 13, fontWeight: 600
                }}>
                    ${(d.price * 1024).toFixed(2)}<span style={{ color: 'rgba(0,10,23,0.6)', fontWeight: 500 }}>/GB</span>
                  </div>
                  <button className="btn-icon" style={{ width: 40, height: 40, background: 'rgba(0,10,23,0.6)', backdropFilter: 'blur(8px)' }}>
                    <I.ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <style>{`
        @media (max-width: 980px) { .dest-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>);

}
window.Destinations = Destinations;