// Root app
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#007FFF",
  "showAurora": true,
  "denseHero": false,
  "heroHeadline": "One eSIM."
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // apply accent live
  React.useEffect(() => {
    document.documentElement.style.setProperty('--accent', tweaks.accent);
    // derive light variant
    document.documentElement.style.setProperty('--accent-light', tweaks.accent);
    document.documentElement.style.setProperty('--accent-glow', tweaks.accent + '59');
    document.documentElement.style.setProperty('--accent-soft', tweaks.accent + '1f');
  }, [tweaks.accent]);

  return (
    <CurrencyProvider>
      <ExitIntent />
      <Nav tweaks={tweaks} currentPath="/" />
      <Hero tweaks={tweaks} />
      <TrustBlock tweaks={tweaks} />
      <HowItWorks tweaks={tweaks} />
      <Destinations tweaks={tweaks} />
      <Pricing tweaks={tweaks} />
      <Wallet tweaks={tweaks} />
      <FAQ tweaks={tweaks} />
      <Footer tweaks={tweaks} />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Brand">
          <TweakColor label="Accent color" value={tweaks.accent} onChange={v => setTweak('accent', v)} />
          <TweakRadio label="Accent presets" value={tweaks.accent}
            onChange={v => setTweak('accent', v)}
            options={[
              { label: 'Blue', value: '#007FFF' },
              { label: 'Cyan', value: '#06b6d4' },
              { label: 'Mint', value: '#3ee0a2' },
              { label: 'Violet', value: '#8b5cf6' },
            ]} />
        </TweakSection>
        <TweakSection title="Hero">
          <TweakText label="Headline lead" value={tweaks.heroHeadline} onChange={v => setTweak('heroHeadline', v)} />
          <TweakToggle label="Show aurora glow" value={tweaks.showAurora} onChange={v => setTweak('showAurora', v)} />
        </TweakSection>
      </TweaksPanel>
    </CurrencyProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
