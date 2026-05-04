import { navigationItems } from '../content/landingContent';

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-brand" href="#hero">
          <span>Shahar Ariel</span>
          <span className="site-brand__mark" />
        </a>
        <nav className="site-nav" aria-label="primary">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="button button--primary" href="#contact">
          דברו איתי
        </a>
      </div>
    </header>
  );
}
