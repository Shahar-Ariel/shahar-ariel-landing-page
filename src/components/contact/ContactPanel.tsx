import { ContactItem } from '../ui/ContactItem';
import { contactItems } from '../../content/contactContent';

export function ContactPanel() {
  return (
    <aside className="contact-panel">
      {contactItems.map((item) => (
        <ContactItem
          key={item.title}
          title={item.title}
          value={item.value}
          href={item.href}
          Icon={item.Icon}
        />
      ))}
    </aside>
  );
}
