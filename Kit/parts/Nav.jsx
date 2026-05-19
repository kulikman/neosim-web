function Nav({ tweaks, currentPath = '/' }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const menus = [
    { id: 'product', label: 'Product', icon: <I.Globe size={14}/>, items: [
      { t: 'How it works', s: 'From order to online in 2 min', href: 'how-it-works.html', icon: <I.Compass size={16}/> },
      { t: 'Coverage', s: '150+ countries · 500+ networks', href: 'coverage.html', icon: <I.Globe size={16}/> },
      { t: 'Compatibility checker', s: 'Will my phone work?', href: 'coming-soon.html?feature=compatibility', icon: <I.Smartphone size={16}/> },
      { t: 'Download app', s: 'iOS · Android', href: 'app-download.html', icon: <I.Apple size={16}/> },
    ]},
    { id: 'features', label: 'Features', icon: <I.Sparkles size={14}/>, items: [
      { t: 'Family Wallet', s: 'One balance, up to 6 devices', href: 'coming-soon.html?feature=family', icon: <I.Users size={16}/> },
      { t: 'NeoSIM Miles', s: 'Earn free data on every trip', href: 'coming-soon.html?feature=loyalty', icon: <I.Gift size={16}/> },
      { t: 'Invite & Earn', s: '5% of friends’ top-ups, forever', href: 'coming-soon.html?feature=referral', icon: <I.Share size={16}/> },
      { t: 'Privacy Manifesto', s: '8 commitments to every user', href: 'privacy-manifesto.html', icon: <I.Shield size={16}/> },
    ]},
    { id: 'foryou', label: 'For you', icon: <I.Users size={14}/>, items: [
      { t: 'For travelers', s: 'Leisure, nomad, frequent flyer', href: 'index.html', icon: <I.Plane size={16}/> },
      { t: 'For business', s: 'Teams, fleets, expats', href: 'business.html', icon: <I.TrendingUp size={16}/> },
      { t: 'For partners', s: 'Resellers & affiliates', href: 'partners.html', icon: <I.Share size={16}/> },
    ]},
  ];

  const isActive = (id) => currentPath === id || (id === 'features' && ['loyalty','referral','family','privacy-manifesto'].includes(currentPath))
    || (id === 'product' && ['how-it-works','coverage'].includes(currentPath))
    || (id === 'foryou' && ['business','partners'].includes(currentPath));

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      transition: 'all .3s ease',
      background: scrolled ? 'rgba(0,10,23,0.78)' : 'transparent',
      backdropFilter: scrolled ? 'blur(18px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(18px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', height: 80, gap: 24 }}>
        <a href={currentPath === '/' ? '#' : 'index.html'} style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#fff', fontWeight: 800, fontSize: 22, letterSpacing: '-0.5px' }}>
          <span style={{
            width: 32, height: 32, borderRadius: 10,
            background: 'linear-gradient(135deg, #007FFF, #1a90ff)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 20px rgba(0,127,255,0.5)'
          }}>
            <I.Globe size={18} strokeWidth={2.2} />
          </span>
          NeoSIM
        </a>

        <nav className="nav-links" style={{ display: 'flex', gap: 4, marginLeft: 28, position: 'relative' }}
          onMouseLeave={() => setOpenMenu(null)}>
          {menus.map(m => (
            <div key={m.id} style={{ position: 'relative' }}
              onMouseEnter={() => setOpenMenu(m.id)}>
              <button style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '10px 16px', fontSize: 14, cursor: 'pointer',
                color: isActive(m.id) || openMenu === m.id ? '#fff' : 'rgba(255,255,255,0.7)',
                borderRadius: 999, transition: 'color .2s',
                background: 'transparent', border: 'none'
              }}>
                {m.label} <I.ChevronDown size={12} style={{ transform: openMenu === m.id ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}/>
              </button>
              {openMenu === m.id && (
                <div style={{
                  position: 'absolute', top: '100%', left: 0,
                  minWidth: 320, paddingTop: 10, zIndex: 70,
                  animation: 'navFade 0.18s ease'
                }}>
                <div style={{
                  padding: 8,
                  background: 'rgba(10,15,30,0.92)', backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.08)', borderRadius: 18,
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                }}>
                  {m.items.map(it => (
                    <a key={it.t} href={it.href} style={{
                      display: 'flex', alignItems: 'flex-start', gap: 12,
                      padding: '12px 14px', borderRadius: 12, color: '#fff',
                      transition: 'background 0.15s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                      <span style={{ width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                        background: 'rgba(0,127,255,0.12)', color: '#66b7ff',
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center'
                      }}>{it.icon}</span>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 14 }}>{it.t}</div>
                        <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 2 }}>{it.s}</div>
                      </div>
                    </a>
                  ))}
                </div>
                </div>
              )}
            </div>
          ))}
          <a href="blog.html" style={{
            padding: '10px 16px', fontSize: 14,
            color: currentPath === 'blog' ? '#fff' : 'rgba(255,255,255,0.7)',
            borderRadius: 999
          }}>Blog</a>
        </nav>

        <div style={{ flex: 1 }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }} className="nav-cta">
          {typeof CurrencyPicker !== 'undefined' && <CurrencyPicker />}
          <a href="get-esim.html" className="btn btn-primary" style={{ height: 44, padding: '0 20px', fontSize: 14 }}>
            Get free eSIM <I.ArrowRight size={16} />
          </a>
        </div>

        {/* hamburger for mobile */}
        <button className="nav-hamburger" onClick={() => setMobileOpen(v => !v)} style={{
          display: 'none', width: 44, height: 44, borderRadius: 12,
          background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)',
          color: '#fff', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
        }}>
          {mobileOpen ? <I.X size={18}/> : <I.Menu size={18}/>}
        </button>
      </div>

      {mobileOpen && (
        <div className="nav-mobile-overlay" style={{
          position: 'fixed', inset: '80px 0 0 0', zIndex: 49,
          background: 'rgba(0,10,23,0.96)', backdropFilter: 'blur(20px)',
          padding: 24, overflowY: 'auto'
        }}>
          {menus.map(m => (
            <div key={m.id} style={{ marginBottom: 24 }}>
              <div className="caption" style={{ color: 'var(--text-3)', marginBottom: 10 }}>{m.label}</div>
              {m.items.map(it => (
                <a key={it.t} href={it.href} style={{
                  display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0',
                  color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.06)'
                }}>
                  <span style={{ color: '#66b7ff' }}>{it.icon}</span>
                  <span style={{ fontWeight: 600, fontSize: 15 }}>{it.t}</span>
                </a>
              ))}
            </div>
          ))}
          <a href="blog.html" style={{ display: 'block', padding: '12px 0', color: '#fff', fontWeight: 700, fontSize: 16, marginBottom: 16 }}>Blog →</a>
          <a href="get-esim.html" className="btn btn-primary" style={{ width: '100%', height: 52 }}>
            Get free eSIM <I.ArrowRight size={16}/>
          </a>
        </div>
      )}

      <style>{`
        @keyframes navFade { from { opacity: 0; transform: translateY(-4px);} to { opacity: 1; transform: translateY(0);} }
        @media (max-width: 1100px) { .nav-links { display: none !important; } .nav-hamburger { display: inline-flex !important; } .nav-cta { display: none !important; } }
      `}</style>
    </header>
  );
}
window.Nav = Nav;
