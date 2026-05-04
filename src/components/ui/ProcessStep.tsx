import type { ProcessItem } from '../../types/landing';

type ProcessStepProps = {
  item: ProcessItem;
};

export function ProcessStep({ item }: ProcessStepProps) {
  return (
    <article className="process-step">
      <span className="process-step__index">{item.step}</span>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </article>
  );
}
