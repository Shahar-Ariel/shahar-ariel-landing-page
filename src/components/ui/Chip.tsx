import { iconMap } from '../../content/iconMap';
import type { ChipItem } from '../../types/landing';

type ChipProps = {
  item: ChipItem;
};

export function Chip({ item }: ChipProps) {
  const Icon = iconMap[item.icon];
  return (
    <li className="chip">
      <Icon size={16} />
      <span>{item.label}</span>
    </li>
  );
}
