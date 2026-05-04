import { Chip } from '../components/ui/Chip';
import { expertiseItems } from '../content/landingContent';

export function ExpertiseStrip() {
  return (
    <div className="expertise-strip">
      <div className="section-inner">
        <ul className="chip-list">
          {expertiseItems.map((item) => (
            <Chip key={item.label} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
