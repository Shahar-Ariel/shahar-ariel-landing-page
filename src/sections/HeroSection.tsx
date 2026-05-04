import { HeroArtwork } from '../components/hero/HeroArtwork';
import { PageSection } from '../components/layout/PageSection';

export function HeroSection() {
  return (
    <PageSection id="hero" className="page-section--hero">
      <div className="hero-layout">
        <div className="hero-copy">
          <span className="hero-copy__eyebrow">Software Architecture | Cloud | Security</span>
          <h1>
            פיתוח מערכות
            <br />
            Modernization, Cloud
            <br />ו-Secure Backend בקצה העליון
          </h1>
          <p>
            שחר אריאל הוא Software Architect עם מעל 12 שנות ניסיון בתכנון מערכות,
            modernization של מערכות Legacy, ארכיטקטורות Microservices, Cloud, Embedded
            systems וגם שילוב יכולות AI, עבודה עם OpenAI ו-Gemini ואימון מודלים לפי
            צורך.
          </p>
          <div className="hero-copy__actions">
            <a className="button button--primary" href="#contact">
              דברו איתי
            </a>
            <a className="button button--secondary" href="#projects">
              צפייה בפרויקטים
            </a>
          </div>
        </div>
        <HeroArtwork />
      </div>
    </PageSection>
  );
}
