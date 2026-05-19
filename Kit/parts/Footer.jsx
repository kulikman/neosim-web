function Footer({ tweaks }) {
  return (
    <footer style={{ position: 'relative', overflow: 'hidden', paddingTop: 120, paddingBottom: 40 }}>
      <div className="aurora" style={{ opacity: 0.6 }} />
      <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
      <div className="container" style={{ position: 'relative' }}>
        {/* mega CTA */}
        <div className="glass-strong" style={{
          padding: '64px 56px', position: 'relative', overflow: 'hidden',
          background: 'linear-gradient(135deg, rgba(0,127,255,0.18), rgba(0,127,255,0.04))',
          border: '1px solid rgba(0,127,255,0.3)'
        }}>
          <div style={{
            position: 'absolute', right: -120, top: -120, width: 480, height: 480, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,127,255,0.4), transparent 60%)',
            filter: 'blur(60px)'
          }} />
          <div className="cta-grid" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <h2 className="h-1" style={{ margin: 0, marginBottom: 18 }}>
                Your next trip<br /><span className="gradient-text">starts on NeoSIM</span>
              </h2>
              <p className="lead" style={{ maxWidth: 540 }}>
                Free eSIM. Free delivery. Pay only for the gigabytes you use, in 150+ countries. <span style={{ color: 'var(--mint)' }}>+ $2.50 welcome bonus on first connection.</span>
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="get-esim.html" className="btn btn-primary" style={{ height: 60, fontSize: 16 }}>
                Get my free eSIM <I.ArrowRight size={18} />
              </a>
              <a href="coverage.html" className="btn btn-ghost" style={{ height: 60, fontSize: 16 }}>
                <I.QrCode size={18} /> See coverage map
              </a>
            </div>
          </div>
        </div>

        {/* footer rows */}
        <div className="footer-grid" style={{ marginTop: 80, display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 800, fontSize: 22, marginBottom: 16 }}>
              <span style={{
                width: 32, height: 32, borderRadius: 10,
                background: 'linear-gradient(135deg, #007FFF, #1a90ff)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <I.Globe size={18} strokeWidth={2.2} />
              </span>
              NeoSIM
            </div>
            <p className="body-sm" style={{ maxWidth: 320, marginBottom: 20 }}>
              The world's first fully digital mobile operator for travelers. Powered by 2SkyMobile wholesale infrastructure.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              {['X', 'in', 'Ig', 'Tg'].map((s) =>
              <button key={s} className="btn-icon" style={{ width: 40, height: 40, fontSize: 12, fontWeight: 600 }}>{s}</button>
              )}
            </div>
          </div>
          {[
          { t: 'Product', l: [['Coverage', 'coverage.html'], ['How it works', 'how-it-works.html'], ['Loyalty', 'coming-soon.html?feature=loyalty'], ['Referral', 'coming-soon.html?feature=referral'], ['Family Wallet', 'coming-soon.html?feature=family'], ['Get free eSIM', 'get-esim.html'], ['Top up', 'topup.html']] },
          { t: 'Company', l: [['About', 'about.html'], ['Privacy Manifesto', 'privacy-manifesto.html'], ['Press', 'contact.html'], ['Careers', '#'], ['Contact', 'contact.html']] },
          { t: 'Support', l: [['FAQ', 'faq.html'], ['eSIM compatibility', 'faq.html'], ['Network status', '#'], ['Terms', 'terms.html'], ['Privacy Policy', 'privacy.html']] }].
          map((c, i) =>
          <div key={i}>
              <div className="caption" style={{ color: 'var(--text-3)', marginBottom: 16 }}>{c.t}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {c.l.map(([txt, url]) =>
              <li key={txt}><a href={url} style={{ color: 'var(--text-2)', fontSize: 14 }}>{txt}</a></li>
              )}
              </ul>
            </div>
          )}
        </div>

        <div className="divider" style={{ margin: '56px 0 24px' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, fontSize: 12, color: 'var(--text-3)' }}>
          <span>© 2026 NeoSIM 
</span>
          <span>Made for travelers · Built by 2SkyMobile</span>
        </div>
      </div>
      <style>{`
        @media (max-width: 980px) {
          .cta-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>);
}
window.Footer = Footer;