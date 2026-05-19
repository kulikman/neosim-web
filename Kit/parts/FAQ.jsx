function FAQ({ tweaks }) {
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" className="section-pad" style={{ background: '#00060f', position: 'relative' }}>
      <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
      <div className="container" style={{ position: 'relative', maxWidth: 920 }}>
        <div style={{ marginBottom: 48 }}>
          <div className="caption" style={{ color: '#66b7ff', marginBottom: 16 }}>FAQ</div>
          <h2 className="h-1" style={{ margin: 0 }}>
            The <span className="gradient-text">small print</span>, made plain
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="glass" style={{ overflow: 'hidden', borderRadius: 22 }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                  width: '100%', padding: '24px 28px', display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between', textAlign: 'left', gap: 16
                }}>
                  <span style={{ fontWeight: 600, fontSize: 17, color: '#fff' }}>{f.q}</span>
                  <span style={{
                    width: 36, height: 36, borderRadius: 999, flexShrink: 0,
                    background: isOpen ? 'var(--accent)' : 'rgba(255,255,255,0.06)',
                    color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all .2s'
                  }}>
                    {isOpen ? <I.Minus size={16} /> : <I.Plus size={16} />}
                  </span>
                </button>
                {isOpen && (
                  <div style={{ padding: '0 28px 24px', color: 'var(--text-2)', fontSize: 15, lineHeight: 1.6, maxWidth: 700 }}>
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
window.FAQ = FAQ;
