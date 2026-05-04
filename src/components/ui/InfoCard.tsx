import { iconMap } from '../../content/iconMap';
import type { CardItem } from '../../types/landing';

type InfoCardProps = {
  item: CardItem;
};

export function InfoCard({ item }: InfoCardProps) {
  const Icon = iconMap[item.icon];
  return (
    <article className="info-card">
      <span className="info-card__icon">
        <Icon size={28} strokeWidth={1.8} />
      </span>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </article>
  );
}
