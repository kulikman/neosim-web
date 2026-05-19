// Generic legal/policy stub used by privacy.html and terms.html
function PolicyPage({ title, updated, currentPath, sections }) {
  return (
    <SimplePage
      currentPath={currentPath}
      caption="Legal"
      title={title}
      subtitle={`Last updated ${updated}. Plain-English summary at the top of each section. Full legal text in the dropdowns.`}
      narrow
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 40 }}>
        {sections.map((s, i) => (
          <div key={s.t} className="glass" style={{ padding: 28 }}>
            <div style={{ display: 'flex', gap: 16, marginBottom: 12 }}>
              <div className="mono" style={{ minWidth: 40 }}>{String(i+1).padStart(2,'0')}</div>
              <div style={{ flex: 1 }}>
                <h3 className="h-4" style={{ margin: 0, marginBottom: 8 }}>{s.t}</h3>
                <div style={{ padding: 12, borderRadius: 10, background: 'rgba(0,127,255,0.08)', border: '1px solid rgba(0,127,255,0.2)', marginBottom: 12 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#66b7ff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Plain-English</span>
                  <div style={{ fontSize: 14, color: 'var(--text-2)', marginTop: 4 }}>{s.short}</div>
                </div>
                <p className="body-sm" style={{ margin: 0 }}>{s.long}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: 24, borderRadius: 14, border: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)', fontSize: 13, color: 'var(--text-3)' }}>
        Questions? Email <a href="mailto:legal@neosim.com" style={{ color: 'var(--accent-light)' }}>legal@neosim.com</a>. We respond within 30 days under GDPR Article 12.
      </div>
    </SimplePage>
  );
}
window.PolicyPage = PolicyPage;
