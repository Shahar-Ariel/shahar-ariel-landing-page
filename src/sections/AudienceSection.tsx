import { PageSection } from '../components/layout/PageSection';
import { InfoCard } from '../components/ui/InfoCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { audienceItems } from '../content/landingContent';

export function AudienceSection() {
  return (
    <PageSection id="audience">
      <SectionHeading
        eyebrow="Best Fit"
        title="למי זה מתאים"
      />
      <div className="card-grid card-grid--audience">
        {audienceItems.map((item) => (
          <InfoCard key={item.title} item={item} />
        ))}
      </div>
    </PageSection>
  );
}
