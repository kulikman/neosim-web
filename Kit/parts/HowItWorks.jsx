function HowItWorks({ tweaks }) {
  const [active, setActive] = React.useState(0);

  return (
    <section id="how-it-works" className="section-pad" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* giant background word */}
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: 'clamp(120px, 18vw, 240px)',
        fontWeight: 900, letterSpacing: '-0.04em',
        color: 'rgba(255,255,255,0.025)',
        whiteSpace: 'nowrap', pointerEvents: 'none',
        userSelect: 'none', lineHeight: 1,
        fontVariantNumeric: 'tabular-nums',
      }}>NEOSIM</div>

      <div className="container" style={{ position: 'relative' }}>

        {/* Header row */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, marginBottom: 72, flexWrap: 'wrap' }}>
          <div>
            <div className="caption" style={{ color: '#66b7ff', marginBottom: 16 }}>How it works</div>
            <h2 className="h-1" style={{ margin: 0, lineHeight: 1.1 }}>
              From order to online<br/>
              <span className="gradient-text">in under 2 minutes.</span>
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <a href="get-esim.html" className="btn btn-primary" style={{ height: 52 }}>
              Get free eSIM <I.ArrowRight size={16}/>
            </a>
            <a href="how-it-works.html" className="btn btn-ghost" style={{ height: 52 }}>
              Learn more
            </a>
          </div>
        </div>

        {/* Interactive steps */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }} className="hiw-grid">

          {/* Left: step list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {STEPS.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: 24,
                  padding: '28px 32px', borderRadius: 20, textAlign: 'left',
                  background: active === i ? 'rgba(0,127,255,0.1)' : 'transparent',
                  border: active === i ? '1px solid rgba(0,127,255,0.3)' : '1px solid transparent',
                  cursor: 'pointer', transition: 'all 0.25s ease',
                  width: '100%',
                }}
                onMouseEnter={e => { if (active !== i) e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
                onMouseLeave={e => { if (active !== i) e.currentTarget.style.background = 'transparent'; }}
              >
                {/* Number */}
                <div style={{
                  fontSize: 13, fontWeight: 700, letterSpacing: '0.05em',
                  color: active === i ? '#66b7ff' : 'rgba(255,255,255,0.25)',
                  minWidth: 28, paddingTop: 4, transition: 'color 0.25s',
                  fontVariantNumeric: 'tabular-nums',
                }}>{s.n}</div>

                {/* Text */}
                <div>
                  <div style={{
                    fontSize: 20, fontWeight: 700, marginBottom: 6,
                    color: active === i ? '#fff' : 'rgba(255,255,255,0.55)',
                    transition: 'color 0.25s',
                  }}>{s.title}</div>
                  <div style={{
                    fontSize: 14, color: active === i ? 'var(--text-2)' : 'rgba(255,255,255,0.25)',
                    lineHeight: 1.6, maxWidth: 380,
                    transition: 'color 0.25s',
                  }}>{s.body}</div>
                </div>

                {/* Arrow */}
                <div style={{ marginLeft: 'auto', paddingTop: 4, opacity: active === i ? 1 : 0, transition: 'opacity 0.25s', color: '#66b7ff' }}>
                  <I.ArrowRight size={18}/>
                </div>
              </button>
            ))}
          </div>

          {/* Right: active step visual */}
          <div style={{ position: 'sticky', top: 110 }}>
            {STEPS.map((s, i) => (
              <div key={i} style={{
                display: active === i ? 'block' : 'none',
                animation: 'stepFadeIn 0.35s ease',
              }}>
                <div className="glass-strong" style={{ padding: 40, minHeight: 320, position: 'relative', overflow: 'hidden' }}>
                  {/* glow */}
                  <div style={{
                    position: 'absolute', right: -80, top: -80, width: 320, height: 320, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,127,255,0.22), transparent 60%)',
                    filter: 'blur(40px)', pointerEvents: 'none',
                  }} />

                  <div style={{ position: 'relative' }}>
                    {/* Step number large */}
                    <div style={{
                      fontSize: 88, fontWeight: 900, lineHeight: 1,
                      letterSpacing: '-4px', marginBottom: 24,
                      background: 'linear-gradient(135deg, #007fff, rgba(0,127,255,0.3))',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    }}>{s.n}</div>

                    <h3 style={{ fontSize: 28, fontWeight: 800, margin: '0 0 16px', letterSpacing: '-0.5px' }}>{s.title}</h3>
                    <p style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.7, margin: 0, maxWidth: 400 }}>{s.body}</p>

                    {/* Step-specific badges */}
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 28 }}>
                      {[
                        ['Free signup', 'No credit card', 'Instant delivery'],
                        ['1-tap iOS', 'Universal QR', 'Android ready'],
                        ['150+ countries', '5G/4G native', 'Auto-connect'],
                        ['Pay per GB', 'Daily cap', 'Never expires'],
                      ][i].map((tag, j) => (
                        <span key={j} style={{
                          padding: '6px 14px', borderRadius: 999, fontSize: 12, fontWeight: 600,
                          background: 'rgba(0,127,255,0.1)', border: '1px solid rgba(0,127,255,0.25)',
                          color: '#9bc9ff',
                        }}>{tag}</span>
                      ))}
                    </div>

                    {/* Progress bar */}
                    <div style={{ marginTop: 32, display: 'flex', gap: 6 }}>
                      {STEPS.map((_,j) => (
                        <div key={j} onClick={() => setActive(j)} style={{
                          flex: j === i ? 3 : 1, height: 3, borderRadius: 999, cursor: 'pointer',
                          background: j <= i ? 'linear-gradient(90deg, #007fff, #3ee0a2)' : 'rgba(255,255,255,0.1)',
                          transition: 'flex 0.4s ease',
                        }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Daily cap callout */}
        <div style={{
          marginTop: 56, padding: '20px 28px', borderRadius: 16,
          background: 'rgba(62,224,162,0.06)', border: '1px solid rgba(62,224,162,0.2)',
          display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap',
        }}>
          <span style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(62,224,162,0.12)', color: 'var(--mint)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <I.Shield size={18}/>
          </span>
          <div style={{ flex: 1, minWidth: 240 }}>
            <span style={{ fontWeight: 700, color: 'var(--mint)' }}>Daily Cap — </span>
            <span style={{ fontSize: 14, color: 'var(--text-2)' }}>Set a daily spending limit in app settings. When reached, speed drops to 64 kbps — you stay connected, never cut off. Resets midnight UTC.</span>
          </div>
          <a href="get-esim.html" style={{ fontSize: 13, fontWeight: 600, color: 'var(--mint)', whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            Try it free <I.ArrowRight size={14}/>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes stepFadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 900px) { .hiw-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
window.HowItWorks = HowItWorks;
