function FloatingNode({ className }: { className: string }) {
  return <span className={`hero-node ${className}`} aria-hidden="true" />;
}

export function HeroArtwork() {
  return (
    <div className="hero-artwork" aria-hidden="true">
      <div className="hero-cloud">
        <div className="hero-cloud__dots" />
      </div>
      <div className="hero-board">
        <div className="hero-board__chip" />
      </div>
      <div className="hero-dashboard">
        <div className="hero-dashboard__chart" />
        <div className="hero-dashboard__stats" />
      </div>
      <div className="hero-kiosk">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="hero-cube" />
      <FloatingNode className="hero-node--top" />
      <FloatingNode className="hero-node--left" />
      <FloatingNode className="hero-node--right" />
    </div>
  );
}
