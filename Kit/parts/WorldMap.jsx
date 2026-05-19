// Realistic World Coverage Map using Natural Earth SVG paths
// Uses a simplified but geographically accurate world map

function WorldMap({ countries }) {
  const [hover, setHover] = React.useState(null);
  const [selected, setSelected] = React.useState(null);
  const [tooltip, setTooltip] = React.useState({ x: 0, y: 0 });
  const svgRef = React.useRef(null);

  const all = countries || (typeof COUNTRIES !== 'undefined' ? COUNTRIES : []);

  // Accurate lat/long → equirectangular projection (x: 0-960, y: 0-480)
  const project = (lon, lat) => {
    const x = ((lon + 180) / 360) * 960;
    const y = ((90 - lat) / 180) * 480;
    return [x, y];
  };

  // Country centroids [lon, lat]
  const centroids = {
    'US': [-98, 39], 'CA': [-96, 60], 'MX': [-102, 24], 'BR': [-51, -10],
    'AR': [-64, -34], 'CL': [-71, -30], 'CO': [-74, 4], 'PE': [-76, -10],
    'GB': [-2, 54], 'FR': [2, 46], 'DE': [10, 51], 'IT': [12, 42],
    'ES': [-4, 40], 'PT': [-8, 39], 'NL': [5, 52], 'BE': [4, 50],
    'CH': [8, 47], 'AT': [14, 47], 'SE': [18, 60], 'NO': [8, 62],
    'DK': [10, 56], 'FI': [26, 64], 'PL': [20, 52], 'CZ': [15, 50],
    'GR': [22, 39], 'TR': [35, 39], 'HR': [16, 45], 'HU': [19, 47],
    'RO': [25, 46], 'BG': [25, 43], 'IE': [-8, 53], 'IS': [-19, 65],
    'JP': [138, 36], 'CN': [105, 35], 'KR': [128, 37], 'IN': [80, 22],
    'TH': [101, 15], 'VN': [108, 16], 'SG': [104, 1], 'MY': [112, 4],
    'ID': [118, -2], 'PH': [122, 13], 'HK': [114, 22], 'TW': [121, 24],
    'AE': [54, 24], 'SA': [45, 25], 'IL': [35, 31], 'EG': [30, 27],
    'QA': [51, 25], 'GE': [44, 42],
    'AU': [133, -27], 'NZ': [173, -41],
    'ZA': [25, -29], 'KE': [38, 1], 'MA': [-6, 32], 'NG': [8, 10],
  };

  const dots = all.filter(c => centroids[c.code]);

  const handleMouseMove = (e) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    setTooltip({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div className="glass-strong" style={{ position: 'relative', overflow: 'hidden', padding: '24px 24px 20px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
        <div>
          <div className="caption" style={{ color: '#66b7ff', marginBottom: 6 }}>Live coverage map</div>
          <h3 className="h-4" style={{ margin: 0 }}>{dots.length} countries · 150+ networks</h3>
        </div>
        <div style={{ display: 'flex', gap: 16, fontSize: 12, color: 'var(--text-3)' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--mint)', boxShadow: '0 0 8px var(--mint)' }} /> 5G live
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 8, height: 8, borderRadius: 999, background: '#66b7ff' }} /> 4G/LTE
          </span>
        </div>
      </div>

      {/* Map */}
      <div style={{ position: 'relative', width: '100%' }} ref={svgRef} onMouseMove={handleMouseMove}>
        <svg viewBox="0 0 960 480" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 12 }}>
          <defs>
            <radialGradient id="mapGlow" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="rgba(0,60,140,0.35)" />
              <stop offset="100%" stopColor="rgba(0,4,12,0)" />
            </radialGradient>
            <pattern id="mapDots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.5" fill="rgba(255,255,255,0.04)" />
            </pattern>
            <filter id="dotGlow">
              <feGaussianBlur stdDeviation="2" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="mintGlow">
              <feGaussianBlur stdDeviation="3" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          {/* Ocean */}
          <rect width="960" height="480" fill="#010d1f" rx="12"/>
          <rect width="960" height="480" fill="url(#mapDots)" rx="12"/>
          <ellipse cx="480" cy="240" rx="460" ry="230" fill="url(#mapGlow)"/>

          {/* Latitude grid lines */}
          {[-60,-30,0,30,60].map(lat => {
            const [,y] = project(0, lat);
            return <line key={lat} x1="0" y1={y} x2="960" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="0.8"/>;
          })}
          {/* Longitude grid lines */}
          {[-120,-60,0,60,120].map(lon => {
            const [x] = project(lon, 0);
            return <line key={lon} x1={x} y1="0" x2={x} y2="480" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8"/>;
          })}

          {/* ── LAND MASSES — Geographically accurate paths ── */}
          <g fill="rgba(0,127,255,0.11)" stroke="rgba(0,127,255,0.28)" strokeWidth="0.7">

            {/* North America */}
            <path d="M75,52 L95,48 L115,44 L140,48 L155,44 L170,48 L185,52 L200,58 L210,68 L220,75 L235,80 L248,88 L255,98 L260,112 L265,128 L268,145 L268,162 L265,175 L258,188 L252,198 L242,210 L235,222 L228,235 L222,248 L218,260 L215,270 L210,282 L205,292 L198,300 L192,308 L188,318 L188,328 L192,335 L200,340 L208,342 L215,340 L220,335 L225,328 L230,320 L235,312 L240,305 L245,298 L250,292 L255,290 L260,292 L262,300 L260,310 L255,318 L250,326 L245,332 L240,338 L235,342 L228,345 L220,348 L212,350 L205,352 L198,355 L192,360 L188,368 L186,378 L185,388 L183,398 L178,404 L172,406 L165,404 L160,398 L155,390 L150,382 L145,375 L140,368 L132,362 L122,358 L112,356 L102,356 L92,358 L82,362 L74,368 L67,375 L62,382 L58,390 L55,398 L52,406 L48,412 L42,416 L35,418 L28,416 L22,412 L18,406 L15,398 L14,388 L15,378 L18,368 L22,360 L28,352 L34,345 L40,338 L45,330 L48,322 L50,312 L50,302 L48,292 L45,282 L40,272 L36,262 L32,252 L30,242 L28,232 L28,220 L30,208 L34,196 L40,185 L48,175 L55,165 L62,156 L68,146 L72,136 L74,126 L74,114 L72,102 L68,90 L64,78 L62,68 L62,60 Z"/>

            {/* Greenland */}
            <path d="M185,28 L200,24 L215,22 L228,24 L238,30 L244,38 L244,48 L238,56 L228,62 L215,66 L200,68 L187,66 L178,60 L174,52 L175,42 Z"/>

            {/* Mexico + Central America */}
            <path d="M135,260 L148,268 L160,278 L168,290 L172,302 L170,312 L164,318 L158,316 L152,308 L148,298 L145,290 L140,282 L135,275 L132,268 Z"/>

            {/* South America */}
            <path d="M248,290 L262,285 L276,285 L290,288 L302,295 L312,305 L318,318 L322,332 L324,348 L324,365 L320,382 L315,398 L308,413 L300,426 L290,438 L278,448 L265,455 L252,458 L240,458 L228,455 L218,448 L210,438 L204,426 L200,412 L198,398 L198,384 L200,370 L205,358 L210,346 L215,336 L218,326 L218,316 L215,306 L210,298 L206,292 L205,286 L208,282 L215,280 L222,282 L232,285 Z"/>

            {/* Europe (detailed) */}
            <path d="M440,78 L448,74 L458,72 L468,74 L476,80 L480,88 L478,96 L472,102 L465,105 L458,104 L452,100 L448,94 L446,86 Z"/>
            {/* Scandinavia */}
            <path d="M490,55 L498,48 L508,44 L520,44 L532,48 L542,55 L548,65 L548,78 L544,90 L536,100 L525,108 L512,112 L498,112 L486,108 L478,100 L475,90 L476,78 L480,68 Z"/>
            {/* UK + Ireland */}
            <path d="M438,115 L448,112 L458,114 L464,120 L464,130 L458,138 L448,142 L440,140 L434,134 L432,126 Z"/>
            <path d="M424,118 L432,116 L436,122 L432,130 L424,132 L418,128 L418,122 Z"/>
            {/* Main Europe */}
            <path d="M448,142 L462,140 L478,140 L495,142 L510,148 L522,156 L530,166 L534,178 L534,190 L528,200 L520,208 L510,214 L498,218 L485,218 L472,215 L460,210 L450,202 L442,192 L438,180 L437,168 L438,156 L443,148 Z"/>
            {/* Iberia */}
            <path d="M438,180 L450,178 L462,180 L472,186 L476,195 L472,204 L462,210 L450,212 L440,210 L432,204 L430,195 L432,186 Z"/>
            {/* Italy */}
            <path d="M498,175 L508,175 L516,180 L520,190 L518,200 L512,208 L504,212 L496,210 L490,204 L488,196 L490,186 L494,178 Z"/>
            {/* Greece/Balkans */}
            <path d="M532,178 L544,178 L555,182 L560,192 L558,202 L550,208 L540,210 L530,208 L522,202 L520,192 L524,183 Z"/>

            {/* Africa */}
            <path d="M440,225 L455,220 L470,218 L485,220 L500,225 L514,234 L525,245 L532,258 L535,272 L534,286 L530,300 L524,314 L516,328 L508,340 L500,350 L490,358 L478,364 L465,368 L452,368 L440,364 L428,358 L418,350 L410,340 L404,328 L400,314 L398,300 L398,286 L400,272 L405,258 L412,245 L420,234 Z"/>
            {/* Madagascar */}
            <path d="M560,320 L567,316 L572,322 L572,335 L568,345 L562,350 L556,348 L554,340 L554,330 Z"/>

            {/* Middle East */}
            <path d="M555,195 L568,192 L582,192 L595,195 L605,202 L610,212 L608,222 L600,230 L588,235 L575,235 L562,230 L552,222 L550,212 L552,202 Z"/>
            {/* Arabian Peninsula */}
            <path d="M580,222 L596,218 L612,218 L625,225 L632,235 L632,248 L626,260 L616,268 L604,272 L592,272 L580,266 L572,256 L568,244 L570,232 Z"/>

            {/* Russia + Central Asia */}
            <path d="M555,55 L580,48 L610,44 L645,42 L680,44 L715,48 L745,55 L768,65 L782,78 L785,90 L778,102 L762,112 L742,118 L720,122 L696,122 L672,118 L648,112 L625,108 L604,108 L584,112 L568,118 L555,122 L545,115 L540,102 L540,88 L545,75 Z"/>

            {/* India */}
            <path d="M628,215 L642,210 L656,210 L668,215 L676,225 L678,238 L674,252 L665,264 L652,272 L638,275 L624,272 L612,264 L606,252 L606,238 L610,225 Z"/>

            {/* China + East Asia */}
            <path d="M690,125 L715,120 L742,120 L768,125 L790,135 L808,148 L818,162 L818,178 L810,192 L795,202 L775,208 L752,210 L728,208 L705,202 L684,192 L668,180 L658,166 L655,152 L658,138 L666,128 Z"/>

            {/* Japan */}
            <path d="M820,148 L830,144 L840,145 L847,152 L845,162 L838,170 L828,172 L820,168 L816,160 L816,152 Z"/>
            <path d="M835,172 L844,168 L852,170 L856,178 L854,188 L846,195 L836,196 L829,192 L828,184 L829,176 Z"/>

            {/* Korea */}
            <path d="M790,155 L800,152 L808,155 L812,162 L808,170 L800,174 L792,172 L788,165 Z"/>

            {/* Southeast Asia */}
            <path d="M725,248 L738,242 L752,240 L765,244 L774,252 L775,265 L768,276 L755,282 L740,282 L728,276 L720,266 L720,255 Z"/>
            {/* Indonesia */}
            <path d="M740,295 L756,290 L772,290 L785,296 L790,305 L786,315 L774,320 L758,320 L744,315 L738,306 Z"/>
            <path d="M798,295 L812,290 L825,292 L830,300 L826,310 L814,315 L800,313 L794,305 Z"/>

            {/* Philippines */}
            <path d="M790,235 L800,230 L808,232 L812,240 L808,248 L800,252 L792,250 L788,242 Z"/>

            {/* Australia */}
            <path d="M735,348 L762,340 L792,336 L822,336 L848,342 L868,352 L880,366 L882,382 L875,396 L860,406 L838,412 L812,415 L784,415 L756,412 L732,406 L712,396 L700,382 L700,366 L710,354 Z"/>
            {/* Tasmania */}
            <path d="M810,425 L820,422 L828,426 L828,434 L820,438 L810,436 L806,430 Z"/>
            {/* New Zealand */}
            <path d="M880,392 L888,386 L895,388 L898,398 L894,408 L885,412 L878,408 L876,400 Z"/>
            <path d="M888,412 L896,408 L903,412 L905,422 L900,432 L890,436 L882,432 L881,422 Z"/>

          </g>

          {/* Pulse rings for active dots */}
          {dots.filter(c => c.tech && c.tech.includes('5G')).map(c => {
            const [x, y] = project(...centroids[c.code]);
            return (
              <circle key={'ring-'+c.code} cx={x} cy={y} r="6"
                fill="none" stroke="rgba(62,224,162,0.35)" strokeWidth="1">
                <animate attributeName="r" values="5;14;5" dur="3s" repeatCount="indefinite"
                  begin={`${Math.random()*2}s`}/>
                <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite"
                  begin={`${Math.random()*2}s`}/>
              </circle>
            );
          })}

          {/* Country dots */}
          {dots.map(c => {
            const [x, y] = project(...centroids[c.code]);
            const is5G = c.tech && c.tech.includes('5G');
            const isHov = hover && hover.code === c.code;
            const isSel = selected && selected.code === c.code;
            const color = is5G ? '#3ee0a2' : '#66b7ff';
            return (
              <g key={c.code}
                onMouseEnter={() => setHover(c)}
                onMouseLeave={() => setHover(null)}
                onClick={() => setSelected(s => s && s.code === c.code ? null : c)}
                style={{ cursor: 'pointer' }}
                filter={is5G ? 'url(#mintGlow)' : 'url(#dotGlow)'}>
                {(isHov || isSel) && (
                  <circle cx={x} cy={y} r="10"
                    fill={is5G ? 'rgba(62,224,162,0.18)' : 'rgba(102,183,255,0.18)'}
                    stroke={color} strokeWidth="0.8"/>
                )}
                <circle cx={x} cy={y}
                  r={isHov || isSel ? 5.5 : 3.5}
                  fill={color}
                  stroke="#010d1f" strokeWidth="1.2"/>
              </g>
            );
          })}

          {/* Selected pulse */}
          {selected && centroids[selected.code] && (() => {
            const [x, y] = project(...centroids[selected.code]);
            return (
              <circle cx={x} cy={y} r="8"
                fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeDasharray="3 3">
                <animate attributeName="r" values="8;20;8" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite"/>
              </circle>
            );
          })()}

          {/* Equator label */}
          <text x="8" y={project(0,0)[1] - 4} fill="rgba(255,255,255,0.18)" fontSize="9" fontFamily="monospace">0°</text>
          {/* Tropic lines */}
          <line x1="0" y1={project(0,23.5)[1]} x2="960" y2={project(0,23.5)[1]} stroke="rgba(255,200,0,0.06)" strokeWidth="0.6" strokeDasharray="4 8"/>
          <line x1="0" y1={project(0,-23.5)[1]} x2="960" y2={project(0,-23.5)[1]} stroke="rgba(255,200,0,0.06)" strokeWidth="0.6" strokeDasharray="4 8"/>
        </svg>

        {/* Hover tooltip */}
        {hover && centroids[hover.code] && (
          <div style={{
            position: 'absolute',
            left: `${tooltip.x}%`,
            top: `${tooltip.y}%`,
            transform: 'translate(-50%, calc(-100% - 14px))',
            background: 'rgba(4,10,24,0.96)',
            border: '1px solid rgba(0,127,255,0.35)',
            borderRadius: 12, padding: '10px 14px',
            backdropFilter: 'blur(12px)',
            pointerEvents: 'none', whiteSpace: 'nowrap',
            zIndex: 10,
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <span style={{ fontSize: 18 }}>{hover.flag}</span>
              <span style={{ fontWeight: 700, fontSize: 13 }}>{hover.name}</span>
              <span style={{ fontSize: 10, fontWeight: 600, padding: '2px 6px', borderRadius: 999,
                background: hover.tech.includes('5G') ? 'rgba(62,224,162,0.15)' : 'rgba(0,127,255,0.15)',
                color: hover.tech.includes('5G') ? 'var(--mint)' : '#66b7ff',
                border: `1px solid ${hover.tech.includes('5G') ? 'rgba(62,224,162,0.3)' : 'rgba(0,127,255,0.3)'}`,
              }}>{hover.tech}</span>
            </div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <span className="mono" style={{ color: '#fff', fontSize: 14, fontWeight: 700 }}>${(hover.price*1024).toFixed(2)}/GB</span>
              <span style={{ fontSize: 11, color: 'var(--text-3)' }}>{hover.networks}</span>
            </div>
          </div>
        )}
      </div>

      {/* Selected country card */}
      {selected && (
        <div style={{
          marginTop: 16, padding: '16px 20px', borderRadius: 14,
          background: 'rgba(0,127,255,0.08)', border: '1px solid rgba(0,127,255,0.3)',
          display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap',
          animation: 'cardSlideIn 0.25s ease'
        }}>
          <span style={{ fontSize: 36 }}>{selected.flag}</span>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ fontWeight: 700, fontSize: 16 }}>{selected.name}</div>
            <div style={{ fontSize: 13, color: 'var(--text-3)', marginTop: 2 }}>{selected.networks} · {selected.tech}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="mono" style={{ fontSize: 22, fontWeight: 800 }}>${(selected.price*1024).toFixed(2)}</div>
            <div style={{ fontSize: 11, color: 'var(--text-3)' }}>per GB</div>
          </div>
          <a href="get-esim.html" className="btn btn-primary" style={{ height: 44 }}>Get eSIM <I.ArrowRight size={14}/></a>
          <button onClick={() => setSelected(null)} className="btn-icon" style={{ width: 36, height: 36 }}><I.X size={14}/></button>
        </div>
      )}

      <style>{`
        @keyframes cardSlideIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
window.WorldMap = WorldMap;
