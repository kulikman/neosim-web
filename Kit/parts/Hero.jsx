function Hero({ tweaks }) {
  const [tab, setTab] = React.useState('data');
  const [country, setCountry] = React.useState(COUNTRIES[2]); // France
  const [days, setDays] = React.useState(7);
  const [gb, setGb] = React.useState(3);
  const [showCountries, setShowCountries] = React.useState(false);
  const [agree, setAgree] = React.useState(true);

  const pricePerGB = (country.price * 1024).toFixed(2);
  const total = (country.price * 1024 * gb).toFixed(2);

  return (
    <section style={{ position: 'relative', minHeight: 920, paddingTop: 110, overflow: 'hidden', background: '#00040c' }}>
      {/* real earth photo background */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'url(assets/earth.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat'
      }} />
      {/* tint overlay so cards stay readable — keep planet visible */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(180deg, rgba(0,6,15,0.35) 0%, rgba(0,6,15,0.15) 50%, rgba(0,10,23,0.55) 85%, var(--bg-deep) 100%)'
      }} />
      {/* subtle aurora glow on top */}
      <div className="aurora" style={{ zIndex: 2, opacity: 0.5 }} />
      {/* fade-out at bottom */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0, height: 240,
        background: 'linear-gradient(180deg, transparent, var(--bg-deep))', zIndex: 2
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 3, paddingTop: 40 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 88px 1fr', gap: 40, alignItems: 'start', paddingTop: 16 }} className="hero-grid">
          {/* LEFT: headline */}
          <div>
            <h1 className="h-display" style={{ margin: 0, marginBottom: 24 }}>
              One eSIM<br />
              <span className="gradient-text">150+ countries</span><br />
              Pay only for what you use
            </h1>
            <p className="lead" style={{ maxWidth: 480, marginBottom: 28 }}>
              Land anywhere on Earth and connect to the strongest local network — automatically. No SIM swaps, no expiring packages, no roaming bills.
            </p>

            <div style={{ display: 'flex', gap: 12, marginBottom: 36, flexWrap: 'wrap' }}>
              <a href="get-esim.html" className="btn btn-primary" style={{ paddingRight: 22 }}>
                Get free eSIM <I.ArrowRight size={16} />
              </a>
              <a href="how-it-works.html" className="btn btn-ghost">
                How it works
              </a>
            </div>
            <div className="mono" style={{ marginBottom: 36, color: 'var(--text-3)', fontSize: 12 }}>
              ✓ Works on iPhone XS+ · Pixel 4+ · Galaxy S20+ · Most flagships
            </div>

            {/* payment row */}
            <div style={{ marginBottom: 36 }}>
              <div className="caption" style={{ marginBottom: 14 }}>Top up with</div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {[
                { i: <I.Apple size={20} />, label: 'Apple Pay' },
                { i: <I.Google size={20} />, label: 'Google Pay' },
                { i: <span style={{ fontWeight: 800, fontSize: 12, letterSpacing: '0.5px' }}>VISA</span>, label: 'Visa' },
                { i: <span style={{ fontWeight: 800, fontSize: 11 }}>MC</span>, label: 'Mastercard' },
                { i: <I.Wallet size={18} />, label: 'Crypto' }].
                map((p, i) =>
                <div key={i} className="pill-icon" title={p.label} style={{ width: 52, height: 52 }}>{p.i}</div>
                )}
              </div>
            </div>

            {/* stats strip */}
            <div style={{ display: 'flex', gap: 36, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
              {[
              { v: '150+', l: 'Countries' },
              { v: '500+', l: 'Networks' },
              { v: '24/7', l: 'Support' },
              { v: '$0', l: 'eSIM fee' }].
              map((s, i) =>
              <div key={i}>
                  <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.6px' }}>{s.v}</div>
                  <div className="caption" style={{ marginTop: 2 }}>{s.l}</div>
                </div>
              )}
            </div>
          </div>

          {/* MIDDLE: vertical tabs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, paddingTop: 8 }} className="hero-tabs">
            {[
            { id: 'data', icon: <I.Wifi size={26} />, label: 'Data' },
            { id: 'wallet', icon: <I.Wallet size={22} />, label: 'Wallet' },
            { id: 'help', icon: <I.Headphones size={22} />, label: 'Support' }].
            map((t) =>
            <button key={t.id} className={`vtab ${tab === t.id ? 'active' : ''}`} onClick={() => setTab(t.id)}>
                {t.icon}
                <span>{t.label}</span>
              </button>
            )}
          </div>

          {/* RIGHT: configurator card */}
          <div className="glass-strong" style={{ padding: 32, position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, borderRadius: 28, padding: 1,
              background: 'linear-gradient(180deg, rgba(0,127,255,0.4), transparent 50%)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor', maskComposite: 'exclude', pointerEvents: 'none'
            }} />
            <div style={{ position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                <h3 className="h-3" style={{ margin: 0 }}>Build your plan</h3>
                <span className="mono" style={{ color: 'var(--mint)' }}>+ free eSIM</span>
              </div>
              <p className="body-sm" style={{ marginTop: 0, marginBottom: 26 }}>
                Pay per gigabyte. No subscriptions, no expiry. <span style={{ color: 'var(--mint)' }}>+ $2.50 welcome bonus.</span>
              </p>

              {/* segmented — single option (Always-on removed per TZ §4.1) */}
              <div className="seg" style={{ marginBottom: 18 }}>
                <button className="active"><span className="dot" /> Single trip</button>
                <button><span className="dot" /> Multi-trip</button>
              </div>

              {/* country */}
              <div style={{ position: 'relative', marginBottom: 12 }}>
                <button className="field" onClick={() => setShowCountries((s) => !s)} style={{ width: '100%', textAlign: 'left' }}>
                  <span style={{ fontSize: 22 }}>{country.flag}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, color: '#fff' }}>{country.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-3)' }}>{country.networks}</div>
                  </div>
                  <I.ChevronDown size={16} style={{ color: 'var(--text-3)', transform: showCountries ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }} />
                </button>
                {showCountries &&
                <div style={{
                  position: 'absolute', top: 'calc(100% + 8px)', left: 0, right: 0, zIndex: 20,
                  background: '#0a1424', border: '1px solid var(--border-2)', borderRadius: 18,
                  padding: 8, maxHeight: 320, overflowY: 'auto', boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
                }}>
                    {COUNTRIES.map((c) =>
                  <button key={c.code} onClick={() => {setCountry(c);setShowCountries(false);}}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 12, width: '100%',
                    padding: '10px 12px', borderRadius: 12, textAlign: 'left',
                    background: country.code === c.code ? 'rgba(0,127,255,0.12)' : 'transparent',
                    color: '#fff', fontSize: 14
                  }}
                  onMouseEnter={(e) => {if (country.code !== c.code) e.currentTarget.style.background = 'rgba(255,255,255,0.04)';}}
                  onMouseLeave={(e) => {if (country.code !== c.code) e.currentTarget.style.background = 'transparent';}}>
                        <span style={{ fontSize: 20 }}>{c.flag}</span>
                        <span style={{ flex: 1 }}>{c.name}</span>
                        <span className="mono" style={{ color: 'var(--text-3)' }}>${(c.price * 1024).toFixed(2)}/GB</span>
                      </button>
                  )}
                  </div>
                }
              </div>

              {/* swap row */}
              <div style={{ position: 'relative' }}>
                <div className="field" style={{ marginBottom: 12 }}>
                  <I.Compass size={18} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, color: 'var(--text-3)' }}>Trip length</div>
                    <div style={{ fontWeight: 600 }}>{days} days · arriving Apr 30</div>
                  </div>
                </div>
                <button className="btn-icon-light" style={{
                  position: 'absolute', right: 18, top: '50%', transform: 'translateY(-50%)',
                  width: 40, height: 40, zIndex: 2
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 10v10" /><path d="m4 13 3-3 3 3" /><path d="M17 14V4" /><path d="m20 11-3 3-3-3" />
                  </svg>
                </button>
              </div>

              {/* gb slider */}
              <div className="field" style={{ marginBottom: 12, flexDirection: 'column', alignItems: 'stretch', gap: 14, padding: 18 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: 12, color: 'var(--text-3)' }}>Estimated data</div>
                    <div style={{ fontWeight: 700, fontSize: 18 }}>{gb} GB</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 12, color: 'var(--text-3)' }}>Per GB</div>
                    <div className="mono" style={{ color: '#fff', fontSize: 13 }}>${pricePerGB}</div>
                  </div>
                </div>
                <div style={{ position: 'relative', height: 6, background: 'rgba(255,255,255,0.08)', borderRadius: 999 }}>
                  <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${gb / 15 * 100}%`,
                    background: 'linear-gradient(90deg, var(--accent), var(--accent-light))', borderRadius: 999 }} />
                  <input type="range" min="1" max="15" step="0.5" value={gb} onChange={(e) => setGb(parseFloat(e.target.value))}
                  style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', width: '100%' }} />
                  <div style={{ position: 'absolute', left: `calc(${gb / 15 * 100}% - 10px)`, top: -7, width: 20, height: 20, borderRadius: 999,
                    background: '#fff', boxShadow: '0 0 0 4px rgba(0,127,255,0.25), 0 4px 12px rgba(0,0,0,0.4)', pointerEvents: 'none' }} />
                </div>
              </div>

              {/* agree */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22, fontSize: 13, color: 'var(--text-2)' }}>
                <button onClick={() => setAgree(!agree)} className={`cb-dot ${agree ? 'on' : ''}`} style={{ position: 'relative' }}>
                  {agree && <span style={{ position: 'absolute', inset: 3, borderRadius: 999, background: '#fff' }} />}
                </button>
                I agree to the processing of personal data
              </div>

              {/* CTA row */}
              <div style={{ display: 'flex', gap: 10 }}>
                <a href="get-esim.html" className="btn btn-primary" style={{ flex: 1, height: 60, fontSize: 16 }}>
                  Get my eSIM — ${total}
                </a>
                <button className="btn-icon" style={{ width: 60, height: 60, background: '#000a17' }}>
                  <I.ArrowUpRight size={20} />
                </button>
              </div>

              <div className="mono" style={{ marginTop: 14, textAlign: 'center', color: 'var(--text-3)' }}>
                $5 minimum top-up · cancel anytime · refund unused balance<br />
                <span style={{ color: 'var(--mint)' }}>+ $2.50 welcome bonus on first connection abroad</span>
              </div>
            </div>
          </div>
        </div>

        {/* "Popular" carousel */}
        <div style={{ marginTop: 80 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
            <h2 className="h-3" style={{ margin: 0, fontSize: 36, letterSpacing: '-0.8px' }}>Popular this month</h2>
            <div style={{ display: 'flex', gap: 10 }}>
              <button className="btn-icon" style={{ width: 48, height: 48 }}><I.ChevronLeft size={18} /></button>
              <button className="btn-icon" style={{ width: 48, height: 48 }}><I.ChevronRight size={18} /></button>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }} className="popular-grid">
            {DESTINATIONS.slice(0, 4).map((d, i) =>
            <div key={d.code} className="dest-card" style={{ aspectRatio: '4/4.6' }}>
                <div className="dest-img" style={{ backgroundImage: `url(${d.img})` }} />
                <div className="dest-content">
                  <div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{d.country}</div>
                    <div className="h-4" style={{ marginTop: 2 }}>{d.city}</div>
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
      </div>

      <style>{`
        @media (max-width: 1180px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-tabs { flex-direction: row !important; }
        }
        @media (max-width: 720px) {
          .popular-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>);

}

window.Hero = Hero;