function Wallet({ tweaks }) {
  const [screen, setScreen] = React.useState('home');
  const [paused, setPaused] = React.useState(false);
  const screens = [
  { id: 'home', label: 'Home', icon: <I.Globe size={12} /> },
  { id: 'wallet', label: 'Wallet', icon: <I.Wallet size={12} /> },
  { id: 'speed', label: 'Speed', icon: <I.Zap size={12} /> },
  { id: 'plans', label: 'Plans', icon: <I.Plus size={12} /> }];


  // Auto-rotate every 4s, pause on hover
  React.useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => {
      setScreen((s) => {
        const i = screens.findIndex((x) => x.id === s);
        return screens[(i + 1) % screens.length].id;
      });
    }, 4000);
    return () => clearTimeout(t);
  }, [screen, paused]);

  const themes = {
    home: { glow: 'rgba(0,127,255,0.32)', accent: '#007fff', label: 'Discover' },
    wallet: { glow: 'rgba(62,224,162,0.30)', accent: '#3ee0a2', label: 'Balance' },
    speed: { glow: 'rgba(255,140,40,0.30)', accent: '#ff8c28', label: 'Live test' },
    plans: { glow: 'rgba(160,100,255,0.32)', accent: '#a064ff', label: 'Coverage' }
  };
  const theme = themes[screen];

  // Surrounding cards per screen
  const cardSets = {
    home: [
    { pos: { left: '4%', top: '6%' }, w: 200, type: 'iconRow' },
    { pos: { left: '5%', top: '26%' }, w: 220, type: 'country', data: { flag: '🇩🇪', city: 'Berlin', net: 'Vodafone · 5G', price: '$1.80' } },
    { pos: { left: '3%', top: '50%' }, w: 200, type: 'map' },
    { pos: { right: '6%', top: '4%' }, w: 240, type: 'cityImage', data: { flag: '🇵🇱', city: 'Warsaw, Poland' } },
    { pos: { right: '6%', top: '34%' }, w: 220, type: 'flight' },
    { pos: { right: '32%', top: '-2%' }, w: 230, type: 'toast', data: { title: 'Connected to T-Mobile', sub: 'just now', icon: <I.Wifi size={14} /> } },
    { pos: { right: '8%', bottom: '4%' }, w: 200, type: 'usage' }],

    wallet: [
    { pos: { left: '3%', top: '8%' }, w: 220, type: 'miles' },
    { pos: { left: '4%', top: '32%' }, w: 210, type: 'topup', data: { method: 'Apple Pay', amt: '+$50.00' } },
    { pos: { left: '6%', bottom: '8%' }, w: 200, type: 'usage' },
    { pos: { right: '6%', top: '6%' }, w: 220, type: 'card', data: { num: '•• 4521', name: 'NeoSIM Wallet' } },
    { pos: { right: '4%', top: '34%' }, w: 220, type: 'transaction', data: { flag: '🇮🇹', city: 'Rome', amt: '−$22.10' } },
    { pos: { right: '7%', bottom: '6%' }, w: 210, type: 'transaction', data: { flag: '🇪🇸', city: 'Barcelona', amt: '−$8.76' } },
    { pos: { right: '32%', top: '-2%' }, w: 230, type: 'toast', data: { title: 'Miles +$1.50 added', sub: 'just now', icon: <I.Gift size={14} />, mint: true } }],

    speed: [
    { pos: { left: '4%', top: '6%' }, w: 220, type: 'speedBig' },
    { pos: { left: '3%', top: '36%' }, w: 200, type: 'pingChart' },
    { pos: { left: '5%', bottom: '8%' }, w: 210, type: 'tower' },
    { pos: { right: '5%', top: '6%' }, w: 220, type: 'network', data: { name: 'T-Mobile · 5G', signal: 4 } },
    { pos: { right: '4%', top: '34%' }, w: 220, type: 'latency' },
    { pos: { right: '7%', bottom: '6%' }, w: 200, type: 'history' },
    { pos: { right: '32%', top: '-2%' }, w: 230, type: 'toast', data: { title: '5G connected · 184 Mbps', sub: 'just now', icon: <I.Zap size={14} />, accent: '#ff8c28' } }],

    plans: [
    { pos: { left: '4%', top: '6%' }, w: 220, type: 'country', data: { flag: '🇫🇷', city: 'Paris', net: 'Orange · 5G', price: '$1.80' } },
    { pos: { left: '3%', top: '30%' }, w: 220, type: 'country', data: { flag: '🇯🇵', city: 'Tokyo', net: 'NTT · 5G', price: '$3.73' } },
    { pos: { left: '6%', bottom: '6%' }, w: 220, type: 'country', data: { flag: '🇺🇸', city: 'New York', net: 'T-Mobile · 5G', price: '$2.07' } },
    { pos: { right: '6%', top: '4%' }, w: 240, type: 'cityImage', data: { flag: '🇬🇧', city: 'London, UK' } },
    { pos: { right: '5%', top: '36%' }, w: 220, type: 'country', data: { flag: '🇪🇸', city: 'Barcelona', net: 'Movistar · 5G', price: '$1.80' } },
    { pos: { right: '7%', bottom: '6%' }, w: 210, type: 'globeStat' },
    { pos: { right: '32%', top: '-2%' }, w: 230, type: 'toast', data: { title: '150+ countries available', sub: 'updated daily', icon: <I.Globe size={14} />, accent: '#a064ff' } }]

  };

  return (
    <section id="wallet" className="section-pad" style={{ background: '#00060f', position: 'relative', overflow: 'hidden' }}>
      <div className="aurora" style={{ opacity: 0.45 }} />
      <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />

      {/* radial glow tied to active screen */}
      <div key={'glow-' + screen} style={{
        position: 'absolute', left: '50%', top: '58%', transform: 'translate(-50%,-50%)',
        width: 900, height: 900, borderRadius: '50%',
        background: `radial-gradient(circle, ${theme.glow}, transparent 60%)`,
        filter: 'blur(40px)', pointerEvents: 'none', transition: 'background 0.8s ease',
        animation: 'glowPulse 1.2s ease'
      }} />

      <div className="container" style={{ position: 'relative' }}>
        {/* heading */}
        <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 56px' }}>
          <div className="caption" style={{ color: '#66b7ff', marginBottom: 16 }}>Wallet app</div>
          <h2 className="h-1" style={{ margin: 0, marginBottom: 18 }}>
            One wallet. 150+ countries<br />
            <span className="gradient-text">Every trip</span>
          </h2>
          <p className="lead" style={{ margin: '0 auto', maxWidth: 540 }}>
            Tap any screen below — see how every megabyte, top-up and speed update flows through the app in real time.
          </p>
        </div>

        {/* screen tabs */}
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 36, flexWrap: 'wrap' }}>
          {screens.map((s) =>
          <button key={s.id} onClick={() => setScreen(s.id)}
          className={'screen-tab ' + (screen === s.id ? 'active' : '')}>
              {s.icon} {s.label}
            </button>
          )}
        </div>

        {/* hand + phone composition */}
        <div className="wallet-stage" style={{
          position: 'relative', height: 720, maxWidth: 1180, margin: '0 auto'
        }}>
          {/* dynamic surrounding cards */}
          {(cardSets[screen] || []).map((c, i) =>
          <div key={screen + '-' + i}
          className="mini-card hover-pop card-anim"
          style={{ position: 'absolute', ...c.pos, width: c.w, padding: c.type === 'cityImage' ? 0 : 14, overflow: c.type === 'cityImage' ? 'hidden' : 'visible', cursor: 'pointer', animationDelay: i * 60 + 'ms' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}>
              <MiniCardBody type={c.type} data={c.data} accent={theme.accent} />
            </div>
          )}

          {/* connect button — bottom-left */}
          <div style={{ position: 'absolute', left: '11%', bottom: '8%', textAlign: 'center', width: 180 }} className="hide-md">
            <div style={{ width: 56, height: 56, borderRadius: 999, background: 'linear-gradient(135deg, var(--accent), var(--accent-light))', margin: '0 auto 14px',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 0 6px rgba(0,127,255,0.18), 0 0 0 14px rgba(0,127,255,0.08), 0 0 30px rgba(0,127,255,0.6)',
              animation: 'pulse-soft 2.6s ease-out infinite' }}>
              <I.Plane size={22} />
            </div>
            <div style={{ fontSize: 11, color: 'var(--text-3)', lineHeight: 1.5 }}>Easy-to-read typography<br />and clear call to action</div>
          </div>

          {/* CENTER — hand + phone */}
          <div style={{ position: 'absolute', left: '50%', top: 0, transform: 'translateX(-50%)', width: 320, height: '100%' }}>
            {/* hand */}
            <div style={{
              position: 'absolute', left: '50%', bottom: -40, transform: 'translateX(-50%)',
              width: 460, height: 380, pointerEvents: 'none'
            }}>
              <svg viewBox="0 0 460 380" width="460" height="380" style={{ position: 'absolute', inset: 0 }}>
                <defs>
                  <linearGradient id="handGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0a1830" />
                    <stop offset="60%" stopColor="#050d20" />
                    <stop offset="100%" stopColor="#02060f" />
                  </linearGradient>
                  <radialGradient id="handGlow" cx="50%" cy="40%" r="60%">
                    <stop offset="0%" stopColor="rgba(0,127,255,0.4)" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                </defs>
                <path d="M 110 380 Q 130 220 220 200 Q 280 195 320 220 Q 360 250 380 380 Z" fill="url(#handGrad)" opacity="0.95" />
                <ellipse cx="230" cy="180" rx="160" ry="100" fill="url(#handGlow)" />
                <path d="M 175 230 Q 165 200 180 195 Q 200 195 205 215 L 200 240 Z" fill="#0a1830" opacity="0.92" />
                <path d="M 165 270 Q 152 240 168 232 Q 188 232 195 252 L 190 280 Z" fill="#0a1830" opacity="0.85" />
                <path d="M 270 220 Q 285 195 300 200 Q 315 210 308 230 L 290 240 Z" fill="#0a1830" opacity="0.85" />
              </svg>
            </div>

            {/* PHONE */}
            <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
            style={{
              position: 'absolute', left: '50%', top: 30, transform: 'translateX(-50%)',
              width: 280, height: 580, borderRadius: 44,
              background: 'linear-gradient(180deg, #0a1424, #02060f)',
              border: '2px solid rgba(255,255,255,0.08)',
              boxShadow: `0 30px 80px ${theme.glow}, 0 0 0 1px ${theme.accent}33, inset 0 1px 0 rgba(255,255,255,0.08)`,
              padding: 8, zIndex: 2, transition: 'box-shadow 0.6s ease'
            }}>
              <div style={{
                width: '100%', height: '100%', borderRadius: 36, overflow: 'hidden',
                background: 'linear-gradient(180deg, #050d20 0%, #0a1830 60%, #001033 100%)',
                position: 'relative'
              }}>
                {/* notch */}
                <div style={{ position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)', width: 90, height: 22, borderRadius: 999, background: '#000', zIndex: 5 }} />

                {/* status row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 22px 0', fontSize: 12, fontWeight: 600 }}>
                  <span>9:41</span>
                  <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                    <I.Signal size={11} /><I.Wifi size={11} /><I.Battery size={16} />
                  </div>
                </div>

                {/* SCREEN STATES */}
                <div key={screen} className="phone-screen-anim" style={{ height: 'calc(100% - 30px)' }}>
                  {screen === 'home' && <PhoneHome />}
                  {screen === 'wallet' && <PhoneWallet />}
                  {screen === 'speed' && <PhoneSpeed />}
                  {screen === 'plans' && <PhonePlans />}
                </div>

                {/* bottom nav */}
                <div style={{ position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 4, padding: 4, borderRadius: 999, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(10px)', zIndex: 4 }}>
                  {screens.map((s) =>
                  <button key={s.id} onClick={() => setScreen(s.id)}
                  style={{
                    width: 38, height: 30, borderRadius: 999,
                    background: screen === s.id ? '#fff' : 'transparent',
                    color: screen === s.id ? '#000a17' : 'var(--text-3)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s'
                  }}>
                      {s.icon}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* features below */}
        <div style={{ marginTop: 80, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="wallet-feats">
          {[
          { i: <I.Wallet size={20} />, t: 'Live usage tracking', s: 'Watch your balance update with each MB. Set spend caps and instant alerts.' },
          { i: <I.Gift size={20} />, t: '3% Miles back, always', s: 'Redeem as free data. Top-ups via Apple/Google Pay or card earn Miles automatically.' },
          { i: <I.Apple size={20} />, t: 'One-tap top-ups', s: 'Apple Pay, Google Pay, Visa, Mastercard, USDT. From $5.' }].
          map((f, i) =>
          <div key={i} className="glass" style={{ padding: 28 }}>
              <span className="icon-chip" style={{ marginBottom: 18 }}>{f.i}</span>
              <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 6 }}>{f.t}</div>
              <div style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.55 }}>{f.s}</div>
            </div>
          )}
        </div>

        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 40 }}>
          <button className="btn btn-primary" style={{ paddingLeft: 18, height: 52 }}><I.Apple size={18} /> App Store</button>
          <button className="btn btn-ghost" style={{ paddingLeft: 18, height: 52 }}><I.Google size={18} /> Google Play</button>
        </div>
      </div>

      <style>{`
        .mini-card {
          padding: 14px;
          border-radius: 18px;
          background: rgba(10, 22, 42, 0.7);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1px solid rgba(255,255,255,0.06);
          box-shadow: 0 8px 30px rgba(0,0,0,0.4);
          z-index: 3;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .hover-pop:hover {
          transform: translateY(-3px) scale(1.02);
          border-color: rgba(0,127,255,0.4);
          box-shadow: 0 12px 40px rgba(0,127,255,0.25);
        }
        .screen-tab {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 16px; border-radius: 999px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: var(--text-2); font-size: 13px; font-weight: 600;
          cursor: pointer; transition: all 0.2s;
        }
        .screen-tab:hover { border-color: rgba(0,127,255,0.4); color: #fff; }
        .screen-tab.active {
          background: #fff; color: #000a17; border-color: #fff;
        }
        @keyframes pulse-soft {
          0% { box-shadow: 0 0 0 0 rgba(0,127,255,0.4), 0 0 0 0 rgba(0,127,255,0.2), 0 0 30px rgba(0,127,255,0.6); }
          100% { box-shadow: 0 0 0 18px rgba(0,127,255,0), 0 0 0 32px rgba(0,127,255,0), 0 0 30px rgba(0,127,255,0.6); }
        }
        @keyframes screenIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .phone-screen-anim { animation: screenIn 0.35s ease; }
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(14px) scale(0.94); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .card-anim { animation: cardIn 0.55s cubic-bezier(0.2, 0.8, 0.2, 1) backwards; }
        @keyframes glowPulse {
          0% { opacity: 0.4; transform: translate(-50%,-50%) scale(0.85); }
          50% { opacity: 1; }
          100% { opacity: 1; transform: translate(-50%,-50%) scale(1); }
        }
        @media (max-width: 820px) {
          .wallet-stage { height: 620px; }
          .wallet-stage .mini-card { display: none; }
          .hide-md { display: none; }
        }
        @media (max-width: 700px) {
          .wallet-feats { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>);

}

/* ===== Phone screens ===== */
function PhoneHome() {
  return (
    <>
      <div style={{ padding: '20px 22px 6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 800, letterSpacing: '-0.3px' }}>NeoSIM</div>
        <span style={{ width: 24, height: 24, borderRadius: 999, background: 'rgba(255,255,255,0.08)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><I.Plus size={12} /></span>
      </div>
      <div style={{ padding: '8px 22px 14px' }}>
        <div style={{ fontSize: 26, fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.5px' }}>Connect<br />& Travel</div>
        <div style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 6 }}>One eSIM · 150+ countries</div>
      </div>
      <div style={{ padding: '0 22px 16px', display: 'flex', gap: 6 }}>
        {[<I.Globe size={11} />, <I.Wallet size={11} />, <I.Zap size={11} />, <I.Signal size={11} />].map((ic, i) =>
        <span key={i} style={{ width: 28, height: 28, borderRadius: 999, background: 'rgba(255,255,255,0.06)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-2)' }}>{ic}</span>
        )}
      </div>
      <div style={{
        margin: '0 14px', borderRadius: 22, padding: 14, position: 'relative',
        background: 'radial-gradient(circle at 70% 80%, rgba(0,127,255,0.45), rgba(0,15,45,0.9))',
        border: '1px solid rgba(0,127,255,0.3)',
        height: 240, overflow: 'hidden'
      }}>
        <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 10 }}>Popular</div>
        <div style={{ position: 'absolute', right: -40, bottom: -40, width: 180, height: 180, borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, #1a4080, #001033 70%)',
          boxShadow: 'inset 12px -12px 30px rgba(0,0,0,0.7), 0 0 60px rgba(0,127,255,0.4)' }} />
        <div style={{ position: 'absolute', left: 16, top: 60, width: '70%', borderRadius: 14, padding: 10,
          background: 'rgba(8,16,32,0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 14 }}>🇯🇵</span>
            <div style={{ fontWeight: 600, fontSize: 12 }}>Tokyo, Japan</div>
          </div>
        </div>
        <div style={{ position: 'absolute', right: 16, bottom: 50, padding: '8px 14px', borderRadius: 999, background: '#fff', color: '#000a17', fontSize: 12, fontWeight: 800 }}>$2.40</div>
      </div>
    </>);

}

function PhoneWallet() {
  return (
    <>
      <div style={{ padding: '20px 22px 6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 800, fontSize: 14 }}>Wallet</div>
        <span style={{ width: 24, height: 24, borderRadius: 999, background: 'rgba(255,255,255,0.08)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><I.Plus size={12} /></span>
      </div>
      <div style={{ padding: '6px 22px 14px' }}>
        <div style={{ fontSize: 11, color: 'var(--text-3)' }}>Available balance</div>
        <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-1px' }}>$48.<span style={{ color: 'var(--text-3)', fontWeight: 600 }}>27</span></div>
      </div>
      <div style={{ padding: '0 14px' }}>
        <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
          <button style={{ flex: 1, height: 36, borderRadius: 12, background: '#fff', color: '#000a17', fontSize: 11, fontWeight: 700 }}>Top up</button>
          <button style={{ flex: 1, height: 36, borderRadius: 12, background: 'rgba(255,255,255,0.06)', color: '#fff', fontSize: 11, fontWeight: 600, border: '1px solid rgba(255,255,255,0.08)' }}>Send</button>
        </div>
        {[
        { f: '🇮🇹', city: 'Rome', mb: '1.2 GB', amt: '−$22.10' },
        { f: '🇪🇸', city: 'Barcelona', mb: '480 MB', amt: '−$8.76' },
        { f: '+', city: 'Apple Pay', mb: '+3% Miles back', amt: '+$50.00', hl: true },
        { f: '🇯🇵', city: 'Tokyo', mb: '320 MB', amt: '−$6.12' }].
        map((r, i) =>
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 8px', borderRadius: 8 }}>
            <span style={{ width: 26, height: 26, borderRadius: 8,
            background: r.hl ? 'rgba(62,224,162,0.15)' : 'rgba(255,255,255,0.05)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 11,
            color: r.hl ? 'var(--mint)' : '#fff' }}>{r.f}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 600, fontSize: 11 }}>{r.city}</div>
              <div style={{ fontSize: 9, color: r.hl ? 'var(--mint)' : 'var(--text-3)' }}>{r.mb}</div>
            </div>
            <div className="mono" style={{ fontSize: 10, color: r.hl ? 'var(--mint)' : '#fff' }}>{r.amt}</div>
          </div>
        )}
      </div>
    </>);

}

function PhoneSpeed() {
  return (
    <>
      <div style={{ padding: '20px 22px 6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 800, fontSize: 14 }}>Speed test</div>
        <span style={{ fontSize: 10, color: 'var(--mint)', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--mint)', boxShadow: '0 0 8px var(--mint)' }} />LIVE
        </span>
      </div>
      <div style={{ padding: '20px 22px', textAlign: 'center' }}>
        <div style={{ position: 'relative', width: 180, height: 180, margin: '0 auto' }}>
          <svg viewBox="0 0 180 180" style={{ position: 'absolute', inset: 0 }}>
            <circle cx="90" cy="90" r="78" stroke="rgba(255,255,255,0.06)" strokeWidth="10" fill="none" />
            <circle cx="90" cy="90" r="78" stroke="url(#speedGrad)" strokeWidth="10" fill="none" strokeLinecap="round"
            strokeDasharray="490" strokeDashoffset="120" transform="rotate(-90 90 90)" />
            <defs>
              <linearGradient id="speedGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#007fff" /><stop offset="100%" stopColor="#3ee0a2" />
              </linearGradient>
            </defs>
          </svg>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-1.5px' }}>184</div>
            <div style={{ fontSize: 10, color: 'var(--text-3)' }}>Mbps · 5G</div>
          </div>
        </div>
      </div>
      <div style={{ padding: '0 22px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
        {[
        { l: 'Down', v: '184', u: 'Mbps' },
        { l: 'Up', v: '42', u: 'Mbps' },
        { l: 'Ping', v: '47', u: 'ms' }].
        map((s, i) =>
        <div key={i} style={{ padding: 10, borderRadius: 12, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: 9, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.l}</div>
            <div style={{ fontWeight: 800, fontSize: 16, marginTop: 2 }}>{s.v} <span style={{ fontSize: 9, color: 'var(--text-3)', fontWeight: 500 }}>{s.u}</span></div>
          </div>
        )}
      </div>
    </>);

}

function PhonePlans() {
  const items = [
  { f: '🇫🇷', city: 'Paris', net: 'Orange · 5G', price: '$1.80' },
  { f: '🇩🇪', city: 'Berlin', net: 'Vodafone · 5G', price: '$1.80' },
  { f: '🇯🇵', city: 'Tokyo', net: 'NTT · 5G', price: '$3.73' },
  { f: '🇺🇸', city: 'New York', net: 'T-Mobile · 5G', price: '$2.07' },
  { f: '🇬🇧', city: 'London', net: 'EE · 5G', price: '$1.80' }];

  return (
    <>
      <div style={{ padding: '20px 22px 6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 800, fontSize: 14 }}>Plans</div>
        <span style={{ width: 24, height: 24, borderRadius: 999, background: 'rgba(255,255,255,0.08)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><I.Globe size={12} /></span>
      </div>
      <div style={{ padding: '6px 22px 10px' }}>
        <div style={{ height: 32, borderRadius: 999, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', padding: '0 12px', fontSize: 11, color: 'var(--text-3)' }}>
          <I.Globe size={11} /> <span style={{ marginLeft: 8 }}>Search 150+ countries</span>
        </div>
      </div>
      <div style={{ padding: '0 14px' }}>
        {items.map((p, i) =>
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 10px', borderRadius: 12,
          background: i === 1 ? 'rgba(0,127,255,0.12)' : 'transparent',
          border: i === 1 ? '1px solid rgba(0,127,255,0.3)' : '1px solid transparent', marginBottom: 4 }}>
            <span style={{ fontSize: 16 }}>{p.f}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 600 }}>{p.city}</div>
              <div style={{ fontSize: 9, color: 'var(--text-3)' }}>{p.net}</div>
            </div>
            <div className="mono" style={{ fontSize: 11, fontWeight: 700 }}>{p.price}<span style={{ fontSize: 8, color: 'var(--text-3)' }}>/GB</span></div>
          </div>
        )}
      </div>
    </>);

}

window.Wallet = Wallet;

/* ===== MiniCardBody — surrounding cards ===== */
function MiniCardBody({ type, data, accent }) {
  if (type === 'iconRow') return (
    <>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        {[<I.Wallet size={12} />, <I.Signal size={12} />, <I.Zap size={12} />, <I.Gift size={12} />].map((ic, i) =>
        <span key={i} style={{ width: 26, height: 26, borderRadius: 999, background: 'rgba(255,255,255,0.05)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-2)' }}>{ic}</span>
        )}
      </div>
      <button style={{ width: '100%', height: 36, borderRadius: 999, background: '#fff', color: '#000a17', fontSize: 12, fontWeight: 700 }}>Get free eSIM</button>
    </>);

  if (type === 'country') return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <span style={{ fontSize: 18 }}>{data.flag}</span>
        <div style={{ fontWeight: 600, fontSize: 13 }}>{data.city}</div>
      </div>
      <div style={{ fontSize: 11, color: 'var(--text-3)', marginBottom: 6 }}>{data.net}</div>
      <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.5px' }}>{data.price}<span style={{ fontSize: 11, color: 'var(--text-3)', fontWeight: 500 }}> / GB</span></div>
    </>);

  if (type === 'map') return (
    <>
      <div className="mono" style={{ fontSize: 10, color: 'var(--text-3)', marginBottom: 8 }}>NEAREST TOWER</div>
      <div style={{ height: 80, borderRadius: 12, background: 'linear-gradient(135deg, #0a1830, #001a40)', position: 'relative', overflow: 'hidden', marginBottom: 8 }}>
        <svg viewBox="0 0 200 80" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <path d="M 0 50 Q 50 20 100 40 T 200 30" stroke={accent + '99'} fill="none" strokeWidth="1.5" strokeDasharray="2 3" />
          <circle cx="60" cy="38" r="3" fill="#3ee0a2" />
          <circle cx="140" cy="34" r="5" fill={accent} />
          <circle cx="140" cy="34" r="10" fill={accent + '55'} />
        </svg>
      </div>
      <div style={{ fontSize: 11, color: 'var(--text-3)' }}>0.4 km · 47 ms</div>
    </>);

  if (type === 'cityImage') return (
    <>
      <div style={{ padding: 14, paddingBottom: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 16 }}>{data.flag}</span>
          <div style={{ fontWeight: 600, fontSize: 13 }}>{data.city}</div>
        </div>
      </div>
      <div style={{ height: 100, background: `linear-gradient(135deg, ${accent}55, #001033)`, position: 'relative', overflow: 'hidden' }}>
        <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
        <div style={{ position: 'absolute', right: 10, top: 10, width: 50, height: 50, borderRadius: '50%',
          background: `radial-gradient(circle at 30% 30%, ${accent}, #001033)`, opacity: 0.85 }} />
      </div>
    </>);

  if (type === 'flight') return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: 18 }}>12:00 AM</div>
          <div style={{ fontSize: 11, color: 'var(--text-3)' }}>Flight Duration<br />5 hours 25 minutes</div>
        </div>
        <span style={{ width: 36, height: 36, borderRadius: 999, background: `linear-gradient(135deg, ${accent}, #66b7ff)`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><I.ArrowRight size={16} /></span>
      </div>
      <button style={{ width: '100%', height: 36, borderRadius: 999, background: '#fff', color: '#000a17', fontSize: 12, fontWeight: 700 }}>Connect now</button>
    </>);

  if (type === 'toast') return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <span style={{ width: 30, height: 30, borderRadius: 8,
        background: data.mint ? 'rgba(62,224,162,0.15)' : data.accent ? data.accent + '22' : 'rgba(0,127,255,0.15)',
        color: data.mint ? 'var(--mint)' : data.accent || accent,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{data.icon}</span>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 11, fontWeight: 700 }}>{data.title}</div>
        <div style={{ fontSize: 10, color: 'var(--text-3)' }}>{data.sub}</div>
      </div>
    </div>);

  if (type === 'usage') return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <span className="mono" style={{ fontSize: 10, color: 'var(--text-3)' }}>THIS WEEK</span>
        <span style={{ fontSize: 10, color: 'var(--mint)' }}>↓ 12%</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 40 }}>
        {[40, 28, 55, 32, 68, 48, 72].map((h, i) =>
        <span key={i} style={{ flex: 1, height: h + '%', borderRadius: 3, background: i === 6 ? accent : 'rgba(255,255,255,0.15)' }} />
        )}
      </div>
    </>);

  if (type === 'miles') return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <span style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(62,224,162,0.15)', color: 'var(--mint)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><I.Gift size={18} /></span>
      <div>
        <div style={{ fontSize: 10, color: 'var(--text-3)' }}>Miles earned</div>
        <div style={{ fontWeight: 800, fontSize: 22, color: 'var(--mint)' }}>+$1.50</div>
      </div>
    </div>);

  if (type === 'topup') return (
    <>
      <div className="mono" style={{ fontSize: 10, color: 'var(--text-3)', marginBottom: 8 }}>TOP UP</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: 13 }}>{data.method}</div>
          <div style={{ fontSize: 10, color: 'var(--text-3)' }}>+3% Miles</div>
        </div>
        <div style={{ fontWeight: 800, fontSize: 18, color: 'var(--mint)' }}>{data.amt}</div>
      </div>
    </>);

  if (type === 'card') return (
    <div style={{ background: `linear-gradient(135deg, ${accent}cc, #0a1830)`, borderRadius: 14, padding: 14, color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div className="mono" style={{ fontSize: 9, opacity: 0.8 }}>{data.name}</div>
      <div style={{ height: 22 }} />
      <div className="mono" style={{ fontSize: 14, letterSpacing: '0.1em' }}>{data.num}</div>
      <div style={{ fontSize: 9, marginTop: 6, opacity: 0.8 }}>VIRTUAL · MILES</div>
    </div>);

  if (type === 'transaction') return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <span style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(255,255,255,0.05)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>{data.flag}</span>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 12, fontWeight: 600 }}>{data.city}</div>
        <div style={{ fontSize: 10, color: 'var(--text-3)' }}>Yesterday · 1.2 GB</div>
      </div>
      <div className="mono" style={{ fontSize: 12, fontWeight: 700 }}>{data.amt}</div>
    </div>);

  if (type === 'speedBig') return (
    <>
      <div className="mono" style={{ fontSize: 10, color: 'var(--text-3)', marginBottom: 6 }}>DOWNLOAD</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-1.5px' }}>184</span>
        <span style={{ fontSize: 12, color: 'var(--text-2)' }}>Mbps</span>
      </div>
      <div style={{ height: 4, background: 'rgba(255,255,255,0.08)', borderRadius: 999, marginTop: 8, overflow: 'hidden' }}>
        <div style={{ width: '76%', height: '100%', background: `linear-gradient(90deg, ${accent}, #3ee0a2)` }} />
      </div>
    </>);

  if (type === 'pingChart') return (
    <>
      <div className="mono" style={{ fontSize: 10, color: 'var(--text-3)', marginBottom: 8 }}>LATENCY · 60s</div>
      <svg viewBox="0 0 200 60" style={{ width: '100%', height: 60 }}>
        <path d="M 0 40 L 20 32 L 40 36 L 60 28 L 80 30 L 100 22 L 120 26 L 140 18 L 160 24 L 180 16 L 200 20"
        stroke={accent} fill="none" strokeWidth="2" strokeLinecap="round" />
        <path d="M 0 40 L 20 32 L 40 36 L 60 28 L 80 30 L 100 22 L 120 26 L 140 18 L 160 24 L 180 16 L 200 20 L 200 60 L 0 60 Z"
        fill={accent + '22'} />
      </svg>
    </>);

  if (type === 'tower') return (
    <>
      <div className="mono" style={{ fontSize: 10, color: 'var(--text-3)', marginBottom: 8 }}>TOWER · 0.4 KM</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ width: 40, height: 40, borderRadius: 10, background: accent + '22', color: accent, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><I.Signal size={18} /></span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 700 }}>5G Ultra</div>
          <div style={{ fontSize: 10, color: 'var(--text-3)' }}>Band n78 · -68 dBm</div>
        </div>
      </div>
    </>);

  if (type === 'network') return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
        <span style={{ width: 8, height: 8, borderRadius: 999, background: '#3ee0a2', boxShadow: '0 0 8px #3ee0a2' }} />
        <div style={{ fontSize: 11, color: 'var(--text-3)' }}>Connected</div>
      </div>
      <div style={{ fontWeight: 700, fontSize: 16 }}>{data.name}</div>
      <div style={{ display: 'flex', gap: 3, marginTop: 8 }}>
        {[1, 2, 3, 4, 5].map((i) =>
        <span key={i} style={{ flex: 1, height: 6, borderRadius: 2, background: i <= data.signal ? accent : 'rgba(255,255,255,0.08)' }} />
        )}
      </div>
    </>);

  if (type === 'latency') return (
    <>
      <div className="mono" style={{ fontSize: 10, color: 'var(--text-3)', marginBottom: 8 }}>PING · UP / DOWN</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
        {[{ l: 'Ping', v: '47', u: 'ms' }, { l: 'Down', v: '184', u: 'Mbps' }, { l: 'Up', v: '42', u: 'Mbps' }].map((s, i) =>
        <div key={i} style={{ padding: 8, borderRadius: 10, background: 'rgba(255,255,255,0.04)' }}>
            <div style={{ fontSize: 8, color: 'var(--text-3)', textTransform: 'uppercase' }}>{s.l}</div>
            <div style={{ fontWeight: 800, fontSize: 13, marginTop: 2 }}>{s.v}</div>
            <div style={{ fontSize: 8, color: 'var(--text-3)' }}>{s.u}</div>
          </div>
        )}
      </div>
    </>);

  if (type === 'history') return (
    <>
      <div className="mono" style={{ fontSize: 10, color: 'var(--text-3)', marginBottom: 8 }}>SPEED · 7 DAYS</div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 38 }}>
        {[60, 55, 72, 48, 82, 68, 90].map((h, i) =>
        <span key={i} style={{ flex: 1, height: h + '%', borderRadius: 3, background: i === 6 ? accent : accent + '44' }} />
        )}
      </div>
    </>);

  if (type === 'globeStat') return (
    <>
      <div className="mono" style={{ fontSize: 10, color: 'var(--text-3)', marginBottom: 8 }}>COVERAGE</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-1px' }}>150+</span>
        <span style={{ fontSize: 11, color: 'var(--text-2)' }}>countries</span>
      </div>
      <div style={{ fontSize: 10, color: 'var(--text-3)', marginTop: 6 }}>2,400+ networks · 5G ready</div>
    </>);

  return null;
}
window.MiniCardBody = MiniCardBody;