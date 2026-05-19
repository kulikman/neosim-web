// Simple page wrapper for stubby content pages
function SimplePage({ caption, title, subtitle, currentPath, children, narrow }) {
  return (
    <>
      <Nav currentPath={currentPath} />
      <section style={{ padding: '140px 0 80px', minHeight: '100vh', position: 'relative' }}>
        <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
        <div className="aurora" style={{ opacity: 0.3 }} />
        <div className="container" style={{ position: 'relative', maxWidth: narrow ? 760 : 1100 }}>
          <a href="index.html" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--text-3)', fontSize: 13, marginBottom: 32 }}>
            <I.ArrowLeft size={14} /> Back to home
          </a>
          {caption && <div className="caption" style={{ color: '#66b7ff', marginBottom: 16 }}>{caption}</div>}
          <h1 className="h-1" style={{ margin: 0, marginBottom: 16 }}>{title}</h1>
          {subtitle && <p className="lead" style={{ marginBottom: 48, maxWidth: 640 }}>{subtitle}</p>}
          {children}
        </div>
      </section>
      <Footer />
    </>
  );
}
window.SimplePage = SimplePage;
