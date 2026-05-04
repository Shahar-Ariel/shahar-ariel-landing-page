import { PageSection } from '../components/layout/PageSection';
import { ProcessStep } from '../components/ui/ProcessStep';
import { SectionHeading } from '../components/ui/SectionHeading';
import { processItems } from '../content/landingContent';

export function ProcessSection() {
  return (
    <PageSection id="process">
      <SectionHeading
        eyebrow="Process"
        title="תהליך עבודה"
        description="עבודה ממוקדת תוצאה: להבין מהר, לתכנן נכון, לבצע נקי ולהשאיר מערכת שאפשר לחיות איתה."
      />
      <div className="process-grid">
        {processItems.map((item) => (
          <ProcessStep key={item.step} item={item} />
        ))}
      </div>
    </PageSection>
  );
}
