import type { LucideIcon } from 'lucide-react';

type ContactItemProps = {
  title: string;
  value: string;
  href: string;
  Icon: LucideIcon;
};

export function ContactItem({ title, value, href, Icon }: ContactItemProps) {
  return (
    <a className="contact-item" href={href} target="_blank" rel="noreferrer">
      <span className="contact-item__icon">
        <Icon size={24} strokeWidth={1.8} />
      </span>
      <span className="contact-item__text">
        <strong>{title}</strong>
        <span>{value}</span>
      </span>
    </a>
  );
}
