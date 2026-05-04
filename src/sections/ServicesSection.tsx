import { PageSection } from '../components/layout/PageSection';
import { InfoCard } from '../components/ui/InfoCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { serviceItems } from '../content/landingContent';

export function ServicesSection() {
  return (
    <PageSection id="services">
      <SectionHeading
        eyebrow="Services"
        title="שירותים"
        description="ארכיטקטורה, מודרניזציה, אבטחה ופתרונות תוכנה מורכבים למוצרים, פלטפורמות וצוותי פיתוח."
      />
      <div className="card-grid card-grid--services">
        {serviceItems.map((item) => (
          <InfoCard key={item.title} item={item} />
        ))}
      </div>
    </PageSection>
  );
}
