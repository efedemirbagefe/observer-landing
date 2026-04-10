export default function Ticker() {
  const items = (
    <>
      <span className="ticker-item"><b>Signal</b> — AI product intelligence</span>
      <span className="ticker-item"><b>Plainify</b> — live at plainify.app</span>
      <span className="ticker-item">Istanbul based · globally focused</span>
      <span className="ticker-item">AI-native from day one</span>
      <span className="ticker-item">Spec it · Build it · Track it · Ship it</span>
      <span className="ticker-item"><b>Signal</b> — 9 sources · &lt;2m to first insight</span>
      <span className="ticker-item">Three people · Maximum output</span>
      <span className="ticker-item">Ship, don&apos;t pitch</span>
    </>
  );

  return (
    <div className="ticker">
      <div className="ticker-inner">
        {items}
        {items}
      </div>
    </div>
  );
}
