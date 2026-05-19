// Shared utilities — currency context, exit-intent popup, and common components
// Loaded after icons.jsx and data.jsx, before Nav.jsx

// ---- Currency context (localStorage-persisted) ----
const CURRENCIES = [
  { code: 'USD', symbol: '$', rate: 1, flag: '🇺🇸', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', rate: 0.92, flag: '🇪🇺', name: 'Euro' },
  { code: 'GBP', symbol: '£', rate: 0.78, flag: '🇬🇧', name: 'Pound Sterling' },
  { code: 'JPY', symbol: '¥', rate: 152, flag: '🇯🇵', name: 'Japanese Yen' },
  { code: 'AUD', symbol: 'A$', rate: 1.52, flag: '🇦🇺', name: 'Australian Dollar' },
  { code: 'CAD', symbol: 'C$', rate: 1.36, flag: '🇨🇦', name: 'Canadian Dollar' },
  { code: 'SGD', symbol: 'S$', rate: 1.34, flag: '🇸🇬', name: 'Singapore Dollar' },
  { code: 'CHF', symbol: 'Fr', rate: 0.88, flag: '🇨🇭', name: 'Swiss Franc' },
];
const CurrencyCtx = React.createContext({ cur: CURRENCIES[0], set: () => {} });

function CurrencyProvider({ children }) {
  const [code, setCode] = React.useState(() => {
    try { return localStorage.getItem('neosim_currency') || 'USD'; } catch { return 'USD'; }
  });
  const cur = CURRENCIES.find(c => c.code === code) || CURRENCIES[0];
  const set = (c) => {
    setCode(c);
    try { localStorage.setItem('neosim_currency', c); } catch {}
  };
  return <CurrencyCtx.Provider value={{ cur, set, all: CURRENCIES }}>{children}</CurrencyCtx.Provider>;
}

function fmtPrice(usd, cur) {
  const v = usd * cur.rate;
  if (cur.code === 'JPY') return `${cur.symbol}${Math.round(v)}`;
  if (v < 0.01) return `${cur.symbol}${v.toFixed(4)}`;
  if (v < 1) return `${cur.symbol}${v.toFixed(3)}`;
  return `${cur.symbol}${v.toFixed(2)}`;
}

function CurrencyPicker() {
  const { cur, set, all } = React.useContext(CurrencyCtx);
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ position: 'relative' }}>
      <button onClick={() => setOpen(!open)} style={{
        height: 36, padding: '0 12px', borderRadius: 999,
        background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)',
        color: '#fff', fontSize: 13, cursor: 'pointer',
        display: 'inline-flex', alignItems: 'center', gap: 8
      }}>
        <span>{cur.flag}</span> <span>{cur.code}</span>
        <I.ChevronDown size={12} />
      </button>
      {open && (
        <>
          <div onClick={() => setOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 60 }} />
          <div className="glass-strong" style={{
            position: 'absolute', top: 'calc(100% + 8px)', right: 0, zIndex: 61,
            minWidth: 220, padding: 6, maxHeight: 320, overflowY: 'auto'
          }}>
            {all.map(c => (
              <button key={c.code} onClick={() => { set(c.code); setOpen(false); }} style={{
                width: '100%', padding: '10px 12px', borderRadius: 10,
                background: cur.code === c.code ? 'rgba(0,127,255,0.15)' : 'transparent',
                border: 'none', color: '#fff', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, textAlign: 'left'
              }}
              onMouseEnter={e => { if (cur.code !== c.code) e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
              onMouseLeave={e => { if (cur.code !== c.code) e.currentTarget.style.background = 'transparent'; }}>
                <span style={{ fontSize: 18 }}>{c.flag}</span>
                <span style={{ flex: 1 }}>{c.name}</span>
                <span className="mono" style={{ color: 'var(--text-3)' }}>{c.code}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ---- Exit-intent popup ----
function ExitIntent() {
  const [shown, setShown] = React.useState(false);
  const [dismissed, setDismissed] = React.useState(() => {
    try { return sessionStorage.getItem('neosim_exit_dismissed') === '1'; } catch { return false; }
  });

  React.useEffect(() => {
    if (dismissed) return;
    let armed = false;
    const arm = setTimeout(() => { armed = true; }, 8000); // arm after 8s
    const onLeave = (e) => {
      if (!armed || shown) return;
      // exit intent: cursor leaves the top of viewport
      if (e.clientY < 10 && e.relatedTarget == null) {
        setShown(true);
      }
    };
    document.addEventListener('mouseleave', onLeave);
    return () => { clearTimeout(arm); document.removeEventListener('mouseleave', onLeave); };
  }, [dismissed, shown]);

  const close = () => {
    setShown(false);
    try { sessionStorage.setItem('neosim_exit_dismissed', '1'); } catch {}
  };

  if (!shown || dismissed) return null;
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 200,
      background: 'rgba(0,5,15,0.7)', backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
      animation: 'fade-in .2s ease'
    }}>
      <div className="glass-strong" style={{
        position: 'relative', maxWidth: 520, width: '100%', padding: 0, overflow: 'hidden',
        background: 'linear-gradient(180deg, rgba(0,127,255,0.18), rgba(10,15,30,0.95))'
      }}>
        <button onClick={close} style={{
          position: 'absolute', top: 16, right: 16, zIndex: 2,
          width: 36, height: 36, borderRadius: 999,
          background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)',
          color: '#fff', cursor: 'pointer',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center'
        }}><I.X size={14} /></button>

        <div style={{
          position: 'absolute', right: -100, top: -100, width: 380, height: 380, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,127,255,0.4), transparent 60%)',
          filter: 'blur(60px)', pointerEvents: 'none'
        }} />

        <div style={{ position: 'relative', padding: '40px 36px 32px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 14px', borderRadius: 999,
            background: 'rgba(62,224,162,0.12)', color: 'var(--mint)',
            border: '1px solid rgba(62,224,162,0.3)',
            fontSize: 12, fontWeight: 700, marginBottom: 20
          }}>
            <I.Gift size={14} /> First-trip bonus
          </div>
          <h2 className="h-2" style={{ margin: 0, marginBottom: 12 }}>
            Wait — get <span className="gradient-text">$5 free credit</span>
          </h2>
          <p className="body-sm" style={{ marginBottom: 24 }}>
            On your first top-up of $10 or more. Code applied automatically — no card on file required to claim.
          </p>
          <div className="field" style={{ marginBottom: 14 }}>
            <I.Mail size={16} />
            <input placeholder="your@email.com" />
          </div>
          <a href="get-esim.html" className="btn btn-primary" style={{ width: '100%', height: 52 }}>
            Claim my $5 + free eSIM <I.ArrowRight size={16} />
          </a>
          <button onClick={close} style={{
            display: 'block', margin: '14px auto 0',
            background: 'transparent', border: 'none', color: 'var(--text-3)',
            fontSize: 12, cursor: 'pointer', textDecoration: 'underline'
          }}>
            No thanks, I'll pay full price
          </button>
        </div>
      </div>
      <style>{`@keyframes fade-in { from { opacity: 0; transform: scale(.96); } to { opacity: 1; transform: scale(1); } }`}</style>
    </div>
  );
}

window.CURRENCIES = CURRENCIES;
window.CurrencyCtx = CurrencyCtx;
window.CurrencyProvider = CurrencyProvider;
window.CurrencyPicker = CurrencyPicker;
window.fmtPrice = fmtPrice;
window.ExitIntent = ExitIntent;
