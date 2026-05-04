import { AudienceSection } from './sections/AudienceSection';
import { ContactSection } from './sections/ContactSection';
import { CtaBanner } from './sections/CtaBanner';
import { ExpertiseStrip } from './sections/ExpertiseStrip';
import { Header } from './sections/Header';
import { HeroSection } from './sections/HeroSection';
import { ProcessSection } from './sections/ProcessSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ServicesSection } from './sections/ServicesSection';

function App() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <HeroSection />
        <ExpertiseStrip />
        <ServicesSection />
        <AudienceSection />
        <ProjectsSection />
        <ProcessSection />
        <CtaBanner />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
